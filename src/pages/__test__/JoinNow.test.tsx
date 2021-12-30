import Joinnow from '../JoinNow';
import {render, screen} from '@testing-library/react';
import { testStore } from "./testStore";
import { MemoryRouter as Router } from 'react-router-dom';
let wrapper: any;
const setup = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = render(<Router><Joinnow/></Router>);
    return wrapper;
}
beforeEach(() => {
    wrapper = setup({});
});

test('initial test by role',()=>{
const headingElement = screen.getByRole('heading', {name : 'KAY VENTURES'});
const joinnowElement = screen.getByText('Join Now');
expect(headingElement).toBeInTheDocument;
expect(joinnowElement).toBeInTheDocument;
  
})
