import React from "react";
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
  Productselect,
  Machinery,
  Settings,
  Dashboard,
  DashboardIndex,
  OrgKYC,
  Operation, Profile,
  Sections,
  AddFacility,
  FacilityInfo,
  FacilityProductSelection,
  Capacity,
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

          <Route path="dashboard" element={<DashboardIndex/>}>
            <Route index element={<Dashboard/>} />
            <Route path="profile" element={<Profile/>}/>
          </Route>

          <Route path='/settings' element={<Settings />} >

            <Route path="kyc">

              <Route path="organization">
                <Route index element={<OrgKYC />} />
                <Route path="product-selection" element={<Productselect/>} />
                <Route path="machinery" element={<Machinery/>} />
                <Route path="operation" element={<Operation />} />
              </Route>

              <Route path="facility">
                <Route path ="addfacility" element={<AddFacility/>}/>
                <Route path ="facilityinfo" element={<FacilityInfo/>}/>
                <Route path ="product-selection" element={<FacilityProductSelection/>} />
                <Route path="capacity" element={<Capacity />} />
                <Route path='sections' element={<Sections />} />
              </Route>

            </Route>
          </Route>

        </Routes>
      </div>
    );
  }
};
export default Routers;
