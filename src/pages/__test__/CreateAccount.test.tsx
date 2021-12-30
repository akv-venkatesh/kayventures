import CreateAccount from '../CreateAccount';
import {render, screen,fireEvent} from '@testing-library/react';
import { testStore } from "./testStore"
import { MemoryRouter as Router } from 'react-router-dom';
let wrapper: any;
const setup = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = render(<Router><CreateAccount /></Router>);
    return wrapper;
}
beforeEach(() => {
    wrapper = setup({});
});

test('initial test by role',()=>{
const headingElement = screen.getByRole('heading', {name : 'KAY VENTURES'});
const CreateAccounttitle =screen.getByRole('heading',{name:'Create Account'})
const nextbutton =screen.getByRole('button',{name:'Next'})

expect(headingElement).toBeInTheDocument;
expect(CreateAccounttitle).toBeInTheDocument;
expect(nextbutton).toBeInTheDocument;

const handleClick = jest.fn()
fireEvent.click(screen.getByText(/Next/i))
expect(handleClick).toHaveAccessibleName
fireEvent.click(screen.getByText(/Next/i))
  
})
