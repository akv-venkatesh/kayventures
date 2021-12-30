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
  ProConfig,
  Types,
  Home,
  Settings,
  ProConfigCapacity,
  KYC,
  Productconfig,
  SelectPlan,
  Pro_config,
  Machinery,
  Machine,
  Manpower,
  Esg,
  Admin, Superadmin, AdmineditAccInfo, AdminChangePass, AdminRegister, AdminBussinessCategories
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
          <Route path='/productConfiguration' element={<Productconfig />} />
          <Route path='/SelectPlan' element={<SelectPlan />} />
          <Route path='/product-config' element={<Pro_config />} />
          <Route path='/machinery' element={<Machinery />} />
          <Route path='/machine' element={<Machine />} />
          <Route path='/manpower' element={<Manpower />} />
          <Route path='/esg' element={<Esg />} />
          <Route path='/settings' element={<Settings />} >
            <Route path="kyc" element={<KYC />} />
            <Route path="proconfig" element={<ProConfig />} />
            <Route path="Capacity" element={<ProConfigCapacity />} />
            <Route path="productconfiguration" element={<Productconfig />} />
          </Route>


          <Route path='/admin' element={<Admin />} />
          <Route path='/admin-register' element={<AdminRegister />} />
          <Route path='/admin-bizcategories' element={<AdminBussinessCategories />} />
          <Route path='/admin/change-pass' element={<AdminChangePass />} />
          <Route path='/admin/edit-acc-info' element={<AdmineditAccInfo />} />


          <Route path='/superadmin' element={<Superadmin />} />

        </Routes>
      </div>
    );
  }
};
export default Routers;
