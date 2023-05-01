import { render, screen } from '@testing-library/react';
import Itinerary from '../Components/Itinerary';

test('Testing page has image',()=>{
    render(<Itinerary/>);
    const img = screen.getAllByRole("img");
    expect(img).toHaveLength(1); 
})
test('Itinerary title',()=>{
    render(<Itinerary/>);
    const it_title = screen.getByText(/Itinerary/i);
    expect(it_title).toBeInTheDocument(); 
})