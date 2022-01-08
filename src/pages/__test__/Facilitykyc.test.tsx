import Facilitykyc from '../settings/kyc/Facilitykyc';
import {fireEvent, render, screen} from '@testing-library/react';
import{testStore} from "./testStore";
import {MemoryRouter as Router} from 'react-router-dom';
let wrapper:any;
import { Provider } from 'react-redux';

const setup = (initialState={})=>{
    const store = testStore(initialState);
    const wrapper = render(<Router><Provider store={store}><Facilitykyc/></Provider></Router>);
    return wrapper; 
}
beforeEach(() => {
    wrapper = setup({});
});
test('register form test',()=>{
    const headingElement = screen.getByRole('heading', {name : 'Organization info'});
    expect(headingElement).toBeInTheDocument;
    expect(wrapper.findByText(/Please add the facilities/i)).toBeInTheDocument;

})


//fireevents

test('onChange the product type',()=>{
    const nextbtn = wrapper.getByText(/next/i);
    const savebtn = wrapper.getByText(/save/i);
    const removebtn = wrapper.getByText(/remove/i);
    const backbtn = wrapper.getByText(/back/i);

    expect(savebtn).toBeInTheDocument;
    expect(nextbtn).toBeInTheDocument;
    expect(removebtn).toBeInTheDocument;
    expect(backbtn).toBeInTheDocument;

})