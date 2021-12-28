import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
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
import {Formik , Field } from 'formik'
import { Button } from "react-bootstrap";

interface MyFormValues {
  name?: string,
  email?: string,
  phone?: string,

}

interface typeprops{

}

interface typestates{
  showPassword: boolean,
  submitted: boolean,
}

class CreateAccount extends Component<typeprops, typestates > {
  constructor(props:any){
    super(props);
    this.state = {
      showPassword: false,
      submitted: false,
    }
  }


  togglePassword = () => {
    this.setState({
     showPassword: !this.state.showPassword
    })
  }

  render():JSX.Element {
    if(this.state.submitted){
      return <Navigate to="/category"/>
    }
    const initialValues: MyFormValues = {
      name:'',
      email:'',
      phone:'',
     
    };

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
              <Formik initialValues={initialValues}
            validate={values => {
              let errors = {};
              if (!values.email) {
                errors = { ...errors, email: 'Enter Email Id' };
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors = { ...errors, email: 'Invalid Email Id' };
              }
              if (!values.name) {
                errors = { ...errors, name: 'Enter Name' };
              }
            
              if (!values.phone) {
                errors = { ...errors, phone: 'Enter Phone No' };
              }
              // if (!values.urlLink) {
              //   errors = { ...errors, urlLink: 'Enter URL link' };
              // }
              return errors;
            }}
            onSubmit={(values,actions) => {
              // handleShow();
              this.setState({
                submitted: true
              });
              actions.setSubmitting(false);
            }}>
            {({ values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting, }) => (
            <form onSubmit={handleSubmit}>
                <h3 className="register-card-title">Create Account</h3>

                <div className="input-with-icon">
                  <input type="text" className="register-input" id=""  placeholder='Name'  name='name'   onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name} />
                  <IoPersonCircleOutline className="input-icon" style={{fontSize: "20px"}}/>
                  <div className="validation-error">{errors.name && touched.name && errors.name}</div>
                </div>
                <div className="input-with-icon">
                  <input  type="email" className="register-input" id="" placeholder='Email'  name='email'   onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          />
                  <FaEnvelope className="input-icon" />
                  <div className="validation-error">
                    {errors.email && touched.email && errors.email}
                  </div>
                </div>
                <div className="input-with-icon">
                  <input type="text" className="register-input" id="" placeholder='Phone no.'  name='phone'   onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}/>
                  <FaPhoneAlt className="input-icon" />
                  <div className="validation-error">{errors.phone && touched.phone && errors.phone}</div>
                </div>
                <div className="form-check pt-3 remember">
                  {/* <Field type="checkbox" name="rememberme" value="1" className="form-check-input" id="rememberme"/>
							    <label className="form-check-label" htmlFor="rememberme">Remember Me</label> */}
                </div>
                <div className="register-buttons">
                  <span className="login-button"><span>Log In</span></span>
                  <Button className="signin-button-parent" type="submit">
                    <span className="signin-button"><span>Next</span></span>
                  </Button>
                  {/* <button className="signin-button">Sign Up</button> */}
                </div>
                </form>
                )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAccount;
