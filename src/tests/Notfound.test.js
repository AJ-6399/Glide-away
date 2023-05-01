import { render, screen } from '@testing-library/react';
import Notfound from '../Components/Notfound';

test('Testing if not found text is present',()=>{
    render(<Notfound/>);
    const notfoundtext = screen.getAllByRole("heading");
    expect(notfoundtext).toHaveLength(1); 
})