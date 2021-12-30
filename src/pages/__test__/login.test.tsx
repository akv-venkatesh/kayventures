

import Login  from '../../component/login/login'
import {findByRole, render, screen,fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import{testStore} from "./testStore"
import { MemoryRouter as Router } from 'react-router-dom';


let wrapper:any;

const setup = (initialState={})=>{
    const store = testStore(initialState);
    const handleSubmit = jest.fn()
    const wrapper = render(<Router><Login  store={store}/></Router>);
    return wrapper; 
}

beforeEach(() => {
    wrapper = setup({});
});
   
it('Renders correctly initial document', () => {

    const emailInput = wrapper.getByLabelText('email')
    expect(emailInput).toBeInTheDocument;
    
    const passwordInput = wrapper.getByLabelText('password')
    expect(passwordInput).toBeInTheDocument;


    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument;
});

test('Input when the value is changed', () => {
    const emailInput = wrapper.getByLabelText('email')
    fireEvent.change(emailInput, {target: {value: 'indra@thegang.in'}})
    expect(emailInput.value).toBe('indra@thegang.in')
    
    const passwordInput = wrapper.getByLabelText('password')
    fireEvent.change(passwordInput, {target: {value: 'Password@21asp'}})
    expect(passwordInput.value).toBe('Password@21asp')

    const button = screen.getByRole('button')
    fireEvent.click(button)
})


    