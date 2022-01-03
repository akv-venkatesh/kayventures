export const adminEditProfile = (payload:any) => ({
    type: 'ADMIN_EDIT_PROFILE',
    payload,
 });
 export const adminEditProfileSuccess = (payload:any) => ({
    type: 'ADMIN_EDIT_PROFILE_SUCCESS',
    payload,
 });
 export const adminEditProfileailed = (payload:any) => ({
   type: 'ADMIN_EDIT_PROFILE_FAILED',
   payload,
});