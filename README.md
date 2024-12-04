# Weather

Weather is a node app utilizing open-meteo wriiten in typescript built down to es5.

## Installation

```bash
npm install @egeonu/weather
```

## Usage

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client';
import Weather from '@egeonu/weather';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Weather longitude={-97.028336} latitude={32.679420} temperature_unit='fahrenheit' wind_speed_unit='mph'/>
);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
