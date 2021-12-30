import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../../reducers';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';

export  const testStore = (initialState:any) => {
    const sagaMiddleware = createSagaMiddleware();
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
      );
};

// export const findByTestAtrr = (component:any, attr:any) => {
//     // console.log(component);
//     const wrapper = component.getByTestId(attr);
//     return wrapper;
// };