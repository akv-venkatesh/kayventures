import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import {
  JoinNow,
  CreateAccount,
  Login,
  Category,
  PrimaryDetails,
  VerifiedEmail,
  VerifyEmailPending,
  Types,
  Home,
  Productselect, Facilitykyc,
  Facility1, Facilityday, Facilitymodal, Facilityform, Facilityinfomodal,
  Machinery,
  Settings,
  Dashboard,
  DashboardIndex,
  OrgKYC,
  Operation, Profile,

} from "./asyncpages";

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

          <Route path='/settings' element={<Settings />} >
            {/* <Route path="proconfig" element={<ProConfig />} /> */}
            {/* <Route path="Capacity" element={<ProConfigCapacity />} /> */}
            {/* <Route path="productconfiguration" element={<Productconfig />} /> */}
            {/* <Route path="Organizationinfo" element={<Organizationinfo />} /> */}
            {/* <Route path="OrganizationinfoModal" element={<OrganizationinfoModal />} /> */}
            {/* <Route path="OrganizationinfoModal1" element={<OrganizationinfoModal1 />} /> */}
            {/* <Route path="OrganizationinfoModalSyn" element={<OrganizationinfoModalSyn />} /> */}
            {/* <Route path="Facilitykyc" element={<Facilitykyc />} /> */}
            {/* <Route path="Facility1" element={<Facility1 />} /> */}
            {/* <Route path="Facilityday" element={<Facilityday />} /> */}
            {/* <Route path="Facilitymodal" element={<Facilitymodal />} /> */}
            {/* <Route path="Facilityform" element={<Facilityform />} /> */}
            {/* <Route path="Facilityinfomodal" element={<Facilityinfomodal />} /> */}
            {/* <Route path="machinery" element={<Machinery />} /> */}
            {/* <Route path="esg" element={<Esg />} /> */}
            {/* <Route path="operation" element={<Operation />} /> */}

            <Route path="dashboard" element={<DashboardIndex/>}>
              <Route index element={<Dashboard/>} />
              <Route path="profile" element={<Profile/>}/>
            </Route>

            <Route path="kyc">
              <Route path="organization">
                <Route index element={<OrgKYC />} />
                <Route path="product-selection" element={<Productselect/>} />
                <Route path="machinery" element={<Machinery/>} />
                {/* <Route path="operation" element={<Operation />} /> */}
              </Route>
              <Route path="facility">
                {/* <Route index element={<Facilitykyc />} />
                <Route path="operation" element={<Operation />} />
                <Route path="product-selection" element={<Productconfig/>} />
                <Route path="capacity" element={<ProConfigCapacity />} />
                <Route path="section" element={<Facilityform />} /> */}
              </Route>
            </Route>
          </Route>

        </Routes>
      </div>
    );
  }
};
export default Routers;
