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
  weather: number,
  wind_speed: number,
  temperature: number,
  visibility: number,
  rain_propability: number,
  humidity: number
}

type WeatherData = {
  date: Date,
  forcasts: Array<Forcast>,
  current_weather_condition?: string,
  max_temperature?: number,
  min_temperature?: number,
  mode_weather_condition?: number | undefined | null,
}

type State = {
  loaded: boolean,
  open_meteo?: any,
  weather_data?: Array<WeatherData>
  current_forcast?: Forcast
}

export default class Weather extends Component<Props, State> {
  // https://api.open-meteo.com/v1/forecast?latitude=32.814&longitude=-96.9489&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,weather_code,cloud_cover,visibility,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph
  public config: Props;

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

  getLoaded () {
    return this.state.loaded;
  }

  getOpenMeteoData () {
    return this.state.open_meteo;
  }

  getCurrentDayForcast () {
    if (typeof this.state.weather_data !== "undefined" && Array.isArray(this.state.weather_data) && this.state.weather_data.length !== 0) {
      return this.state.weather_data[0];
    }
    return {};
  }

  getCurrentHourForcast () {
    if (typeof this.state.weather_data !== "undefined" && Array.isArray(this.state.weather_data) && this.state.weather_data.length !== 0 && typeof this.state.weather_data[0].forcasts !== "undefined" && Array.isArray(this.state.weather_data[0].forcasts) && this.state.weather_data[0].forcasts.length !== 0) {
      return this.state.weather_data[0].forcasts[0];
    }
    return {};
  }

  findModeWeather (array: Array<Forcast>) {
    if (array.length === 0)
      return null;
    var mode = array[0].weather ?? 0, modeMap = [], maxCount = 1;
    for (var i = 0; i < array.length; i++) {
      var el = array[i].weather;
      if (modeMap[el] === null)
        modeMap[el] = 1;
      else
        modeMap[el]++;
      if (modeMap[el] > maxCount) {
        mode = el;
        maxCount = modeMap[el];
      }
    }
    return mode;
  }

  findMinMaxTemperature = (forcasts: Array<Forcast>) => {
    const max = forcasts.reduce((prev, curr) => (curr.temperature > prev.temperature ? curr : prev)).temperature;
    const min = forcasts.reduce((prev, curr) => (curr.temperature < prev.temperature ? curr : prev)).temperature;
    return { min, max }
  }

  parseWeather = (open_meteo: any) => {
    const today: Date = new Date();
    let hour: number;

    let weather: WeatherData;
    let weather_array: Array<WeatherData> = [];
    let index: number = -1;
    for (let i = 0; i < open_meteo.time.length; i++) {
      hour = new Date(open_meteo.time[i]).getHours();
      if (weather_array[index]?.date.toLocaleDateString() === open_meteo.time[i].toLocaleDateString()) {
        weather_array[index].forcasts.push({
          hour: hour,
          temperature: open_meteo.temperature2m[i],
          weather: open_meteo.weatherCode[i],
          wind_speed: open_meteo.windSpeed10m[i],
          visibility: open_meteo.visibility[i],
          rain_propability: open_meteo.precipitationProbability[i],
          humidity: open_meteo.relativeHumidity2m[i]
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
              weather: open_meteo.weatherCode[i],
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
      weather_array[i].mode_weather_condition = this.findModeWeather(weather_array[i].forcasts);
      weather_array[i].current_weather_condition = this.convertWMO(weather_array[i].mode_weather_condition);
    }

    console.log(weather_array)
    return weather_array;
  }

  // From open-meteo documentation - https://open-meteo.com/en/docs
  parseOpenMeteoResponse = (response: any) => {
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
    return open_meteo;
  }

  updateWeather = async () => {
    const responses = await fetchWeatherApi("https://api.open-meteo.com/v1/forecast", this.config);
    if (responses) {
      const open_meteo = this.parseOpenMeteoResponse(responses);
      const weather_data = this.parseWeather(open_meteo);
      this.setState({
        open_meteo: open_meteo,
        weather_data: weather_data,
        loaded: true
      })
    }
  }

  convertWMO = (weather_code: number | undefined | null) => {
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
        output= "Heavy " + output;
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
    return output;
  }

  nextRainyDay = async () => {

  }

  render() {
    return (
      <div>Weather
        <button onClick={this.updateWeather} >click</button>
      </div>
    )
  }
}