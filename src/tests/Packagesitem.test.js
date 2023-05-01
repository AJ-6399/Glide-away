import { render, screen } from '@testing-library/react';
import Packagesitem from '../Components/Packagesitem';

test('Testing the Navbar Title',()=>{
    render(<Packagesitem/>);
    const btntext = screen.getByText(/view itinerary/i);
    expect(btntext).toBeInTheDocument(); 
})
test('Testing if image tag is present',()=>{
    render(<Packagesitem/>);
    const image = screen.getAllByRole("img");
    expect(image).toHaveLength(1); 
})
test('Testing if item title is present',()=>{
    render(<Packagesitem/>);
    const itemtitle = screen.getAllByRole("heading");
    expect(itemtitle).toHaveLength(1); 
})
test('Testing if item description is present',()=>{
    render(<Packagesitem/>);
    const itemlink = screen.getAllByRole("link");
    expect(itemlink).toHaveLength(1); 
})