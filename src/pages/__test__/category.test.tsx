import Category from '../Category';
import { render, screen } from '@testing-library/react';
import { testStore } from "./testStore"

let wrapper: any;

const setup = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = render(<Category store={store} />);
    return wrapper;
}
beforeEach(() => {
    wrapper = setup({});
    
});
test('initial test by text', () => {
    console.log(wrapper);
const component = wrapper.getByTestId('test');

expect(component).toBeInTheDocument;
})