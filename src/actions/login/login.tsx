export const login = (payload:any) => ({
   type: 'LOGIN',
   payload,
});
export const loginSuccess = (payload:any) => ({
   type: 'LOGIN_SUCCESS',
   payload,
});
export const loginFailed = (payload:any) => ({
   type: 'LOGIN_FAILED',
   payload,
});