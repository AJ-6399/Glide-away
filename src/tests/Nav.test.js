import { render, screen } from '@testing-library/react';
import Nav from '../Components/Nav';
import { BrowserRouter } from 'react-router-dom';

test('Testing the Navbar Title',()=>{
    render(<Nav/>);
    const title = screen.getByText(/glideaway/i);
    expect(title).toBeInTheDocument(); 
})
test('Testing Navbar Menus 1',()=>{
    render(
    <BrowserRouter><Nav/></BrowserRouter>
    );
    const home = screen.getByText(/Home/i);
    expect(home).toBeInTheDocument(); 
})
test('Testing Navbar Menu 2',()=>{
    render(<BrowserRouter><Nav/></BrowserRouter>);
    const contact_us = screen.getByText(/packages/i);
    expect(contact_us).toBeInTheDocument(); 
})
test('Checking Menu items to be 2',()=>{
    render(<BrowserRouter><Nav/></BrowserRouter>);
    const listitems = screen.getAllByRole("listitem");
    expect(listitems).toHaveLength(2); 
})

