import React, { FC } from "react";
import { Route } from "react-router-dom";
import { JoinNow,CreateAccount,Login,Category,PrimaryDetails, VerifiedEmail, VerifyEmailPending,ProConfig, Types, Home, KYCBusinessHr} from "./asyncpages";

class Routes extends React.Component {
  render():JSX.Element{
    return (
      <div className="App">
        <Route exact path="/" component={JoinNow} />
        <Route path="/createaccount" component={CreateAccount}/>
        <Route path="/category" component={Category}/>
        <Route path="/types" component={Types} />
        <Route path="/primarydetails" component={PrimaryDetails}/>
        <Route path="/verifiedemail" component={VerifiedEmail}/>
        <Route path="/verifyemailpending" component={VerifyEmailPending}/>
        <Route path="/proconfig" component={ProConfig}/>
        <Route exact path='/login' component={ Login } />
        <Route exact path='/home' component={ Home } />
        <Route exact path='/settings' component={ KYCBusinessHr } />
      </div>
    );
  }
};
export default Routes;
