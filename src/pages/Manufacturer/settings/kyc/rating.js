import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import { HiUserCircle, HiOutlineFingerPrint } from "react-icons/hi";
import { ImMenu } from "react-icons/im";
import { ImAttachment } from "react-icons/im";
import $ from 'jquery';

function Rating() {

  	return (
		<div className='h-100 rating px-4 py-5'>
	    	<div className="ps-5">
		    	<Formik
					initialValues={{ 
						// credit_file: 'Attach your files here',
						// risk_file: 'Attach your files here',
						// banking_file: 'Attach your files here',
						// legal_file: 'Attach your files here',
					 }}
					validate={values => {
						const errors = {};
						if (!values.mon_start_time) {
							errors.mon_start_time = 'Enter time';
						}
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
					{
						(
							{
	    						values,
	    						errors,
	    						touched,
	    						handleChange,
	    						handleBlur,
	    						handleSubmit,
	    						isSubmitting,
	    					}
	    				) => (
	    					<form onSubmit={handleSubmit} className="ps-5 form-bh">
				    				
	    						<div className="row mt-4">
	    							<h3 className="col-md-3 start">Credit Report</h3>
	    							<div className="col-md-8 end">
		    							<div className="position-relative file-upload">
											<span  htmlFor="credit-file" id="file-chosen">{ '${values.credit_file}'!==undefined ? `${values.credit_file}` : 'Attach your files here'}</span>
		    								<Field type="file" id="credit-file" name="credit_file" hidden/>
											<label htmlFor="credit-file"><ImAttachment /></label>
		    							</div>
	    								<div className="d-flex justify-content-between dual mt-3">
	    									<Field type="text" id="credit-report-name" className="me-3" name="credit_report_Name" placeholder="Name of the report" />
	    									<Field type="text" id="credit-report-year" name="credit_report_year" placeholder="Year of the report" />
	    								</div>
	    							</div>
	    						</div>

	    						<div className="row mt-4">
	    							<h3 className="col-md-3 start">Risk Report</h3>
	    							<div className="col-md-8 end">
	    								<div className="position-relative file-upload">
											<span  htmlFor="Risk-report" id="file-chosen">{ '${values.risk_file}'!==undefined ? `${values.risk_file}` : 'Attach your files here'}</span>
		    								<Field type="file" id="Risk-report" name="risk_file" hidden/>
											<label htmlFor="Risk-report"><ImAttachment /></label>
		    							</div>
	    								<div className="d-flex justify-content-between dual mt-3">
	    									<Field type="text" id="Risk-report-name" className="me-3" name="Risk_report_Name" placeholder="Name of the report" />
	    									<Field type="text" id="Risk-report-year" name="Risk_report_year" placeholder="Year of the report" />
	    								</div>
	    							</div>
	    						</div>

	    						<div className="row mt-4">
	    							<h3 className="col-md-3 start">Banking & Relationship Report</h3>
	    							<div className="col-md-8 end">
	    								<div className="position-relative file-upload">
											<span  htmlFor="Banking-report" id="file-chosen">{ '${values.banking_file}'!==undefined ? `${values.banking_file}` : 'Attach your files here'}</span>
		    								<Field type="file" id="Banking-report" name="banking_file" hidden/>
											<label htmlFor="Banking-report"><ImAttachment /></label>
		    							</div>
	    								<div className="d-flex justify-content-between dual mt-3">
	    									<Field type="text" id="Banking-report-name" className="me-3" name="Banking_report_Name" placeholder="Name of the report" />
	    									<Field type="text" id="Banking-report-year" name="Banking_report_year" placeholder="Year of the report" />
	    								</div>
	    							</div>
	    						</div>

	    						<div className="row mt-4">
	    							<h3 className="col-md-3 start">Legal Report Report</h3>
	    							<div className="col-md-8 end">
	    								<div className="position-relative file-upload">
											<span  htmlFor="Legal-report" id="file-chosen">{ '${values.legal_file}'!==undefined ? `${values.legal_file}` : 'Attach your files here'}</span>
		    								<Field type="file" id="Legal-report" name="legal_file" hidden/>
											<label htmlFor="Legal-report"><ImAttachment /></label>
		    							</div>
	    								<div className="d-flex justify-content-between dual mt-3">
	    									<Field type="text" id="Legal-report-name" className="me-3" name="Legal_report_Name" placeholder="Name of the report" />
	    									<Field type="text" id="Legal-report-year" name="Legal_report_year" placeholder="Year of the report" />
	    								</div>
	    							</div>
	    						</div>	

			    				<div className="text-end">
			    					<button type="submit" disabled={isSubmitting} className="mt-sm-4 mt-4 form-submit">
			    						Submit
			    					</button>
			    				</div>
	    					</form>
						)
					}
				</Formik>
	    	</div>
		</div>
	);
}
export default  Rating;