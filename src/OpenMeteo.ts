import { Forcast, WeatherData, } from "./types"

const convertWMO = (weather_code: number | undefined | null, rain_propability: number | undefined | null) => {
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

const convertWindDirection = (angle: number): string => {
  let directions: string[] = [
    "N", "NNE", "NE", "ENE",
    "E", "ESE", "SE", "SSE",
    "S", "SSW", "SW", "WSW",
    "W", "WNW", "NW", "NNW"
  ]

  const section: number = Math.floor(angle / 22.5 + 0.5)

  return directions[section % 16]
}

const findMinMaxTemperature = (forcasts: Array<Forcast>) => {
  const max = forcasts.reduce((prev, curr) => (curr.temperature > prev.temperature ? curr : prev)).temperature;
  const min = forcasts.reduce((prev, curr) => (curr.temperature < prev.temperature ? curr : prev)).temperature;
  return { min, max }
}

export const GetWeatherOpenMeteo = async (latitude: number, longitude: number, temperature_unit: string) => {
  let url = "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code,wind_speed_10m,wind_direction_10m";
  const today: Date = new Date();
  let hour: number, date: Date, weather: WeatherData, weather_array: Array<WeatherData> = [], index: number = -1;
  const response = await fetch(url);
  const body = await response.json();
  if (body.error) { 
    return {
      body: [],
      error: body.reason,
    }
  }
  const open_meteo = body.hourly;
  // Add forcasts for each day
  for (let i = 0; i < open_meteo?.time.length; i++) {
    date = new Date(open_meteo.time[i]);
    hour = date.getHours();
    let forcast = {
      hour: hour,
      temperature: temperature_unit === "f" ? Math.round(open_meteo.temperature_2m[i] * (9 / 5) + 32) : Math.round(open_meteo.temperature_2m[i]),
      weather_code: open_meteo.weather_code[i],
      weather_condition: convertWMO(open_meteo.weather_code[i], open_meteo.precipitation_probability[i]),
      wind_speed: Math.round(open_meteo.wind_speed_10m[i]),
      rain_propability: open_meteo.precipitation_probability[i],
      humidity: open_meteo.relative_humidity_2m[i],
      wind_direction: convertWindDirection(open_meteo.wind_direction_10m[i])
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
    const { min, max } = findMinMaxTemperature(weather_array[i].forcasts)
    weather_array[i].max_temperature = max;
    weather_array[i].min_temperature = min;
  }

  return {
    body:weather_array,
    error: undefined,
  };
}
