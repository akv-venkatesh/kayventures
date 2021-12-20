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
  ProductConfiguration,
  ProductGroups,
  SelectPlan
} from "./asyncpages";

import CustomSelect from "../component/custom_select";

class Routers extends React.Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <CustomSelect />
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
          <Route path='/productconfiguration' element={<ProductConfiguration />} />
          <Route path='/productGroups' element={<ProductGroups />} />
          <Route path='/SelectPlan' element={<SelectPlan />} />
          <Route path='/settings' element={<Settings />} >
            <Route path="kyc" element={<KYC />} />
            <Route path="proconfig" element={<ProConfig />} />
            <Route path="Capacity" element={<ProConfigCapacity />} />
          </Route>
        </Routes>
      </div>
    );
  }
};
export default Routers;
