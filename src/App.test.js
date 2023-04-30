import { render, screen } from '@testing-library/react';
import Nav from './Components/Nav';


test('renders learn react link', () => {
  render(<Nav/>);
  const linkElement = screen.getByText(/Glideaway/i);
  expect(linkElement).toBeInTheDocument();
});
