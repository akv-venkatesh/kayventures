import React from "react";
import { Route } from "react-router-dom";
import {
  ManufacturerJoinNow,
  ManufacturerCreateAccount,
  ManufacturerBusinessCategory,
  ManufacturerPrimaryDetails,
  ManufacturerVerifiedEmail,
  ManufacturerTypes,
  ManufacturerHome,
  ManufacturerLogin,
  BuyerLogin,
  BuyerHome
} from "./asyncpages";
import { BuyerJoinNow ,BuyerCreateAccount,BuyerBusinessCategory,BuyerPrimaryDetails,BuyerVerifiedEmail } from "./asyncpages";

const Routes = (props) => {
  return (
    <div className="App">
      <Route exact path="/" component={ManufacturerJoinNow} />
      <Route
        path="/manufacturercreateaccount"
        component={ManufacturerCreateAccount}
      />
      <Route
        path="/manufacturerbusinesscategory"
        component={ManufacturerBusinessCategory}
      />
      <Route path="/manufacturertypes" component={ManufacturerTypes} />
      <Route
        path="/manufacturerprimarydetails"
        component={ManufacturerPrimaryDetails}
      />
      <Route
        path="/manufacturerverifiedemail"
        component={ManufacturerVerifiedEmail}
      />

      {/* <Route exact path="//" component={BuyerJoinNow} /> */}

    <Route
        path="/buyercreateaccount"
        component={BuyerCreateAccount}
      />
      
      <Route
        path="/buyerbusinesscategory"
        component={BuyerBusinessCategory}
      />

      {/*
      <Route path="/manufacturertypes" component={ManufacturerTypes} />*/}
      <Route
        path="/buyerprimarydetails"
        component={BuyerPrimaryDetails}
      />
      <Route
        path="/buyerverifiedemail"
        component={BuyerVerifiedEmail}
      />
      <Route exact path='/manufacturer-login' component={ ManufacturerLogin } />
      <Route exact path='/manufacturer-home' component={ ManufacturerHome } />
      <Route exact path='/buyer-login' component={ BuyerLogin } />
      <Route exact path='/buyer-home' component={ BuyerHome } />
    </div>
  );
};
export default Routes;
