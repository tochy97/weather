export type Config = {
  longitude: number
  latitude: number
  hourly?: Array<string>
  temperature_unit: string
  wind_speed_unit: string
}

export type Forcast = {
  hour: number
  weather_code: number
  weather_condition: string | undefined
  wind_speed: number
  temperature: number
  rain_propability: number
  humidity: number,
  wind_direction: string
}

export type WeatherData = {
  date: Date
  forcasts: Array<Forcast>
  max_temperature?: number
  min_temperature?: number
}
