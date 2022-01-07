import React,{useState,useEffect, FormEvent} from "react";
import "./Entity.css";
import { Formik ,Form, Field, ErrorMessage } from "formik";
import { ImAttachment } from "react-icons/im";
import logo_img from  '../../../assets/insertImage.png';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import $ from 'jquery';
import { Button } from "react-bootstrap";


function Entity() {
  
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
                <h3 className="col-md-3">I/E Code <span style={{color:'#0067E5'}}>( only India )</span><span className='required'> *</span></h3>
                <div className="col-md-5">
                    <Field type="text" id="" className="input-box" name="ie_code" placeholder="Text" />
                </div>
              </div>
              <div className="row mt-5">
	    	  	<h3 className="col-md-3 start">Company Registration Certificate</h3>
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
          <div className="row mt-5">
	    	  	<h3 className="col-md-6">.</h3>
	    	  	<div className="col-md-6 text-end">
              <Button type="submit" disabled={isSubmitting} className="mt-sm-2 mt-1 submit-form">Save</Button>
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

export default Entity;
