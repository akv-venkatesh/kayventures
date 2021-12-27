import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminRegister.css";
import arrow_left from "../assets/icons/arrows/arrow-left.svg";
import {Modal,Button} from 'react-bootstrap';
import {Formik} from 'formik'
import { Component } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiTwotoneEye } from "react-icons/ai";

interface typeState{
  showModal: boolean
}
interface MyFormValues {
  organization?: string,
  location?: string,
  personName?: string,
  designation?: string,
  email?: string,
  phone?: string,
  urlLink?: string,
}

class AdminRegister extends Component<{},typeState> {

  constructor(props:any){
    super(props);
    this.state = {
      showModal: false
    }
  }
  handleShow = () => {
    this.setState({
      showModal: true
    })
  }
  handleHide = () => {
    this.setState({
      showModal: false
    })
  }

  initialValues: MyFormValues = {
    organization:'',
    location:'',
    personName:'',
    designation:'',
    email:'',
    phone:'',
    urlLink:'',
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
                if (!values.organization) {
                  errors = { ...errors, organization: 'Enter Organization' };
                }
                if (!values.location) {
                  errors = { ...errors, location: 'Enter Location' };
                }
                if (!values.personName) {
                  errors = { ...errors, personName: 'Enter the Name of Person' };
                }
                if (!values.designation) {
                  errors = { ...errors, designation: 'Enter Designation' };
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
                this.handleShow();
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
                      <label>First Name <span className="required-mark">*</span></label>
                      <div className="input-field-container">
                      <input type="text" placeholder="Name" 
                      name="personName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.personName}
                      />
                      <div className="validation-error">{errors.personName && touched.personName && errors.personName}</div>
                      </div>
                    </div>
                    <div className="adminreg_details">
                      <label>Middle Name <span className="required-mark">*</span></label>
                      <div className="input-field-container">
                      <input type="text" placeholder="Name" 
                      name="personName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.personName}
                      />
                      <div className="validation-error">{errors.personName && touched.personName && errors.personName}</div>
                      </div>
                    </div>
                    <div className="adminreg_details">
                      <label>Last Name <span className="required-mark">*</span></label>
                      <div className="input-field-container">
                      <input type="text" placeholder="Name" 
                      name="personName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.personName}
                      />
                      <div className="validation-error">{errors.personName && touched.personName && errors.personName}</div>
                      </div>
                    </div>
  
                    <div className="adminreg_details">
                      <label>Email Address<span className="required-mark">*</span></label>
                      <div className="input-field-container">
                      <input type="text" placeholder="company@xyz.com" 
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}/>
                      <div className="validation-error">{errors.email && touched.email && errors.email}</div>
                      </div>
                    </div>
                    <div className="adminreg_details">
                      <label>Phone Number <span className="required-mark">*</span></label>
                      <div className="input-field-container">
                      <input type="text" placeholder="+91 XXXXXXXXXXX" 
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      />
                      <div className="validation-error">{errors.phone && touched.phone && errors.phone}</div>
                      </div>
                    </div>
                    <div className="adminreg_details">
                      <label>New Password<span className="required-mark">*</span></label>
                      <div className="input-field-container">
                      <RiLockPasswordFill className="password"/>
                      <input type="password" placeholder="New Password" 
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      />
                      <AiTwotoneEye className="eyeicon"/>
                      <div className="validation-error">{errors.phone && touched.phone && errors.phone}</div>
                      </div>
                    </div>
                    <div className="adminreg_details">
                      <label>Confirm Password <span className="required-mark">*</span></label>
                      <div className="input-field-container">
                      <RiLockPasswordFill className="password"/>
                      <input type="text" placeholder="Confirm Password" 
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      />
                      <AiTwotoneEye className="eyeicon"/>
                      <div className="validation-error">{errors.phone && touched.phone && errors.phone}</div>
                      </div>
                    </div>

                  </div>
                  <div className="adminreg_btn" style={{ display: "flex", justifyContent: "end" }}>
                    <button type="submit" onClick={() => this.handleShow} disabled={isSubmitting}>
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

export default AdminRegister;
