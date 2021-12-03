import React, { useState, useEffect } from "react";
import "./TaxRegistration.css";
import { BsChevronDown } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ImAttachment } from "react-icons/im";
// import $ from 'jquery';
// import Select, { components } from "react-select";
// import styled from "styled-components";

function TaxRegistration() {
  
  return (
    <div>
      <div className="tax_reg_body form-bh">
        <Formik
          initialValues={{
            GSTType: "",
            GSTNumber: "",
            GSTCertificate: "",
          }}
          validate={(values) => {
            const errors = {};

            // if (!values.GSTType) {
            //   errors.GSTType = "Enter GSTType ";
            // }
            // if (!values.GSTNumber) {
            //   errors.GSTNumber = "Enter GSTNumber ";
            // }
            // if (!values.GSTCertificate) {
            //   errors.GSTCertificate = "Enter GSTCertificate";
            // }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));

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

              <div className="taxreg">
                <div className="row mt-4">
                  <div className="col-lg-3">
                    <label className="TypeOfService-label" htmlFor="GSTType">
                      GST Type <span>*</span>
                    </label>
                  </div>
                  <div className="col-lg-9 ">
                    <div className="select"> 
                  <div className="custom-select">
						    					<Field as="select" name="GSTType">
									             	<option value="0">Select from options</option>
									             	<option value="Composite">Composite</option>
									             	<option value="Regular">Regular</option>
									             
									           	</Field>
						    				</div>
                        </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-lg-3">
                    <label className="GSTNumber-label" htmlFor="GSTNumber">
                      GST Number <span>*</span>
                    </label>
                    {/* <ErrorMessage/> */}
                  </div>
                  <div className="col-lg-8">
                    <input
                      type="text"
                      name="GSTNumber"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.GSTNumber}
                      placeholder="XXXXXXXXXXX"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-lg-3">
                    <label
                      className="GSTCertificate-label"
                      htmlFor="GSTCertificate"
                    >
                      GST Certificate <span>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <input
                      type="text"
                      value={values.GSTCertificate}
                      placeholder="Attach your files here"
                      className="input-field"
                      readOnly
                    />
                    <Field
                      type="file"
                      id="credit-file"
                      name="GSTCertificate"
                      hidden
                    />
                    <label for="credit-file">
                      <ImAttachment className="Attach-file" />
                    </label>
                  </div>
                </div>
              </div>

              <div
                className="pb-5 "
                style={{ position: "absolute", bottom: "1px", right: "100px" }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="save-btn "
                >
                  <span>Save</span>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default TaxRegistration;
