import { render, screen } from '@testing-library/react';
import Home from '../Components/Home';

test('Testing the HomePage image captions',()=>{
    render(<Home/>);
    const imagetitle = screen.getByText(/Ready on where to go?/i);
    expect(imagetitle).toBeInTheDocument(); 
})
test('Testing the HomePage image captions 2',()=>{
    render(<Home/>);
    const imagetitle = screen.getByText(/We will get it executed/i);
    expect(imagetitle).toBeInTheDocument(); 
})
test('Testing home has image',()=>{
    render(<Home/>);
    const img = screen.getAllByRole("img");
    expect(img).toHaveLength(1); 
})