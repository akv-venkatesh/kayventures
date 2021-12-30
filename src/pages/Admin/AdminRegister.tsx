import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminRegister.css";
import arrow_left from "../assets/icons/arrows/arrow-left.svg";
import {Modal,Button} from 'react-bootstrap';
import {Formik} from 'formik'
import { Component } from "react";
import { connect } from "react-redux";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiTwotoneEye } from "react-icons/ai";

import { register, registerSuccess } from "../../actions/admin/registration";

interface typeState{
  showModal: boolean
}
interface MyFormValues {
  email:string,
  phoneNumber:string,
  name:string,
  lastName?: string,
  middleName?: string,
  newPassword: string,
  conf_password?: string,
  isInvited: boolean,
}
interface typeProps {
  register: (arg:any) => void;
}

class AdminRegister extends Component<typeProps,typeState> {

  constructor(props:any){
    super(props);
    this.state = {
      showModal: false
    }
  }

  initialValues: MyFormValues = {
    email:'',
    phoneNumber: '',
    name:'',
    lastName: '',
    middleName: '',
    newPassword: '',
    conf_password: '',
    isInvited: true
  };

  render():JSX.Element{
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="adminreg_body">
          <Formik initialValues={this.initialValues}
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
                  errors = { ...errors, name: 'Enter firstName' };
                }
                if (!values.phoneNumber) {
                  errors = { ...errors, phoneNumber: 'Enter Phone No' };
                }
                if (!values.newPassword) {
                  errors = { ...errors, newPassword: 'Enter password' };
                }
                if (!values.conf_password) {
                  errors = { ...errors, conf_password: 'Enter password again' };
                }
                else if (values.conf_password !== values.newPassword) {
                  errors = { ...errors, conf_password: 'password mismatches' };
                }
                return errors;
              }}
              onSubmit={(values,actions) => {
                let arr  = values
                delete arr.middleName;
                delete arr.lastName;
                delete arr.conf_password;
                arr.phoneNumber = arr.phoneNumber.toString();
                this.props.register(arr)
                actions.setSubmitting(false);
              }}>
              {({ values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting, }) => (
                <form className="adminreg_container" onSubmit={handleSubmit}>
                  <div className="adminreg_head">
                    {/* <Link to="/types"><img src={arrow_left} style={{ cursor: "pointer" }} /></Link> */}
                    <h5>
                     Fill in the details and save to continue
                    </h5>
                  </div>
                  <div className="adminreg">

                      <div className="adminreg_details">
                        <label htmlFor="firstname">
                          <span className="required-mark">First Name</span>
                        </label>
                        <div className="input-field-container">
                          <input type="text" placeholder="Name" 
                          name="name"
                          id="firstname"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          />
                          <div className="validation-error">
                            {errors.name && touched.name && errors.name}
                          </div>
                        </div>
                      </div>
                      <div className="adminreg_details">
                        <label htmlFor="middleName"><span className="required-mark">Middle Name</span></label>
                        <div className="input-field-container">
                          <input type="text" placeholder="Name" 
                          name="middleName"
                          id="middleName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.middleName}
                          />
                        </div>
                      </div>
                      <div className="adminreg_details">
                        <label htmlFor="lastname"><span className="required-mark">Last Name </span></label>
                        <div className="input-field-container">
                          <input type="text" placeholder="Name" 
                          name="lastName"
                          id="lastname"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                          />
                        </div>
                      </div>
  
                      <div className="adminreg_details">
                        <label htmlFor="email"><span className="required-mark">Email Address</span></label>
                        <div className="input-field-container">
                          <input type="text" placeholder="company@xyz.com" 
                          name="email"
                          onChange={handleChange}
                          id="email"
                          onBlur={handleBlur}
                          value={values.email}/>
                          <div className="validation-error">
                            {errors.email && touched.email && errors.email}
                          </div>
                        </div>
                      </div>
                      <div className="adminreg_details">
                        <label htmlFor="phonenumber"> <span className="required-mark">Phone Number</span></label>
                        <div className="input-field-container">
                          <input type="number" placeholder="+91 XXXXXXXXXXX" 
                          name="phoneNumber"
                          id="phonenumber"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phoneNumber}
                          />
                          <div className="validation-error">
                            {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                          </div>
                        </div>
                      </div>
                      <div className="adminreg_details">
                        <label htmlFor="password"><span className="required-mark">New Password</span></label>
                        <div className="input-field-container">
                          <RiLockPasswordFill className="password"/>
                          <input type="password" placeholder="Password" 
                          name="newPassword"
                          id="password"
                          onChange={handleChange}
                          onBlur={handleBlur}

                          value={values.newPassword}
                          />
                          <AiTwotoneEye className="eyeicon"/>
                          <div className="validation-error">
                            {errors.newPassword && touched.newPassword && errors.newPassword}
                          </div>
                        </div>
                      </div>
                      <div className="adminreg_details">
                        <label htmlFor="confpassword"> <span className="required-mark">Confirm Password</span></label>
                        <div className="input-field-container">
                          <RiLockPasswordFill className="password"/>
                          <input type="text" placeholder="Password" 
                          name="conf_password"
                          onChange={handleChange}
                          id="confpassword"
                          onBlur={handleBlur}
                          value={values.conf_password}
                          />
                          <AiTwotoneEye className="eyeicon"/>
                          <div className="validation-error">
                            {errors.conf_password && touched.conf_password && errors.conf_password}
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="adminreg_btn" style={{ display: "flex", justifyContent: "end" }}>
                      <button type="submit" disabled={isSubmitting}>
                        Save
                      </button >
                    </div>
                    <div className="adminreg_alert" style={{ display: "flex", justifyContent: "center" }}>
                    
                  </div>
                </form>
            )}
            </Formik>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return state;
};


const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    register: (data:any) => {
      console.log(data);
      dispatch(register(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminRegister);
