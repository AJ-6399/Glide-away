import { render, screen } from '@testing-library/react';
import Create from '../admin/Create';

test('Testing if it has 3 input fields',()=>{
    render(<Create/>);
    const inp_field = screen.getAllByRole("input");
    expect(inp_field).toHaveLength(3); 
})