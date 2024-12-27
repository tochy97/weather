import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
// import Weather, {WeatherUI} from "../index"
import Weather,{ GetWeatherOpenMeteo }  from "../../lib/Weather.mjs"

it("OpenMeteo: bad request", async () => {
    let weather = await GetWeatherOpenMeteo(-92.679420,-97.028336,'f');
    expect(typeof weather.error).toBe("string");
    expect(weather.body.length).toBe(0);
})

it("OpenMeteo: good request", async () => {
    let weather = await GetWeatherOpenMeteo(32.679420,-97.028336,'f');
    expect(typeof weather.error).toBe("undefined");
    expect(weather.body.length).not.toBe(0);
})

it("Weather: render test", () => {
    render(<Weather longitude={0} latitude={0} temperature_unit={'f'} wind_speed_unit={'mph'} />);
});