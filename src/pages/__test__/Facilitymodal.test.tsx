import Facilitymodal from '../settings/Facilitykyc/Facilitymodal';
import {fireEvent, render, screen} from '@testing-library/react';
import{testStore} from "./testStore"
import {MemoryRouter as Router} from 'react-router-dom';
let wrapper:any;

const setup = (initialState={})=>{
    const store = testStore(initialState);
    const wrapper = render(<Router><Facilitymodal /></Router>);
    return wrapper; 
}
beforeEach(() => {
    wrapper = setup({});
});

test('initial test ',()=>{
    const headingElement = screen.getByRole('heading', {name : 'Corporate info'});
    expect(headingElement).toBeInTheDocument;
    const LocationElement = screen.getByRole('heading', {name : 'Location'});
    expect(LocationElement).toBeInTheDocument;
    const ContactElement = screen.getByRole('heading', {name : 'Contact'});
    expect(ContactElement).toBeInTheDocument;
    const ServiceofContactElement = screen.getByRole('heading', {name : 'Service of Contact'});
    expect(ServiceofContactElement).toBeInTheDocument;
    const OtherHolidaysElement = screen.getByRole('heading', {name : 'Other Holidays'});
    expect(OtherHolidaysElement).toBeInTheDocument;

    })

    describe('image test', () => {
        it('displays a happy face', () => {
          render(<Facilitymodal/>)
          const displayedImage = document.querySelector("img") as HTMLImageElement;
        })
      });