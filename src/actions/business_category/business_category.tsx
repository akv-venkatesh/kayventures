export const getBusinessCategory = (payload:any) =>({
    type: 'GET_BUSINESS_CATEGORY',
    payload,
});
export const setBusCategory = (payload:any) => ({
    type: 'SET_BUSINESS_CATEGORY',
    payload,
});
export const getBusinessCategorySuccess = (payload:any) => ({
    type: 'GET_BUSINESS_CATEGORY_SUCCESS',
    payload,
});


export const setTypes = (payload:any) => ({
    type: 'TYPES',
    payload,
    
});
// export const setTypesSuccess = (payload:any) => ({
//     type: 'SET_TYPES_SUCCESS',
//     payload,
// });

export const setPrimaryDetails = (payload:any) => ({
    type: 'SET_PRIMARY_DETAILS',
    payload,
});
export const setPrimaryDetailsSuccess = (payload:any) => ({
    type: 'SET_PRIMARY_DETAILS_SUCCESS',
    payload,
});
export const setPrimaryDetailsFailed = (payload:any) => ({
    type: 'SET_PRIMARY_DETAILS_FAILED',
    payload,
});


export const getPrimaryDesignation = (payload:any) => ({
    type: 'GET_PRIMARY_DESIGNATION',
    payload,
});
export const getPrimaryDesignationSuccess = (payload:any) => ({
    type: 'GET_PRIMARY_DESIGNATION_SUCCESS',
    payload,
});
export const getPrimaryDesignationFailed = (payload:any) => ({
    type: 'GET_PRIMARY_DESIGNATION_FAILED',
    payload,
});