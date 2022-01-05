import Facilitykyc from '../settings/Facilityinfo/Facilityform';
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
test('facilityform form test',()=>{
    const headingElement = screen.getByRole('heading', {name : 'Select Activity'});
    expect(headingElement).toBeInTheDocument;
    
    const locationElement = screen.getByRole('heading', {name : 'Location'});
    expect(locationElement).toBeInTheDocument;

    screen.debug(screen.getByText('Summary'))

    screen.debug(screen.getAllByText('Location'))

    const sliderPosterImg = screen.getByAltText(/slider/i)
})