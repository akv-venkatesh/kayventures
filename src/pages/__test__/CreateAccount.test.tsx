import CreateAccount from '../CreateAccount';
import {render, screen} from '@testing-library/react';
import { testStore } from "./testStore"
let wrapper: any;
const setup = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = render(<CreateAccount  />);
    return wrapper;
}
beforeEach(() => {
    wrapper = setup({});
});

test('initial test by role',()=>{
const headingElement = screen.getByRole('heading', {name : 'KAY VENTURES'});
const CreateAccounttitle =screen.getByRole('heading',{name:'Create Account'})
const nextbutton =screen.getByRole('button',{name:'Next'})
// const loginbutton =screen.getByRole('button',{name:'Log in'})


expect(headingElement).toBeInTheDocument;
expect(CreateAccounttitle).toBeInTheDocument;
// expect(loginbutton).toBeInTheDocument;
expect(nextbutton).toBeInTheDocument;
  
})
