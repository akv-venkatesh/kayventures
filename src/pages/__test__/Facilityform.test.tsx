import Facilitykyc from '../settings/kyc/Facilityinfo/Facilityform';
import {fireEvent, render, screen} from '@testing-library/react';
import{testStore} from "./testStore";
import {MemoryRouter as Router} from 'react-router-dom';
let wrapper:any;
import { Provider } from 'react-redux';
import selectEvent from 'react-select-event';

const setup = (initialState={})=>{
    const store = testStore(initialState);
    const wrapper = render(<Router><Provider store={store}><Facilitykyc/></Provider></Router>);
    return wrapper; 
}
beforeEach(() => {
    wrapper = setup({});
});

test('facilityform form test',async ()=>{
    const headingElement = screen.getByRole('heading', {name : /Select Activity/i});
    expect(headingElement).toBeInTheDocument;

    const Buildingfacade = wrapper.queryByTitle("Building facade");
    // fireEvent.click(Reception);
    const Reception = wrapper.queryByTitle("Reception");

    const Cutting = wrapper.queryByTitle("Cutting");
    const Sewing = wrapper.queryByTitle("Sewing");
    const Summary = wrapper.queryByTitle("Summary");

        //select Event
        expect(wrapper.getByTestId('form-line-type')).toHaveFormValues({linetype: ''});
        await selectEvent.select( wrapper.getByLabelText('LineType'), ['Open']);
        expect(wrapper.getByTestId('form-line-type')).toHaveFormValues({linetype:'Open'});

        const button = screen.getByRole('button', {name: 'Summary'})
        fireEvent.click(button)

})


