import Category from '../Category';
import { getByRole, render, screen,fireEvent } from '@testing-library/react';
import { testStore } from "./testStore";
import { MemoryRouter as Router } from 'react-router-dom';
import store from '../../store/store';
import { Provider } from 'react-redux';

const wrapper = render( <Router>
                            <Provider store={store}>
                                <Category  />
                            </Provider>
                        </Router>
                        );
test('initial test category', async () => {
    const category1 = await wrapper.findByTestId('test1');
    const category2 = await wrapper.findByTestId('test2');
    
    const enableNextButton = screen.getByTestId('enableNextButton')
    expect(enableNextButton).toHaveAttribute('disabled');
    
    fireEvent.click(category1);
    expect(category1).toBeChecked();
    expect(category2).not.toBeChecked();

    expect(enableNextButton).not.toHaveAttribute('disabled');

})