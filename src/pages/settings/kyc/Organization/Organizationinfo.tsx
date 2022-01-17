import React,{useState,useEffect, FormEvent,ChangeEvent, Component} from "react";
import "./Organizationinfo.css";
import { Formik ,Form, Field, ErrorMessage } from "formik";
import { Link, Navigate } from "react-router-dom";
import { ImAttachment } from "react-icons/im";
import logo_img from  '../../../../assets/insertImage.png';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import $ from 'jquery';
import { Button } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { FaRegEdit , FaRegCalendarAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Vector3 from "../../../../assets/icons/various/Vector3.svg";
import Select from '../../../../component/dropdown_select/slelect';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import * as Yup from 'yup';



import '../../../m-login.scss';
interface typeState {
  linetype: string;
  logoImage:string;
  leagalname?: string,
  estimatedate?:string,
  pannumber?:string,
  iecode?:string,
  GSTCertificate?:string,
  WebsiteLink?:string,
  SocialMediaLink?:string,
  submitted: boolean,
  uploadlogo:string,
  uploadedFile?: any
}

class Organizationinfo extends Component<{}, typeState> {

    constructor(props:any){
      super(props);
      this.state={
        linetype :"",
        logoImage:"",
        submitted: false,
        uploadlogo:"",
        uploadedFile: ''
      }
    } 


  //  fro selecting logo img
    onImageChange = (event:FormEvent<HTMLInputElement>) => {
        if (event.currentTarget.files && event.currentTarget.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
            // setLogoImage(e.target!.result);
            this.setState({ uploadedFile: reader.result });
          };
          reader.readAsDataURL(event.currentTarget.files[0]);
        }
      }
      lineTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        let value:any = event;
        this.setState({
          linetype: value.value
        })
      }
  //  fro selecting logo img

    LineTypeOptions = [
      { value: 'Open', label: 'Open' },
      { value: 'Reserved', label: 'Reserved'},
    ]
    
render(): JSX.Element {
  if(this.state.submitted){
    return <Navigate to="/category"/>
  }
  
  const { uploadedFile } = this.state;

  const SignupSchema = Yup.object().shape({
      leagalname: Yup.string().required('Enter the leagalname'),
      estimatedate: Yup.string().required('Enter the Estimatedate'),
      pannumber: Yup.string().required('Enter the Pannumber'),
      iecode: Yup.string().required('Enter the IEcode'),
      GSTCertificate: Yup.string().required('Enter the GSTCertificate'),
      WebsiteLink: Yup.string().required('Enter the WebsiteLink'),
      SocialMediaLink: Yup.string().required('Enter the SocialMediaLink'),
  });

  return (
    <div className="organization h-100 machine main d-flex">
      <div className="col-md-12 d-flex flex-column h-100">
          {/* <div className="facility d-flex">
                          <img src={Vector3} alt="" className="vector"/>
                          <p>Organization Info.</p>
          </div>
          <div className="crossicon">
              <ImCross className="cross" />
          </div> */}
      
      <div className="box mt-2">
        <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>
        <div className="h-100 businesshour px-4 pt-1 pb-5 organizationinfo">
          
          <div className="ps-lg-5">
            <Formik
              initialValues={{
                leagalname:'',
                estimatedate:'',
                pannumber:'',
                iecode:'',
                GSTCertificate:'',
                WebsiteLink:'',
                SocialMediaLink:'',
                uploadlogo:'',
              }}
              validationSchema={SignupSchema}
            //   validate={values => {
            //   let errors = {};
            //   if (!values.leagalname) {
            //     errors = { ...errors, LeagalName: 'Enter LeagalName' };
            //   }
              
            //   if (!values.estimatedate) {
            //     errors = { ...errors, estimatedate: 'Enter EstimateDate' };
            //   }
            //   if (!values.pannumber) {
            //     errors = { ...errors, name: 'Enter PanNumber' };
            //   }
            //   if (!values.iecode) {
            //     errors = { ...errors, name: 'Enter Iecode' };
            //   }
            //   if (!values.GSTCertificate) {
            //     errors = { ...errors, name: 'Enter GSTCertificate' };
            //   }
            //   if (!values.WebsiteLink) {
            //     errors = { ...errors, name: 'Enter WebsiteLink' };
            //   }
            //   if (!values.SocialMediaLink) {
            //     errors = { ...errors, name: 'Enter SocialMediaLink' };
            //   }
            
            //   return errors;
            // }}
            onSubmit={(values,actions) => {
              // handleShow();
              console.log(values);
              localStorage.setItem("user_create_account_details", JSON.stringify(values));
              this.setState({
                submitted: true
              });
              actions.setSubmitting(false);
            }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit} className="ps-xl-5 form-bh">
                  <div className="d-flex align-items-center justify-content-space-between">
                    <h5>Entity</h5>
                    <button className="summarybtn">Summary<MdKeyboardArrowRight/></button>
                  </div>
                  
                  <div className="row d-flex align-items-center">
                    <label className="col-md-3"  htmlFor="uploadlogo" id="file-chosen">Upload Logo<span className='required'> *</span></label>
                    <div className="col-md-4 end">
                      <div className="position-relative">
                        
                      <label htmlFor="upload-logo" id="file-chosen"> </label>
                    <Field type="file" id="upload-logo" name="uploadlogo"  onChange={this.onImageChange} hidden/>
                    <label htmlFor="upload-logo"><img src={ uploadedFile ? uploadedFile :  logo_img }  className="logo-img" /></label>
                    <div className="text-danger">
                      {errors.uploadlogo && touched.uploadlogo ? (
                            <div>{errors.uploadlogo}</div>
                             ) : null}</div>
                    </div>
                    </div>
                  </div>
                  <div className="row mt-30 d-flex align-items-center position-relative">
                    <label className="col-md-3"  htmlFor="upload-logo" id="file-chosen">Legal name of the company<span className='required'> </span></label>
                    <div className="col-md-4">
                        <label htmlFor="leagal_name" id="leagal_name"> </label>
                        <Field aria-label="leagal_name"  type="text" id="" className="input-box legal-name" name="leagalname" placeholder="Syndicate Fashions" 
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.leagalname}/>                          
                          <label className="position-absolute edit"><FaRegEdit/></label>
                          <div className="text-danger">
                          {errors.leagalname && touched.leagalname ? (
                            <div>{errors.leagalname}</div>
                             ) : null}</div>
                    </div>
                  </div>

                  <div className="row mt-30 d-flex align-items-center">
                    <label className="col-md-3"  htmlFor="upload-logo" id="file-chosen">Constitution of the form<span className='required'> *</span></label>
                    <div className="col-md-4">
                      <form data-testid="form-line-type">
                        <label htmlFor="line-type" hidden>Select from options</label>
                        <Select 
                          options={this.LineTypeOptions} 
                          width='367px' 
                          position='top' 
                          name="linetype"
                          inputId="line-type"
                          placeholder='Select from options'
                          onChange={this.lineTypeChange}
                          isOptionDisabled={(option:any) => option.disabled}
                        />
                      </form>
                    </div>
                  </div>
                  <div className="row mt-30 d-flex align-items-center position-relative">
                    <label className="col-md-3"  htmlFor="upload-logo" id="file-chosen">Establishment date<span className='required'> *</span></label>
                    <div className="col-md-4">
                        <label htmlFor="estimate_date" id="estimate_date"> </label>
                        <Field aria-label="estimate_date" type="date" id="" className="input-date" name="estimatedate" placeholder="DD/MM/YYYY" />
                        <label className="position-absolute calender"><FaRegCalendarAlt/></label>
                        <div className="text-danger">
                        {errors.estimatedate && touched.estimatedate ? (
                            <div>{errors.estimatedate}</div>
                             ) : null}</div>
                    </div>
                  </div>
                  <div className="row mt-30 d-flex align-items-center">
                    <label className="col-md-3"  htmlFor="upload-logo" id="file-chosen">PAN Number<span className='required'> *</span></label>
                    <div className="col-md-4">
                        <label htmlFor="pan_number" id="pan_number"> </label>
                        <Field aria-label="pan_number" type="text" id="" className="input-box" name="pannumber" placeholder="ABCDXXXXXX" />
                        <div className="text-danger">{errors.pannumber && touched.pannumber ? (
                            <div>{errors.pannumber}</div>
                             ) : null}</div>
                    </div>
                  </div>
                  <div className="row mt-30 d-flex align-items-center">
                    <label className="col-md-3"  htmlFor="upload-logo" id="file-chosen">Import/Export Code <span style={{color:'#0067E5'}}>( only India )</span></label>
                    <div className="col-md-4">
                        <label htmlFor="ie_code" id="ie_code"> </label>
                        <Field aria-label="ie_code" type="text" id="" className="input-box" name="iecode" placeholder="Text" />
                        <div className="text-danger">{errors.iecode && touched.iecode ? (
                            <div>{errors.iecode}</div>
                             ) : null}</div>
                    </div>
                  </div>
                    <div className="row mt-4">
                      <div className="col-lg-3">
                        <label
                          className="GSTCertificate-label"
                          htmlFor="GSTCertificate"
                        >
                          GST Certificate 
                        </label>
                      </div>
                      <div className="col-lg-4 position-relative">
                        <label htmlFor="GSTCertificate" id="GSTCertificate"> </label>
                        <input
                          type="text"
                          
                          placeholder="Attach your files here"
                          className="input-field input-box"
                          readOnly
                        />
                        <Field
                          type="file"
                          aria-label="GSTCertificate"
                          id="GSTCertificate"
                          name="GSTCertificate"
                          hidden
                        />
                        <label htmlFor="credit-file" className="attach position-absolute">
                          <ImAttachment className="Attach-file " />
                        </label>
                        <div className="text-danger">{errors.GSTCertificate && touched.GSTCertificate ? (
                            <div>{errors.GSTCertificate}</div>
                             ) : null}</div>
                      </div>
                    </div>
                    <div className="ratinglink mt-4">
                      <h3 className="top-space mb-4">Rating & Evaluation</h3>
                      <div className="row">
                        <div className="col-md-3">
                        <div className="select"> 
                          <div className="custom-select">
                            <Select 
                            options={this.LineTypeOptions} 
                            width='200px' 
                            position='top' 
                            name="linetype"
                            inputId="line-type"
                            placeholder='Select Report'
                            onChange={this.lineTypeChange}
                            isOptionDisabled={(option:any) => option.disabled}
                          />
                          </div> 
                          <div className="validation-error"> 
                            {/* {errors.GSTType && touched.GSTType && errors.GSTType} */}
                          </div>
                        </div>
                        </div>
                        <div className="col-lg-4 position-relative">
                        <label htmlFor="GSTCertificate" id="GSTCertificate"> </label>
                        <input
                          type="text"
                          
                          placeholder="Attach your files here"
                          className="input-field input-box"
                          readOnly
                        />
                        <Field
                          type="file"
                          aria-label="GSTCertificate"
                          id="GSTCertificate"
                          name="GSTCertificate"
                          hidden
                        />
                        <label htmlFor="credit-file" className="attach position-absolute">
                          <ImAttachment className="Attach-file " />
                        </label>
                        <div className="text-danger">{errors.GSTCertificate && touched.GSTCertificate ? (
                            <div>{errors.GSTCertificate}</div>
                             ) : null}</div>
                      </div>
                        <div className="row end">
                          <div className="col-md-3"></div>
                          <div className="col-md-9">
                            <div className="add-button d-flex mt-3">
                              <div className="add-btn addsty">
                                <BsPlusLg  className="add-icon"/>
                              </div>
                                <span>Add</span>
                                <ul className="rating">
                                  <li><span className="clrblue">Credit Report<span className="circle">1</span> </span>
                                  <span className="clrchnge">|</span></li>
                                  <li><span className="clrblue">Risk Report<span className="circle">1</span></span>
                                  <span className="clrchnge">|</span></li>
                                  <li><span className="clrblue">Banking & Relationship Report</span>
                                  <span className="clrchnge">|</span></li>
                                  <li><span className="clrblue">Legal Report</span></li>
                                </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CompanyLink mt-4">
                      <h3 className="top-space">Company Link</h3>

                      <div className="row mt-4">
                        <div className="col-lg-3">
                          <label className="WebsiteLink-label" htmlFor="WebsiteLink">
                            Website Link
                          </label>
                        </div>
                        <div className="col-lg-4">
                          <input
                            aria-label="WebsiteLink"
                            type="text"
                            name="WebsiteLink"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Paste the link here"
                            className="input-field input-box"
                          />
                           <div className="text-danger">{errors.WebsiteLink && touched.WebsiteLink ? (
                            <div>{errors.WebsiteLink}</div>
                             ) : null}</div>
                        </div>
                      </div>
                    <div className="row mt-5">
                      <div className="col-lg-3">
                        <label
                          className="SocialMediaLink-label"
                          htmlFor="SocialMediaLink"
                        >
                          Social Media Link
                        </label>
                      </div>
                      <div className="col-lg-4">
                        <input
                          aria-label="SocialMediaLink"
                          type="text"
                          name="SocialMediaLink"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Paste the link here"
                          className="input-field input-box"
                        />
                        <div className="add-button d-flex mt-3">
                              <div className="add-btn addsty">
                                <BsPlusLg  className="add-icon"/>
                              </div>
                                <span>Add</span>
                      </div>
                      <div className="text-danger">{errors.SocialMediaLink && touched.SocialMediaLink ? (
                            <div>{errors.SocialMediaLink}</div>
                             ) : null}</div>
                      </div>                                          
                    </div>                  
                    </div>
                  <button title="nextbutton" type="submit" className="btn btn-back mx-2 next float-end nextbtn">Next&emsp;<AiFillCaretRight />
                      </button>                        
                </form>
              )}
            </Formik>
          </div>
        </div>
        </PerfectScrollbar>
        <div className="mt-5 col-md-12 pb-4 fixedbtn">
            <div className="row ">
                <div className="w-100 d-flex justify-content-center">
                    {/* <button title="backbutton" type="button" className="btn btn-back mx-2 back float-start"><AiFillCaretLeft />&emsp;Back</button> */}
                      <div className="w-30 m-auto">
                          <button title="removebutton" type="button" className="btn btn-default  mx-4 remove">Clear</button>
                            <button title="savebutton" type="button" className="btn btn-default mx-4 saveq">Save</button>
                      </div>
                      
                </div>
            </div>
        </div> 
      </div>
    </div>
  </div>
);   
}
}

export default Organizationinfo;
function setLogoImage(result: string | ArrayBuffer | null) {
  throw new Error("Function not implemented.");
}

