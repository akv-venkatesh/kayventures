import Facilityday from '../settings/Facilitykyc/Facilityday';
import {fireEvent, render, screen} from '@testing-library/react';
import{testStore} from "./testStore"
import {MemoryRouter as Router} from 'react-router-dom';
let wrapper:any;

const setup = (initialState={})=>{
    const store = testStore(initialState);
    const wrapper = render(<Router><Facilityday /></Router>);
    return wrapper; 
}
beforeEach(() => {
    wrapper = setup({});
});
test('Organizationinfo form test',()=>{
    const mondays = wrapper.getByLabelText('mondays')
    expect(mondays).toBeInTheDocument;
    const tuesdays = wrapper.getByLabelText('tuesdays')
    expect(tuesdays).toBeInTheDocument;
    const wednesdays = wrapper.getByLabelText('wednesdays')
    expect(wednesdays).toBeInTheDocument;
    const thrusdays = wrapper.getByLabelText('thrusdays')
    expect(thrusdays).toBeInTheDocument;
    const fridays = wrapper.getByLabelText('fridays')
    expect(fridays).toBeInTheDocument;
    const saturdays = wrapper.getByLabelText('saturdays')
    expect(saturdays).toBeInTheDocument;
    const sundays = wrapper.getByLabelText('sundays')
    expect(sundays).toBeInTheDocument;
    const holiday1 = wrapper.getByLabelText('holiday1')
    expect(holiday1).toBeInTheDocument;
       
})

//fireevents

test('onChange the button type',()=>{
    const summary = wrapper.getByText(/summary/i);
    const save = wrapper.getByText(/save/i);

    expect(summary).toBeInTheDocument;
    expect(save).toBeInTheDocument;
})
