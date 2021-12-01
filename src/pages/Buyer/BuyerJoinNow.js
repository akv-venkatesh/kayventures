import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BuyerJoinNow.css";


function BuyerJoinNow() {
  return (
    <div class="">
      <div class="row buyer-container">
        <div class="col-sm-4 header-section">
          <h3 className="buyer-title">KAY VENTURES</h3>
          <p className="buyer-discription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link to="/buyercreateaccount"><div className="buyer-button"><span>Join Now</span></div></Link>
          <p className="buyer-button-msg">
            Already a member? Then&ensp;<Link to="/buyerlogin"><div className='buyer-button-msg-link'>Log In</div></Link>
          </p>
        </div>
        <div class="col-sm-8 bg-img-sec"></div>
      </div>
    </div>
  );
}

export default BuyerJoinNow;

