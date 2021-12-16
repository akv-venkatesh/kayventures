import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PrimaryDetails.css";
import arrow_left from "../assets/icons/arrows/arrow-left.svg";
import {Modal,Button} from 'react-bootstrap';
import {Formik} from 'formik'
import { Component } from "react";

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

class ManufacturerPrimaryDetails extends Component<{},typeState> {

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
          <div className="primary_form_body">
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
                <form className="primary_form_container" onSubmit={handleSubmit}>
                  <div className="primary_form_head">
                    <Link to="/types"><img src={arrow_left} style={{ cursor: "pointer" }} /></Link>
                    <h1>
                      Primary details / <span>Manufacturer</span>
                    </h1>
                    <p>Fill in the details to submit your application.</p>
                  </div>
                  <div className="primary_form">
                    <div className="primary_form_details">
                      <label>Organization <span className="required-mark">*</span></label>
                      <div className="input-field-container">
                        <input type="text" 
                        name="organization"
                        placeholder="Name" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.organization}/>
                        <div className="validation-error">{errors.organization && touched.organization && errors.organization}</div>
                      </div>
                    </div>
                    <div className="primary_form_details">
                      <label>Location <span className="required-mark">*</span></label>
                      <div className="input-field-container">
                      <input type="text" placeholder="Current location" 
                      name="location"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.location}/>
                      <div className="validation-error">{errors.location && touched.location && errors.location}</div>
                      </div>                    
                    </div>
                    <div className="primary_form_details">
                      <label>Name of the person <span className="required-mark">*</span></label>
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
                    <div className="primary_form_details">
                      <label>Designation <span className="required-mark">*</span></label>
                      <div className="input-field-container">
                      <input
                        type="text"
                        name="designation"
                        placeholder="Director, head, etc Copy"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.designation}
                      />
                      <div className="validation-error">{errors.designation && touched.designation && errors.designation}</div>
                      </div>
                    </div>
  
                    <div className="primary_form_details">
                      <label>E-mail Id(Compant Id) <span className="required-mark">*</span></label>
                      <div className="input-field-container">
                      <input type="text" placeholder="company@xyz.com" 
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}/>
                      <div className="validation-error">{errors.email && touched.email && errors.email}</div>
                      </div>
                    </div>
                    <div className="primary_form_details">
                      <label>Phone No. <span className="required-mark">*</span></label>
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
                    <div className="primary_form_details">
                      <label>URL link </label>
                      <div className="input-field-container"><input
                        type="text"
                        placeholder="Paste the website link here"
                        name="urlLink"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.urlLink}
                      />
                      {/* <div className="validation-error">{errors.urlLink && touched.urlLink && errors.urlLink}</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="primary_form_btn" style={{ display: "flex", justifyContent: "center" }}>
                    <button type="submit" onClick={() => this.handleShow} disabled={isSubmitting}>
                      Submit
                    </button >
                  </div>
                  <div className="primary_form_alert" style={{ display: "flex", justifyContent: "center" }}>
                    <span>Please click on the link sent to validate your email id.</span>
                  </div>
                </form>
            )}
            </Formik>
          </div>
        </div>

        <Modal
            show={this.state.showModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="verifyemailmodel"
            onHide={()=>this.handleHide()}
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body  >
              <h4 className="modal-title">Email Id Verification</h4>
              <h5 className="modal-discription">The link along with the first time test password will be provided for Log In once approved by Super Admin from Kay Ventures. Kindly verify your email id using the link sent to you.</h5>
              {/* <h5 className="modal-timer">00:30</h5> */}
              <Link to='verifiedemail'><span className="modal-action-resend"><span>Proceed</span></span></Link>
              <h5 className="modal-alert">The verification will be completed in 2-3 days.</h5>
            </Modal.Body>
          </Modal>
      </>
    );
  }
}

export default ManufacturerPrimaryDetails;
