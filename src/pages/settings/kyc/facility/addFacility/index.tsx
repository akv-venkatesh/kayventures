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
import Stepper from '../../../../../component/stepper/stepper';
import ScroolSelect from '../../../../../component/dropdown_select_scrollable/slelect';

import {
    Backbutton,
    Nextbutton, DisableBackbutton,
DisableNextbutton,

} from "../../../../../component/buttons/button";
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
	// 
	inputFecilityName: string
	facilities : string[],
	editFacility:any,

	//
	step3NextButton:boolean,
	step3SubmitedData : any 
}


class AddFacility extends Component<{}, typeState> {
	constructor(props:any){
		super(props);
		this.state={
			step1: false,
			step2: false,
			step3: false,
			step4: false,
			step5: true,
			showSummary: false,
			linetype: '',
			initialPage: true,
            enviromentalChange: false,
            socialChange: false,
            GovernanceChange: false,
			showModel: false,
			// 
			inputFecilityName:'',
			facilities : [],
			editFacility:'',
			//
			step3NextButton:true,
			step3SubmitedData:''
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
	step2Complete = (facility:any) =>{
		this.setState({
			step2: false,
			step3: true,
			editFacility:facility
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

	handleAddFacility = () =>{
		let { inputFecilityName,facilities } =this.state;
		if(inputFecilityName){
			facilities.push(inputFecilityName);
		}
		this.setState({facilities:facilities,inputFecilityName:''})
	}

	handleRemoveFacility = (facility:any) =>{
		let { facilities } =this.state;
		let filteredfacilities;
		if(facility >= 0 ){
			filteredfacilities = facilities.splice(facility,1);
		}
		this.setState({facilities:facilities})
	}

	render():JSX.Element{
		const steps = [ { label: 'Add Facility',id:0}, 
						{ label: 'Facility KYC',id:1}, 
						{ label: 'Facility Info.',id:2 }, 
						{ label: 'Product Selection',id:3 },
						{ label: 'Capacity',id:4 },
						{ label: 'Sections',id:5 }];

		const { facilities,inputFecilityName} =this.state

		//Steop3Form 
		const step3InitialValues:any = {
			addrLine1: '',
			addrLine2: '',
			state: '',
			country: '',
			pincode: '',
			addrLineType: '',
			locationMap:'',
			mentionNumber: '',
			contactPhone:'',
			contactEmail:'',
			typeofService:'',
			service:'',
			customercareAdministration:''
		  };

		return (
			<div className="kyc-facility-addfacility h-100">
				{
					this.state.step1 ?
					<div className="facilitykyc h-100">
						<div className="title my-2">
						<Stepper steps={steps} activeStep={0} />
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
									<p className="addfac mt-2">Add Facility</p>
									<div className="pt-2 mb-2 typefacility">
										<div className="add-button text-center">
											<span><input type='text' placeholder='Type the Facility name' value={inputFecilityName} style={{backgroundColor:'transparent',border:'0px solid transparent',}} onChange={(e:any) =>this.setState({inputFecilityName:e.target.value})}/></span> 
											<div className="add-btn" onClick={()=>this.handleAddFacility()}>
												<BsPlusLg className="add-icon" />
											</div>							
										</div>
										<div className='facilities-container pt-4 pb-2'>
										{/* <PerfectScrollbar> */}
										{
										 facilities.length > 0 ? 
										 facilities.map((facility:any,key) => {
											 return (
										 	
											 <div className='facility-item'>
											 <ImCross className="cross" onClick={()=>this.handleRemoveFacility(key)} />
											 <img src={clarity_factory_line}/>
											 <span>{facility}</span>
										     </div>
										 	
										 )
										 }) : ''
										}
									{/* </PerfectScrollbar> */}
										</div>
									</div>
									{facilities.length <= 0 ? <span className="mt-5 clickadd">Type the Facility name and start adding facilities under Organization</span> : ''}
								</div>
								<div className="mt-2 col-md-8 pb-4 m-auto faci-add-footer-button">
									<div className="row ">
										<div className="w-100 d-flex justify-content-spacebetween">
											<button type="button" className="btn back-btn mx-2 back float-start"><AiFillCaretLeft />&emsp;Back</button>
											<button type="submit" onClick={this.step1Complete} disabled={facilities.length > 0 ? false:true } className="btn next-btn mx-2 next float-end">Next&emsp;<AiFillCaretRight />
											</button> 
										</div>
									</div>
								</div>
						</div>
					</div> :
					this.state.step2 ?
					<div>
						<div className="title my-2">
							<Stepper steps={steps} activeStep={1} />
						</div>
						<FacilityHome onClick={(state)=>{this.step2Complete(state)}} selected_Facilities={facilities}/> 
					</div>:
					this.state.step3 ?
					<div className="machine main d-flex facilitykyc1 h-100">
						<div className="col-md-12 d-flex flex-column h-100">
							<div className="facility1 d-flex">
								<img src={Vector3} alt="" />
								<p>{this.state.editFacility}</p>
							</div>
							<div className="crossicon">
								<ImCross className="cross" />
							</div>
							<Formik
						    	initialValues = {step3InitialValues}
						    	validate={(values) => {
						    		let errors = {};
									if (!values.contactEmail) {
										errors = { ...errors, contactEmail: 'Enter Email Id' };
									  } else if (
										!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.contactEmail)
									  ) {
										errors = { ...errors, contactEmail: 'Invalid Email Id' };
									  }
									  if (!((values.addrLine1 || values.addrLine2) && (values.state && values.country && values.pincode))) {
										errors = { ...errors, address: 'Enter All adresss fields' };
									  }
									  if(!values.contactPhone) {
										errors = { ...errors, contactPhone: 'Enter Location' };
									  }
									//   if (!values.personName) {
									// 	errors = { ...errors, personName: 'Enter the Name of Person' };
									//   }
									//   if (!values.designation) {
									// 	errors = { ...errors, designation: 'Select Designation' };
									//   }
									//   if (!values.phone) {
									// 	errors = { ...errors, phone: 'Enter Phone No' };
									//   }

						    		return errors;
						    	}}
						    	onSubmit={(values, { setSubmitting }) => {
						    		console.log(values)	
						    		this.setState({step3NextButton:false,step3SubmitedData:values})	
						    	}}
						    	>
						    	{({
						    		values,
						    		errors,
						    		touched,
						    		handleChange,
						    		handleBlur,
						    		handleSubmit,
						    		isSubmitting,setFieldValue,isValid,dirty
						    	}) => (
						    		<form onSubmit={handleSubmit} className="form-bh step-3">
							{/* <div className="step-3"> */}
								<div className="box pb-5 mt-2">
									<div className="scroll pb-3">
										<PerfectScrollbar>
											<div className="d-flex flex-wrap pe-4 facilityform">
												<Container>
												<Row>
												<div className="h-100 facilityform ps-xl-5">
																<div className="d-flex align-items-center justify-content-space-between">
																	<h5 className="mt-4">Location</h5>
																</div>
																<div className="row mt-4 d-flex ">
																	<h3 className="col-md-3">Address<span className='required'> </span></h3>
																	<div className="col-md-5 input-parent">
																		<Field type="text" id="" className="input-box" name="addrLine1" aria-label="line1"  onChange={handleChange} onBlur={handleBlur} value={values.addrLine1} placeholder="Line 1" />
																		<Field type="text" id="" className="input-box" name="addrLine2" aria-label="line2" placeholder="Line 2"  onChange={handleChange} onBlur={handleBlur} value={values.addrLine2} />
																		<div className='inbox-line3'>
																			<Field type="text" id="" className="input-box add" name="state" aria-label="state" placeholder="State"  onChange={handleChange} onBlur={handleBlur} value={values.state} />
																			<Field type="text" id="" className="input-box add" name="country" aria-label="country" placeholder="Country"   onChange={handleChange} onBlur={handleBlur} value={values.country} />
																			<Field type="text" id="" className="input-box add" name="pincode" aria-label="pincode" placeholder="Pincode" onChange={handleChange} onBlur={handleBlur} value={values.pincode} />
																		</div><br />
																		<p  className="validation-error" style={{color:'red'}}>{errors.address}</p>
																	</div>
																</div>
																<div className="row mt-5 d-flex ">
																	<h3 className="col-md-3">Location Validity (If any)<span className='required'></span></h3>
																	<div className="col-md-4 input-parent">
																	{/* <form data-testid="form-line-type"> */}
																	<Select 
																		options={this.LineTypeOptions} 
																		width='100%' 
																		position='top' 
																		// name="addrLineType"
																		inputId="line-type"
																		placeholder='Select from options'
																		onChange={(e: any)=>setFieldValue("addrLineType", e.value)}
																		isOptionDisabled={(option:any) => option.disabled}
																		/>
																		{/* </form> */}
																	<Field type="hidden" id="" className="input-box mt-3" name="addrLineType" aria-label="addrLineType" placeholder="Mention Number" onChange={handleChange} onBlur={handleBlur} value={values.addrLineType} />
																	<Field type="text" id="" className="input-box mt-3" name="mentionNumber" aria-label="mentionNumber" placeholder="Mention Number" onChange={handleChange} onBlur={handleBlur} value={values.mentionNumber} />
																	</div>
																</div>
																<div className="row  mt-5 d-flex ">
																	<h3 className="col-md-3">Reverse Gecoding<span className='required'> </span></h3>
																	<div className="col-md-4 input-parent">
																		<Field type="text" id="" className="input-box" name="locationMap" aria-label="locationMap" placeholder="Enter Latitude"  onChange={handleChange} onBlur={handleBlur} value={values.locationMap}/>
																		<div className="plusIcon d-flex">
																			<img src={Vector5} className="image_one" alt="" />
																			<p>Add in case of multiple locations</p>
																		</div>
																	</div>
																</div>
																<div className="d-flex align-items-center justify-content-space-between">
																	<h5 className="mt-4">Contact</h5>
																</div>
																<div className="row mt-3 d-flex ">
																	<h3 className="col-md-3">Phone No. <span className='required'> </span></h3>
																	<div className="col-md-4 input-parent">
																		<Field type="number" id="" className="input-box" name="contactPhone" aria-label="contactPhone" placeholder="+91 XXXXXXXXX" onChange={handleChange} onBlur={handleBlur} value={values.contactPhone}/>
																		<p  className="validation-error" style={{color:'red'}}>{errors.contactPhone && touched.contactPhone && errors.contactPhone}</p>
																	</div>
																</div> 
																<div className="row mt-3 d-flex ">
																	<h3 className="col-md-3">Email -Id<span className='required'> </span></h3>
																	<div className="col-md-4 input-parent">
																		<Field type="text" id="" className="input-box" name="contactEmail" aria-label="contactEmail" placeholder="xyz@gmail.com or company Id" onChange={handleChange} onBlur={handleBlur} value={values.contactEmail}/>
																		<p  className="validation-error" style={{color:'red'}}>{errors.contactEmail && touched.contactEmail && errors.contactEmail}</p>
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
																	<div className="col-md-4 input-parent">
																		<Field type="number" id="" className="input-box" name="typeofService" aria-label="typeofService" placeholder="Customer service, etc" onChange={handleChange} onBlur={handleBlur} value={values.typeofService}/>
																	
																	</div>
																</div> 
																<div className="row mt-3 d-flex ">
																	<h3 className="col-md-3">Service<span className='required'> </span></h3>
																	<div className="col-md-4 input-parent">
																		<Field type="number" id="" className="input-box" name="service" aria-label="service" placeholder="+91 XXXXXXXXX" onChange={handleChange} onBlur={handleBlur} value={values.service}/>
																	</div>
																</div> 
																<div className="row mt-3 d-flex ">
																	<h3 className="col-md-3">Customer care administration<span className='required'> </span></h3>
																	<div className="col-md-4 input-parent">
																		<Field type="text" id="" className="input-box" name="customercareAdministration" aria-label="customercareAdministration" placeholder="xyz@gmail.com or company Id" onChange={handleChange} onBlur={handleBlur} value={values.customercareAdministration}/>
																		<div className="plusIcon d-flex">
																			<img src={Vector5} className="image_one" alt="" />
																			<p>  Add in case of multiple service contacts</p>
																		</div>
																	</div>
																</div>
												</div> 		
												</Row>
												</Container>
											</div>
										</PerfectScrollbar>
									</div>
									<div className="summary">
										<Button href="#" variant="secondary" size="sm">Summary
										<RiArrowDropRightLine /></Button>
									</div>
									<div className="mt-5 m-auto bottombtn">
										<div className="row ">
											<div className="d-flex justify-content-center">
													<button type="button" className="btn back-btn mx-2 back float-start"><AiFillCaretLeft />&ensp;Back</button>
													{/* <button type="button" className="btn-back back-btn"><AiFillCaretLeft className="left-array-btn" />Back</button> */}
													<div className="m-auto">
														<button type="button" className="btn btn-default  mx-4 remove " >Remove</button>
														<button  type="submit" className="btn btn-default mx-4 saveq" disabled={!(isValid && dirty)} >Save</button>
													</div>													
													{/* <button type="button" className="btn-next next-btn">Next<AiFillCaretRight className="right-array-btn" /></button> */}
													<button type="button" className="btn next-btn mx-2 next float-end" onClick={this.step3Complete} disabled={this.state.step3NextButton} >Next&ensp;<AiFillCaretRight /> </button>
											</div>
										</div>
									</div>
								</div>
							{/* </div> */}
							</form>
							)}
							</Formik> 				
						</div>
					</div> :
					this.state.step4 ?
					<div className="content">
						<Businesshour onClick={this.step4Complete}/>
					</div> :
					this.state.step5 ?
					<div className="machine main d-flex facilitykyc1 h-100">
						<div className="col-md-12 d-flex flex-column h-100">
							<div className="facility1 d-flex">
								<img src={Vector3} alt="" />
								<p>{this.state.editFacility}</p>
							</div>
							<div className="crossicon">
								<ImCross className="cross" />
							</div>
							<div className='step5-box'>
								<div className="box mt-2">
									<div className="scroll pb-3">
										{/* <div className="d-flex flex-wrap flex-column pe-4"> */}
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
										</div> : 
										<div className="box_tab_content ">
											{/* Initial Page */}
											{this.state.enviromentalChange ?
												<PerfectScrollbar>
													<div className="d-flex justify-content-center mt-5">
														<div className="left_column d-flex flex-column">
															<h4 className="mb-4">Attach your certificates</h4>
															<div className="mb-3">
																<form data-testid="environmental">
																	<label htmlFor="select-environmental" hidden>Select Certificate</label>
																	<ScroolSelect
																		name="environmental"
																		inputId="select-environmental"
																		options={this.certificates}
																		width='300px'
																		position='bottom'
																		placeholder='Select Certificate'
																		onChange={() => { }}></ScroolSelect>
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
																	<ScroolSelect
																		name="CerifiedBy"
																		inputId="select-cerifiedby"
																		options={this.cerifiedby}
																		width='133%'
																		position="bottom"
																		placeholder='Cerified by'
																		onChange={() => { }}></ScroolSelect>
																</form>
															</div>
															<div className="plusIcon d-flex">
																<img src={Vector5} className="image_one" alt="" />
																<p>  Add</p>
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
																<ScroolSelect options={this.cerifiedby} width='30%' position='bottom' placeholder='Cerified by' onChange={() => { }}></ScroolSelect>
															</div>
															<div className="plusIcon d-flex">
																<img src={Vector5} className="image_one" alt="" />
																<p>  Add</p>
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
																<ScroolSelect options={this.cerifiedby} width='30%' position='bottom' placeholder='Cerified by' onChange={() => { }}></ScroolSelect>
															</div>
															<div className="plusIcon d-flex">
																<img src={Vector5} className="image_one" alt="" />
																<p>  Add</p>
															</div>
														</div>
													</div>
												</PerfectScrollbar> : null}
											{/* Governance Page */}
										</div>
										}
									</div>
									<div className="summary">
										<Button href="#" variant="secondary" size="sm">Summary
										<RiArrowDropRightLine /></Button>
									</div>
									<div className="mt-5 m-auto bottombtn">
										<div className="row ">
											<div className="d-flex justify-content-center">
													<button type="button" className="btn back-btn mx-2 back float-start"><AiFillCaretLeft />&ensp;Back</button>
													{/* <button type="button" className="btn-back back-btn"><AiFillCaretLeft className="left-array-btn" />Back</button> */}
													<div className="m-auto">
														<button type="button" className="btn btn-default  mx-4 remove " >Remove</button>
														<button  type="submit" className="btn btn-default mx-4 saveq">Save</button>
													</div>													
													{/* <button type="button" className="btn-next next-btn">Next<AiFillCaretRight className="right-array-btn" /></button> */}
													<button type="button" className="btn next-btn mx-2 next float-end" onClick={this.step3Complete} disabled={this.state.step3NextButton} >Next&ensp;<AiFillCaretRight /> </button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* </div>  */}
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