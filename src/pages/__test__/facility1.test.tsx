import Facility1 from '../settings/kyc/Facilitykyc/Facility1';
import {fireEvent, render, screen} from '@testing-library/react';
import{testStore} from "./testStore"
import {MemoryRouter as Router} from 'react-router-dom';

let wrapper:any;

const setup = (initialState={})=>{
    const store = testStore(initialState);
    const wrapper = render(<Router><Facility1 /></Router>);
    return wrapper; 
}
beforeEach(() => {
    wrapper = setup({});
});
test('Organizationinfo form test', async ()=>{
    const line1 = wrapper.getByLabelText('line1')
    expect(line1).toBeInTheDocument;
    const line2 = wrapper.getByLabelText('line2')
    expect(line2).toBeInTheDocument;
    const state = wrapper.getByLabelText('state')
    expect(state).toBeInTheDocument;
    const country = wrapper.getByLabelText('country')
    expect(country).toBeInTheDocument;
    const pincode = wrapper.getByLabelText('pincode')
    expect(pincode).toBeInTheDocument;
    const locationmap = wrapper.getByLabelText('locationmap')
    expect(locationmap).toBeInTheDocument;
    const service = wrapper.getByLabelText('service')
    expect(service).toBeInTheDocument;
    const customercareadministration = wrapper.getByLabelText('customercareadministration')
    expect(customercareadministration).toBeInTheDocument;
    const reversegecoding = wrapper.getByLabelText('reversegecoding')
    expect(reversegecoding).toBeInTheDocument;
       
})

test('onChange the button type test',()=>{
    const backbutton = wrapper.queryByTitle("backbutton");
    expect(backbutton).toBeInTheDocument;
    const removebutton = wrapper.queryByTitle("removebutton");
    expect(removebutton).toBeInTheDocument;
    const savebutton = wrapper.queryByTitle("savebutton");
    expect(savebutton).toBeInTheDocument;
    const nextbutton = wrapper.queryByTitle("nextbutton");
    expect(nextbutton).toBeInTheDocument;
    const summary = wrapper.getByText(/summary/i);
    expect(summary).toBeInTheDocument;
    
    })
