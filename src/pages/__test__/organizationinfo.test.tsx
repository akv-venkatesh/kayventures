import Organizationinfo from '../settings/kyc/Organization/Organizationinfo';
import {fireEvent, render, screen} from '@testing-library/react';
import{testStore} from "./testStore"
import {MemoryRouter as Router} from 'react-router-dom';
let wrapper:any;

const setup = (initialState={})=>{
    const store = testStore(initialState);
    const wrapper = render(<Router><Organizationinfo /></Router>);
    return wrapper; 
}
beforeEach(() => {
    wrapper = setup({});
});
test('Organizationinfo form test',()=>{
    const upload_logo = wrapper.getByLabelText('upload_logo')
    expect(upload_logo).toBeInTheDocument;
    const leagal_name = wrapper.getByLabelText('leagal_name')
    expect(leagal_name).toBeInTheDocument;
    const estimate_date = wrapper.getByLabelText('estimate_date')
    expect(estimate_date).toBeInTheDocument;
    const pan_number = wrapper.getByLabelText('pan_number')
    expect(pan_number).toBeInTheDocument;
    const ie_code = wrapper.getByLabelText('ie_code')
    expect(ie_code).toBeInTheDocument;
    const registration_certificate = wrapper.getByLabelText('registration_certificate')
    expect(registration_certificate).toBeInTheDocument;
    const organisational = wrapper.getByLabelText('organisational')
    expect(organisational).toBeInTheDocument;
    const GSTNumber = wrapper.getByLabelText('GSTNumber')
    expect(GSTNumber).toBeInTheDocument;
    const GSTCertificate = wrapper.getByLabelText('GSTCertificate')
    expect(GSTCertificate).toBeInTheDocument;
    const WebsiteLink = wrapper.getByLabelText('WebsiteLink')
    expect(WebsiteLink).toBeInTheDocument;
    const SocialMediaLink = wrapper.getByLabelText('SocialMediaLink')
    expect(SocialMediaLink).toBeInTheDocument;
    const save = wrapper.queryByTitle("save");
    const summary = wrapper.queryByTitle("summary");    
})

// test('Simulates selection', () => {
//     const { getByTestId, getAllByTestId } = render(<Organizationinfo />);
//     //The value should be the key of the option
//     fireEvent.change(getByTestId('select'), { target: { value: 2 } })
//     //...
// })