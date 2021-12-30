import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import './JoinNow.css';

interface typeState {

  submitSuccess: boolean,
}
class JoinNow extends Component<{}, typeState>{
  constructor(props: any) {
    super(props);
    this.state = {
      submitSuccess: false,
    }

  }
  redirect = () => {
    this.setState({
      submitSuccess: true,
    });
  };
  render() {
    if (this.state.submitSuccess === true) {
      return <Navigate to="/createaccount" />
    }
    return (
      <div className="">
        <div className="row manu-container">
          <div className="col-sm-4 header-section">
            <h3 className="manu-title">KAY VENTURES</h3>
            <p data-testid="para" className="manu-discription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <div title="joinnow" onClick={this.redirect} className="manu-button"><span>Join Now</span></div>
            <p className="manu-button-msg">
              Already a member? Then&ensp;<span className="manu-button-msg-link">Log In</span> </p>
          </div>
          <div className="col-sm-8 bg-img-sec"></div>
        </div>
      </div>
    );
  }
}
export default JoinNow;

<div >Log In</div>