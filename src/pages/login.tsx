import React, { Component } from 'react';
import { Link, Navigate } from "react-router-dom";
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
import Login from "../component/login/login";


import $ from 'jquery';
import { Modal, Button } from 'react-bootstrap';
import { delay } from 'redux-saga/effects';


interface MyFormValues {
	email?: string,
	password?: string
}
interface typeState {
	show: boolean,
	psw_vis: boolean,
	submitSuccess: boolean,
	successMessage: string,
}
interface typeProps {
	userLogin: (arg: {}) => void;
	login: any
}

class ManufacturerLogin extends Component<typeProps, typeState> {
	constructor(props: any) {
		super(props);
		this.state = {
			show: false,
			psw_vis: false,
			submitSuccess: false,
			successMessage: '',
		}
		console.log(props)
	}

	psw_visible = () => {
		this.setState({ psw_vis: !this.state.psw_vis });
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
	submit = async () => {
		setTimeout(() => {
			let data: any = this.props;
			console.log(this.props.login.login_details.code);
			if (this.props.login.login_details.code == 200) {
				localStorage.setItem("authenticate-token", this.props.login.login_details.data.token);
				this.redirect();
			}
			else {
				this.setState({
					successMessage: this.props.login.login_details.data.message
				})
				this.handleShow();
			}
		}, 500);
	}

	redirect = () => {
		this.setState({
			submitSuccess: true,
		});
	};
	initialValues: MyFormValues = { email: '', password: '' };

	render(): JSX.Element {
		if (this.state.submitSuccess === true) {
			return <Navigate to="/home" />
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
								<Login formName="Login" buttonName="Submit" onSubmit={this.submit} />
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
							<p className="m-0">{this.state.successMessage}</p>
						</div>
					</Modal.Body>
					<Modal.Footer className="modal-footer flex-column">
						{/* <button type="button" className="modal-signin" data-bs-dismiss="modal" onClick={this.handleClose} >Sign in</button> */}
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

const mapDispatchToProps = (dispatch: any, props: any) => {
	return {
		userLogin: (userDetail: {}) => {
			dispatch(login(userDetail));
		},
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(ManufacturerLogin);
// export default  ManufacturerLogin;