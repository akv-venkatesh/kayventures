import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../../../m-login.scss';
import $ from 'jquery';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Vector1 from "../../../../../assets/images/vest.svg";
import Vector2 from "../../../../../assets/icons/vector2.svg";
import Vector3 from "../../../../../assets/icons/various/Vector3.svg";
import Vector5 from "../../../../../assets/icons/various/Vector5.svg"
import clarity_factory_line from  '../../../../../assets/clarity_factory_line.svg';
import { BsPlusLg, BsTelephone } from "react-icons/bs";
import { AiFillExclamationCircle, AiOutlineClockCircle } from "react-icons/ai";
import { ImAttachment, ImCross } from "react-icons/im";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Component } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import "react-perfect-scrollbar/dist/css/styles.css";
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Button, Container, Form, Modal, Row } from 'react-bootstrap';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { Formik , Field } from "formik";
import { ChangeEvent } from 'react';
import Select from '../../../../../component/dropdown_select/slelect';
import Businesshour from '../../commonFiles/businessHrs';
import DatePicker from '../../../../../component/calendar/calendar';
import { FaRegFileAlt } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';
import Image2 from "../../../../../assets/image2.svg";
import FacilityHome from "../../commonFiles/facilityhome";

interface typeState{
	step1: boolean,
	step2: boolean,
	step3: boolean,
	step4: boolean,
	step5: boolean,
	showSummary: boolean,
	linetype: any,
	initialPage: boolean,
	enviromentalChange: boolean,
	socialChange: boolean,
	GovernanceChange: boolean,
	showModel: boolean,
}

class AddFacility extends Component<{}, typeState> {
	constructor(props:any){
		super(props);
		this.state={
			step1: true,
			step2: false,
			step3: false,
			step4: false,
			step5: false,
			showSummary: false,
			linetype: '',
			initialPage: true,
            enviromentalChange: false,
            socialChange: false,
            GovernanceChange: false,
			showModel: false,
		}
	}
    hideSummary = () => {
        this.setState({
            showSummary: false
        })
    }

    lineTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        let value:any = event;
        this.setState({
          linetype: value.value
        })
    }
	step1Complete = () =>{
		this.setState({
			step1: false,
			step2: true,
		})
	}
	step2Complete = () =>{
		this.setState({
			step2: false,
			step3: true,
		})
	}
	step3Complete = () =>{
		this.setState({
			step3: false,
			step4: true,
		})
	}
	step4Complete = () =>{
		this.setState({
			step4: false,
			step5: true,
		})
	}
	step5Complete = () =>{
		this.setState({
			// step5: false,
			// step6: true,
			showModel: true,
		})
	}
	handleShow = () => {
		this.setState({
		  showModel: true,
		});
	};
	handleEnviromentalChange = () => {
        this.setState({
            initialPage: false,
            enviromentalChange: true,
            socialChange: false,
            GovernanceChange: false,
        });
    }
    handleSocialChange = () => {
        this.setState({
            initialPage: false,
            socialChange: true,
            enviromentalChange: false,
            GovernanceChange: false,
        });
    }
    handleGovernanceChange = () => {
        this.setState({
            initialPage: false,
            GovernanceChange: true,
            socialChange: false,
            enviromentalChange: false,
        });
    }
	datePicker = (e: Date): any => {
	}
	LineTypeOptions = [
		{ value: 'Open', label: 'Open' },
		{ value: 'Reserved', label: 'Reserved'},
	];
	certificates = [
		{ value: 'EMAS', label: 'EMAS' },
		{ value: 'Nordic Swan', label: 'Nordic Swan' },
		{ value: 'EU Flower', label: 'EU Flower' },
		{ value: 'REACH', label: 'REACH' }
	];
	cerifiedby = [
		{ value: 'SSG', label: 'SSG' },
		{ value: 'TUV Rheinland', label: 'TUV Rheinland' },
		{ value: 'Intertek', label: 'Intertek' },
		{ value: 'Control Union', label: 'Control Union' },
		{ value: 'DNV', label: 'DNV' },
		{ value: 'Textile Committee', label: 'Textile Committee' },
		{ value: 'GOTS', label: 'GOTS' }
	];
	social = [
		{ value: 'SA 8000', label: 'SA 8000' },
		{ value: 'OHSAS / 8001', label: 'OHSAS / 8001' },
		{ value: 'Fair Trade', label: 'Fair Trade' },
		{ value: 'Wrap Union', label: 'Wrap' }
	];
	Governance = [
		{ value: 'PE, ESI', label: 'PE, ESI' },
		{ value: 'AA 1000', label: 'AA 1000' },
		{ value: 'Siatutari', label: 'Siatutari' },
		{ value: 'Licences', label: 'Licences' }
	]	
	render():JSX.Element{
		return (
			<div className="kyc-facility-addfacility h-100">
				{
					this.state.step1 ?
					<div className="facilitykyc h-100">
						<div className="title my-2">
							<img src={Vector2} className="titleimg"/>
							<h4>Organization info</h4>
						</div>
						<div className="content">
								<div className="orgcon pt-5 pb-4">
									<div className="firstbox">
										<AiFillExclamationCircle/>
											<div className="imgshow mb-4">						
												<img src={Vector1}/>
												<p className="text-center my-3">Syndicate Fashions</p>
											</div>
									</div>
									<p className="addfac mt-4">Add Facility</p>
									<div className="pt-2 mb-2 typefacility">
										<div className="add-button text-center">
											<span>Type the Facility name</span>
											<div className="add-btn">
												<BsPlusLg className="add-icon" />
											</div>							
										</div>
										<div className='facility mt-5'>
											<ImCross className="cross"/>
											<img src={clarity_factory_line}/>
											<span>Facility 1</span>
										</div>

									</div>
									<span className="mt-3 clickadd">Type the Facility name and start adding facilities under Organization</span>
								</div>
								<div className="mt-2 col-md-8 pb-4 m-auto">
									<div className="row ">
										<div className="w-100 d-flex justify-content-spacebetween">
											<button type="button" className="btn btn-back mx-2 back float-start"><AiFillCaretLeft />&emsp;Back</button>
											<button type="submit" onClick={this.step1Complete} className="btn btn-back mx-2 next float-end">Next&emsp;<AiFillCaretRight />
											</button> 
										</div>
									</div>
								</div>
						</div>
					</div> :
					this.state.step2 ?
					<FacilityHome onClick={this.step2Complete}/> :
					this.state.step3 ?
					<div className="machine main d-flex facilitykyc1 h-100">
						<div className="col-md-12 d-flex flex-column h-100">
							<div className="facility1 d-flex">
								<img src={Vector3} alt="" />
								<p>Facility 1</p>
							</div>
							<div className="crossicon">
								<ImCross className="cross" />
							</div>
							<div className="box pt-3 pb-5 mt-2">
								<div className="scroll pb-3">
									<PerfectScrollbar>
										<div className="d-flex flex-wrap pe-4 facilityform">
											<Container>
											<Row>
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
																<h5 className="mt-4">Location</h5>
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
																	<Field type="number" id="" className="input-box" name="service" aria-label="service" placeholder="Customer service, etc" />
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
															<div className="mt-5 col-md-9 pb-4 m-auto bottombtn">
																<div className="row ">
																	<div className="w-100 d-flex justify-content-center">
																		<button type="button" className="btn btn-back mx-2 back float-start">
																			<AiFillCaretLeft />&emsp;Back</button>
																			<div className="w-30 m-auto">
																				<button type="button" className="btn btn-default  mx-4 remove">Remove</button>
																				<button 
																					type="button" 
																					className="btn btn-default mx-4 saveq"
																					onClick={this.step3Complete}
																					>Save</button>
																			</div>
																			<button type="submit" className="btn btn-back mx-2 next float-end">Next&emsp;<AiFillCaretRight />
																			</button> 
																	</div>
																</div>
															</div>
														</div>          
														</form>
													)}
													</Formik>                                           
												
											</Row>
											</Container>
										</div>
									</PerfectScrollbar>
								</div>
								<div className="summary">
									<Button href="#" variant="secondary" size="sm">Summary
									<RiArrowDropRightLine /></Button>
								</div>            
							</div>
						</div>
					</div> :
					this.state.step4 ?
					<div className="content">
						<Businesshour onClick={this.step4Complete}/>
					</div> :
					this.state.step5 ?
					<div className="main d-flex flex-column">
						<div className="box py-5 mt-2">
							<div className="scroll pb-3">
								<div className="d-flex flex-wrap flex-column pe-4">
									<div className="box_buttons d-flex justify-content-center">
										<div className="position-relative">
											<Button href="#" variant="light" size="lg" onClick={this.handleEnviromentalChange} >
												Environmental
											</Button><span className="circle">1</span>
										</div>
										<div className="position-relative">
											<Button href="#" variant="light" size="lg" onClick={this.handleSocialChange} >
												Social
											</Button><span className="circle">1</span>
										</div>
										<div className="position-relative">
											<Button href="#" variant="light" size="lg" onClick={this.handleGovernanceChange}>
												Governance
											</Button><span className="circle">1</span>
										</div>
									</div>
									{this.state.initialPage ?
										<div className="box_content d-flex justify-content-center">
											<div className="d-flex flex-column justify-content-center align-items-center">
												<p>Click on the above buttons to add the</p><p> ESG Certificates.</p>
											</div>
										</div> : null}
									{/* Initial Page */}

									{this.state.enviromentalChange ?
										<PerfectScrollbar>
											<div className="d-flex justify-content-center mt-5">
												<div className="left_column d-flex flex-column">
													<h4 className="mb-4">Attach your certificates</h4>
													<div className="mb-3">
														<form data-testid="environmental">
															<label htmlFor="select-environmental" hidden>Select Certificate</label>
															<Select
																name="environmental"
																inputId="select-environmental"
																options={this.certificates}
																width='300px'
																position='bottom'
																placeholder='Select Certificate'
																onChange={() => { }}></Select>
														</form>
													</div>
												</div>
												<div className="right_column d-flex flex-column">
													<div className="input_file d-flex mb-5">
														<div className="position-relative file-upload">
															<label htmlFor="registration-certificate" className="label-file" id="file-chosen"></label>
															<label htmlFor="registration-certificate" className="fileupload_inner">Attach your certificate here</label>
															<input aria-label="registration_certificate" type="file" id="registration-certificate" name="registration_certificate" placeholder="Attach your files here" hidden />
															<label htmlFor="registration_certificate-file"><ImAttachment /><FaRegFileAlt /></label>
														</div>
													</div>
													<div className="input_multifile d-flex mb-3">
														<Form.Control
															type="text"
															placeholder="Certificate No."

														/>
														<DatePicker onChange={(e) => this.datePicker(e)} />
														<form data-testid="CerifiedBy">
															<label htmlFor="select-cerifiedby" hidden>Cerified by</label>
															<Select
																name="CerifiedBy"
																inputId="select-cerifiedby"
																options={this.cerifiedby}
																width='133%'
																position='bottom'
																placeholder='Cerified by'
																onChange={() => { }}></Select>
														</form>
													</div>
													<div className="plusIcon d-flex">
														<img src={Vector5} className="image_one" alt="" />
														<p>  Add</p>
													</div>
													<div className="bottom_switch w-50">
														<button
															type="button"
															className="btn btn-default mx-4 remove"

														>
															Remove
														</button>
														<button
															type="button"
															className="btn btn-default mx-4 save"
														>
															Save
														</button>
													</div>
												</div>
											</div>
										</PerfectScrollbar> : null}
									{/* enviromental Page */}

									{this.state.socialChange ?
										<PerfectScrollbar>
											<div className="d-flex justify-content-center mt-5">
												<div className="left_column d-flex flex-column">
													<h4 className="mb-4">Attach your certificates</h4>
													<div className="mb-3">
														<form data-testid="social">
															<label htmlFor="select-social" hidden>Select Certificate</label>
															<Select
																name="social"
																inputId="select-social"
																options={this.social}
																width='300px'
																position='bottom'
																placeholder='Select Certificate'
																onChange={() => { }}></Select>
														</form>
													</div>
												</div>
												<div className="right_column d-flex flex-column">
													<div className="input_file d-flex mb-5">
														<div className="position-relative file-upload">
															<label htmlFor="registration-certificate" className="label-file" id="file-chosen"></label>
															<label htmlFor="registration-certificate" className="fileupload_inner">Attach your certificate here</label>
															<input aria-label="registration_certificate" type="file" id="registration-certificate" name="registration_certificate" placeholder="Attach your files here" hidden />
															<label htmlFor="registration_certificate-file"><ImAttachment /><FaRegFileAlt /></label>
														</div>
													</div>
													<div className="input_multifile d-flex mb-3">
														<Form.Control
															type="text"
															placeholder="Certificate No."

														/>
														<DatePicker onChange={(e) => this.datePicker(e)} />
														<Select options={this.cerifiedby} width='30%' position='bottom' placeholder='Cerified by' onChange={() => { }}></Select>
													</div>
													<div className="plusIcon d-flex">
														<img src={Vector5} className="image_one" alt="" />
														<p>  Add</p>
													</div>
													<div className="bottom_switch w-50">
														<button
															type="button"
															className="btn btn-default mx-4 remove"

														>
															Remove
														</button>
														<button
															type="button"
															className="btn btn-default mx-4 save"
														>
															Save
														</button>
													</div>
												</div>
											</div>
										</PerfectScrollbar> : null}
									{/* Social Page */}

									{this.state.GovernanceChange ?
										<PerfectScrollbar>
											<div className="d-flex justify-content-center mt-5">
												<div className="left_column d-flex flex-column">
													<h4 className="mb-4">Attach your certificates</h4>
													<div className="mb-3">
														<form data-testid="governance">
															<label htmlFor="select-governance" hidden>Select Certificate</label>
															<Select
																name="governance"
																inputId="select-governance"
																options={this.Governance}
																width='300px'
																position='bottom'
																placeholder='Select Certificate'
																onChange={() => { }}></Select>
														</form>

													</div>
												</div>
												<div className="right_column d-flex flex-column">
													<div className="input_file d-flex mb-5">
														<div className="position-relative file-upload">
															<label htmlFor="registration-certificate" className="label-file" id="file-chosen"></label>
															<label htmlFor="registration-certificate" className="fileupload_inner">Attach your certificate here</label>
															<input aria-label="registration_certificate" type="file" id="registration-certificate" name="registration_certificate" placeholder="Attach your files here" hidden />
															<label htmlFor="registration_certificate-file"><ImAttachment /><FaRegFileAlt /></label>
														</div>
													</div>
													<div className="input_multifile d-flex mb-3">
														<Form.Control
															type="text"
															placeholder="Certificate No."

														/>
														<DatePicker onChange={(e) => this.datePicker(e)} />
														<Select options={this.cerifiedby} width='30%' position='bottom' placeholder='Cerified by' onChange={() => { }}></Select>
													</div>
													<div className="plusIcon d-flex">
														<img src={Vector5} className="image_one" alt="" />
														<p>  Add</p>
													</div>
													<div className="bottom_switch w-50">
														<button
															type="button"
															className="btn btn-default mx-4 remove"

														>
															Remove
														</button>
														<button
															type="button"
															className="btn btn-default mx-4 save"
														>
															Save
														</button>
													</div>
												</div>
											</div>
										</PerfectScrollbar> : null}
									{/* Governance Page */}
								</div>
							</div>
							<div className="d-flex">
								<div className="summary">
									<Button href="#" size="sm" onClick={this.step5Complete} data-testid="mySummary">
										Summary
										<RiArrowDropRightLine />
									</Button>
								</div>
							</div>
						</div>
					</div> :
					<></>
				}
				<Modal
					show={this.state.showModel}
					size="lg"
					onHide={()=>{this.setState({showModel: false})}}
					aria-labelledby="contained-modal-title-vcenter"
					centered
					className="facilitymodal"
					backdropClassName="facilitymodal"
					>
					<Modal.Header closeButton />
					<Modal.Body className="">
						<div className="header_discription mt-1">
							<p className="topbox">Facility 1 
							</p>
						</div>
						<PerfectScrollbar
							options={{ suppressScrollY: false, suppressScrollX: true }}
							onScrollY={(container) =>
								console.log(`scrolled to: ${container.scrollTop}.`)
							}
							>
							<div className="facilitymod">
								<div className="leftmenu">
									<div className="imgleft">
										<img src={Image2} alt="displayedImage" />
									</div>
									<div className="infor">
										<div className="mt-4">
											<BiMap />
											<span>SGG Road<br></br>
												2nd stage<br></br>
												Jeevan dani road<br></br>
												8948295532<br></br>
												pin code: 000798</span>
										</div>
										<div className="mt-4">
										<BsTelephone/>
											<span>9832239554</span>
										</div>
										<div className="mt-4">
											<AiOutlineClockCircle/>
											<span>Mon- Fri <br></br>8.00AM -7.00PM
											</span>
										</div>
									</div>
								</div>
								<div className="rightmenu">
									<h4>Corporate info</h4>
									<h5>Location</h5>
									<div className="d-flex mb-3">
										<h6 className="col-md-5">Location 1:- </h6>
										<div className="clrblue">
											<span>ABCDXXXXXX</span><br></br>
											<span>ABCDXXXXXX</span><br></br>
											<span>ABCDXXXXXX</span><br></br>
										</div> 
									</div>
									<h5>Contact</h5>
									<div className="contact">
										<div className="d-flex mb-3">
											<h6 className="col-md-5">Name </h6>
											<div className="clrblue">
												<span>Ganesh</span>
											</div> 
										</div>
										<div className="d-flex mb-3">
											<h6 className="col-md-5">Designation </h6>
											<div className="clrblue">
												<span>Marketing head</span>
											</div> 
										</div>
										<div className="d-flex mb-3">
											<h6 className="col-md-5">Phone No.  </h6>
											<div className="clrblue">
												<span>7583920757</span>
											</div> 
										</div>
										<div className="d-flex mb-3">
											<h6 className="col-md-5">Email -Id </h6>
											<div className="clrblue">
												<span>ABCD@id.com</span>
											</div> 
										</div>
									</div>
									<h5>Service of Contact</h5>
									<div className="contact">
										<div className="d-flex mb-3">
											<h6 className="col-md-5">Tuesday </h6>
											<div className="clrblue">
												<span>8 AM - 6PM</span>
											</div> 
										</div>
										<div className="d-flex mb-3">
											<h6 className="col-md-5">Wednesday </h6>
											<div className="clrblue">
												<span>8 AM - 6PM</span>
											</div> 
										</div>
										<div className="d-flex mb-3">
											<h6 className="col-md-5">Thrusday</h6>
											<div className="clrblue">
												<span>Leave</span>
											</div> 
										</div>
										<div className="d-flex mb-3">
											<h6 className="col-md-5">Friday </h6>
											<div className="clrblue">
												<span>8 AM - 6PM</span>
											</div> 
										</div>
										<div className="d-flex mb-3">
											<h6 className="col-md-5">Saturday </h6>
											<div className="clrblue">
												<span>8 AM - 6PM</span>
											</div> 
										</div>
										<div className="d-flex mb-3">
											<h6 className="col-md-5">Sunday </h6>
											<div className="clrblue">
												<span>Leave</span>
											</div> 
										</div>
									</div>
									<h5>Other Holidays</h5>
									<div className="contact">
										<div className="d-flex mb-3">
											<h6 className="col-md-5">Holiday 1 </h6>
											<div className="clrblue">
												<span>Independence Day</span>
											</div> 
										</div>
										<div className="d-flex mb-3">
											<h6 className="col-md-5">Holiday 1 </h6>
											<div className="clrblue">
												<span>New Year</span>
											</div> 
										</div>
									</div>   
								</div>
							</div>

						
					
						</PerfectScrollbar>
					</Modal.Body>
				</Modal>
			</div>
		)
	}
}
export default AddFacility;