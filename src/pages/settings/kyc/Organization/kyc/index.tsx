import React, { useState,useEffect,Component, FormEvent, MouseEvent } from 'react';
import { Link } from "react-router-dom";
import '../../../../m-login.scss';
import "./index.css";
import $ from 'jquery';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Vector1 from "../../../../../assets/icons/vector1.svg";
import Vector2 from "../../../../../assets/icons/vector2.svg";
import { BsPlusLg } from "react-icons/bs";
import { AiFillCaretLeft, AiFillExclamationCircle } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import Stepper from '../../../../../component/stepper/stepper';
import { ChangeEvent } from 'react';
import * as Yup from 'yup';
import { Formik , Field } from "formik";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import logo_img from  '../../../../../assets/insertImage.png';
import { FaRegCalendarAlt, FaRegEdit } from 'react-icons/fa';
import Select from '../../../../../component/dropdown_select/slelect';
import { ImAttachment, ImCross, ImFilePdf } from 'react-icons/im';
import { boolean } from 'yargs';
import { Button, Container, Modal, Row } from 'react-bootstrap';
import Vector3 from "../../../../assets/icons/various/Vector3.svg"
import Vector5 from "../../../../../assets/icons/various/Vector5.svg"
import { RiArrowDropRightLine } from 'react-icons/ri';
import DatePicker from '../../../../../component/calendar/calendar';


interface typeState {
	linetype: string;
	logoImage:string;
	uploadlogo:string,
	uploadedFile?: any,
	step1: boolean,
	step2: boolean,
	step3: boolean,
	step4: boolean,
	showModel: boolean,
	modalreport : boolean,
}

class Organization extends Component<{}, typeState> {
    constructor(props:any){
		super(props);
		this.state={
		  linetype :"",
		  logoImage:"",
		  uploadlogo:"",
		  uploadedFile: '',
		  step1: true,
		  step2: false,
		  step3: false,
		  step4: false,
		  showModel: false,
		  modalreport: false,
		}
	}

	onImageChange = (event:FormEvent<HTMLInputElement>) => {
		if (event.currentTarget.files && event.currentTarget.files[0]) {
		  let reader = new FileReader();
		  reader.onload = (e) => {
				// setLogoImage(e.target!.result);
				this.setState({ uploadedFile: reader.result });
			};
		  reader.readAsDataURL(event.currentTarget.files[0]);
		}
	}
	lineTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
		let value:any = event;
		this.setState({
			linetype: value.value
		})
	}

	step1complete = (event:MouseEvent<HTMLElement>) => {
		this.setState({
			step1: false,
			step2: true,
		})
	}
	step2complete = (event:MouseEvent<HTMLButtonElement>) => {
		this.setState({
			step2: false,
			step3: true,
		})
	}
	step3complete = (event:MouseEvent<HTMLElement>) => {
		this.setState({
			step3: false,
			step4: true,
		})
	}

	initialValues = {
		mon_start_time: 0,
		mon_end_time: 0,
		tue_start_time: 0,
		tue_end_time: 0,
		wed_start_time: 0,
		wed_end_time: 0,
		thur_start_time: 0,
		thur_end_time: 0,
		fri_start_time: 0,
		fri_end_time: 0,
		sat_start_time: 0,
		sat_end_time: 0,
		sun_start_time: 0,
		sun_end_time: 0,
		day:
		{
			mon_start_time_day: '',
			mon_end_time_day: '',
			tue_start_time_day: '',
			tue_end_time_day: '',
			wed_start_time_day: '',
			wed_end_time_day: '',
			thur_start_time_day: '',
			thur_end_time_day: '',
			fri_start_time_day: '',
			fri_end_time_day: '',
			sat_start_time_day: '',
			sat_end_time_day: '',
			sun_start_time_day: '',
			sun_end_time_day: ' ',
		}
	}
	datePicker = (e:Date):any =>{
	}

	LineTypeOptions = [
		{ value: 'Open', label: 'Open' },
		{ value: 'Reserved', label: 'Reserved'},
	]

	render(): React.ReactNode {
		const steps = [{ label: 'KYC',id:0}, { label: 'Product Selection',id:1}, { label: 'Machinery',id:2 }, { label: 'Operations',id:3 }];
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
			<div className="organization h-100">
				
				<Stepper steps={steps} activeStep={0} />
				<div className="box">
				<div className="d-flex align-items-center justify-content-end pt-4">
					<button className="summarybtn">Summary<MdKeyboardArrowRight/></button>
				</div> 
				{
					this.state.step1 ? 
					<div className="organstep1">    
						<div className="contentcen">
							<div className="orgcon">
								<AiFillExclamationCircle/>
								<div className="org-card" onClick={this.step1complete}>						
									<div className="imgshow mb-4">
										<img src={Vector1}/>
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
							<div className="mt-2 h-100">
							
								<PerfectScrollbar >
									<div className="h-100 businesshour px-4 pt-1 pb-5 organizationinfo">									
										<div className="ps-lg-5">
											<Formik
												initialValues={{
													leagalname:'',
													estimatedate:'',
													pannumber:'',
													iecode:'',
													GSTCertificate:'',
													WebsiteLink:'',
													SocialMediaLink:'',
													uploadlogo:'',
												}}
												validationSchema={SignupSchema}
												onSubmit={(values,actions) => {
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
															<label className="col-md-3"  htmlFor="uploadlogo" id="file-chosen">Upload Logo<span className='required'> *</span></label>
															<div className="col-md-4 end">
															<div className="position-relative">
																
															<label htmlFor="upload-logo" id="file-chosen"> </label>
															<Field type="file" id="upload-logo" name="uploadlogo"  onChange={this.onImageChange} hidden/>
															<label htmlFor="upload-logo"><img src={ uploadedFile ? uploadedFile :  logo_img }  className="logo-img" /></label>
															<div className="text-danger">
															{errors.uploadlogo && touched.uploadlogo ? (
																	<div>{errors.uploadlogo}</div>
																	) : null}</div>
															</div>
															</div>
														</div>
														<div className="row mt-4 d-flex align-items-center position-relative">
															<label className="col-md-3"  htmlFor="upload-logo" id="file-chosen">Legal name of the company<span className='required'> </span></label>
															<div className="col-md-4">
																<label htmlFor="leagal_name" id="leagal_name"> </label>
																<Field aria-label="leagal_name"  type="text" id="" className="input-box legal-name" name="leagalname" placeholder="Syndicate Fashions" 
																onChange={handleChange}
																onBlur={handleBlur}
																value={values.leagalname}/>                          
																<label className="position-absolute edit"><FaRegEdit/></label>
																<div className="text-danger">
																{errors.leagalname && touched.leagalname ? (
																	<div>{errors.leagalname}</div>
																	) : null}</div>
															</div>
														</div>

														<div className="row mt-30 d-flex align-items-center">
															<label className="col-md-3"  htmlFor="upload-logo" id="file-chosen">Constitution of the form<span className='required'> *</span></label>
															<div className="col-md-4">
															<form data-testid="form-line-type">
																<label htmlFor="line-type" hidden>Select from options</label>
																<Select 
																options={this.LineTypeOptions} 
																width='391px' 
																position='top' 
																name="linetype"
																inputId="line-type"
																placeholder='Select from options'
																onChange={this.lineTypeChange}
																isOptionDisabled={(option:any) => option.disabled}
																/>
															</form>
															</div>
														</div>
														<div className="row mt-30 d-flex align-items-center position-relative">
															<label className="col-md-3"  htmlFor="upload-logo" id="file-chosen">Establishment date<span className='required'> *</span></label>
															<div className="col-md-4">
																<label htmlFor="estimate_date" id="estimate_date"> </label>
																<Field aria-label="estimate_date" type="date" id="" className="input-date" name="estimatedate" placeholder="DD/MM/YYYY" />
																<label className="position-absolute calender"><FaRegCalendarAlt/></label>
																<div className="text-danger">
																{errors.estimatedate && touched.estimatedate ? (
																	<div>{errors.estimatedate}</div>
																	) : null}</div>
															</div>
														</div>
														<div className="row mt-30 d-flex align-items-center">
															<label className="col-md-3"  htmlFor="upload-logo" id="file-chosen">PAN Number<span className='required'> *</span></label>
															<div className="col-md-4">
																<label htmlFor="pan_number" id="pan_number"> </label>
																<Field aria-label="pan_number" type="text" id="" className="input-box" name="pannumber" placeholder="ABCDXXXXXX" />
																<div className="text-danger">{errors.pannumber && touched.pannumber ? (
																	<div>{errors.pannumber}</div>
																	) : null}</div>
															</div>
														</div>
														<div className="row mt-30 d-flex align-items-center">
															<label className="col-md-3"  htmlFor="upload-logo" id="file-chosen">Import/Export Code <span style={{color:'#0067E5'}}>( only India )</span></label>
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
															<div className="text-danger">{errors.GSTCertificate && touched.GSTCertificate ? (
																<div>{errors.GSTCertificate}</div>
																) : null}</div>
														</div>
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
																position='top' 
																name="linetype"
																inputId="line-type"
																placeholder='Select Report'
																onChange={this.lineTypeChange}
																isOptionDisabled={(option:any) => option.disabled}
															/>
															</div> 
															<div className="validation-error"> 
																{/* {errors.GSTType && touched.GSTType && errors.GSTType} */}
															</div>
															</div>
															</div>
															<div className="col-lg-4 position-relative">
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
															<div className="text-danger">{errors.GSTCertificate && touched.GSTCertificate ? (
																<div>{errors.GSTCertificate}</div>
																) : null}</div>
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
																	<li><span className="clrblue" onClick={()=>this.setState({modalreport:true})}>Credit Report<span className="circle">1</span> </span>
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
																	<BsPlusLg  className="add-icon"/>
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
							<div className="h-100">
							
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
																		isOptionDisabled={(option:any) => option.disabled}
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
					<div className="content business organstep4">
					
						<PerfectScrollbar>
							<div className='h-100 businesshour px-4 py-4'>
								<div className="ps-lg-5">
									<Formik
										initialValues = {this.initialValues}
										validate={(values:any) => {
											let errors:any = {};
											console.log(values)
											Object.keys(values).map((val:any)=>{
												console.log(val, values[val]);
												if (values[val]=='' || values[val] == undefined || values[val] == null) {
													errors[val] = 'Enter a value';
												}
												else if(values[val] > 12 || values[val] < 0 ){
													errors[val] = 'Enter a value within "12 "';
												}
											})	
											console.log(errors);
												
											return errors;
										}}
										onSubmit={(values, { setSubmitting }) => {
											this.setState({
												showModel: true,
											})
											setSubmitting(false);
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
												<form onSubmit={handleSubmit} className="ps-xl-5 form-bh">
													<div className="weekday mb-5">
														<h2>Business Hours</h2>
														<div className="d-flex title align-items-center mt-5">
															<h2 className="days">Days</h2>
															<h3 className="start px-3">Start</h3>
															<h3 className="end px-3">End</h3>
														</div>
														<div className="d-flex align-items-center py-3">
															<h3 className="days">Monday</h3>
															<div className="start d-flex align-items-center">
																<div className="position-relative">
																	<Field type="number" id="mon-start-time" name="mon_start_time" placeholder="00 hrs" />
																	<div className="validation-error">{errors.mon_start_time && touched.mon_start_time && errors.mon_start_time}</div>
																</div>
																<div>
																	<div className="custom-control custom-checkbox ms-3">
																		<Field type="checkbox" value="am" name="mon_start_time_day"  className=" custom-control-input d-none" id="mon-start-time-day"/>
																		<label htmlFor="mon-start-time-day">
																			<span className="am">AM</span>/<span className="pm">PM</span>
																		</label>
																	</div>
																</div>
															</div>
															<div className="start d-flex align-items-center">
																<div className="position-relative">
																	<Field type="number" id="mon-end-time" name="mon_end_time" placeholder="00 hrs" />
																	<div className="validation-error">{errors.mon_end_time && touched.mon_end_time && errors.mon_end_time}</div>
																</div>
																<div>
																	<div className="custom-control custom-checkbox ms-3">
																		<Field type="checkbox" value="pm" name="mon_end_time_day"  className=" custom-control-input d-none" id="mon-end-time-day"/>
																		<label htmlFor="mon-end-time-day">
																			<span className="am">AM</span>/<span className="pm">PM</span>
																		</label>
																	</div>
																</div>
															</div>
														</div>
														<div className="d-flex align-items-center py-3">
															<h3 className="days">Tuesday</h3>
															<div className="start d-flex align-items-center">
																<div className="position-relative">
																	<Field type="number" id="tue-start-time" name="tue_start_time" placeholder="00 hrs" />
																	<div className="validation-error">{errors.tue_start_time && touched.tue_start_time && errors.tue_start_time}</div>
																</div>
																<div>
																	<div className="custom-control custom-checkbox ms-3">
																		<Field type="checkbox" value="am" name="tue_start_time_day"  className=" custom-control-input d-none" id="tue-start-time-day"/>
																		<label htmlFor="tue-start-time-day">
																			<span className="am">AM</span>/<span className="pm">PM</span>
																		</label>
																	</div>
																</div>
															</div>
															<div className="start d-flex align-items-center">
																<div className="position-relative">
																	<Field type="number" id="tue-end-time" name="tue_end_time" placeholder="00 hrs" />
																	<div className="validation-error">{errors.tue_end_time && touched.tue_end_time && errors.tue_end_time}</div>
																</div>
																<div>
																	<div className="custom-control custom-checkbox ms-3">
																		<Field type="checkbox" value="pm" name="tue_end_time_day"  className=" custom-control-input d-none" id="tue-end-time-day"/>
																		<label htmlFor="tue-end-time-day">
																			<span className="am">AM</span>/<span className="pm">PM</span>
																		</label>
																	</div>
																</div>
															</div>
														</div>
														<div className="d-flex align-items-center py-3">
															<h3 className="days">Wednesday</h3>
															<div className="start d-flex align-items-center">
																<div className="position-relative">
																	<Field type="number" id="wed-start-time" name="wed_start_time" placeholder="00 hrs" />
																	<div className="validation-error">{errors.wed_start_time && touched.wed_start_time && errors.wed_start_time}</div>
																</div>
																<div>
																	<div className="custom-control custom-checkbox ms-3">
																		<Field type="checkbox" value="am" name="wed_start_time_day"  className=" custom-control-input d-none" id="wed-start-time-day"/>
																		<label htmlFor="wed-start-time-day">
																			<span className="am">AM</span>/<span className="pm">PM</span>
																		</label>
																	</div>
																</div>
															</div>
															<div className="start d-flex align-items-center">
																<div className="position-relative">
																	<Field type="number" id="wed-end-time" name="wed_end_time" placeholder="00 hrs" />
																	<div className="validation-error">{errors.wed_end_time && touched.wed_end_time && errors.wed_end_time}</div>
																</div>
																<div>
																	<div className="custom-control custom-checkbox ms-3">
																		<Field type="checkbox" value="pm" name="wed_end_time_day"  className=" custom-control-input d-none" id="wed-end-time-day"/>
																		<label htmlFor="wed-end-time-day">
																			<span className="am">AM</span>/<span className="pm">PM</span>
																		</label>
																	</div>
																</div>
															</div>
														</div>
														<div className="d-flex align-items-center py-3">
															<h3 className="days">Thursday</h3>
															<div className="start d-flex align-items-center">
																<div className="position-relative">
																	<Field type="number" id="thur-start-time" name="thur_start_time" placeholder="00 hrs" />
																	<div className="validation-error">{errors.thur_start_time && touched.thur_start_time && errors.thur_start_time}</div>
																</div>
																<div>
																	<div className="custom-control custom-checkbox ms-3">
																		<Field type="checkbox" value="am" name="thur_start_time_day"  className=" custom-control-input d-none" id="thur-start-time-day"/>
																		<label htmlFor="thur-start-time-day">
																			<span className="am">AM</span>/<span className="pm">PM</span>
																		</label>
																	</div>
																</div>
															</div>
															<div className="start d-flex align-items-center">
																<div className="position-relative">
																	<Field type="number" id="thur-end-time" name="thur_end_time" placeholder="00 hrs" />
																	<div className="validation-error">{errors.thur_end_time && touched.thur_end_time && errors.thur_end_time}</div>
																</div>
																<div>
																	<div className="custom-control custom-checkbox ms-3">
																		<Field type="checkbox" value="pm" name="thur_end_time_day"  className=" custom-control-input d-none" id="thur-end-time-day"/>
																		<label htmlFor="thur-end-time-day">
																			<span className="am">AM</span>/<span className="pm">PM</span>
																		</label>
																	</div>
																</div>
															</div>
														</div>
														<div className="d-flex align-items-center py-3">
															<h3 className="days">Friday</h3>
															<div className="start d-flex align-items-center">
																<div className="position-relative">
																	<Field type="number" id="fri-start-time" name="fri_start_time" placeholder="00 hrs" />
																	<div className="validation-error">{errors.fri_start_time && touched.fri_start_time && errors.fri_start_time}</div>
																</div>
																<div>
																	<div className="custom-control custom-checkbox ms-3">
																		<Field type="checkbox" value="am" name="fri_start_time_day"  className=" custom-control-input d-none" id="fri-start-time-day"/>
																		<label htmlFor="fri-start-time-day">
																			<span className="am">AM</span>/<span className="pm">PM</span>
																		</label>
																	</div>
																</div>
															</div>
															<div className="start d-flex align-items-center">
																<div className="position-relative">
																	<Field type="number" id="fri-end-time" name="fri_end_time" placeholder="00 hrs" />
																	<div className="validation-error">{errors.fri_end_time && touched.fri_end_time && errors.fri_end_time}</div>
																</div>
																<div>
																	<div className="custom-control custom-checkbox ms-3">
																		<Field type="checkbox" value="pm" name="fri_end_time_day"  className=" custom-control-input d-none" id="fri-end-time-day"/>
																		<label htmlFor="fri-end-time-day">
																			<span className="am">AM</span>/<span className="pm">PM</span>
																		</label>
																	</div>
																</div>
															</div>
														</div>
														<div className="d-flex align-items-center py-3">
															<h3 className="days">Saturday</h3>
															<div className="start d-flex align-items-center">
																<div className="position-relative">
																	<Field type="number" id="sat-start-time" name="sat_start_time" placeholder="00 hrs" />
																	<div className="validation-error">{errors.sat_start_time && touched.sat_start_time && errors.sat_start_time}</div>
																</div>
																<div>
																	<div className="custom-control custom-checkbox ms-3">
																		<Field type="checkbox" value="am" name="sat_start_time_day"  className=" custom-control-input d-none" id="sat-start-time-day"/>
																		<label htmlFor="sat-start-time-day">
																			<span className="am">AM</span>/<span className="pm">PM</span>
																		</label>
																	</div>
																</div>
															</div>
															<div className="start d-flex align-items-center">
																<div className="position-relative">
																	<Field type="number" id="sat-end-time" name="sat_end_time" placeholder="00 hrs" />
																	<div className="validation-error">{errors.sat_end_time && touched.sat_end_time && errors.sat_end_time}</div>
																</div>
																<div>
																	<div className="custom-control custom-checkbox ms-3">
																		<Field type="checkbox" value="pm" name="sat_end_time_day"  className=" custom-control-input d-none" id="sat-end-time-day"/>
																		<label htmlFor="sat-end-time-day">
																			<span className="am">AM</span>/<span className="pm">PM</span>
																		</label>
																	</div>
																</div>
															</div>
														</div>
														<div className="d-flex align-items-center py-3">
															<h3 className="days">Sunday</h3>
															<div className="start d-flex align-items-center">
																<div className="position-relative">
																	<Field type="number" id="sun-start-time" name="sun_start_time" placeholder="00 hrs" />
																	<div className="validation-error">{errors.sun_start_time && touched.sun_start_time && errors.sun_start_time}</div>
																</div>
																<div>
																	<div className="custom-control custom-checkbox ms-3">
																		<Field type="checkbox" value="am" name="sun_start_time_day"  className=" custom-control-input d-none" id="sun-start-time-day"/>
																		<label htmlFor="sun-start-time-day">
																			<span className="am">AM</span>/<span className="pm">PM</span>
																		</label>
																	</div>
																</div>
															</div>
															<div className="start d-flex align-items-center">
																<div className="position-relative">
																	<Field type="number" id="sun-end-time" name="sun_end_time" placeholder="00 hrs" />
																	<div className="validation-error">{errors.sun_end_time && touched.sun_end_time && errors.sun_end_time}</div>
																</div>
																<div>
																	<div className="custom-control custom-checkbox ms-3">
																		<Field type="checkbox" value="pm" name="sun_end_time_day"  className=" custom-control-input d-none" id="sun-end-time-day"/>
																		<label htmlFor="sun-end-time-day">
																			<span className="am">AM</span>/<span className="pm">PM</span>
																		</label>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="holiday ">
														<div className="title">
															<h2>Other Holidays</h2>
														</div>
														<div className="d-flex py-2">
															<h3 className="days">Holiday 1</h3>
															<div className="start">
																<div className="custom-select">
																	<Field as="select" name="holiday1">
																		<option value="0">Select</option>
																		<option value="red">Red</option>
																		<option value="green">Green</option>
																		<option value="blue">Blue</option>
																	</Field>
																</div>	
																<Field type="text" id="holiday1-date" name="holiday1-date" className="mt-4" placeholder="Name" />
																<DatePicker onChange = {(e)=>this.datePicker(e)}/>
															</div>
														</div>
														<div className="d-flex py-2">
															<h3 className="days">Holiday 2</h3>
															<div className="start">
																<div className="custom-select">
																	<Field as="select" name="holiday2">
																		<option value="0">Select</option>
																		<option value="red">Red</option>
																		<option value="green">Green</option>
																		<option value="blue">Blue</option>
																	</Field>
																</div>
																<Field type="text" id="holiday2-date" name="holiday2-date" className="mt-4" placeholder="Name" />
															</div>
														</div>
														<div className="d-flex py-2">
															<h3 className="days">Holiday 3</h3>
															<div className="start">
																<div className="custom-select">
																	<Field as="select" name="holiday3">
																		<option value="0">Select</option>
																		<option value="red">Red</option>
																		<option value="green">Green</option>
																		<option value="blue">Blue</option>
																	</Field>
																</div>
																<Field type="text" id="holiday3-date" name="holiday3-date" className="mt-4" placeholder="Name" />
															</div>
														</div>
													</div>
					
														{/* <div className="text-end">
															<button type="submit" disabled={isSubmitting} className="mt-sm-4 mt-4 form-submit">
																Submit
															</button>
														</div> */}
													</form>
												)
											}
										</Formik>
								</div>
							</div>
						</PerfectScrollbar>
					</div>
				}
				<div className="col-md-11 m-auto pb-4 pt-4 mb-2 fixedbtn">
					<div className="row">
						<div className="w-100 d-flex justify-content-center">
							{/* <button title="backbutton" type="button" className="btn btn-back mx-2 back float-start"><AiFillCaretLeft />&emsp;Back</button> */}
							<div className="w-30 m-auto">
								<button title="removebutton" type="button" className="btn btn-default  mx-4 remove">Clear</button>
								<button title="savebutton" onClick={this.step2complete} type="button" className="btn btn-default mx-4 saveq">Save</button>
							</div>
								<button title="nextbutton" type="submit" className="btn btn-back mx-4 next float-end nextbtn">Next&emsp;<AiFillCaretRight />
								</button> 
						</div>
					</div>
				</div> 
				</div>
				<Modal
					show={this.state.showModel}
					onHide = {()=>this.setState({showModel: false})}
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
										<label className="position-absolute edit"><FaRegEdit/></label></h3>
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
									<h5>Tax Registration<label className="position-absolute edit"><FaRegEdit/></label></h5>
									<li className="d-flex"><span className="wdth30">GST Type</span>
									<span className="clrchnge">ABCDXXXXXX</span></li>
									<li className="d-flex"><span className="wdth30">GST Number</span>
									<span className="clrchnge">Text</span></li>
									<li className="d-flex"><span className="wdth30">GST Certificate</span>
									<span className="clrchnge">Attach your files here</span></li>
								</ul>
								<ul className="rating">
									<h5>Rating & Evaluation<label className="position-absolute edit"><FaRegEdit/></label></h5>
									<li><span className="clrblue">Credit Report<span className="circle">1</span> </span>
									<span className="clrchnge">|</span></li>
									<li><span className="clrblue">Risk Report<span className="circle">1</span></span>
									<span className="clrchnge">|</span></li>
									<li><span className="clrblue">Banking & Relationship Report</span>
									<span className="clrchnge">|</span></li>
									<li><span className="clrblue">Legal Report</span></li>
								</ul>
								
								<h5>Company Link<label className="position-absolute edit"><FaRegEdit/></label></h5>
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

								<h5>Location<label className="position-absolute edit"><FaRegEdit/></label></h5>
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
								<h5>Business Hours<label className="position-absolute edit"><FaRegEdit/></label></h5>
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
					onHide={()=>this.setState({modalreport: false})}
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
									<ImFilePdf/>
									<p>Pdf.1</p>
								</div>
								<div className="pdf1">
									<ImFilePdf/>
									<p>Pdf.1</p>
								</div>
								<div className="pdf1">
									<ImFilePdf/>
									<p>Pdf.1</p>
								</div>
								<div className="pdf1">
									<ImFilePdf/>
									<p>Pdf.1</p>
								</div>
								<div className="pdf1">
									<ImFilePdf/>
									<p>Pdf.1</p>
								</div>
								<div className="pdf1">
									<ImFilePdf/>
									<p>Pdf.1</p>
								</div>
								<div className="pdf1">
									<ImFilePdf/>
									<p>Pdf.1</p>
								</div>
								<div className="pdf1">
									<ImFilePdf/>
									<p>Pdf.1</p>
								</div>
								<div className="pdf1">
									<ImFilePdf/>
									<p>Pdf.1</p>
								</div>
								<div className="pdf1">
									<ImFilePdf/>
									<p>Pdf.1</p>
								</div>
								<div className="pdf1">
									<ImFilePdf/>
									<p>Pdf.1</p>
								</div>
								<div className="pdf1">
									<ImFilePdf/>
									<p>Pdf.1</p>
								</div>
								<div className="pdf1">
									<ImFilePdf/>
									<p>Pdf.1</p>
								</div>
								<div className="pdf1">
									<ImFilePdf/>
									<p>Pdf.1</p>
								</div>
								<div className="pdf1">
									<ImFilePdf/>
									<p>Pdf.1</p>
								</div>
								<div className="pdf1">
									<ImFilePdf/>
									<p>Pdf.1</p>
								</div>
							</div>
						</PerfectScrollbar>
					</Modal.Body>
				</Modal>
			</div>
		);   
	}
}
export default  Organization;