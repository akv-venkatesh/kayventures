import React from 'react';

// Pages
export const JoinNow = React.lazy(() => import('../pages/JoinNow'))
export const CreateAccount = React.lazy(() => import('../pages/CreateAccount'));
export const Category = React.lazy(() => import('../pages/Category'));
export const Types = React.lazy(() => import('../pages/Types'));
export const PrimaryDetails = React.lazy(() => import('../pages/PrimaryDetails'));
export const VerifiedEmail = React.lazy(() => import('../pages/VerifiedEmail'));
export const VerifyEmailPending = React.lazy(() => import('../pages/VerifyEmailPending'));
export const Login = React.lazy(() => import('../pages/login'));

    // Home
        export const Home = React.lazy(() => import('../pages/home'));

    // Setting files --flow old

        // export const KYCBusinessHr = React.lazy(() => import('../pages/settings'));
        export const ProConfigCapacity = React.lazy(() => import('../pages/settings/ProductConfiguration/capacity'));
        export const Productconfig = React.lazy(() => import('../pages/settings/ProductConfiguration/configuration'));
        export const KYC = React.lazy(() => import('../pages/settings/kyc_old'));
        export const Organization = React.lazy(() => import('../pages/settings/kyc/Organization'));
        export const Organizationinfo = React.lazy(() => import('../pages/settings/kyc/Organization/Organizationinfo'));
        export const OrganizationinfoModal = React.lazy(() => import('../pages/settings/kyc/Organization/OrganizationinfoModal'));
        export const OrganizationinfoModal1 = React.lazy(() => import('../pages/settings/kyc/Organization/OrganizationinfoModal1'));
        export const OrganizationinfoModalSyn = React.lazy(() => import('../pages/settings/kyc/Organization/OrganizationinfoModalSyn'));
        export const Facilitykyc = React.lazy(() => import('../pages/settings/kyc/Facilitykyc'));
        export const Facility1 = React.lazy(() => import('../pages/settings/kyc/Facilitykyc/Facility1'));
        export const Facilityday = React.lazy(() => import('../pages/settings/kyc/Facilitykyc/Facilityday'));
        export const Facilitymodal = React.lazy(() => import('../pages/settings/kyc/Facilitykyc/Facilitymodal'));
        export const Facilityform = React.lazy(() => import('../pages/settings/kyc/Facilityinfo/Facilityform'));
        export const Facilityinfomodal = React.lazy(() => import('../pages/settings/kyc/Facilityinfo/Facilityinfomodal'));
        // export const Settings = React.lazy(() => import('../pages/settings/index'));
        export const Pro_config = React.lazy(() => import('../pages/settings/ProductConfiguration'));
        export const Machinery = React.lazy(() => import('../pages/settings/kyc/Machinery/Machinery'));
        export const Machinery1 = React.lazy(() => import('../pages/settings/kyc/Machinery/machinery1'));
        export const Operation = React.lazy(() => import('../pages/settings/kyc/Operations/operation'));

        export const Machine = React.lazy(() => import('../pages/settings/kyc/Machine/Machine'));
        export const Manpower = React.lazy(() => import('../pages/settings/kyc/Manpower/Manpower'));
        export const Esg = React.lazy(() => import('../pages/settings/kyc/Esg/Esg'));

    // Settings files flow new

        export const Settings = React.lazy(() => import('../pages/settings'));


    // Dashboard files

        export const DashboardIndex = React.lazy(() => import('../pages/dashboard'));
        export const Dashboard = React.lazy(() => import('../pages/dashboard/dashboard'));
        export const Profile = React.lazy(() => import('../pages/dashboard/profile'));




// pending to make flow
    export const ProConfig = React.lazy(() => import('../pages/product_config'));