import { Component } from 'react'
import { fetchWeatherApi } from 'openmeteo';

type Props = {
  longitude: number,
  latitude: number,
  hourly: Array<string>,
  temperature_unit: string,
  wind_speed_unit: string
}

type State = {
  loaded: boolean,
  forcast: any
}

export default class Weather extends Component<Props, State> {
  // https://api.open-meteo.com/v1/forecast?latitude=32.814&longitude=-96.9489&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,weather_code,cloud_cover,visibility,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph
  public config: Props;

  constructor(props: Props) {
    super(props);
    this.state = {
      loaded: false,
      forcast: {}
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


  #getForcast = async () => {
    return await fetchWeatherApi("https://api.open-meteo.com/v1/forecast", this.config);
  }

  // From open-meteo documentation - https://open-meteo.com/en/docs
  #parseForcast = (data: any) => {
    const hourly = data[0].hourly()!;
    const utcOffsetSeconds = data[0].utcOffsetSeconds();

    // Helper function to form time ranges
    const range = (start: number, stop: number, step: number) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
    const weatherData = {
      hourly: {
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
      },
    };
    console.log(weatherData)
    const output = Object.keys(weatherData).reduce(function (previous, key) {
      return previous;
    }, {});
  }

  /* Coming soon
  convertWMO = () => {

  }
  */
  updateForcast = async () => {
    let responses = await this.#getForcast();
    if (responses) {
      this.setState({
        forcast: this.#parseForcast(responses),
        loaded: true,
      })
    }
  }

  nextRainyDay = async () => {

  }

  render() {
    return (
      <div>Weather
        <button onClick={this.updateForcast} >click</button>
      </div>
    )
  }
}