import { render, screen } from '@testing-library/react';
import Modal from './Weather';
import Weather from './Weather';

it('Weather: render test', () => {
    render(<Weather longitude={0} latitude={0} inputs={[]} temperature_unit={''} wind_speed_unit={''} />);
    expect(screen.getByText('Weather')).toBeInTheDocument();
});