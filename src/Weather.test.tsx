import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import Weather from './Weather';

it('Weather: render test', () => {
    render(<Weather longitude={0} latitude={0} hourly={["temperature_2m", "relative_humidity_2m", "apparent_temperature", "precipitation_probability", "precipitation", "weather_code", "cloud_cover", "visibility", "wind_speed_10m", "wind_direction_10m"]} temperature_unit={''} wind_speed_unit={''} />);
    fireEvent.click(screen.getByRole("button"));
});