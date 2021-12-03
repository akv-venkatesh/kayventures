import loadable from '@loadable/component'

export const ManufacturerJoinNow = loadable(() => import('../pages/Manufacturer/ManufacturerJoinNow'));
export const ManufacturerCreateAccount = loadable(() => import('../pages/Manufacturer/ManufacturerCreateAccount'));

export const BusinessCategory = loadable(() => import('../pages/BusinessCategory'));
export const ManufacturerTypes = loadable(() => import('../pages/Manufacturer/ManufacturerTypes'));
export const ManufacturerPrimaryDetails = loadable(() => import('../pages/Manufacturer/ManufacturerPrimaryDetails'));
export const ManufacturerVerifiedEmail = loadable(() => import('../pages/Manufacturer/ManufacturerVerifiedEmail'));
export const ManufacturerLogin = loadable(() => import('../pages/Manufacturer/manufacturer_login'));
export const ManufacturerHome = loadable(() => import('../pages/Manufacturer/manufacturer_home'));


export const BuyerLogin = loadable(() => import('../pages/Buyer/buyer_login'));
export const BuyerHome = loadable(() => import('../pages/Buyer/buyer_home'));
export const BuyerJoinNow = loadable(() => import('../pages/Buyer/BuyerJoinNow'));
export const BuyerCreateAccount = loadable(() => import('../pages/Buyer/BuyerCreateAccount'));
export const BuyerBusinessCategory = loadable(() => import('../pages/Buyer/BuyerBusinessCategory'));
export const BuyerPrimaryDetails = loadable(() => import('../pages/Buyer/BuyerPrimaryDetails'));
export const BuyerTypes = loadable(() => import('../pages/Buyer/BuyerTypes'));
export const BuyerVerifiedEmail = loadable(() => import('../pages/Buyer/BuyerVerifiedEmail'));


export const ManufacturerKYCBusinessHr = loadable(() => import('../pages/Manufacturer/settings/index'));


