import { Component } from 'react'
import { fetchWeatherApi } from 'openmeteo';

type Props = {
  longitude: number,
  latitude: number,
  hourly: Array<string>,
  temperature_unit: string,
  wind_speed_unit: string
}

type Forcast = {
  hour: number,
  weather_code: number,
  weather_condition: string | undefined,
  wind_speed: number,
  temperature: number,
  visibility: number,
  rain_propability: number,
  humidity: number
}

type WeatherData = {
  date: Date,
  forcasts: Array<Forcast>,
  max_temperature?: number,
  min_temperature?: number,
}

type State = {
  loaded: boolean,
}

export default class Weather extends Component<Props, State> {

  public config: Props;
  public weather_data: Array<WeatherData> = [];
  public current_weather?: Forcast;  
  private open_meteo?: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      loaded: false,
    }
    this.config = {
      longitude: props.longitude,
      latitude: props.latitude,
      hourly: props.hourly,
      temperature_unit: props.temperature_unit,
      wind_speed_unit: props.wind_speed_unit,
    }

    // Default hourly if none are passed
    if (typeof this.config.hourly.length === "undefined" || !Array.isArray(this.config.hourly) || this.config.hourly.length === 0) {
      this.config.hourly = ["temperature_2m", "relative_humidity_2m", "apparent_temperature", "precipitation_probability", "precipitation", "weather_code", "cloud_cover", "visibility", "wind_speed_10m"]
    }
  }

  getLoaded() {
    return this.state.loaded;
  }

  getOpenMeteoData() {
    return this.open_meteo;
  }

  // From open-meteo documentation - https://open-meteo.com/en/docs
  setOpenMeteoResponse = async () => {
    const response = await fetchWeatherApi("https://api.open-meteo.com/v1/forecast", this.config);

    const hourly = response[0].hourly()!;
    const utcOffsetSeconds = response[0].utcOffsetSeconds();

    // Helper function to form time ranges
    const range = (start: number, stop: number, step: number) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
    const open_meteo = {
      time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
        (t) => new Date((t + utcOffsetSeconds) * 1000)
      ),
      temperature2m: hourly.variables(0)!.valuesArray()!,
      relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
      apparentTemperature: hourly.variables(2)!.valuesArray()!,
      precipitationProbability: hourly.variables(3)!.valuesArray()!,
      precipitation: hourly.variables(4)!.valuesArray()!,
      weatherCode: hourly.variables(5)!.valuesArray()!,
      cloudCover: hourly.variables(6)!.valuesArray()!,
      visibility: hourly.variables(7)!.valuesArray()!,
      windSpeed10m: hourly.variables(8)!.valuesArray()!,
    };
    this.open_meteo = open_meteo
  }

  findMinMaxTemperature = (forcasts: Array<Forcast>) => {
    const max = forcasts.reduce((prev, curr) => (curr.temperature > prev.temperature ? curr : prev)).temperature;
    const min = forcasts.reduce((prev, curr) => (curr.temperature < prev.temperature ? curr : prev)).temperature;
    return { min, max }
  }

  getWeatherData = () => {
    return this.weather_data;
  }

  setWeatherData = () => {
    let open_meteo: any = this.open_meteo;
    const today: Date = new Date();
    let hour: number, weather: WeatherData, weather_array: Array<WeatherData> = [], index: number = -1;

    // Add forcasts for each day
    for (let i = 0; i < open_meteo.time.length; i++) {
      hour = new Date(open_meteo.time[i]).getHours();
      if (weather_array[index]?.date.toLocaleDateString() === open_meteo.time[i].toLocaleDateString()) {
        weather_array[index].forcasts.push({
          hour: hour,
          temperature: open_meteo.temperature2m[i],
          weather_code: open_meteo.weatherCode[i],
          weather_condition: this.convertWMO(open_meteo.weatherCode[i], open_meteo.precipitationProbability[i]),
          wind_speed: open_meteo.windSpeed10m[i],
          visibility: open_meteo.visibility[i],
          rain_propability: open_meteo.precipitationProbability[i],
          humidity: open_meteo.relativeHumidity2m[i],
        })
      }
      else {
        if (open_meteo.time[i] < today) {
          continue;
        }
        weather = {
          date: new Date(open_meteo.time[i].toLocaleDateString()),
          forcasts: [
            {
              hour: hour,
              temperature: open_meteo.temperature2m[i],
              weather_code: open_meteo.weatherCode[i],
              weather_condition: this.convertWMO(open_meteo.weatherCode[i], open_meteo.precipitationProbability[i]),
              wind_speed: open_meteo.windSpeed10m[i],
              visibility: open_meteo.visibility[i],
              rain_propability: open_meteo.precipitationProbability[i],
              humidity: open_meteo.relativeHumidity2m[i]
            }
          ]
        }
        weather_array.push(weather);
        index += 1;
      }
    }

    for (let i = 0; i < weather_array.length; i++) {
      const { min, max } = this.findMinMaxTemperature(weather_array[i].forcasts)
      weather_array[i].max_temperature = max;
      weather_array[i].min_temperature = min;
    }

    this.weather_data = weather_array;
  }

  updateCurrentWeather = () => {
    const current_hour: number = (new Date()).getHours() + 1;

    if (typeof this.weather_data !== "undefined" && Array.isArray(this.weather_data) && this.weather_data.length !== 0) {
      let current_forcast = this.weather_data[0].forcasts.find(ele =>
        ele.hour === current_hour
      )

      // Set current weather
      this.current_weather = current_forcast;
    }
  }

  updateWeather = async () => {
    this.setOpenMeteoResponse().then(() => {
      this.setWeatherData();
      this.setState({
        loaded: true
      })
    }).finally(() => {
      console.log(this)
    })
  }

  convertWMO = (weather_code: number | undefined | null, rain_propability: number | undefined | null) => {
    let output = "";
    if (typeof weather_code === "undefined" || weather_code === null) {
      return;
    }
    if (weather_code === 0) {
      output = "Sunny";
    }
    else if (weather_code <= 3) {
      output = "Cloudy";
    }
    else if (weather_code === 45 || weather_code === 48) {
      output = "Fog";
    }
    else if (weather_code >= 51 && weather_code <= 67) {
      output = "Rain";
      if (!(weather_code - 50 <= 5) && !(weather_code - 60 <= 5)) {
        output = "Freezing " + output;
      }
      if (weather_code > 60) {
        output = "Heavy " + output;
      }
    }
    else if (weather_code > 70 && weather_code < 80) {
      output = "Snow";
    }
    else if (weather_code >= 80 && weather_code <= 82) {
      output = "Violent Rain";
    }
    else if (weather_code === 85 || weather_code === 86) {
      output = "Heavy Snow";
    }
    else if (weather_code >= 95 && weather_code <= 99) {
      output = "Thunderstorm";
      if (weather_code === 96 || weather_code === 99) {
        output += " with Hail";
      }
    }
    output += " (Rain: " + rain_propability + "%)"
    return output;
  }

  nextRainyDay = async () => {

  }

  render() {
    return (
      <div>Weather
        <button onClick={this.updateWeather} >click</button>
        {
          this.state.loaded && <>Loaded</>
        }
      </div>
    )
  }
}