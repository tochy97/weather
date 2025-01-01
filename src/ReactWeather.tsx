import React, { Component } from 'react'

import './Weather.css'
import { Config, WeatherData } from './types';
import { getWeatherOpenMeteo } from './OpenMeteo';

type Props = Config;

type State = {
  config: Config
  loaded: boolean
}
export default class ReactWeather extends Component<Props, State> {
  public state: State;
  public weather_data: Array<WeatherData>;
  public current_weather?: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      config: props,
      loaded: false,
    }
  }
  componentDidMount() {
    this.updateWeatherData = this.updateWeatherData.bind(this);
    this.updateCurrentWeather = this.updateCurrentWeather.bind(this);
    this.updateWeatherData();
  }
  updateWeatherData = async () => {
    this.setState({
      loaded: false
    })
    let url = "https://api.open-meteo.com/v1/forecast?latitude=" + this.state.config.latitude + "&longitude=" + this.state.config.longitude + "&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code,wind_speed_10m,wind_direction_10m";

    const weather = await getWeatherOpenMeteo(url,this.state.config.temperature_unit);
    if (weather.error === undefined) {
      this.weather_data = weather.body;
      this.updateCurrentWeather();
      this.setState({
        loaded: true
      });
    }
    return this.weather_data;
  }

  updateCurrentWeather = async () => {
    this.setState({
      loaded: false
    });
    const current_hour: number = (new Date()).getHours() + 1;
    if (typeof this.weather_data !== "undefined" && Array.isArray(this.weather_data) && this.weather_data.length !== 0) {
      let current_forcast = this.weather_data[0].forcasts.find(ele =>
        ele.hour === current_hour
      )
      if (current_forcast === undefined) {
        await this.updateWeatherData();
        return this.current_weather;
      }
      // Set current weather
      this.current_weather = current_forcast;
    }
    const callback = () => {
      this.setState({
        loaded: true
      });
    }
    setTimeout(callback, 2000);
    return this.current_weather;
  }

  render() {
    return (
      <div className='container'>
        {
          this.state.loaded
          &&
          <div className='weather'>
            <div className='temperature'>{this.current_weather?.temperature + `\u00B0` + this.state.config.temperature_unit.toUpperCase()} </div>
            <div>{this.current_weather?.weather_condition}</div>

            <div>Wind: {this.current_weather?.wind_speed + ' ' + this.state.config.wind_speed_unit.toUpperCase() + ' ' + this.current_weather?.wind_direction}</div>
          </div>
        }
        <svg
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


