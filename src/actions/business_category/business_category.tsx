
export const getBusinessCategory = (payload:any) =>
 ({
    type: 'GET_BUSINESS_CATEGORY',
    payload,
});
export const setBusinessCategory = (payload:any) => ({
    type: 'SET_BUSINESS_CATEGORY',
    payload,
});
export const getBusinessCategorySuccess = (payload:any) => ({
    type: 'GET_BUSINESS_CATEGORY_SUCCESS',
    payload,
});
export const setBusinessCategorySuccess = (payload:any) => ({
    type: 'SET_BUSINESS_CATEGORY_SUCCESS',
    payload,
});

export const postUserLogin = (payload:any) => ({
    type: 'POST_LOGIN',
    payload,
});
export const postUserLoginSuccess = (payload:any) => ({
    type: 'POST_LOGIN_SUCCESS',
    payload,
});