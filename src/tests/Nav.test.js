import { render, screen } from '@testing-library/react';
import Nav from '../Components/Nav';

test('Testing the Navbar Title',()=>{
    render(<Nav/>);
    const title = screen.getByText(/glideaway/i);
    expect(title).toBeInTheDocument(); 
})
test('Testing Navbar Menus 1',()=>{
    render(<Nav/>);
    const home = screen.getByText(/Home/i);
    expect(home).toBeInTheDocument(); 
})
test('Testing Navbar Menu 2',()=>{
    render(<Nav/>);
    const contact_us = screen.getByText(/Contact Us/i);
    expect(contact_us).toBeInTheDocument(); 
})
test('Checking Menu items to be 2',()=>{
    render(<Nav/>);
    const listitems = screen.getAllByRole("listitem");
    expect(listitems).toHaveLength(2); 
})

