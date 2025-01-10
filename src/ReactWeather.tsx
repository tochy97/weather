import React, { Component } from 'react'

import './Weather.css'
import { Config, WeatherData } from './types';
import { getWeatherOpenMeteo } from './OpenMeteo';

type Props = Config;

type State = {
  config: Config
  loaded: boolean
  date: Date
}
export default class ReactWeather extends Component<Props, State> {
  public state: State;
  public weather_data: Array<WeatherData>;
  public current_weather?: any;
  private index: number;

  constructor(props: Props) {
    super(props);
    this.state = {
      config: props,
      loaded: false,
      date: new Date(),
    }
    this.index = 0;
  }
  componentDidMount() {
    this.updateWeatherData = this.updateWeatherData.bind(this);
    this.updateCurrentWeather = this.updateCurrentWeather.bind(this);
    this.nextDayForcast = this.nextDayForcast.bind(this);
    this.prevDayForcast = this.prevDayForcast.bind(this);
    this.updateWeatherData();
  }
  updateWeatherData = async () => {
    this.setState({
      loaded: false
    })
    let url = "https://api.open-meteo.com/v1/forecast?latitude=" + this.state.config.latitude + "&longitude=" + this.state.config.longitude + "&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code,wind_speed_10m,wind_direction_10m&past_days=1&forecast_days=16";

    const weather = await getWeatherOpenMeteo(url, this.state.config.temperature_unit);
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
    const current_hour: number = (new Date).getHours() + 1;
    if (typeof this.weather_data !== "undefined" && Array.isArray(this.weather_data) && this.weather_data.length !== 0) {
      let current_forcast = this.weather_data[this.index].forcasts.find(ele =>
        ele.hour === current_hour
      )
      if (typeof current_forcast === "undefined") {
        await this.updateWeatherData();
        return this.current_weather;
      }
      // Set current weather
      this.current_weather = current_forcast;
    }
    const callback = () => {
      this.setState({
        date: this.weather_data[this.index].date,
        loaded: true
      });
    }
    setTimeout(callback, 100);
    return this.current_weather;
  }

  nextDayForcast() {
    this.index++;
    this.updateCurrentWeather();
  }

  prevDayForcast() {
    this.index--;
    this.updateCurrentWeather();
  }

  isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate()
      && date.getMonth() === today.getMonth()
      && date.getFullYear() === today.getFullYear();
  }

  render() {
    return (
      <div className='container'>
        {
          this.state.loaded
          &&
          <div className='weather'>
            <div className='dateBox'>
              {
                this.index > 0 &&
                <svg
                  className="button"
                  width="20px"
                  height="20px"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={this.prevDayForcast}
                >
                  <path d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z" fill="#0F0F0F" />
                </svg>
              }
              {this.state.date.toDateString()}
              {
                this.index < 15 &&
                <svg
                  className="button"
                  width="20px"
                  height="20px"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="matrix(-1, 0, 0, 1, 0, 0)"
                  onClick={this.nextDayForcast}
                >
                  <path xmlns="http://www.w3.org/2000/svg" d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z" fill="#0F0F0F" />
                </svg>
              }
            </div>
            <div className='temperature'>{this.current_weather?.temperature + `\u00B0` + this.state.config.temperature_unit.toUpperCase()} </div>
            <div>{this.current_weather?.weather_condition}</div>

            <div>Wind: {this.current_weather?.wind_speed + ' ' + this.state.config.wind_speed_unit.toUpperCase() + ' ' + this.current_weather?.wind_direction}</div>
          </div>
        }
        <svg
          className={this.state.loaded ? "button" : "spin"}
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


