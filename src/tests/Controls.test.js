import React from 'react';
import { screen, render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import Controls from '../components/Controls.js';
import App from "../App";

describe('<Controls />', () => {

  it('renders without crashing', () => {
    render(<Controls />);
  });

  describe('testing rendered page', () => {
    it('checks scorecard is output', () => {
      const display = render(<Controls />);
      expect(display.getByText(/Bowling Scorecard/))
      expect(display.getAllByText(/1.1/))
    });

    it('checks scorecard total outputs', () => {
      const display = render(<Controls />);
      expect(display.getByText(/Total: 0/))
    });

    it("form submits", () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<Controls onSubmit={onSubmit} />);
      fireEvent.submit(getByTestId('form'));
      waitFor(() => {
        expect(onSubmit).toHaveBeenCalled();
      });
    });

    it("entered turn and score updates scorecard", () => {
      const display = render(<Controls />);
      const { getByTestId } = display
      const inputTurn = screen.getByTestId('turn')
      const inputScore = screen.getByTestId('score')

      fireEvent.change(inputTurn, {target: { value: 1.1 } });
      fireEvent.change(inputScore, {target: { value: 5 } });
      fireEvent.submit(getByTestId('form'));

      fireEvent.change(inputTurn, {target: { value: 1.2 } });
      fireEvent.change(inputScore, {target: { value: 4 } });
      fireEvent.submit(getByTestId('form'));

      expect(display.getByText(/Total: 9/))
    });
  });

});
