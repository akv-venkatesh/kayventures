export const register = (payload:any) => ({
   type: 'REGISTER',
   payload,
});
export const registerSuccess = (payload:any) => ({
   type: 'REGISTER_SUCCESS',
   payload,
});