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
    export const Facilitykyc = React.lazy(() => import('../pages/settings/kyc/Facilitykyc'));
    export const Facility1 = React.lazy(() => import('../pages/settings/kyc/Facilitykyc/Facility1'));
    export const Facilityday = React.lazy(() => import('../pages/settings/kyc/Facilitykyc/Facilityday'));
    export const Facilitymodal = React.lazy(() => import('../pages/settings/kyc/Facilitykyc/Facilitymodal'));
    export const Facilityform = React.lazy(() => import('../pages/settings/kyc/Facilityinfo/Facilityform'));
    export const Facilityinfomodal = React.lazy(() => import('../pages/settings/kyc/Facilityinfo/Facilityinfomodal'));
    export const Sections = React.lazy(() => import('../pages/settings/kyc/Section/Section'));
    // export const Pro_config = React.lazy(() => import('../pages/settings/ProductConfiguration'));
    // export const Esg = React.lazy(() => import('../pages/settings/kyc/Esg/Esg'));

// Settings files flow new

    export const Settings = React.lazy(() => import('../pages/settings'));
    //organization
        //kyc
            export const OrgKYC = React.lazy(() => import('../pages/settings/kyc/Organization/kyc'));
        //product-select
            export const Productselect = React.lazy(() => import('../pages/settings/kyc/Organization/product-select/select_product'));
            // export const ProConfigCapacity = React.lazy(() => import('../pages/settings/ProductConfiguration/capacity'));
        //machinery
            export const Machinery = React.lazy(() => import('../pages/settings/kyc/Organization/machinery/MachineryInitialPage'));
        //operation
            export const Operation = React.lazy(() => import('../pages/settings/kyc/Organization/operations/operation'));





// Dashboard files

export const DashboardIndex = React.lazy(() => import('../pages/dashboard'));
    export const Dashboard = React.lazy(() => import('../pages/dashboard/dashboard'));
        export const Profile = React.lazy(() => import('../pages/dashboard/profile'));