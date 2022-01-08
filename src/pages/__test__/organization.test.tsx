import Organization from '../settings/kyc/Organization';
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
expect(headingElement).toBeInTheDocument;
const backbutton = wrapper.queryByTitle("backbutton");
expect(backbutton).toBeInTheDocument;
const removebutton = wrapper.queryByTitle("removebutton");
expect(removebutton).toBeInTheDocument;
const savebutton = wrapper.queryByTitle("savebutton");
expect(savebutton).toBeInTheDocument;
const nextbutton = wrapper.queryByTitle("nextbutton");
expect(nextbutton).toBeInTheDocument;

})


