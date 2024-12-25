import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
// import Weather, {WeatherUI} from "../index"
import Weather  from "../"

it('Weather: Get Open-Meteo', async () => {
    const weather = new Weather({longitude:-97.028336, latitude:32.679420, temperature_unit:'f', wind_speed_unit:'mph'});
    expect(weather.getLoaded()).toBe(false);
    expect(weather.getOpenMeteoData()).toBe(undefined);
    expect(weather.getWeatherData()).toBe(undefined);
    await weather.updateWeather();
    expect(weather.getOpenMeteoData()).not.toBe(undefined);
    expect(weather.getLoaded()).toBe(true);
    expect(weather.getWeatherData()).not.toBe(undefined);
});

it('WeatherUI: render test', () => {
    render(<Weather longitude={0} latitude={0} temperature_unit={'f'} wind_speed_unit={'mph'} />);
});