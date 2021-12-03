export const setBusinessCategory = (category)=> dispatch => {
    dispatch({
        type: 'SET_BUSINESS_CATEGORY',
        payload: category
    });
};