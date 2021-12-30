import Adminregister from '../../Admin/AdminRegister';
import {fireEvent, render, screen} from '@testing-library/react';
import{testStore} from "../testStore"
import {MemoryRouter as Router} from 'react-router-dom';
let wrapper:any;

const setup = (initialState={})=>{
    const store = testStore(initialState);
    const wrapper = render(<Router><Adminregister store={store}/></Router>);
    return wrapper; 
}
beforeEach(() => {
    wrapper = setup({});
});
test('register form test',()=>{
    const firstName = wrapper.getByLabelText('First Name')
    const MiddleName = wrapper.getByLabelText('Middle Name')
    const lastname = wrapper.getByLabelText('Last Name')
    const email = wrapper.getByLabelText('Email Address')
    const phonenumber = wrapper.getByLabelText('Phone Number')
    const password = wrapper.getByLabelText('New Password')
    const confpassword = wrapper.getByLabelText('Confirm Password')
    expect(firstName).toBeInTheDocument;
    expect(MiddleName).toBeInTheDocument;
    expect(lastname).toBeInTheDocument;
    expect(email).toBeInTheDocument;
    expect(phonenumber).toBeInTheDocument;
    expect(password).toBeInTheDocument;
    expect(confpassword).toBeInTheDocument;
    const textinputCount = wrapper.getAllByRole('textbox');
    expect(textinputCount).toHaveLength(5);
    const pswinputCount = wrapper.getAllByPlaceholderText('Password');
    expect(pswinputCount).toHaveLength(2);
    const submitbtn = wrapper.getByRole('button', {name: /save/i});
    expect(submitbtn).toBeInTheDocument;
    fireEvent.click(submitbtn);
    // expect(wrapper.findByText('sasd')).toBeInTheDocument;
    fireEvent.change(firstName, { target: { value: "anand" } });
    expect(wrapper.getByDisplayValue(/anand/i)).toBeInTheDocument;
})