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
export const Productconfig = React.lazy(() => import('../pages/settings/ProductConfiguration/configuration'));
export const SelectPlan = React.lazy(() => import('../pages/SelectPlan/SelectPlan'));
export const KYC = React.lazy(() => import('../pages/settings/kyc'));
export const Organization = React.lazy(() => import('../pages/settings/Organization'));
export const Organizationinfo = React.lazy(() => import('../pages/settings/Organization/Organizationinfo'));
export const OrganizationinfoModal = React.lazy(() => import('../pages/settings/Organization/OrganizationinfoModal'));

export const Settings = React.lazy(() => import('../pages/settings/index'));
export const Pro_config = React.lazy(() => import('../pages/settings/ProductConfiguration'));
export const Machinery = React.lazy(() => import('../pages/settings/Machinery/Machinery'));
export const Machine = React.lazy(() => import('../pages/settings/Machine/Machine'));
export const Manpower = React.lazy(() => import('../pages/settings/Manpower/Manpower'));
export const Esg = React.lazy(() => import('../pages/settings/Esg/Esg'));


export const Admin = React.lazy(() => import('../pages/Admin/index'));
export const AdminRegister = React.lazy(() => import('../pages/Admin/AdminRegister'));
export const AdminBussinessCategories = React.lazy(() => import('../pages/Admin/BussinessCategories'));
export const Superadmin = React.lazy(() => import('../pages/Admin/super-admin'));
export const AdmineditAccInfo = React.lazy(() => import('../pages/Admin/edit-accinfo'));
export const AdminChangePass = React.lazy(() => import('../pages/Admin/change-adminpass'));


