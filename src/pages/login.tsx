import React, { Component } from 'react';
import { Link, Redirect,useHistory } from "react-router-dom";
import './buyer.scss';
import {
	Formik,
	FormikHelpers,
	FormikProps,
	Form,
	Field,
	FieldProps,
  } from 'formik';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { useDispatch, useSelector, connect } from "react-redux";
import { login } from "../actions/login/login";


import $ from 'jquery';
import {Modal,Button} from 'react-bootstrap';


interface MyFormValues {
	email?: string,
	password?: string
}
interface typeState{
	show: boolean,
	psw_vis: boolean,
	submitSuccess: boolean,
}
interface typeProps{
	userLogin: (arg:{})=> void;
}

class ManufacturerLogin extends Component<typeProps, typeState > {
	constructor(props:any){
		super(props);
		this.state = {
			show: false,
			psw_vis: false,
			submitSuccess: false,
		}
		console.log(props)
	}

	psw_visible = () =>{
		this.setState({psw_vis: !this.state.psw_vis});
	}

  	handleClose = () => {
		this.setState({
			show: false,
		});
	}
	handleShow = () => {
		this.setState({
			show: true,
		});
	}

	redirect = () => {
		this.setState({
			submitSuccess: true,
		});
	};
	initialValues: MyFormValues = { email: '',password: ''};

	render():JSX.Element{
		if (this.state.submitSuccess === true) {
			return <Redirect to="/home" />
		}
		return (
			<div className='p-xl-5 h-100 m-login'>
				
				<section className="p-sm-5 py-5 h-100">
					<div className="container-fluid h-100">
						<div className="row h-100">
							<div className="col-lg-6 first-half">
								<div className="text-start">
									<h1 className="mb-sm-5 mb-3">KAY VENTURES</h1>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</p>
								</div>
							</div>
							<div className="col-lg-6 second-half d-flex justify-content-lg-end justify-content-center align-items-center">
								<div className="login-form p-sm-5 p-3 text-start">
									<h2>Log In</h2>
									<Formik
										initialValues={this.initialValues}
										validate={values => {
											let errors = {};	
											if (!values.email) {
												errors = {...errors, email:'Enter Email Id'};
											} else if (
												!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
												) {
												errors = {...errors, email:'Invalid Email Id'};
											}
											if(!values.password) {
												errors = {...errors, password : 'Enter Password'};
											}
											else if(!/^.{8,}/i.test(values.password)){
												errors = {...errors, password : 'Psw should be 8 character'};
											}
											else if(!/^(?=.*\d).{8,}/.test(values.password)){
												errors = {...errors, password : 'Psw should have atleat 1 numeric'};
											}
											else if(!/^(?=.*[a-z])/.test(values.password)){
												errors = {...errors, password : 'Psw should have atleat 1 Lowercase'};
											}
											else if(!/^(?=.*[A-Z])/.test(values.password)){
												errors = {...errors, password : 'Psw should have atleat 1 Uppercase'};
											}
											else if(!/[^a-zA-Z\d]/.test(values.password)){
												errors = {...errors, password : 'Psw should have atleat 1 Special Char'};
											}
											return errors;
										}}
										onSubmit={(values,actions) => {
											this.handleShow();
											this.props.userLogin(values);
											actions.setSubmitting(false);
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
												<form onSubmit={handleSubmit}>
													<div className="position-relative">
														<div className="mt-sm-5 mt-3 d-flex align-items-center">
															<IoMail className="field-icon"/>
															<input
																type="email"
																name="email"
																onChange={handleChange}
																onBlur={handleBlur}
																value={values.email}
																placeholder='Enter Email'
																className={!(errors.email && touched.email && errors.email) ? 'form-control' : 'form-control is-invalid'}
															/>
														</div>
														<div className="validation-error"> 
															{errors.email && touched.email && errors.email}
														</div>
													</div>
													<div className="position-relative">
														<div className="mt-sm-5 mt-4 d-flex align-items-center">
															<RiLockPasswordFill className="field-icon"/>
															<input
																type={this.state.psw_vis? 'text':'password'}
																name="password"
																onChange={handleChange}
																onBlur={handleBlur}
																value={values.password}
																placeholder='Enter Password'
																className={!(errors.password && touched.password && errors.password) ? 'form-control' : 'form-control is-invalid'}
															/>
															{ this.state.psw_vis ? 
																<FaEyeSlash className="eye-icon" onClick={this.psw_visible}/> :
																<FaEye className="eye-icon" onClick={this.psw_visible}/>
															}
														</div>
														<div className="validation-error">
															{errors.password && touched.password && errors.password}
														</div>
													</div>
													<div className="d-flex justify-content-between mt-sm-4 mt-4 flex-wrap ps-3">
														<div className="form-check me-3 remember">
															<Field type="checkbox" name="rememberme" value="1" className="form-check-input" id="rememberme"/>
															<label className="form-check-label" htmlFor="rememberme">Remember Me</label>
														</div>
														<Link to="#" className="forgot-password">Forgot password?</Link>
													</div>
													<div className="text-end">
														<button type="submit" disabled={isSubmitting} className="mt-sm-4 mt-4 login-submit">
															Submit
														</button>
													</div>
												</form>
											)
										}
									</Formik>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Modal show={this.state.show} onHide={this.handleClose} centered className="checkstatus" backdropClassName="checkstatus">
				<Modal.Header closeButton className="justify-content-center">
				<Modal.Title>Check Status</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="text-center">
							<p className="m-0">Sorry,</p>
							<p className="m-0">Something went wrong. Use Registration failed</p>
						</div>
				</Modal.Body>
				<Modal.Footer className="modal-footer flex-column">
				<button type="button" className="modal-signin" data-bs-dismiss="modal" onClick={this.redirect}>Sign in</button>
							<p>Thanks</p>
				</Modal.Footer>
			</Modal>

			</div>
		);
	}
}

const mapStateToProps = (state: any) => {
	return state;
};
  
const mapDispatchToProps = (dispatch:any, props:any) => {
	return {
	  	userLogin: (userDetail:{}) => {
		  dispatch(login(userDetail));
		},
	};
};
  

export default connect(mapStateToProps, mapDispatchToProps)(ManufacturerLogin);
// export default  ManufacturerLogin;