
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PrimaryDetails.css";
import arrow_left from "../assets/icons/arrows/arrow-left.svg";
import { Modal, Button } from 'react-bootstrap';
import { Formik } from 'formik'
import { Component } from "react";

import { setPrimaryDetails , getPrimaryDesignation } from "../actions/business_category/business_category";
import { useDispatch, useSelector, connect } from "react-redux";
import Select from '../component/dropdown_select_scrollable/slelect'
import Category from "./Category";


interface typeState {
  showModal: boolean,

  userData: {
    name: string
    email: string
    phoneno: string

  }

  errorMessage:boolean,
  designations:any
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

interface typeProps {
  setPrimaryDetails: (arg: Object) => void;
  setclose: ()=>void;
  businesscategory: any;
  getDesignations:() => void;
  // primary_designation:any
}

class PrimaryDetails extends Component<typeProps, typeState> {

  constructor(props: any) {
    super(props);
    let userDetails: any = localStorage.getItem("user_create_account_details");
    var userData: any = JSON.parse(userDetails);
    this.props.getDesignations();
    this.state = {
      showModal: false,

      userData: {
        name: userData.name,
        email: userData.email,
        phoneno: userData.phone,
      },
      errorMessage:false,
      designations:''
    }
    
   

    // this.setState({designations:organizations});
  }

  componentDidMount() {
    // this.props.getDesignations();
  }

  handleHide = () => {
    this.setState({
      showModal: false,
      errorMessage:false
    })
    this.props.setclose()
  }

  render(): JSX.Element {
    const initialValues: MyFormValues = {
      organization: '',
      location: '',
      personName: this.state.userData.name,
      designation: '',
      email: this.state.userData.email,
      phone: this.state.userData.phoneno,
      urlLink: '',
    };
    console.log(this.props)
    console.log(this.state.designations)

    let options:any= []


    const designationLoadData = this.props.businesscategory.primary_designation
    console.log("organizations =>" ,(designationLoadData[0]));
    
for (let index = 0; index < designationLoadData.length; index++) {
  const element = designationLoadData[index];
  options.push({value:element.id , label:element.name })
}

    console.log(options)

    return (
   

      <>
        <div className="d-flex justify-content-center">
          <div className="primary_form_body">
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
                  errors = { ...errors, designation: 'Select Designation' };
                }
                if (!values.phone) {
                  errors = { ...errors, phone: 'Enter Phone No' };
                }
                if (!values.urlLink) {
                  errors = { ...errors, urlLink: 'Enter URL link' };
                }
                return errors;
              }}
              onSubmit={(values, actions) => {
                // console.log(values)
                var x: any = localStorage.getItem('business_category_id');
                var category_id = JSON.parse(x);
                var category_types = localStorage.getItem('business_category_types')
                this.props.setPrimaryDetails({ values, "categoryId": category_id, "subCategoryIds": category_types });
                actions.setSubmitting(false);
              }}>
              {({ values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,setFieldValue  }) => (
                <form className="primary_form_container" onSubmit={handleSubmit}>
                  <div className="primary_form_head">
                    <Link to="/types"><img src={arrow_left} style={{ cursor: "pointer" }} /></Link>
                    <h1>
                      Primary details / <span>{localStorage.getItem('business_category_name')}</span>
                    </h1>
                    <p>Fill in the details to submit your application.</p>
                  </div>
                  <div className="primary_form">
                    <div className="primary_form_details">
                      <label htmlFor="organization">Organization <span className="required-mark">*</span></label>
                      {/* <label htmlFor="organization">Organization</label> */}
                      <div className="input-field-container">
                        <input
                          aria-label="organization"
                          id="organization"
                          type="text"
                          name="organization"
                          placeholder="Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.organization} className="input"/>
                        <div className="validation-error">{errors.organization && touched.organization && errors.organization}</div>
                        
                      </div>
                    </div>
                    <div className="primary_form_details">
                      <label htmlFor="location">Location <span className="required-mark">*</span></label>
                      <div className="input-field-container">
                        <input className="input" aria-label="location" id='location' type="text" placeholder="Current location"
                          name="location"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.location} />
                        <div className="validation-error">{errors.location && touched.location && errors.location}</div>
                      </div>
                    </div>
                    <div className="primary_form_details">
                      <label htmlFor="personName">Name of the person <span className="required-mark">*</span></label>
                      <div className="input-field-container">
                        <input className="input" aria-label="personName" id='personName' type="text" placeholder="Name"
                          name="personName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.personName}
                        />
                        <div className="validation-error">{errors.personName && touched.personName && errors.personName}</div>
                      </div>
                    </div>
                    <div className="primary_form_details">
                      <label htmlFor="designation">Designation <span className="required-mark">*</span></label>
                      <div className="input-field-container">
                      <Select options={options} width='300px' position='bottom' placeholder='Director, head, etc' onChange={(e: any)=>setFieldValue("designation", e.value)}></Select>
                      <input
                        className="input"
                          aria-label="designation"
                          id="designation"
                          type="hidden"
                          name="designation"
                          value={values.designation}
                        />
                        <div className="validation-error">{errors.designation && touched.designation && errors.designation}</div>
                      </div>
                    </div>
                    <div className="primary_form_details">
                      <label htmlFor="email">E-mail Id(Compant Id) <span className="required-mark">*</span></label>
                      <div className="input-field-container">
                        <input className="input" aria-label="email" id="email" type="text" placeholder="company@xyz.com"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email} />
                        <div className="validation-error">{errors.email && touched.email && errors.email}</div>
                      </div>
                    </div>
                    <div className="primary_form_details">
                      <label htmlFor="phone">Phone No. <span className="required-mark">*</span></label>
                      <div className="input-field-container">
                        <input className="input"
                          aria-label="phone"
                          id="phone"
                          type="text"
                          placeholder="+91 XXXXXXXXXXX"
                          name="phone"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phone}
                        />
                        <div className="validation-error">{errors.phone && touched.phone && errors.phone}</div>
                      </div>
                    </div>
                    <div className="primary_form_details">
                      <label htmlFor="urlLink">URL link</label>
                      <div className="input-field-container"><input className="input"
                        aria-label="urlLink"
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
                    <button type="submit" disabled={isSubmitting}>
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
          show={this.props.businesscategory.primary_details_status}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="verifyemailmodel"
          // onHide={() => this.handleHide()}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body  >
            <h4 className="modal-title">Email Id Verification</h4>
            <h5 className="modal-discription">The link along with the first time test password will be provided for Log In once approved by Super Admin from Kay Ventures. Kindly verify your email id using the link sent to you.</h5>
            {/* <h5 className="modal-timer">00:30</h5> */}
            <Link to='/verifyemailpending'><span className="modal-action-resend"><span>Proceed</span></span></Link>
            <h5 className="modal-alert">The verification will be completed in 2-3 days.</h5>
          </Modal.Body>
        </Modal>

        <Modal
          show={this.props.businesscategory.primary_details_error}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="verifyemailmodel"
          onHide={() => this.handleHide()}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body  >
            <h4 className="modal-title">Registration Failed</h4>
            <h5 className="modal-discription text-center" style={{color:'red'}}>{this.props.businesscategory.primary_details_error_message}</h5>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}


const mapStateToProps = (state: any) => {
  return state;
};


const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    setPrimaryDetails: (primarydetails: Object) => {
      dispatch(setPrimaryDetails(primarydetails));
    },
    getDesignations :() => {
      dispatch(getPrimaryDesignation(''));
    },
    setclose:()=>{
      dispatch({type: 'SET_MODELS_CLOSE'});

    }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryDetails);

