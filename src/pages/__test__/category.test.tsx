import Category from '../Category';
import { getByRole, render, screen,fireEvent } from '@testing-library/react';
import { testStore } from "./testStore";
import { MemoryRouter as Router } from 'react-router-dom';
// import store from '../../store/store';
import { Provider } from 'react-redux';
let wrapper: any;

const setup = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = render(<Router>
         <Provider store={store}>
        <Category  />
        </Provider>
        </Router>);
    return wrapper;
}
beforeEach(() => {
    wrapper = setup({});
    
});
test('initial test category', () => {

const category1 = wrapper.getByTestId('test1');
const category2 = wrapper.getByTestId('test2');


fireEvent.click(category1)
expect(category1).toBeChecked()
expect(category2).not.toBeChecked()
fireEvent.click(category2)
expect(category1).not.toBeChecked()
expect(category2).toBeChecked()

expect(category2).toBeInTheDocument
})