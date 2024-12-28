import React from 'react';
import ReactDOM from 'react-dom/client';

import ReactWeather from "../index";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <ReactWeather longitude={-97.028336} latitude={32.679420} temperature_unit='f' wind_speed_unit='mph'/>
);
