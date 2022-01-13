import React, { FC } from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { createMemoryHistory } from "history";
import {
  JoinNow,
  CreateAccount,
  Login,
  Category,
  PrimaryDetails,
  VerifiedEmail,
  VerifyEmailPending,
  ProConfig,
  Types,
  Home,
  ProConfigCapacity,
  KYC, Organization, Organizationinfo, OrganizationinfoModal, OrganizationinfoModalSyn, Facilitykyc,
  Facility1, Facilityday, Facilitymodal, Productconfig, Facilityform, Facilityinfomodal,
  Pro_config,
  // Machinery,
  Esg,
  Settings,
  Dashboard,
  DashboardIndex,
  MachineryInitialPage,
  Operation,
  Profile,

} from "./asyncpages";
const history = createMemoryHistory();
class Routers extends React.Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<JoinNow />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/category" element={<Category />} />
          <Route path="/types" element={<Types />} />
          <Route path="/primarydetails" element={<PrimaryDetails />} />
          <Route path="/verifiedemail" element={<VerifiedEmail />} />
          <Route path="/verifyemailpending" element={<VerifyEmailPending />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/productConfiguration' element={<Productconfig />} />
          <Route path='/product-config' element={<Pro_config />} />

          <Route path='/settings' element={<Settings />} >
            <Route path="kyc" element={<KYC />} />
            <Route path="proconfig" element={<ProConfig />} />
            <Route path="Capacity" element={<ProConfigCapacity />} />
            <Route path="productconfiguration" element={<Productconfig />} />
            <Route path="Organization" element={<Organization />} />
            <Route path="Organizationinfo" element={<Organizationinfo />} />
            <Route path="OrganizationinfoModal" element={<OrganizationinfoModal />} />
            <Route path="OrganizationinfoModalSyn" element={<OrganizationinfoModalSyn />} />
            <Route path="Facilitykyc" element={<Facilitykyc />} />
            <Route path="Facility1" element={<Facility1 />} />
            <Route path="Facilityday" element={<Facilityday />} />
            <Route path="Facilitymodal" element={<Facilitymodal />} />
            <Route path="Facilityform" element={<Facilityform />} />
            <Route path="Facilityinfomodal" element={<Facilityinfomodal />} />

            {/* <Route path="machinery" element={<Machinery />} /> */}
            <Route path="machinery" element={<MachineryInitialPage />} />

            <Route path="esg" element={<Esg />} />
            <Route path="operation" element={<Operation />} />
          </Route>

          <Route path="dashboard" element={<DashboardIndex />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    );
  }
};
export default Routers;
