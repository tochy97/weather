import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
// import Weather, {WeatherUI} from "../index"
import ReactWeather, { getWeatherOpenMeteo }  from "../../lib/index.js"

let url = (latitude: number, longitude: number) => "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code,wind_speed_10m,wind_direction_10m";
it("OpenMeteo: bad request", async () => {
    let weather = await getWeatherOpenMeteo(url(-92.679420,-97.028336),'f');
    expect(typeof weather.error).toBe("string");
    expect(weather.body.length).toBe(0);
})

it("OpenMeteo: good request", async () => {
    let weather = await getWeatherOpenMeteo(url(32.679420,-97.028336),'f');
    expect(typeof weather.error).toBe("undefined");
    expect(weather.body.length).not.toBe(0);
})

it("Weather: render test", () => {
    render(<ReactWeather longitude={0} latitude={0} temperature_unit={'f'} wind_speed_unit={'mph'} />);
});