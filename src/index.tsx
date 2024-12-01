import React from 'react'
import ReactDOM from 'react-dom/client';
import Weather from './Weather';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Weather longitude={-97.028336} latitude={32.679420} temperature_unit='fahrenheit' wind_speed_unit='mph' hourly={[]} />
);