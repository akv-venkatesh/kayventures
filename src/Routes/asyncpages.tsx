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
    export const Sections = React.lazy(() => import('../pages/settings/kyc/Section/Section'));

// Settings files flow new

    export const Settings = React.lazy(() => import('../pages/settings'));
    //organization
        //kyc
            export const OrgKYC = React.lazy(() => import('../pages/settings/kyc/Organization/kyc'));
        //product-select
            export const Productselect = React.lazy(() => import('../pages/settings/kyc/Organization/product-select'));
        //machinery
            export const Machinery = React.lazy(() => import('../pages/settings/kyc/Organization/machinery/MachineryInitialPage'));
        //operation
            export const Operation = React.lazy(() => import('../pages/settings/kyc/Organization/operations/operation'));

    // Facility
        //add faclity
            export const AddFacility = React.lazy(() => import('../pages/settings/kyc/facility/addFacility'));
        // facility info            
            export const FacilityInfo = React.lazy(() => import('../pages/settings/kyc/facility/facilityinfo'));
        // facility product selection
            export const FacilityProductSelection = React.lazy(() => import('../pages/settings/kyc/facility/productSelection/index'));
        // capacity
            export const Capacity = React.lazy(() => import('../pages/settings/kyc/facility/capacity'));



// Dashboard files

export const DashboardIndex = React.lazy(() => import('../pages/dashboard'));
    export const Dashboard = React.lazy(() => import('../pages/dashboard/dashboard'));
        export const Profile = React.lazy(() => import('../pages/dashboard/profile'));