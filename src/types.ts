export type Config = {
  longitude: number
  latitude: number
  hourly?: Array<string>
  temperature_unit: string
  wind_speed_unit: string
}

export type WeatherData = {
  date: Date
  forcasts: Array<any>
  max_temperature?: number
  min_temperature?: number
}
