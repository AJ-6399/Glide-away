import { render, screen } from '@testing-library/react';
import Nav from '../Components/Nav';

test('Testing the Navbar Title',()=>{
    render(<Nav/>);
    const title = screen.getByText(/Glideaway/i);
    expect(title).toBeInTheDocument(); 
})

test('Navbar menu count',async ()=> {
    render(<Nav/>);
    const menuList = await screen.findAllByRole("button");
    expect(menuList).toHaveLength(2);
})

