import React, { useState, useEffect } from 'react';
import "./ContactInformation.css";
import { BsPlusLg, BsChevronDown } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import $ from 'jquery';
// import Select, { components } from "react-select";
// import styled from "styled-components";


function ContactInformation() {
 
  return (
    <>
      <div className="contact_info_body form-bh ">
        <Formik
          initialValues={{
            officeName: "",
            AddressLine1: "",
            AddressLine2: "",
            AddressState: "",
            AddressCountry: "",
            AddressPincode: "",
            LocationUrl: "",
            MentionNumber: "",
            email: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.officeName) {
              errors.officeName = "Enter Password";
            } else if (
              !["12345", "123456", "password"].includes(values.password)
            ) {
              errors.password = "Wrong Password";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            // setTimeout(() => {
            // 	alert(JSON.stringify(values, null, 2));

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
            <form onSubmit={handleSubmit}>
              {/*officeName  */}
              <div className="row officeName">
                <div className="col-lg-3">
                  <label className="officename-label" htmlFor="officeName">
                    Name of the office <span>*</span>
                  </label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    name="officeName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.officeName}
                    placeholder="Name"
                    className="input-field"
                  />
                </div>
              </div>
              {/*location line1 */}
              <div className="location">
                <div className="row">
                  <h3 className="top-space">Location</h3>
                  <div className="col-lg-3">
                    <label className="-label" htmlFor="AddressLine1">
                      Address<span>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <input
                      type="text"
                      name="AddressLine1"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.AddressLine1}
                      placeholder="Line 1"
                      className="input-field-line"
                    />
                  </div>
                </div>
                {/*location line2 */}
                <div className="row ">
                  <div className="col-lg-3"> </div>
                  <div className="col-lg-8">
                    <input
                      type="text"
                      name="AddressLine2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.AddressLine2}
                      placeholder="Line 2"
                      className="input-field-line"
                    />
                  </div>
                </div>
                {/*location State-Country-Pincode */}
                <div className="row ">
                  <div className="col-lg-3"> </div>
                  <div className="col-lg-8 state-field">
                    <input
                      type="text"
                      name="AddressState"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.AddressState}
                      placeholder="State"
                      className="input-field-state me-3"
                    />
                    <input
                      type="text"
                      name="AddressCountry"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.AddressCountry}
                      placeholder="Country"
                      className="input-field-state me-3"
                    />
                    <input
                      type="text"
                      name="AddressPincode"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.AddressPincode}
                      placeholder="Pincode"
                      className="input-field-state"
                    />
                  </div>
                </div>

                {/*Location Validity (If any) */}
                <div className="location-validity mt-5">
                  <div className="row ">
                    <div className="col-lg-3">
                      <label
                        className="location-validity-label"
                        htmlFor="locationvalidity"
                      >
                        Location Validity{" "}
                        <span className="c-blue">(If any)</span>
                      </label>
                    </div>
                    <div className="col-lg-8">
                     <div className="location-validity-select">
                      <div className="custom-select ">
						    					<Field as="select" name="color">
									             	<option value="0">Select from options</option>
									             	<option value="red">Composite</option>
									             	<option value="green">Regular</option>
									             
									           	</Field>
						    				</div>
                        </div>
                      {/* <select className="location-validity-select">
                        <option value="">Select</option>
                        <option value="B">Select</option>
                        <option value="C">Select</option>
                      </select> */}
                    </div>
                  </div>
                  <div className="row mt-3 ">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-8">
                      <input
                        type="text"
                        name="MentionNumber"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.MentionNumber}
                        placeholder="Mention Number"
                        className="input-field"
                      />
                    </div>
                  </div>
                </div>

                {/*Location Map (If any) */}
                <div className="location-validity mt-5">
                  <div className="row ">
                    <div className="col-lg-3">Location Map</div>
                    <div className="col-lg-8">
                      <input
                        type="text"
                        name="LocationUrl"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.LocationUrl}
                        placeholder="Paste URL link here"
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div className="row  mt-3 ">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-8 add-button">
                      <div className="add-btn">
                        <BsPlusLg />
                      </div>
                      <span>Add in case of multiple locations</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="Contact">
                <h3 className="top-space">Contact</h3>
                <div className="row mt-4">
                  <div className="col-lg-3">
                    <label className="ContactName-label" htmlFor="ContactName">
                      Name<span>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <input
                      type="text"
                      name="ContactName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.ContactName}
                      placeholder="Name"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-lg-3">
                    <label
                      className="ContactDesignation-label"
                      htmlFor="ContactDesignation"
                    >
                      Designation<span>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <input
                      type="text"
                      name="ContactDesignation"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.ContactDesignation}
                      placeholder="Designation"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-lg-3">
                    <label
                      className="ContactPhoneNO-label"
                      htmlFor="ContactPhoneNO"
                    >
                      Phone No. <span>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <input
                      type="text"
                      name="ContactPhoneNO"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.ContactPhoneNO}
                      placeholder="+91 XXXXXXXXX"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-lg-3">
                    <label
                      className="ContactEmailID-label"
                      htmlFor="ContactEmailID"
                    >
                      Email -Id<span>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <input
                      type="text"
                      name="ContactEmailID"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.ContactEmailID}
                      placeholder="xyz@gmail.com or company Id"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="row  mt-3 ">
                  <div className="col-lg-3"></div>
                  <div className="col-lg-8 add-button">
                    <div className="add-btn">
                      <BsPlusLg  className="BsPlusLg"  style={{fontSize:"10px"}}/>
                    </div>
                    <span>Add in case of multiple contacts</span>
                  </div>
                </div>
              </div>
              <div className="Service">
                <h3 className="top-space">Service Contact</h3>
                <div className="row mt-4">
                  <div className="col-lg-3">
                    <label
                      className="TypeOfService-label"
                      htmlFor="TypeOfService"
                    >
                      Type of service<span>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <input
                      type="text"
                      name="TypeOfService"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.TypeOfService}
                      placeholder="Customer service, etc"
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-lg-3">
                    <label
                      className="ServicePhoneNO-label"
                      htmlFor="ServicePhoneNO"
                    >
                      Phone No. <span>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <input
                      type="text"
                      name="ServicePhoneNO"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.ServicetPhoneNO}
                      placeholder="+91 XXXXXXXXX"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-lg-3">
                    <label
                      className="ServiceEmailID-label"
                      htmlFor="ServiceEmailID"
                    >
                      Email -Id<span>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <input
                      type="text"
                      name="ServiceEmailID"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.ServiceEmailID}
                      placeholder="xyz@gmail.com or company Id"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="row  mt-3 ">
                  <div className="col-lg-3"></div>
                  <div className="col-lg-8 add-button">
                    <div className="add-btn">
                      <BsPlusLg />
                    </div>
                    <span>Add in case of multiple service contacts</span>
                  </div>
                </div>
              </div>

              <div className="CompanyLink">
                <h3 className="top-space">Company Link</h3>

                <div className="row mt-4">
                  <div className="col-lg-3">
                    <label className="WebsiteLink-label" htmlFor="WebsiteLink">
                      Website Link
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <input
                      type="text"
                      name="WebsiteLink"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.WebsiteLink}
                      placeholder="Paste the link here"
                      className="input-field"
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
                  <div className="col-lg-8">
                    <input
                      type="text"
                      name="SocialMediaLink"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.SocialMediaLink}
                      placeholder="Paste the link here"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="row  mt-3 mb-5">
                  <div className="col-lg-3"></div>
                  <div className="col-lg-8 add-button">
                    <div className="add-btn">
                      <BsPlusLg />
                    </div>
                    <span>Add more</span>
                  </div>
                </div>
              </div>
              <div className="pb-5">
                <div
                  type="submit"
                  disabled={isSubmitting}
                  className="save-btn "
                >
                  <span>Save</span>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default ContactInformation;
