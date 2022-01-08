import React,{useState,useEffect, FormEvent,ChangeEvent} from "react";
import "./Organizationinfo.css";
import { Formik ,Form, Field, ErrorMessage } from "formik";
import { ImAttachment } from "react-icons/im";
import logo_img from  '../../../../assets/insertImage.png';
import CustomSelect from "../../../../component/custom_select";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import $ from 'jquery';
import { Button } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { FaRegEdit , FaRegCalendarAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Vector3 from "../../../../assets/icons/various/Vector3.svg";
import Select from '../../../../component/dropdown_select/slelect';


import '../../../m-login.scss';
interface typeState {
  selectedOption: string;
  linetype: string;
  materialtype: string;}

function Organizationinfo() {
  
    const [logoImage,setLogoImage] =  useState('')

   

  //  fro selecting logo img
    const onImageChange = (event:FormEvent<HTMLInputElement>) => {
        if (event.currentTarget.files && event.currentTarget.files[0]) {
          // let reader = new FileReader();
          // reader.onload = (e) => {
          //   setLogoImage(e.target.result);
          // };
          // reader.readAsDataURL(event.currentTarget.files[0]);
        }
      }
      // lineTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
      //   let value:any = event;
      //   this:any.setState({
      //     linetype: value.value
      //   })
      // }
  //  fro selecting logo img


    // const LineTypeOptions = [
    //   { value: 'Open', label: 'Open', disabled: state.disable_input},
    //   { value: 'Reserved', label: 'Reserved', disabled: state.disable_input},


    // ]

    // const Material_type = [
    //   { value: 'Natural', label: 'Natural', disabled: state.disable_input},
    //   { value: 'Artificial', label: 'Artificial',  disabled: state.disable_input},

    // ]

  return (
      <div className="facilitykyc1 h-100 machine main d-flex">
        <div className="col-md-12 d-flex flex-column h-100">
            <div className="facility d-flex">
                            <img src={Vector3} alt="" className="vector"/>
                            <p>Organization Info.</p>
            </div>
            <div className="crossicon">
                <ImCross className="cross" />
            </div>
        
        <div className="box mt-2">
          <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>
          <div className="h-100 businesshour px-4 pt-1 pb-5">
            
            <div className="ps-lg-5">
              <Formik
                initialValues={{
              
                }}
                validate={(values) => {
                  const errors = {};

                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  // setTimeout(() => {
                  // 	alert(JSON.stringify(values, null, 2));
                  // $('#status-check').modal('show');
                  setSubmitting(false);
                  // }, 400);
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
                      <button className="summarybtn">Summary</button>
                    </div>
                    <div className="row d-flex align-items-center">
                      <label className="col-md-3"  htmlFor="upload_logo" id="file-chosen">Upload Logo<span className='required'> *</span></label>
                      <div className="col-md-5 end">
                        <div className="position-relative">
                          
                          <Field aria-label="upload_logo" type="file" id="upload-logo" name="upload_logo"  onChange={onImageChange} hidden/>
                          <label htmlFor="upload_logo_img"><img src={ logoImage ? logoImage : logo_img }  className="logo-img" /></label>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-5 d-flex align-items-center position-relative">
                      <label className="col-md-3"  htmlFor="upload-logo" id="file-chosen">Legal name of the company<span className='required'> </span></label>
                      <div className="col-md-5">
                          <label htmlFor="leagal_name" id="leagal_name"> </label>
                          <Field aria-label="leagal_name"  type="text" id="" className="input-box" name="leagal_name" placeholder="Syndicate Fashions" />
                          <label className="position-absolute edit"><FaRegEdit/></label>
                      </div>
                    </div>
                    <div className="row mt-5 d-flex align-items-center">
                      <label className="col-md-3"  htmlFor="upload-logo" id="file-chosen">Constitution of the form<span className='required'> *</span></label>
                      <div className="col-md-5">
                        <div className="custom-select">
                          <Field as="select" name="x">
                            <option value="0">Select from options</option>
                            <option value="red">Private Limited Company</option>
                            <option value="green">LLP</option>
                            <option value="blue">Patnership</option>
                            <option value="blue">Sale Patnership</option>
                            <option value="0">Select from options</option>
                            <option value="red">Private Limited Company</option>
                            <option value="green">LLP</option>
                            <option value="blue">Patnership</option>
                            <option value="blue">Sale Patnership</option>
                            <option value="0">Select from options</option>
                            <option value="red">Private Limited Company</option>
                            <option value="green">LLP</option>
                            <option value="blue">Patnership</option>
                            <option value="blue">Sale Patnership</option>
                          </Field>
                        </div>
                        <form data-testid="form-line-type">
                          <label htmlFor="line-type" hidden>LineType</label>
                          {/* <Select 
                            options={LineTypeOptions} 
                            width='200px' 
                            position='top' 
                            name="linetype"
                            inputId="line-type"
                            placeholder='Line type'
                            onChange={this.lineTypeChange}
                            isOptionDisabled={(option:any) => option.disabled}
                          /> */}
                        </form>
                      </div>
                    </div>
                    <div className="row mt-5 d-flex align-items-center position-relative">
                      <label className="col-md-3"  htmlFor="upload-logo" id="file-chosen">Establishment date<span className='required'> *</span></label>
                      <div className="col-md-5">
                          <label htmlFor="estimate_date" id="estimate_date"> </label>
                          <Field aria-label="estimate_date" type="date" id="" className="input-date" name="estimate_date" placeholder="DD/MM/YYYY" />
                          <label className="position-absolute calender"><FaRegCalendarAlt/></label>
                      </div>
                    </div>
                    <div className="row mt-5 d-flex align-items-center">
                      <label className="col-md-3"  htmlFor="upload-logo" id="file-chosen">PAN Number<span className='required'> *</span></label>
                      <div className="col-md-5">
                          <label htmlFor="pan_number" id="pan_number"> </label>
                          <Field aria-label="pan_number" type="text" id="" className="input-box" name="pan_number" placeholder="ABCDXXXXXX" />
                      </div>
                    </div>
                    <div className="row mt-5 d-flex align-items-center">
                      <label className="col-md-3"  htmlFor="upload-logo" id="file-chosen">Import/Export Code <span style={{color:'#0067E5'}}>( only India )</span><span className='required'> *</span></label>
                      <div className="col-md-5">
                          <label htmlFor="ie_code" id="ie_code"> </label>
                          <Field aria-label="ie_code" type="text" id="" className="input-box" name="ie_code" placeholder="Text" />
                      </div>
                    </div>
                    <div className="row mt-5">
                  <label className="col-md-3 start">Company Registration Certificate<span className='required'> *</span></label>
                  <div className="col-md-5 end">
                    <div className="position-relative file-upload">
                      <label  htmlFor="registration-certificate" className="label-file"  id="file-chosen"></label>
                      <Field aria-label="registration_certificate" type="file" id="registration-certificate" name="registration_certificate" placeholder="Attach your files here" hidden/>
                      <label htmlFor="registration_certificate-file"><ImAttachment /></label>
                    </div>
                  </div>
                    </div>
                    <div className="row mt-5">
                      <label className="col-md-3 start">Organisational Chart</label>
                      <div className="col-md-5 end">
                        <div className="position-relative file-upload">
                            <label  htmlFor="organisational" className="label-file" id="organisational"></label>
                            <Field aria-label="organisational" type="file" id="organisational" name="organisational" hidden/>
                            <label htmlFor="organisational"><ImAttachment /></label>
                        </div>
                      </div>
                    </div>
                      <div className="row mt-4">
                        <div className="col-lg-3">
                          <label className="TypeOfService-label" htmlFor="GSTType">
                            GST Type 
                          </label>
                        </div>
                        <div className="col-lg-5">
                          <div className="select"> 
                            <div className="custom-select">
                                <Field aria-label="GSTType" as="select" 
                                        name="GSTType" 
                                        onChange={handleChange} 
                                        onBlur={handleBlur}>
                                      <option value="0">Select from options</option>
                                      <option value="Composite">Composite</option>
                                      <option value="Regular">Regular</option>
                                    
                                </Field>
                            </div> 
                            <div className="validation-error"> 
                              {/* {errors.GSTType && touched.GSTType && errors.GSTType} */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-lg-3">
                          <label className="GSTNumber-label" htmlFor="GSTNumber">
                            GST Number 
                          </label>
                          {/* <ErrorMessage/> */}
                        </div>
                        <div className="col-lg-5">
                          <label htmlFor="GSTNumber" id="GSTNumber"> </label>
                          <input
                            type="text"
                            aria-label="GSTNumber"
                            name="GSTNumber"
                            placeholder="XXXXXXXXXXX"
                            className="input-field input-box"
                          />
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
                        <div className="col-lg-5 position-relative">
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
                        </div>
                      </div>
                      <div className="ratinglink mt-4">
                        <h3 className="top-space">Rating & Evaluation</h3>
                        <div className="row">
                          <div className="col-md-3">
                          <div className="select"> 
                            <div className="custom-select">
                                <Field  as="select" 
                                        aria-label="GSTType"
                                        name="GSTType" 
                                        onChange={handleChange} 
                                        onBlur={handleBlur} data-testid="select">
                                      <option value="0">Select Report</option>
                                      <option value="Composite">Composite</option>
                                      <option value="Regular">Regular</option>
                                    
                                </Field>
                            </div> 
                            <div className="validation-error"> 
                              {/* {errors.GSTType && touched.GSTType && errors.GSTType} */}
                            </div>
                          </div>
                          </div>
                          <div className="col-md-5 end">
                              <div className="position-relative file-upload">
                                <label  htmlFor="" className="label-file"  id="file-chosen"></label>
                                <Field aria-lable="" type="file" id="" name="registration-certificate" hidden/>
                                <label htmlFor=""><ImAttachment /></label>
                              </div>
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
                          <div className="col-lg-5">
                            <input
                              aria-label="WebsiteLink"
                              type="text"
                              name="WebsiteLink"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Paste the link here"
                              className="input-field input-box"
                            />
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
                        <div className="col-lg-5">
                          <input
                            aria-label="SocialMediaLink"
                            type="text"
                            name="SocialMediaLink"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Paste the link here"
                            className="input-field input-box"
                          />
                        </div>
                      </div>
                      <div className="mt-4 col-md-6 m-auto savebtn">
                        <button>Save</button>
                      </div>  
                      </div>

                              
                  </form>
                )}
              </Formik>
            </div>
          </div>
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
}

export default Organizationinfo;
