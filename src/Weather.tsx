import React, { Component } from 'react'

import './Weather.css'

type Props = {
  longitude: number
  latitude: number
  hourly?: Array<string>
  temperature_unit: string
  wind_speed_unit: string
}

type Forcast = {
  hour: number
  weather_code: number
  weather_condition: string | undefined
  wind_speed: number
  temperature: number
  rain_propability: number
  humidity: number,
  wind_direction: string
}

type WeatherData = {
  date: Date
  forcasts: Array<Forcast>
  max_temperature?: number
  min_temperature?: number
}

type State = {
  loaded: boolean
  temperature_unit: string
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
      temperature_unit: props.temperature_unit.substring(0, 1).toUpperCase(),
    }
    this.config = {
      longitude: props.longitude,
      latitude: props.latitude,
      temperature_unit: props.temperature_unit,
      wind_speed_unit: props.wind_speed_unit,
    }

    // Default hourly if none are passed
    this.config.hourly = ["temperature_2m", "relative_humidity_2m", "apparent_temperature", "precipitation_probability", "precipitation", "weather_code", "cloud_cover", "visibility", "wind_speed_10m"]
    this.updateWeather();
  }

  getLoaded() {
    return this.state.loaded;
  }

  getOpenMeteoData() {
    return this.open_meteo;
  }

  // From open-meteo documentation - https://open-meteo.com/en/docs
  setOpenMeteoResponse = async () => {
    let url = "https://api.open-meteo.com/v1/forecast?latitude=" + this.config.latitude + "&longitude=" + this.config.longitude + "&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code,wind_speed_10m,wind_direction_10m";

    return new Promise((resolve,reject) => {
      fetch(url).then((response) => {
        if (typeof response.body !== "undefined") {
          response.json().then((body) => {
            resolve(this.open_meteo = body.hourly);
          })
        }
      })
    })
  }

  getWeatherData = () => {
    return this.weather_data;
  }

  convertToFehrenheit = (degree: number) => {
    return Math.round(degree * (9/5) + 32);
  }

  setWeatherData = () => {
    let open_meteo: any = this.open_meteo;
    const today: Date = new Date();
    let hour: number, date: Date, weather: WeatherData, weather_array: Array<WeatherData> = [], index: number = -1;

    // Add forcasts for each day
    for (let i = 0; i < open_meteo.time.length; i++) {
      date = new Date(open_meteo.time[i]);
      hour = date.getHours();
      let forcast = {
        hour: hour,
        temperature: this.config.temperature_unit === "f" ? this.convertToFehrenheit(open_meteo.temperature_2m[i]) : Math.round(open_meteo.temperature_2m[i]),
        weather_code: open_meteo.weather_code[i],
        weather_condition: this.convertWMO(open_meteo.weather_code[i], open_meteo.precipitation_probability[i]),
        wind_speed: Math.round(open_meteo.wind_speed_10m[i]),
        rain_propability: open_meteo.precipitation_probability[i],
        humidity: open_meteo.relative_humidity_2m[i],
        wind_direction: this.convertWindDirection(open_meteo.wind_direction_10m[i])
      }
      if (weather_array[index]?.date && weather_array[index]?.date.toLocaleDateString() === date.toLocaleDateString()) {
        weather_array[index].forcasts.push(forcast)
      }
      else {
        if (date < today) {
          continue;
        }
        weather = {
          date: new Date(date.toLocaleDateString()),
          forcasts: [forcast]
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

  findMinMaxTemperature = (forcasts: Array<Forcast>) => {
    const max = forcasts.reduce((prev, curr) => (curr.temperature > prev.temperature ? curr : prev)).temperature;
    const min = forcasts.reduce((prev, curr) => (curr.temperature < prev.temperature ? curr : prev)).temperature;
    return { min, max }
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
    this.setState({
      loaded: false
    })
    this.setOpenMeteoResponse().then(() => {
      this.setWeatherData();
      this.updateCurrentWeather();
      this.setState({
        loaded: true
      })
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

  convertWindDirection = (angle: number): string => {
    let directions: string[] = [
      "N", "NE", "NE", "NE",
      "E", "SE", "SE", "SE",
      "S", "SW", "SW", "SW",
      "W", "NW", "NW", "NW"
    ]

    const section: number = Math.floor(angle / 22.5 + 0.5)

    return directions[section % 16]
  }

  nextRainyDay = async () => {

  }

  render() {
    return (
      <div className='container'>
        {
          this.state.loaded
          &&
          <div className='weather'>
              <div className='temperature'>{this.current_weather?.temperature + `\u00B0` + this.state.temperature_unit} </div>
              <div>{this.current_weather?.wind_speed + ' ' + this.config.wind_speed_unit.toUpperCase() + ' ' + this.current_weather?.wind_direction}</div>
              <div>{this.current_weather?.weather_condition}</div>
          </div>
        }
        <svg
          role='button'
          className={this.state.loaded ? "update_button" : "spin"}
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          onClick={this.updateCurrentWeather} 
        >
          <path
            d="M1.7507,16.0022 C3.3517,20.0982 7.3367,23.0002 11.9997,23.0002 C18.0747,23.0002 22.9997,18.0752 22.9997,12.0002 M22.2497,7.9982 C20.6487,3.9012 16.6627,1.0002 11.9997,1.0002 C5.9247,1.0002 0.9997,5.9252 0.9997,12.0002 M8.9997,16.0002 L0.9997,16.0002 L0.9997,24.0002 M22.9997,0.0002 L22.9997,8.0002 L14.9997,8.0002"
            fill="none"
            strokeWidth="2"
          />
        </svg>
      </div>
    )
  }
}
