import React, { Component } from 'react'
import { fetchWeatherApi } from 'openmeteo';

type Props = {
  longitude: number,
  latitude: number,
  inputs: Array<string>,
  temperature_unit: string,
  wind_speed_unit: string
}

type State = {
  longitude: number,
  latitude: number,
  inputs: Array<string>,
  temperature_unit: string,
  wind_speed_unit: string
  weatherData: any
}

export default class Weather extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      longitude: props.longitude,
      latitude: props.latitude,
      inputs: props.inputs,
      temperature_unit: props.temperature_unit,
      wind_speed_unit: props.wind_speed_unit,
      weatherData: {}
    }
  }

  getForcast = async () => {
    const params = {
      "latitude": this.state.longitude,
      "longitude": this.state.latitude,
      "hourly": ["temperature_2m", "relative_humidity_2m", "apparent_temperature", "precipitation_probability", "precipitation", "weather_code", "cloud_cover", "visibility", "wind_speed_10m", "wind_direction_10m"],
      "temperature_unit": this.state.temperature_unit,
      "wind_speed_unit": this.state.wind_speed_unit
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    return await fetchWeatherApi(url, params);
  }

  render() {
    return (
      <div>Weather</div>
    )
  }
}