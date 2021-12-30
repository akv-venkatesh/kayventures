import Category from '../Category';
import { render, screen } from '@testing-library/react';
import { testStore } from "./testStore";
import { MemoryRouter as Router } from 'react-router-dom';

let wrapper: any;

const setup = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = render(<Router><Category store={store} /></Router>);
    return wrapper;
}
beforeEach(() => {
    wrapper = setup({});
    
});
test('initial test by text', () => {
    // console.log(wrapper);
const component = wrapper.getByTestId('test');

expect(component).toBeInTheDocument;
})