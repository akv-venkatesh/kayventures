import Category from '../Category';
import * as ReactDom  from 'react-dom';
import {render, screen} from '@testing-library/react';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../../reducers';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';

const testStore = (initialState:any) => {
    const sagaMiddleware = createSagaMiddleware();
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
      );
};



export const findByTestAtrr = (component:any, attr:any) => {
    console.log(component);
    const wrapper = component.getByTestId('test');
    return wrapper;
};



const setup = (initialState={})=>{
    const store = testStore(initialState);
    const wrapper = render(<Category store={store}/>);
    return wrapper; 
}



beforeEach(() => {
    wrapper = setup({});
});



let wrapper:any;
test('initial test by text',()=>{
    const component = findByTestAtrr(wrapper, 'test');
    expect(component).toBeInTheDocument;
})