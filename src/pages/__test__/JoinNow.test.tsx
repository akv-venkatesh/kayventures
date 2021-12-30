import Joinnow from '../JoinNow';
import {render, screen} from '@testing-library/react';
import { testStore } from "./testStore"
let wrapper: any;
const setup = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = render(<Joinnow  />);
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
