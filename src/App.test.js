import { render, screen } from '@testing-library/react';
import App from './App';
import Scoreboard from './Components/Scoreboard';

// it('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);

//   expect(linkElement).toBeInTheDocument();
// });

test('renders the Scoreboard', () => {
  render(<Scoreboard />);
  const divElement = screen.getByTestId('Scoreboard');

  expect(divElement).toBeInTheDocument();
})

test('ScoreBoard frames are empty on initialization', () => {
  render(<Scoreboard />);

  

})


