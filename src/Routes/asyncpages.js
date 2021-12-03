import loadable from '@loadable/component'

export const JoinNow = loadable(() => import('../pages/JoinNow'));
export const CreateAccount = loadable(() => import('../pages/CreateAccount'));
export const Category = loadable(() => import('../pages/Category'));

export const ManufacturerTypes = loadable(() => import('../pages/Manufacturer/ManufacturerTypes'));
export const ManufacturerPrimaryDetails = loadable(() => import('../pages/Manufacturer/ManufacturerPrimaryDetails'));
export const ManufacturerVerifiedEmail = loadable(() => import('../pages/Manufacturer/ManufacturerVerifiedEmail'));
export const ManufacturerLogin = loadable(() => import('../pages/Manufacturer/manufacturer_login'));
export const ManufacturerHome = loadable(() => import('../pages/Manufacturer/manufacturer_home'));


export const BuyerLogin = loadable(() => import('../pages/Buyer/buyer_login'));
export const BuyerHome = loadable(() => import('../pages/Buyer/buyer_home'));
export const BuyerPrimaryDetails = loadable(() => import('../pages/Buyer/BuyerPrimaryDetails'));
export const BuyerTypes = loadable(() => import('../pages/Buyer/BuyerTypes'));
export const BuyerVerifiedEmail = loadable(() => import('../pages/Buyer/BuyerVerifiedEmail'));


export const ManufacturerKYCBusinessHr = loadable(() => import('../pages/Manufacturer/settings/index'));


