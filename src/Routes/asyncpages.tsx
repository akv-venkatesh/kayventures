// import loadable from '@loadable/component'
import React from 'react';

export const JoinNow = React.lazy(() => import('../pages/JoinNow'));

export const CreateAccount = React.lazy(() => import('../pages/CreateAccount'));
export const Category = React.lazy(() => import('../pages/Category'));

export const Types = React.lazy(() => import('../pages/ManufacturerTypes'));
export const PrimaryDetails = React.lazy(() => import('../pages/PrimaryDetails'));
export const VerifiedEmail = React.lazy(() => import('../pages/VerifiedEmail'));
export const Login = React.lazy(() => import('../pages/login'));
export const Home = React.lazy(() => import('../pages/home'));

export const KYCBusinessHr = React.lazy(() => import('../pages/settings/index'));



