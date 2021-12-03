import React from "react";
import { Route } from "react-router-dom";
import {
  JoinNow,
  CreateAccount,
  ManufacturerLogin,
 Category,
  ManufacturerPrimaryDetails,
  ManufacturerVerifiedEmail,
  ManufacturerTypes,ManufacturerHome,ManufacturerKYCBusinessHr
} from "./asyncpages";
import { BuyerLogin,BuyerTypes,BuyerPrimaryDetails,BuyerVerifiedEmail,BuyerHome } from "./asyncpages";

const Routes = (props) => {
  return (
    <div className="App">
      <Route exact path="/" component={JoinNow} />
      <Route
        path="/createaccount"
        component={CreateAccount}
      />
      <Route
        path="/manufacturerlogin"
        component={ManufacturerLogin}
      />
      <Route
        path="/category"
        component={Category}
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


    
      <Route
        path="/buyerlogin"
        component={BuyerLogin}
      />
      
   

      
      <Route path="/buyertypes" component={BuyerTypes} />
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
      <Route exact path='/manufacturer-settings' component={ ManufacturerKYCBusinessHr } />
    </div>
  );
};
export default Routes;
