import PrmaryDetail from '../PrimaryDetails';
import {findByRole, render, screen,fireEvent,waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import{testStore} from "./testStore"
import { MemoryRouter as Router } from 'react-router-dom';


let wrapper:any;

const setup = (initialState={})=>{
    const store = testStore(initialState);
    const wrapper = render(<Router><PrmaryDetail  store={store}/></Router>);
    return wrapper; 
}

beforeEach(() => {
    wrapper = setup({});
});


   
it('Primary detail - Renders correctly initial document', () => {

    const organizationLabel = wrapper.getByText('Organization');
    expect(organizationLabel).toBeInTheDocument;

    const organizationInput = wrapper.getByLabelText('organization')
    expect(organizationInput).toBeInTheDocument;
    
    const locationLabel = wrapper.getByText('Location');
    expect(locationLabel).toBeInTheDocument;

    const locationInput = wrapper.getByLabelText('location')
    expect(locationInput).toBeInTheDocument;

    const personNameLabel = wrapper.getByText('Name of the person');
    expect(personNameLabel).toBeInTheDocument;

    const personNameInput = wrapper.getByLabelText('personName')
    expect(personNameInput).toBeInTheDocument;

    const designationLabel = wrapper.getByText('Designation');
    expect(designationLabel).toBeInTheDocument;

    const designationInput = wrapper.getByLabelText('designation')
    expect(designationInput).toBeInTheDocument;

    const emailLabel = wrapper.getByText('E-mail Id(Compant Id)');
    expect(emailLabel).toBeInTheDocument;

    const emailInput = wrapper.getByLabelText('email')
    expect(emailInput).toBeInTheDocument;

    const phoneLabel = wrapper.getByText('Phone No.');
    expect(phoneLabel).toBeInTheDocument;

    const phoneInput = wrapper.getByLabelText('phone')
    expect(phoneInput).toBeInTheDocument;
    
    const urlLinkLabel = wrapper.getByText('URL link');
    expect(urlLinkLabel).toBeInTheDocument;

    const urlLinkInput = wrapper.getByLabelText('urlLink')
    expect(urlLinkInput).toBeInTheDocument;

    const button = screen.getByRole('button', {
        name: /Submit/i
      })
    expect(button).toBeInTheDocument;
});

test('Primary detail - when the value is changed Input', () => {
    const organizationInput = wrapper.getByLabelText('organization') 
    fireEvent.change(organizationInput, {target: {value: 'Google Inc'}})
    expect(organizationInput.value).toBe('Google Inc')
    
    const locationInput = wrapper.getByLabelText('location')
    fireEvent.change(locationInput, {target: {value: 'Coimbatore'}})
    expect(locationInput.value).toBe('Coimbatore')

    const personNameInput = wrapper.getByLabelText('personName')
    fireEvent.change(personNameInput, {target: {value: 'Indrakumar'}})
    expect(personNameInput.value).toBe('Indrakumar')

    const designationInput = wrapper.getByLabelText('designation')
    fireEvent.change(designationInput, {target: {value: 'Manager'}})
    expect(designationInput.value).toBe('Manager')

    const emailInput = wrapper.getByLabelText('email')
    fireEvent.change(emailInput, {target: {value: 'indra@thegeng.in'}})
    expect(emailInput.value).toBe('indra@thegeng.in')

    const phoneInput = wrapper.getByLabelText('phone')
    fireEvent.change(phoneInput, {target: {value: '8870048253'}})
    expect(phoneInput.value).toBe('8870048253')

    const urlLinkInput = wrapper.getByLabelText('urlLink')
    fireEvent.change(urlLinkInput, {target: {value: 'url:212/link'}})
    expect(urlLinkInput.value).toBe('url:212/link')

    const button = screen.getByRole('button', {
        name: /Submit/i
      })

    fireEvent.click(button)
})


    