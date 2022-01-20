import React, { useState, useEffect, Component, FormEvent, MouseEvent } from 'react';
import { Link } from "react-router-dom";
import '../../../../m-login.scss';
import $ from 'jquery';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Vector1 from "../../../../../assets/icons/octicon_organization-24.svg";
import Vector2 from "../../../../../assets/icons/vector2.svg";
import { BsPlusLg } from "react-icons/bs";
import { AiFillCaretLeft, AiFillExclamationCircle } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import Stepper from '../../../../../component/stepper/stepper';
import { ChangeEvent } from 'react';
import * as Yup from 'yup';
import { Formik, Field } from "formik";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import logo_img from '../../../../../assets/insertImage.png';
import { FaRegCalendarAlt, FaRegEdit } from 'react-icons/fa';
import Select from '../../../../../component/dropdown_select/slelect';
import { ImAttachment, ImCross, ImFilePdf } from 'react-icons/im';
import { boolean } from 'yargs';
import { Button, Container, Modal, Row } from 'react-bootstrap';
import Vector3 from "../../../../assets/icons/various/Vector3.svg"
import Vector5 from "../../../../../assets/icons/various/Vector5.svg"
import { RiArrowDropRightLine } from 'react-icons/ri';
import Businesshour from '../../commonFiles/businessHrs';
import DatePicker from '../../../../../component/calendar/calendar';
import { threadId } from 'worker_threads';

interface typeState {
	linetype: string;
	logoImage: string;
	uploadlogo: string,
	uploadedFile?: any,
	step1: boolean,
	step2: boolean,
	step3: boolean,
	step4: boolean,
	showModel: boolean,
	modalreport: boolean,
	selectReport: any,
	reportfile: any,
	gstfile: any
	selectedarray: any
}

class Organization extends Component<{}, typeState> {
	constructor(props: any) {
		super(props);
		this.state = {
			linetype: "",
			logoImage: "",
			uploadlogo: "",
			uploadedFile: '',
			step1: true,
			step2: false,
			step3: false,
			step4: false,
			showModel: false,
			modalreport: false,
			selectReport: [{ name: 'Credit Report', files: [] },
			{ name: 'Risk Report', files: [] },
			{ name: 'Banking & Relationship Report', files: [] },
			{ name: 'Legal Report', files: [] }],
			selectedarray: [],
			gstfile: '',
			reportfile: '',

		}
	}

	onImageChange = (event: FormEvent<HTMLInputElement>) => {
		if (event.currentTarget.files && event.currentTarget.files[0]) {
			let reader = new FileReader();
			reader.onload = (e) => {
				// setLogoImage(e.target!.result);
				this.setState({ uploadedFile: reader.result });
			};
			reader.readAsDataURL(event.currentTarget.files[0]);
		}
	}
	GSTCertificate = (event: FormEvent<HTMLInputElement>) => {
		if (event.currentTarget.files && event.currentTarget.files[0]) {

			this.setState({ gstfile: event.currentTarget.files[0] })
			console.log(event.currentTarget.files[0].name)
		}
		console.log(event)
	}
	reportFiles = (event: FormEvent<HTMLInputElement>) => {
		if (event.currentTarget.files && event.currentTarget.files[0]) {

			this.setState({ reportfile: event.currentTarget.files[0] })
			console.log(event.currentTarget.files[0].name)
		}
		console.log(event)
	}
	reportfilesAdd = () => {
		if (this.state.linetype) {
			if (this.state.reportfile) {
				for (let i = 0; i < this.state.selectReport.length; i++) {

					if (this.state.selectReport[i].name == this.state.linetype) {
						let { selectReport } = this.state;
						selectReport[i].files.push(this.state.reportfile)
						console.log('added');
						this.setState({ reportfile: '' })
					}


				}

			}

		}


	}
	// Rating & Evaluation type select
	lineTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
		let value: any = event;
		let { selectReport, linetype } = this.state;
		let selectType = value.value;
		this.setState({
			linetype: value.value
		})
	}


	step1complete = (event: MouseEvent<HTMLElement>) => {
		this.setState({
			step1: false,
			step2: true,
		})
	}
	step2complete = (event: MouseEvent<HTMLButtonElement>) => {
		this.setState({
			step2: false,
			step3: true,
		})
	}
	step3complete = (event: MouseEvent<HTMLElement>) => {
		this.setState({
			step3: false,
			step4: true,
		})
	}
	datePicker = (e: Date): any => {
	}
	LineTypeOptions = [
		{ value: 'Credit Report', label: 'Credit Report' },
		{ value: 'Risk Report', label: 'Risk Report' },
		{ value: 'Banking & Relationship Report', label: 'Banking & Relationship Report' },
		{ value: 'Legal Report', label: 'Legal Report' },
	]

	render(): React.ReactNode {
		const steps = [{ label: 'KYC', id: 0 }, { label: 'Product Selection', id: 1 }, { label: 'Machinery', id: 2 }, { label: 'Operations', id: 3 }];
		console.log(this.state.selectReport);
		const SignupSchema = Yup.object().shape({
			leagalname: Yup.string().required('Enter the leagalname'),
			estimatedate: Yup.string().required('Enter the Estimatedate'),
			pannumber: Yup.string().required('Enter the Pannumber'),
			iecode: Yup.string().required('Enter the IEcode'),
			GSTCertificate: Yup.string().required('Enter the GSTCertificate'),
			WebsiteLink: Yup.string().required('Enter the WebsiteLink'),
			SocialMediaLink: Yup.string().required('Enter the SocialMediaLink'),
		});
		const { uploadedFile } = this.state;
		return (
			<div className="kyc-org-kyc h-100">
				<div className="organization h-100">

					<Stepper steps={steps} activeStep={0} />
					<div className="box">
						{
							!this.state.step1 ?
								<div className="d-flex align-items-center justify-content-end pt-4">
									<button className="summarybtn">Summary<MdKeyboardArrowRight /></button>
								</div> : <></>
						}
						{
							this.state.step1 ?
								<div className="organstep1">
									<div className="contentcen">
										<div className="orgcon">
											<AiFillExclamationCircle />
											<div className="org-card" onClick={this.step1complete}>
												<div className="imgshow mb-4">
													<img src={Vector1} />
													<p className="text-center my-3">Syndicate Fashions</p>
												</div>
											</div>
										</div>
									</div>
									<span className="clickadd">Click to start with the Organization kYC</span>
								</div> :
								this.state.step2 ?
									<div className="organization organstep2 machine main d-flex step2">
										<div className="h-100">
											<div className="mt-2 h-100" style={{ width: "91vw" }}>

												<PerfectScrollbar >
													<div className="h-100 businesshour px-4 pt-1 pb-5 organizationinfo">
														<div className="ps-lg-5">
															<Formik
																initialValues={{
																	leagalname: '',
																	estimatedate: '',
																	pannumber: '',
																	iecode: '',
																	GSTCertificate: '',
																	WebsiteLink: '',
																	SocialMediaLink: '',
																	uploadlogo: '',
																}}
																validationSchema={SignupSchema}
																onSubmit={(values, actions) => {
																	console.log(values);
																	localStorage.setItem("user_create_account_details", JSON.stringify(values));
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
																			{/* <button className="summarybtn">Summary<MdKeyboardArrowRight/></button> */}
																		</div>

																		<div className="row d-flex align-items-center">
																			<label className="col-md-3" htmlFor="uploadlogo" id="file-chosen">Upload Logo<span className='required'> *</span></label>
																			<div className="col-md-4 end">
																				<div className="position-relative">

																					<label htmlFor="upload-logo" id="file-chosen"> </label>
																					<Field type="file" id="upload-logo" name="uploadlogo" onChange={this.onImageChange} hidden />
																					<label htmlFor="upload-logo"><img src={uploadedFile ? uploadedFile : logo_img} className="logo-img" /></label>
																					<div className="text-danger">
																						{errors.uploadlogo && touched.uploadlogo ? (
																							<div>{errors.uploadlogo}</div>
																						) : null}</div>
																				</div>
																			</div>
																		</div>
																		<div className="row mt-4 d-flex align-items-center position-relative">
																			<label className="col-md-3" htmlFor="upload-logo" id="file-chosen">Legal name of the company<span className='required'> </span></label>
																			<div className="col-md-4">
																				<label htmlFor="leagal_name" id="leagal_name"> </label>
																				<Field aria-label="leagal_name" type="text" id="" className="input-box legal-name" name="leagalname" placeholder="Syndicate Fashions"
																					onChange={handleChange}
																					onBlur={handleBlur}
																					value={values.leagalname} />
																				<label className="position-absolute edit"><FaRegEdit /></label>
																				<div className="text-danger">
																					{errors.leagalname && touched.leagalname ? (
																						<div>{errors.leagalname}</div>
																					) : null}</div>
																			</div>
																		</div>

																		<div className="row mt-30 d-flex align-items-center">
																			<label className="col-md-3" htmlFor="upload-logo" id="file-chosen">Constitution of the form<span className='required'> *</span></label>
																			<div className="col-md-4">
																				<form data-testid="form-line-type">
																					<label htmlFor="line-type" hidden>Select from options</label>
																					<Select
																						options={this.LineTypeOptions}
																						width='100%'
																						position='bottom'
																						name="linetype"
																						inputId="line-type"
																						placeholder='Select from options'
																						onChange={this.lineTypeChange}
																						isOptionDisabled={(option: any) => option.disabled}
																					/>
																				</form>
																			</div>
																		</div>
																		<div className="row mt-30 d-flex align-items-center position-relative">
																			<label className="col-md-3" htmlFor="upload-logo" id="file-chosen">Establishment date<span className='required'> *</span></label>
																			<div className="col-md-4">

																				<label htmlFor="estimate_date" id="estimate_date"> </label>
																				<DatePicker onChange={(e) => this.datePicker(e)} />
																				{/* <Field aria-label="estimate_date" type="date" id="" className="input-date" name="estimatedate" placeholder="DD/MM/YYYY" /> */}
																				{/* <label className="position-absolute calender"><FaRegCalendarAlt/></label> */}
																				<div className="text-danger">
																					{errors.estimatedate && touched.estimatedate ? (
																						<div>{errors.estimatedate}</div>
																					) : null}</div>
																			</div>
																		</div>
																		<div className="row mt-30 d-flex align-items-center">
																			<label className="col-md-3" htmlFor="upload-logo" id="file-chosen">PAN Number<span className='required'> *</span></label>
																			<div className="col-md-4">
																				<label htmlFor="pan_number" id="pan_number"> </label>
																				<Field aria-label="pan_number" type="text" id="" className="input-box" name="pannumber" placeholder="ABCDXXXXXX" />
																				<div className="text-danger">{errors.pannumber && touched.pannumber ? (
																					<div>{errors.pannumber}</div>
																				) : null}</div>
																			</div>
																		</div>
																		<div className="row mt-30 d-flex align-items-center">
																			<label className="col-md-3" htmlFor="upload-logo" id="file-chosen">Import/Export Code <span style={{ color: '#0067E5' }}>( only India )</span></label>
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
																				<label className="input-field input-box" htmlFor="GSTCertificate1" id="GSTCertificate" >Attach your files here </label>
																				{/* <input
																					type="text"
																					// htmlFor="credit-file"
																					placeholder="Attach your files here"
																					className="input-field input-box"
																					readOnly
																				/> */}
																				<Field
																					type="file"
																					aria-label="GSTCertificate"
																					id="GSTCertificate1"
																					name="GSTCertificate"
																					onChange={(e: any) => this.GSTCertificate(e)}
																					hidden
																				/>
																				<label htmlFor="GSTCertificate1" className="attach position-absolute">
																					<ImAttachment className="Attach-file " />
																				</label>
																				<div className="text-danger">{errors.GSTCertificate && touched.GSTCertificate ? (
																					<div>{errors.GSTCertificate}</div>
																				) : null}</div>
																			</div>
																			<span className=" pdf-attach col-lg-4 mx-2 my-1 ">{this.state.gstfile ? <><ImFilePdf className='pdf-icon' /> {this.state.gstfile.name}</> : ''}</span>
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
																								position='bottom'
																								name="linetype"
																								inputId="line-type"
																								placeholder='Select Report'
																								onChange={this.lineTypeChange}
																								isOptionDisabled={(option: any) => option.disabled}
																							/>
																						</div>

																						<div className="validation-error">
																							{/* {errors.GSTType && touched.GSTType && errors.GSTType} */}
																						</div>
																					</div>
																				</div>
																				<div className="col-lg-4 position-relative">
																					<label htmlFor="credit-file" className="input-field input-box" >Attach your files here</label>
																					{/* <input
																						type="text"
																						id="credit-file1"
																						placeholder="Attach your files here"
																						className="input-field input-box"
																						readOnly
																					/> */}
																					<Field
																						type="file"
																						aria-label="GSTCertificate"
																						id="credit-file"
																						name="GSTCertificate"
																						onChange={(e: any) => this.reportFiles(e)}
																						hidden
																					/>

																					<label htmlFor="credit-file" className="attach position-absolute">
																						<ImAttachment className="Attach-file " />

																					</label>

																					<div className="text-danger">{errors.GSTCertificate && touched.GSTCertificate ? (
																						<div>{errors.GSTCertificate}</div>
																					) : null}</div>
																				</div>

																				<span className=" pdf-attach col-lg-4  mx-2 my-1 ">{this.state.reportfile ? <><ImFilePdf className='pdf-icon' /> {this.state.reportfile.name}</> : ''}</span>


																				<div className="row end">
																					<div className="col-md-3"></div>
																					<div className="col-md-9">
																						<div className="add-button d-flex mt-3">
																							<div className="add-btn addsty">
																								<BsPlusLg className="add-icon" onClick={this.reportfilesAdd} />
																							</div>
																							<span>Add</span>
																							<ul className="rating">
																								{this.state.selectReport.length > 0 ?
																									this.state.selectReport.map((item: any, key: any) => {
																										return <>
																											<li><span className="clrblue" onClick={() => this.setState({ modalreport: true })}>{item.name}{item.files.length > 0 ? <span className="circle">{item.files.length}</span> : ''} </span>
																												<span className="clrchnge">|</span></li>
																										</>
																									})
																									: <></>
																								}
																								{/* <li><span className="clrblue" onClick={() => this.setState({ modalreport: true })}>Credit Report{this.state.selectReport[0].files.length > 0 ? <span className="circle">{this.state.selectReport[0].files.length}</span> : ''} </span>
																									<span className="clrchnge">|</span></li>
																								<li><span className="clrblue">Risk Report{this.state.selectReport[1].files.length > 0 ? <span className="circle">{this.state.selectReport[1].files.length}</span> : ''} </span>
																									<span className="clrchnge">|</span></li>
																								<li><span className="clrblue">Banking & Relationship Report{this.state.selectReport[2].files.length > 0 ? <span className="circle">{this.state.selectReport[2].files.length}</span> : ''} </span>
																									<span className="clrchnge">|</span></li>
																								<li><span className="clrblue">Legal Report{this.state.selectReport[3].files.length > 0 ? <span className="circle">{this.state.selectReport[3].files.length}</span> : ''} </span></li> */}
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
																							<BsPlusLg className="add-icon" />
																						</div>
																						<span>Add</span>
																					</div>
																					<div className="text-danger">{errors.SocialMediaLink && touched.SocialMediaLink ? (
																						<div>{errors.SocialMediaLink}</div>
																					) : null}</div>
																				</div>
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
									</div> :
									this.state.step3 ?
										<div className="machine main d-flex facilitykyc1 organstep3">
											<div className="h-100">
												{/* <div className="crossicon">
										<ImCross className="cross" />
									</div> */}
												<div className="h-100" style={{ width: "91vw" }}>

													<div className="scroll">
														<PerfectScrollbar>
															<div className="d-flex flex-wrap pe-4 facilityform h-100">
																<Container>
																	<div className="ps-xl-5">
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
																					<div className="h-100 facilityform">
																						<div className="d-flex align-items-center justify-content-space-between">
																							<h5 className="">Location</h5>
																						</div>
																						<div className="row mt-4 d-flex ">
																							<h3 className="col-md-3">Address<span className='required'> </span></h3>
																							<div className="col-md-5">
																								<Field type="text" id="" className="input-box" name="line1" aria-label="line1" placeholder="Line 1" />
																								<Field type="text" id="" className="input-box" name="line2" aria-label="line2" placeholder="Line 2" />
																								<Field type="text" id="" className="input-box add" name="state" aria-label="state" placeholder="State" />
																								<Field type="text" id="" className="input-box add" name="country" aria-label="country" placeholder="Country" />
																								<Field type="text" id="" className="input-box add" name="pincode" aria-label="pincode" placeholder="Pincode" />
																							</div>
																						</div>
																						<div className="row mt-3 d-flex ">
																							<h3 className="col-md-3">Location Validity (If any)<span className='required'></span></h3>
																							<div className="col-md-5">
																								<form data-testid="form-line-type">
																									<Select
																										options={this.LineTypeOptions}
																										width='480px'
																										position='top'
																										name="linetype"
																										inputId="line-type"
																										placeholder='Select from options'
																										onChange={this.lineTypeChange}
																										isOptionDisabled={(option: any) => option.disabled}
																									/>
																								</form>
																								<Field type="text" id="" className="input-box mt-3" name="mentionnumber" aria-label="mentionnumber" placeholder="Mention Number" />
																							</div>
																						</div>
																						<div className="row mt-3 d-flex ">
																							<h3 className="col-md-3">Reverse Gecoding<span className='required'> </span></h3>
																							<div className="col-md-5">
																								<Field type="text" id="" className="input-box" name="locationmap" aria-label="locationmap" placeholder="Enter Latitude" />
																								<div className="plusIcon d-flex">
																									<img src={Vector5} className="image_one" alt="" />
																									<p>  Add in case of multiple locations</p>
																								</div>
																							</div>
																						</div>
																						<div className="d-flex align-items-center justify-content-space-between">
																							<h5 className="mt-4">Contact</h5>
																						</div>
																						<div className="row mt-3 d-flex ">
																							<h3 className="col-md-3">Phone No. <span className='required'> </span></h3>
																							<div className="col-md-5">
																								<Field type="number" id="" className="input-box" name="service" aria-label="service" placeholder="+91 XXXXXXXXX" />
																							</div>
																						</div>
																						<div className="row mt-3 d-flex ">
																							<h3 className="col-md-3">Email -Id<span className='required'> </span></h3>
																							<div className="col-md-5">
																								<Field type="text" id="" className="input-box" name="customercareadministration" aria-label="customercareadministration" placeholder="xyz@gmail.com or company Id" />
																								<div className="plusIcon d-flex">
																									<img src={Vector5} className="image_one" alt="" />
																									<p>  Add in case of multiple locations</p>
																								</div>
																							</div>
																						</div>
																						<div className="d-flex align-items-center justify-content-space-between">
																							<h5 className="mt-4">Service Contact</h5>
																						</div>
																						<div className="row mt-3 d-flex ">
																							<h3 className="col-md-3">Type of service<span className='required'> </span></h3>
																							<div className="col-md-5">
																								<Field type="text" id="" className="input-box" name="service" aria-label="service" placeholder="Customer service, etc" />
																							</div>
																						</div>
																						<div className="row mt-3 d-flex ">
																							<h3 className="col-md-3">Service<span className='required'> </span></h3>
																							<div className="col-md-5">
																								<Field type="number" id="" className="input-box" name="service" aria-label="service" placeholder="+91 XXXXXXXXX" />
																							</div>
																						</div>
																						<div className="row mt-3 d-flex ">
																							<h3 className="col-md-3">Customer care administration<span className='required'> </span></h3>
																							<div className="col-md-5">
																								<Field type="text" id="" className="input-box" name="reversegecoding" aria-label="reversegecoding" placeholder="xyz@gmail.com or company Id" />
																								<div className="plusIcon d-flex">
																									<img src={Vector5} className="image_one" alt="" />
																									<p>  Add in case of multiple service contacts</p>
																								</div>
																							</div>
																						</div>

																					</div>
																				</form>
																			)}
																		</Formik>

																	</div>
																</Container>
															</div>
														</PerfectScrollbar>
													</div>

												</div>
											</div>
										</div> :
										<div className="content">
											<Businesshour onClick={() => { }} />
										</div>
						}
						{
							!this.state.step1 ?
								<div className="col-md-11 m-auto pb-4 pt-4 mb-2">
									<div className="row">
										<div className="w-100 d-flex justify-content-center">
											{/* <button title="backbutton" type="button" className="btn btn-back mx-2 back float-start"><AiFillCaretLeft />&emsp;Back</button> */}
											<div className="w-30 m-auto">
												<button
													title="removebutton"
													type="button"
													className="btn btn-default mx-4 remove"
												>Clear
												</button>
												<button
													title="savebutton"
													onClick={this.state.step2 ? this.step2complete : this.step3complete}
													type="button"
													className="btn btn-default mx-4 saveq"
												>Save
												</button>
											</div>
											<button title="nextbutton" type="submit" className="btn btn-back mx-4 next float-end nextbtn">Next&emsp;<AiFillCaretRight />
											</button>
										</div>
									</div>
								</div> :
								<></>
						}
					</div>
					<Modal
						show={this.state.showModel}
						onHide={() => this.setState({ showModel: false })}
						size="lg"
						aria-labelledby="contained-modal-title-vcenter"
						centered
						className="organizationinfomodal"
						backdropClassName="organizationinfomodal"
					>
						<Modal.Header closeButton />
						<Modal.Body className="">
							<PerfectScrollbar
								options={{ suppressScrollY: false, suppressScrollX: true }}
								onScrollY={(container) =>
									console.log(`scrolled to: ${container.scrollTop}.`)
								}
							>
								<div className="organisyn">
									<div className="profilechoose d-flex">
										<label htmlFor="upload-logo" id="file-chosen"> </label>
										{/* <Field type="file" id="upload-logo" name="upload_logo" hidden/> */}
										<label htmlFor="upload-logo"><img src={logo_img} alt="insertImage" className="logo-img mr-3" /></label>
										<div><h3 className="syshead">Syndicate Fashions
											<label className="position-absolute edit"><FaRegEdit /></label></h3>
											<p data-testid="para">Private Limited Company</p>
											<span className="text-muted">DD/MM/YYYY</span></div>
									</div>
									<ul>
										<li><span>PAN Number <span className="clrred">*</span></span>
											<span className="clrchnge">ABCDXXXXXX</span></li>
										<li><span>I/E Code <span className="clrblue">( only India )</span></span>
											<span className="clrchnge">Text</span></li>
										<li><span>Company Registration Certificate <span className="clrred">*</span></span>
											<span className="clrchnge">Attach your files here</span></li>
									</ul>
									<ul>
										<h5>Tax Registration<label className="position-absolute edit"><FaRegEdit /></label></h5>
										<li className="d-flex"><span className="wdth30">GST Type</span>
											<span className="clrchnge">ABCDXXXXXX</span></li>
										<li className="d-flex"><span className="wdth30">GST Number</span>
											<span className="clrchnge">Text</span></li>
										<li className="d-flex"><span className="wdth30">GST Certificate</span>
											<span className="clrchnge">Attach your files here</span></li>
									</ul>
									<ul className="rating">
										<h5>Rating & Evaluation<label className="position-absolute edit"><FaRegEdit /></label></h5>
										<li><span className="clrblue">Credit Report<span className="circle">1</span> </span>
											<span className="clrchnge">|</span></li>
										<li><span className="clrblue">Risk Report<span className="circle">1</span></span>
											<span className="clrchnge">|</span></li>
										<li><span className="clrblue">Banking & Relationship Report</span>
											<span className="clrchnge">|</span></li>
										<li><span className="clrblue">Legal Report</span></li>
									</ul>

									<h5>Company Link<label className="position-absolute edit"><FaRegEdit /></label></h5>
									<ul className="row">

										<li className="d-flex">
											<span className="wdth30">Website Link</span>
											<span className="clrchnge">www.BCDXXXXXX</span>
										</li>
										<li className="d-flex">
											<span className="wdth30">Social Media Link</span>
											<span className="clrchnge">www.BCDXXXXXX</span>
										</li>
									</ul>

									<h5>Location<label className="position-absolute edit"><FaRegEdit /></label></h5>
									<ul className="row">
										<li className="d-flex">
											<span className="wdth30">Location 1:-</span>
											<div>
												<p className="clrchnge">ABCDXXXXXX</p>
												<p className="clrchnge">ABCDXXXXXX</p>
												<p className="clrchnge">ABCDXXXXXX</p>
											</div>
										</li>

									</ul>
									<h5>Business Hours<label className="position-absolute edit"><FaRegEdit /></label></h5>
									<h4>Days</h4>
									<ul className="row">
										<li className="d-flex">
											<span className="wdth30">Monday</span>
											<span className="clrblur">8 AM - 6PM</span>
										</li>
										<li className="d-flex">
											<span className="wdth30">Tuesday</span>
											<span className="clrblur">8 AM - 6PM</span>
										</li>
										<li className="d-flex">
											<span className="wdth30">Wednesday</span>
											<span className="clrblur">8 AM - 6PM</span>
										</li>
										<li className="d-flex">
											<span className="wdth30">Thrusday</span>
											<span className="clrblur">8 AM - 6PM</span>
										</li>
										<li className="d-flex">
											<span className="wdth30">Friday</span>
											<span className="clrblur">8 AM - 6PM</span>
										</li>
										<li className="d-flex">
											<span className="wdth30">Saturday</span>
											<span className="clrblur">8 AM - 6PM</span>
										</li>
										<li className="d-flex">
											<span className="wdth30">Sunday</span>
											<span className="clrblur">8 AM - 6PM</span>
										</li>

									</ul>
								</div>



							</PerfectScrollbar>
						</Modal.Body>
					</Modal>
					<Modal
						show={this.state.modalreport}
						size="lg"
						onHide={() => this.setState({ modalreport: false })}
						aria-labelledby="contained-modal-title-vcenter"
						centered
						className="organizationinfomodal"
						backdropClassName="organizationinfomodal"
					>
						<Modal.Header closeButton />
						<Modal.Body className="pdfmodal">
							<div className="header_discription">
								<p className="topbox">Credit Report
								</p>
							</div>
							<PerfectScrollbar
								options={{ suppressScrollY: false, suppressScrollX: true }}
								onScrollY={(container) =>
									console.log(`scrolled to: ${container.scrollTop}.`)
								}
							>
								<div className="modalorgani">
									<div className="pdf1">
										<ImFilePdf />
										<p>Pdf.1</p>
									</div>
									<div className="pdf1">
										<ImFilePdf />
										<p>Pdf.1</p>
									</div>
									<div className="pdf1">
										<ImFilePdf />
										<p>Pdf.1</p>
									</div>
									<div className="pdf1">
										<ImFilePdf />
										<p>Pdf.1</p>
									</div>
									<div className="pdf1">
										<ImFilePdf />
										<p>Pdf.1</p>
									</div>
									<div className="pdf1">
										<ImFilePdf />
										<p>Pdf.1</p>
									</div>
									<div className="pdf1">
										<ImFilePdf />
										<p>Pdf.1</p>
									</div>
									<div className="pdf1">
										<ImFilePdf />
										<p>Pdf.1</p>
									</div>
									<div className="pdf1">
										<ImFilePdf />
										<p>Pdf.1</p>
									</div>
									<div className="pdf1">
										<ImFilePdf />
										<p>Pdf.1</p>
									</div>
									<div className="pdf1">
										<ImFilePdf />
										<p>Pdf.1</p>
									</div>
									<div className="pdf1">
										<ImFilePdf />
										<p>Pdf.1</p>
									</div>
									<div className="pdf1">
										<ImFilePdf />
										<p>Pdf.1</p>
									</div>
									<div className="pdf1">
										<ImFilePdf />
										<p>Pdf.1</p>
									</div>
									<div className="pdf1">
										<ImFilePdf />
										<p>Pdf.1</p>
									</div>
									<div className="pdf1">
										<ImFilePdf />
										<p>Pdf.1</p>
									</div>
								</div>
							</PerfectScrollbar>
						</Modal.Body>
					</Modal>
				</div>
			</div>
		);
	}
}
export default Organization;