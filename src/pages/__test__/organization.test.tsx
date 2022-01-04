import Organization from '../settings/Organization';
import {render, screen,fireEvent, queryByTitle} from '@testing-library/react';
import { testStore } from "./testStore"
import { MemoryRouter as Router } from 'react-router-dom';
let wrapper: any;
const setup = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = render(<Router><Organization /></Router>);
    return wrapper;
}
beforeEach(() => {
    wrapper = setup({});
});



test('initial test',()=>{
const headingElement = screen.getByRole('heading', {name : 'Organization KYC'});
const backbutton = wrapper.queryByTitle("backbutton");
const removebutton = wrapper.queryByTitle("removebutton");
const savebutton = wrapper.queryByTitle("savebutton");
const nextbutton = wrapper.queryByTitle("nextbutton");
expect(headingElement).toBeInTheDocument;
})

test('button when the value is clicked', () => {
    const button = screen.getByRole('button')
    fireEvent.click(button)
})
