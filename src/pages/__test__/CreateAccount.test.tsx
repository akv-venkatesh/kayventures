import CreateAccount from '../CreateAccount';
import {render, screen,fireEvent, queryByTitle} from '@testing-library/react';
import { testStore } from "./testStore"
import { MemoryRouter as Router } from 'react-router-dom';
let wrapper: any;
const setup = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = render(<Router><CreateAccount /></Router>);
    return wrapper;
}
beforeEach(() => {
    wrapper = setup({});
});



test('initial test Craete Account',()=>{
const headingElement = screen.getByRole('heading', {name : 'KAY VENTURES'});
const CreateAccounttitle =screen.getByRole('heading',{name:'Create Account'});
const nextbutton = wrapper.queryByTitle("nextbutton");
expect(headingElement).toBeInTheDocument;
expect(CreateAccounttitle).toBeInTheDocument;

// form
const User_Name = wrapper.getByLabelText('User_Name')
expect(User_Name).toBeInTheDocument;
fireEvent.change(User_Name, {target: {value: 'Bala'}})
expect(User_Name.value).toBe('Bala')

const User_Email = wrapper.getByLabelText('User_Email')
expect(User_Email).toBeInTheDocument;
fireEvent.change(User_Email, {target: {value: 'balam@coitor.com'}})
expect(User_Email.value).toBe('balam@coitor.com')

const User_Phone = wrapper.getByLabelText('User_Phone')
expect(User_Phone).toBeInTheDocument;
fireEvent.change(User_Phone, {target: {value: '9842156230'}})
expect(User_Phone.value).toBe('9842156230')


// fireEvent.click(nextbutton);

  
})
