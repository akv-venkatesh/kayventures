import React,{useState,useEffect, FormEvent} from "react";
import "./Organizationinfo.css";
import { Formik ,Form, Field, ErrorMessage } from "formik";
import { ImAttachment } from "react-icons/im";
import logo_img from  '../../../assets/insertImage.png';
import CustomSelect from "../../../component/custom_select";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import $ from 'jquery';
import { Button } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";

import '../../m-login.scss';


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
  //  fro selecting logo img

  return (
    <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>
    <div className="h-100 businesshour px-4 py-5">
      
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
                <h3 className="col-md-3 start">Upload Logo<span className='required'> *</span></h3>
                <div className="col-md-5 end">
                  <div className="position-relative">
                    <label htmlFor="upload-logo" id="file-chosen"> </label>
                    <Field type="file" id="upload-logo" name="upload_logo"  onChange={onImageChange} hidden/>
                    <label htmlFor="upload-logo"><img src={ logoImage ? logoImage : logo_img }  className="logo-img" /></label>
                  </div>
                </div>
              </div>
              <div className="row mt-5 d-flex align-items-center">
                <h3 className="col-md-3">Legal name of the company<span className='required'> *</span></h3>
                <div className="col-md-5">
                    <Field type="text" id="" className="input-box" name="leagal_name" placeholder="Name" />
                </div>
              </div>
              <div className="row mt-5 d-flex align-items-center">
                <h3 className="col-md-3">Constitution of the form<span className='required'> *</span></h3>
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
                </div>
              </div>
              <div className="row mt-5 d-flex align-items-center">
                <h3 className="col-md-3">Establishment date<span className='required'> *</span></h3>
                <div className="col-md-5">
                    <Field type="date" id="" className="input-date" name="leagal_name" placeholder="Name" />
                </div>
              </div>
              <div className="row mt-5 d-flex align-items-center">
                <h3 className="col-md-3">PAN Number<span className='required'> *</span></h3>
                <div className="col-md-5">
                    <Field type="text" id="" className="input-box" name="pan_number" placeholder="ABCDXXXXXX" />
                </div>
              </div>
              <div className="row mt-5 d-flex align-items-center">
                <h3 className="col-md-3">Import/Export Code <span style={{color:'#0067E5'}}>( only India )</span><span className='required'> *</span></h3>
                <div className="col-md-5">
                    <Field type="text" id="" className="input-box" name="ie_code" placeholder="Text" />
                </div>
              </div>
              <div className="row mt-5">
	    	  	<h3 className="col-md-3 start">Company Registration Certificate<span className='required'> *</span></h3>
	    	  	<div className="col-md-5 end">
		      		<div className="position-relative file-upload">
			  			<label  htmlFor="registration-certificate" className="label-file"  id="file-chosen"></label>
		      			<Field type="file" id="registration-certificate" name="registration-certificate" hidden/>
			  			<label htmlFor="registration-certificate"><ImAttachment /></label>
		      		</div>
	    	  	</div>
	    	      </div>
              <div className="row mt-5">
	    	  	    <h3 className="col-md-3 start">Organisational Chart</h3>
                <div className="col-md-5 end">
                  <div className="position-relative file-upload">
                    <label  htmlFor="organisational" className="label-file" id="organisational"></label>
                      <Field type="file" id="organisational" name="organisational" hidden/>
                    <label htmlFor="organisational"><ImAttachment /></label>
                  </div>
	    	  	    </div>
	    	      </div>
                <div className="row mt-4">
                  <div className="col-lg-3">
                    <label className="TypeOfService-label" htmlFor="GSTType">
                      GST Type <span>*</span>
                    </label>
                  </div>
                  <div className="col-lg-5">
                    <div className="select"> 
                      <div className="custom-select">
						    					<Field  as="select" 
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
                      GST Number <span>*</span>
                    </label>
                    {/* <ErrorMessage/> */}
                  </div>
                  <div className="col-lg-5">
                    <input
                      type="text"
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
                      GST Certificate <span>*</span>
                    </label>
                  </div>
                  <div className="col-lg-5">
                    <input
                      type="text"
                      placeholder="Attach your files here"
                      className="input-field input-box"
                      readOnly
                    />
                    <Field
                      type="file"
                      id="GSTCertificate"
                      name="GSTCertificate"
                      hidden
                    />
                    <label htmlFor="credit-file">
                      <ImAttachment className="Attach-file" />
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
                    <div className="col-md-5 end">
                        <div className="position-relative file-upload">
                        <label  htmlFor="registration-certificate" className="label-file"  id="file-chosen"></label>
                          <Field type="file" id="registration-certificate" name="registration-certificate" hidden/>
                        <label htmlFor="registration-certificate"><ImAttachment /></label>
                        </div>
                        <div className="add-button">
                          <div className="add-btn">
                            <BsPlusLg  className="add-icon"/>
                          </div>
                          <span>Add more</span>
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
                      Email -Id
                    </label>
                  </div>
                  <div className="col-lg-5">
                    <input
                      type="text"
                      name="SocialMediaLink"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Paste the link here"
                      className="input-field input-box"
                    />
                  </div>
                </div>
                
                </div>

                         
            </form>
          )}
        </Formik>
      </div>
    </div>
    </PerfectScrollbar>
  );
}

export default Organizationinfo;
