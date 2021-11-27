import loadable from '@loadable/component'

export const ManufacturerJoinNow = loadable(() => import('../pages/Manufacturer/ManufacturerJoinNow'));
export const ManufacturerCreateAccount = loadable(() => import('../pages/Manufacturer/ManufacturerCreateAccount'));
export const ManufacturerBusinessCategory = loadable(() => import('../pages/Manufacturer/ManufacturerBusinessCategory'));
export const ManufacturerTypes = loadable(() => import('../pages/Manufacturer/ManufacturerTypes'));
export const ManufacturerPrimaryDetails = loadable(() => import('../pages/Manufacturer/ManufacturerPrimaryDetails'));
export const ManufacturerVerifiedEmail = loadable(() => import('../pages/Manufacturer/ManufacturerVerifiedEmail'));




export const BuyerJoinNow = loadable(() => import('../pages//Buyer/BuyerJoinNow'));
export const BuyerCreateAccount = loadable(() => import('../pages/Buyer/BuyerCreateAccount'));
export const BuyerBusinessCategory = loadable(() => import('../pages/Buyer/BuyerBusinessCategory'));
export const BuyerPrimaryDetails = loadable(() => import('../pages/Buyer/BuyerPrimaryDetails'));
// export const ManufacturerPrimaryDetails = loadable(() => import('../pages/Manufacturer/ManufacturerPrimaryDetails'));
export const BuyerVerifiedEmail = loadable(() => import('../pages/Buyer/BuyerVerifiedEmail'));


