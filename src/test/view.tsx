import React from 'react';
import ReactDOM from 'react-dom/client';

import Weather from "../index";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const weather = new Weather({longitude:-97.028336, latitude:32.679420, temperature_unit:'f', wind_speed_unit:'mph'})

root.render(
    <Weather longitude={-97.028336} latitude={32.679420} temperature_unit='f' wind_speed_unit='mph'/>
);
