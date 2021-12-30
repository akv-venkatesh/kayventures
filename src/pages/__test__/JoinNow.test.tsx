import Joinnow from '../JoinNow';
import {render, screen ,fireEvent} from '@testing-library/react';
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

test('initial test ',()=>{
const headingElement = screen.getByRole('heading', {name : 'KAY VENTURES'});
const paraElement = screen.getByTestId('para');
const joinnowElement = screen.getByText('Join Now');
expect(headingElement).toBeInTheDocument;
expect(paraElement).toHaveTextContent("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
expect(joinnowElement).toBeInTheDocument;
  
const joinnowbutton = wrapper.queryByTitle("joinnow");
// fireEvent.click(joinnowbutton);
})
