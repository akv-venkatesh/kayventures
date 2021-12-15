import React, { FC } from "react";
import { Route } from "react-router-dom";
import { JoinNow,CreateAccount,Login,Category,PrimaryDetails,VerifiedEmail,Types,Home,KYCBusinessHr} from "./asyncpages";

const Routes:FC = ():JSX.Element => {
  return (
    <div className="App">
      <Route exact path="/" component={JoinNow} />
      <Route path="/createaccount" component={CreateAccount}/>
      <Route path="/category" component={Category}/>
      <Route path="/types" component={Types} />
      <Route path="/primarydetails" component={PrimaryDetails}/>
      <Route path="/verifiedemail" component={VerifiedEmail}/>
      <Route exact path='/login' component={ Login } />
      <Route exact path='/home' component={ Home } />
      <Route exact path='/settings' component={ KYCBusinessHr } />
    </div>
  );
};
export default Routes;
