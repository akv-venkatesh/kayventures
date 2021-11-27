import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ManufacturerJoinNow.css";


function ManufacturerJoinNow() {
  return (
    <div class="">
      <div class="row manu-container">
        <div class="col-sm-4 header-section">
          <h3 className="manu-title">KAY VENTURES</h3>
          <p className="manu-discription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link to="/manufacturercreateaccount"><div className="manu-button"><span>Join Now</span></div></Link>
          <p className="manu-button-msg">
            Already a member? Then&ensp;<a className='manu-button-msg-link'>Log In</a>
          </p>
        </div>
        <div class="col-sm-8 bg-img-sec"></div>
      </div>
    </div>
  );
}

export default ManufacturerJoinNow;

