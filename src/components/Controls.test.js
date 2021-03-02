import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls.js';

describe('<Controls />', () => {
  it('renders without crashing', () => {
    render(<Controls />);
  });

  it('checks props work', () => {
    const display = render(<Controls />);
    expect(display.getByText(/Bowling Scorecard/))
    expect(display.getByText(/1.1/))
  });

});
