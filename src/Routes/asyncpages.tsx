import React from 'react';

export const JoinNow = React.lazy(() => import('../pages/JoinNow'));

export const CreateAccount = React.lazy(() => import('../pages/CreateAccount'));
export const Category = React.lazy(() => import('../pages/Category'));

export const Types = React.lazy(() => import('../pages/ManufacturerTypes'));
export const PrimaryDetails = React.lazy(() => import('../pages/PrimaryDetails'));
export const VerifiedEmail = React.lazy(() => import('../pages/VerifiedEmail'));
export const VerifyEmailPending = React.lazy(() => import('../pages/VerifyEmailPending'));
export const ProConfig = React.lazy(() => import('../pages/product_config'));
export const ProConfigCapacity = React.lazy(() => import('../pages/settings/ProductConfiguration/capacity'));

export const Login = React.lazy(() => import('../pages/login'));
export const Home = React.lazy(() => import('../pages/home'));

export const KYCBusinessHr = React.lazy(() => import('../pages/settings/index'));
export const ProductConfiguration = React.lazy(() => import('../pages/ProductConfiguration/ProductConfiguration'));
export const ProductGroups = React.lazy(() => import('../pages/ProductGroups/ProductGroups'));
export const SelectPlan = React.lazy(() => import('../pages/SelectPlan/SelectPlan'));
export const KYC = React.lazy(() => import('../pages/settings/kyc'));

export const Settings = React.lazy(() => import('../pages/settings/index'));



