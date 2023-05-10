import { render, screen } from '@testing-library/react';
import Create from '../admin/Create';
import { BrowserRouter } from 'react-router-dom';
test('Testing if it has 3 input fields',()=>{
    render(
    <BrowserRouter>
    <Create/>
    </BrowserRouter>);
    const inp_field = screen.getAllByRole("textbox");
    expect(inp_field).toHaveLength(3); 
})
test('Testing if it has 1 button',()=>{
    render(
    <BrowserRouter>
    <Create/>
    </BrowserRouter>);
    const button = screen.getAllByRole("button");
    expect(button).toHaveLength(1); 
})