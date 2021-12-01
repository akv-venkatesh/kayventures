import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BuyerLogin.css";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";



class BuyerLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
    };
  }


togglePassword = () => {
  this.setState({
         showPassword: !this.state.showPassword
        })
}

  render() {
    return (
      <div>
        <div className="">
          <div className="row manu-container">
            <div className="col-sm-4 header-section">
              <h3 className="login-title">KAY VENTURES</h3>
              <p className="login-discription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="col-sm-8 bg-sec d-flex align-items-center">
              <div className="login-card">
                <h3 className="login-card-title">Log In</h3>

                
                <div className="input-with-icon">
                  <input type="email" className="login-input" id="" placeholder='Email'/>
                  <FaEnvelope className="input-icon" />
                </div>
                <div className="input-with-icon">
                  <input
                    type={this.state.showPassword ? "text" : "password"}
                    className="login-input"
                    id=""
                    placeholder='Set Password'
                  />
                  <RiLockPasswordFill className="input-icon" />
                          {this.state.showPassword ? <FaEye className="showpassword" onClick={this.togglePassword}/> : <FaEyeSlash className="showpassword"  onClick={this.togglePassword}/> }
                </div>
                <div class="form-check">
                  <input class="main" id="remember" type="checkbox" style={{ display: "none"}}/>
                    <label class="inside-label" for="remember">
                        <span> </span>
                        <span>Remember Me</span>
                    </label>
                    <label class="inside-label">
                        <span> </span>
                        <span><Link to=""><div className='manu-button-msg-link'>Forgot Password?</div></Link></span>
                    </label>
                </div>
                <div className="login-buttons">
                  <span><span></span></span>
                  <Link to="/buyerbusinesscategory"><span className="signin-button"><span>Log In</span></span></Link>
                  {/* <button className="signin-button">Sign Up</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BuyerLogin;
