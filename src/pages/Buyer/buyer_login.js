import React, { useState } from 'react';
import { Link, Redirect, useHistory } from "react-router-dom";
import '../buyer.scss';
import { Formik, Field } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { psw_vis } from '../../actions/login_actions';
import { useDispatch, useSelector } from 'react-redux';	
import $ from 'jquery';
import 'bootstrap';
import {Modal,Button} from 'react-bootstrap';

function BuyerLogin() {
	const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	const history = useHistory();

	const state = useSelector(state => state);
	const dispatch = useDispatch();

	const redirect = () => {
		history.push('/buyer-home');
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
		    					initialValues={{ email: '', password: '' }}
		    					validate={values => {
		    						const errors = {};
		    						if (!values.email) {
		    							errors.email = 'Enter Email Id';
		    						} else if (
		    							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
		    							) {
		    							errors.email = 'Invalid Email Id';
		    						}
		    						if(!values.password) {
		    							errors.password = 'Enter Password';
		    						}
		    						else if(!['12345', '123456', 'password'].includes(values.password)){
		    							errors.password = 'Wrong Password';
		    						}
		    						return errors;
		    					}}
		    					onSubmit={(values, { setSubmitting }) => {
		    						// setTimeout(() => {
		    						// 	alert(JSON.stringify(values, null, 2));
		    						handleShow();
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
								    					type={state.loginpage.pswvis ? 'text' : 'password'}
								    					name="password"
								    					onChange={handleChange}
								    					onBlur={handleBlur}
								    					value={values.password}
								    					className={!(errors.password && touched.password && errors.password) ? 'form-control' : 'form-control is-invalid'}
							    					/>
							    					{
							    						state.loginpage.pswvis ? <FaEyeSlash className="eye-icon" onClick={() => dispatch(psw_vis())}/> :
							    						<FaEye className="eye-icon" onClick={() => dispatch(psw_vis())}/>
							    					}
							    				</div>
						    					<div className="validation-error">
						    						{errors.password && touched.password && errors.password}
						    					</div>
						    				</div>
					    					<div className="d-flex justify-content-between mt-sm-5 mt-4 flex-wrap">
						    					<div className="form-check me-3">
							    					<Field type="checkbox" name="rememberme" value="1" className="form-check-input" id="rememberme"/>
							    					<label className="form-check-label" htmlFor="rememberme">Remember Me</label>
						    					</div>
						    					<div className="form-check">
							    					<Field type="checkbox" name="forgot-password" value="1" className="form-check-input" id="forgot-password"/>
							    					<label className="form-check-label" htmlFor="forgot-password">Forgot password?</label>
						    					</div>
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

	    <div className="modal fade" id="status-check" role="dialog" aria-labelledby="status-check" aria-hidden="true">
		    <div className="modal-dialog modal-dialog-centered" role="document">
			    <div className="modal-content">
				    <div className="modal-header justify-content-center">
					    <h5 className="modal-title">Check Status</h5>
					    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
					    	<span aria-hidden="true"><AiOutlineClose /></span>
					    </button>
				    </div>
				    <div className="modal-body">
				    	<div className="text-center">
				    		<p className="m-0">Sorry,</p>
				    		<p className="m-0">Something went wrong. Use Registration failed</p>
				    	</div>
				    </div>
				    <div className="modal-footer flex-column">
					    <button type="button" className="modal-signin" data-bs-dismiss="modal" onClick={redirect}>Sign in</button>
					    <p>Thanks</p>
				    </div>
			    </div>
		    </div>
	    </div>

	    <Modal show={show} onHide={handleClose} centered>
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
          <button type="button" className="modal-signin" data-bs-dismiss="modal" onClick={redirect}>Sign in</button>
					<p>Thanks</p>
        </Modal.Footer>
      </Modal>

    </div>
  );
}
export default  BuyerLogin;