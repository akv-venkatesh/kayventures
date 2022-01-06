import Types from '../Types';

import { getByRole, render, screen, fireEvent } from '@testing-library/react';
import { testStore } from "./testStore";
import { MemoryRouter as Router } from 'react-router-dom';
import store from '../../store/store';
import { Provider } from 'react-redux';
import { type } from 'os';
const wrapper = render( <Router>
                            <Provider store={store}>
                                <Types />
                            </Provider>
                        </Router>
                    );
test('initial test types', () => {
    //    const type1 = wrapper.getByTestId('test1');
    const type1 = wrapper.getByTestId('test3');
    const type2 = wrapper.getByTestId('test4');
    const type3 = wrapper.getByTestId('test5');
    const nextbutton = wrapper.getByTestId('nextbutton');
    const backbutton = wrapper.getByTestId('backbutton');

    expect(type1).toBeInTheDocument
    expect(type2).toBeInTheDocument
    expect(type3).toBeInTheDocument
    expect(nextbutton).toBeInTheDocument
    expect(backbutton).toBeInTheDocument

    fireEvent.click(type1)
    expect(type1).toBeChecked()
    expect(type2).not.toBeChecked()
    expect(type3).not.toBeChecked()


    fireEvent.click(type2)
    expect(type1).toBeChecked()
    expect(type2).toBeChecked()
    expect(type3).not.toBeChecked()


    fireEvent.click(type3)
    expect(type1).toBeChecked()
    expect(type2).toBeChecked()
    expect(type3).toBeChecked()







})