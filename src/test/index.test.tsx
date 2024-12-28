import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
// import Weather, {WeatherUI} from "../index"
import ReactWeather, { getWeatherOpenMeteo }  from "../../lib/Weather.mjs"

it("OpenMeteo: bad request", async () => {
    let weather = await getWeatherOpenMeteo(-92.679420,-97.028336,'f');
    expect(typeof weather.error).toBe("string");
    expect(weather.body.length).toBe(0);
})

it("OpenMeteo: good request", async () => {
    let weather = await getWeatherOpenMeteo(32.679420,-97.028336,'f');
    expect(typeof weather.error).toBe("undefined");
    expect(weather.body.length).not.toBe(0);
})

it("Weather: render test", () => {
    render(<ReactWeather longitude={0} latitude={0} temperature_unit={'f'} wind_speed_unit={'mph'} />);
});