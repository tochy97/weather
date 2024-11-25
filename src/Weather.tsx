import React, { Component } from 'react'
import { fetchWeatherApi } from 'openmeteo';

type Props = {
  longitude: number,
  latitude: number,
  hourly: Array<string>,
  temperature_unit: string,
  wind_speed_unit: string
}

type State = {
  longitude: number,
  latitude: number,
  hourly: Array<string>,
  temperature_unit: string,
  wind_speed_unit: string
}

export default class Weather extends Component<Props, State> {

  public weatherData: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      "longitude": props.longitude,
      "latitude": props.latitude,
      "hourly": props.hourly,
      "temperature_unit": props.temperature_unit,
      "wind_speed_unit": props.wind_speed_unit,
    }
    this.weatherData = {}
  }

  #getForcast = async () => {
    return await fetchWeatherApi("https://api.open-meteo.com/v1/forecast", this.state);
  }

  #parseForcast = (data: any) => {
    
  }

  updateForcast = async () => {
    let response = await this.#getForcast();
    if (response){
      console.log(response);debugger
      this.weatherData = this.#parseForcast(response);
  }}

  nextRainyDay = async () => {

  }

  render() {
    return (
      <div>Weather</div>
    )
  }
}