import { Dispatch } from 'redux';

export const setBusinessCategory = (category:string)=> (dispatch: Dispatch) => {
    dispatch({
        type: 'SET_BUSINESS_CATEGORY',
        payload: category
    });
};