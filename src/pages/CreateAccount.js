import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreateAccount.css";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";



class CreateAccount extends Component {
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
              <h3 className="manu-title">KAY VENTURES</h3>
              <p className="manu-discription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="col-sm-8 bg-img-sec d-flex align-items-center">
              <div className="register-card">
                <h3 className="register-card-title">Create Account</h3>

                <div className="input-with-icon">
                  <input type="text" className="register-input" id=""  placeholder='Name'/>
                  <IoPersonCircleOutline className="input-icon" style={{fontSize: "20px"}}/>
                </div>
                <div className="input-with-icon">
                  <input type="email" className="register-input" id="" placeholder='Email'/>
                  <FaEnvelope className="input-icon" />
                </div>
                <div className="input-with-icon">
                  <input type="text" className="register-input" id="" placeholder='Phone no.'/>
                  <FaPhoneAlt className="input-icon" />
                </div>
                <div className="input-with-icon">
                  <input
                    type={this.state.showPassword ? "text" : "password"}
                    className="register-input"
                    id=""
                    placeholder='Set Password'
                  />
                  <RiLockPasswordFill className="input-icon" />
                          {this.state.showPassword ? <FaEye className="showpassword" onClick={this.togglePassword}/> : <FaEyeSlash className="showpassword"  onClick={this.togglePassword}/> }
                </div>
                <div class="form-check ps-2 pt-3">
                  <input class="main" id="remember" type="checkbox" style={{ display: "none"}}/>
                    <label class="inside-label" for="remember">
                        <span> </span>
                        <span>Remember Me</span>
                    </label>
                </div>
                <div className="register-buttons">
                  <span className="login-button"><span>Log In</span></span>
                  <Link to="/category"><span className="signin-button"><span>Sign Up</span></span></Link>
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

export default CreateAccount;
