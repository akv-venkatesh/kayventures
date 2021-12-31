export const adminlogin = (payload:any) => ({
    type: 'ADMIN_LOGIN',
    payload,
 });
 export const adminLoginSuccess = (payload:any) => ({
    type: 'ADMIN_LOGIN_SUCCESS',
    payload,
 });
 export const adminLoginFailed = (payload:any) => ({
   type: 'ADMIN_LOGIN_FAILED',
   payload,
});