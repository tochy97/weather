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
  loaded: boolean
  forcast: any
}

export default class Weather extends Component<Props, State> {


  constructor(props: Props) {
    super(props);
    this.state = {
      loaded: false,
      forcast: {}
    }
  }

  #getForcast = async () => {
    return await fetchWeatherApi("https://api.open-meteo.com/v1/forecast", this.state);
  }

  #parseForcast = (data: any) => {
    return {
      loaded: true
    }
  }

  updateForcast = async () => {
    let response = await this.#getForcast();
    if (response){
      console.log(response);debugger
      this.setState(this.#parseForcast(response));
  }}

  nextRainyDay = async () => {

  }

  render() {
    return (
      <div>Weather</div>
    )
  }
}