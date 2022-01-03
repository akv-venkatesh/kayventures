export const adminPasswordchange = (payload:any) => ({
    type: 'ADMIN_PASSWORD_CHANGE',
    payload,
 });
 export const adminPasswordchangeSuccess = (payload:any) => ({
    type: 'ADMIN_PASSWORD_CHANGE_SUCCESS',
    payload,
 });
 export const adminPasswordchangeFailed = (payload:any) => ({
   type: 'ADMIN_PASSWORD_CHANGE_FAILED',
   payload,
});