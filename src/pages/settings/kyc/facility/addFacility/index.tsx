import { Link } from "react-router-dom";
import '../../../../m-login.scss';
import $ from 'jquery';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Vector1 from "../../../../../assets/images/vest.svg";
import Vector2 from "../../../../../assets/icons/vector2.svg";
import Vector3 from "../../../../../assets/icons/various/Vector3.svg";
import Vector5 from "../../../../../assets/icons/various/Vector5.svg"
import clarity_factory_line from '../../../../../assets/clarity_factory_line.svg';
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
import { Formik, Field } from "formik";
import { ChangeEvent } from 'react';
import Select from '../../../../../component/dropdown_select/slelect';
import Businesshour from '../../commonFiles/businessHrs';
import DatePicker from '../../../../../component/calendar/calendar';
import { FaRegFileAlt } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';
import Image2 from "../../../../../assets/image2.svg";
import FacilityHome from "../../commonFiles/facilityhome";
import Stepper from '../../../../../component/stepper/stepper';
import ScrollSelect from '../../../../../component/dropdown_select_scrollable/slelect';


interface typeState {
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
	facilities: string[],
	editFacility: any,

	//
	step3NextButton: boolean,
	step3SubmitedData: any

	//
	step5ActiveTab: any
	enviromentalCertificates: any,
	governanceCertificates: any,
	socialCertificates: any,
	
	certificateType:any,

	certificateNo:any,
	certificateFile:any,
	certificateFileName:any,
	certificateValid:any,
	certificateBy:any,
	enviromentalCertificatesCount: any,
	governanceCertificatesCount: any,
	socialCertificatesCount: any,
	certificatesErrorMsg:any,
	step5NextButton:any
	certificates: any
}


class AddFacility extends Component<{}, typeState> {
	constructor(props: any) {
		super(props);
		this.state = {
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
			inputFecilityName: '',
			facilities: [],
			editFacility: '',
			//
			step3NextButton: true,
			step3SubmitedData: '',
			//
			step5ActiveTab: { Environmental: false, Social: false, Governance: false },
			enviromentalCertificates: '',
			governanceCertificates: '',
			socialCertificates: '',
			certificates: { },
			certificateType:'',
			certificateNo:'',
			certificateFile:'',
			certificateFileName:'',
			certificateValid:'',
			certificateBy:'',
			enviromentalCertificatesCount: '',
			governanceCertificatesCount: '',
			socialCertificatesCount: '',
			certificatesErrorMsg:'',
			step5NextButton:false
		}
	}


	componentDidMount() {

		let environmental = ['EMAS','Nordic Swan','EU Flower', 'REACH'];
		let social = ['SA 8000', 'OHSAS / 8001','Fair Trade','Wrap Union'];
		let governance = ['PE, ESI','AA 1000','Siatutari','Licences'];

		let environmentalState:any = []
		for(let i=0; i < environmental.length; i++){
			environmentalState.push({certificateType: environmental[i], certificates: []})
		}
		let socialState:any = []
		for(let i=0; i < social.length; i++){
			socialState.push({certificateType: social[i], certificates: []})
		}
		let governanceState:any = []
		for(let i=0; i < governance.length; i++){
			governanceState.push({certificateType: governance[i], certificates: []})
		}
		this.setState({
			enviromentalCertificates:environmentalState ,
			governanceCertificates: governanceState,
			socialCertificates: socialState,
		})
	}

	hideSummary = () => {
		this.setState({
			showSummary: false
		})
	}

	lineTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
		let value: any = event;
		this.setState({
			linetype: value.value
		})
	}
	step1Complete = () => {
		this.setState({
			step1: false,
			step2: true,
		})
	}
	step2Complete = (facility: any) => {
		this.setState({
			step2: false,
			step3: true,
			editFacility: facility
		})
	}
	step3Complete = () => {
		this.setState({
			step3: false,
			step4: true,
		})
	}
	step4Complete = () => {
		this.setState({
			step4: false,
			step5: true,
		})
	}
	step5Complete = () => {
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
			step5ActiveTab: { Environmental: true, Social: false, Governance: false }
		});
	}
	handleSocialChange = () => {
		this.setState({
			initialPage: false,
			socialChange: true,
			enviromentalChange: false,
			GovernanceChange: false,
			step5ActiveTab: { Environmental: false, Social: true, Governance: false }
		});
	}
	handleGovernanceChange = () => {
		this.setState({
			initialPage: false,
			GovernanceChange: true,
			socialChange: false,
			enviromentalChange: false,
			step5ActiveTab: { Environmental: false, Social: false, Governance: true }
		});
	}
	// datePicker = (e: Date): any => {
	// }
	LineTypeOptions = [
		{ value: 'Open', label: 'Open' },
		{ value: 'Reserved', label: 'Reserved' },
	];

	environmental = [
		{ value: 'EMAS', label: 'EMAS' },
		{ value: 'Nordic Swan', label: 'Nordic Swan' },
		{ value: 'EU Flower', label: 'EU Flower' },
		{ value: 'REACH', label: 'REACH' }
	];
	social = [
		{ value: 'SA 8000', label: 'SA 8000' },
		{ value: 'OHSAS / 8001', label: 'OHSAS / 8001' },
		{ value: 'Fair Trade', label: 'Fair Trade' },
		{ value: 'Wrap Union', label: 'Wrap' }
	];
	governance = [
		{ value: 'PE, ESI', label: 'PE, ESI' },
		{ value: 'AA 1000', label: 'AA 1000' },
		{ value: 'Siatutari', label: 'Siatutari' },
		{ value: 'Licences', label: 'Licences' }
	]

	cerifiedby = [
		{ value: 'SSG', label: 'SSG' },
		{ value: 'TUV Rheinland', label: 'TUV Rheinland' },
		{ value: 'Intertek', label: 'Intertek' },
		{ value: 'Control Union', label: 'Control Union' },
		{ value: 'DNV', label: 'DNV' },
		{ value: 'Textile Committee', label: 'Textile Committee' },
		{ value: 'GOTS', label: 'GOTS' }
	];

	handleAddFacility = () => {
		let { inputFecilityName, facilities } = this.state;
		if (inputFecilityName) {
			facilities.push(inputFecilityName);
		}
		this.setState({ facilities: facilities, inputFecilityName: '' })
	}

	handleRemoveFacility = (facility: any) => {
		let { facilities } = this.state;
		let filteredfacilities;
		if (facility >= 0) {
			filteredfacilities = facilities.splice(facility, 1);
		}
		this.setState({ facilities: facilities })
	}

	// 

	handleCertificateTypeChange = (value:any) =>{
		this.setState({certificateType : value.value })
	}
	handleCertificateNoChange = (value:any) =>{
		this.setState({certificateNo : value })
	}
	handleCertificateFileChange = (event:any) =>{
		if (event.currentTarget.files && event.currentTarget.files[0]) {
			let name = event.currentTarget.files[0].name;
			let fileName = name.substring(0,10) +'...';
			this.setState({ certificateFile: event.currentTarget.files[0] ,certificateFileName: fileName})
		  }
	}
	handleCertificateValidChange = (value:any) =>{
		this.setState({certificateValid : value })
	}
	handleCertificateByChange = (value:any) =>{
		this.setState({certificateBy : value.value })
	}

	handleAddEnvironnentalCertificate = () =>{
		let { enviromentalCertificates, certificateType , certificateBy, certificateFile , certificateValid, certificateNo} = this.state
		let enviromentalCertCount = 0
		if(certificateType && certificateBy && certificateFile && certificateValid && certificateNo){
			for (let index = 0; index < enviromentalCertificates.length; index++) {
				const element = enviromentalCertificates[index];
				if(element.certificateType == certificateType){
					element.certificates.push({
						certificateFile : certificateFile,
						certificateNo : certificateNo,
						certificateValid : certificateValid,
						certificateBy : certificateBy,
					})
				}	
				enviromentalCertCount = enviromentalCertCount + element.certificates.length;
			}
			console.log(enviromentalCertificates)
			this.setState({enviromentalCertificates : enviromentalCertificates,enviromentalCertificatesCount : enviromentalCertCount})
			this.setState({certificateBy : '',certificateFile : '',certificateValid : '',certificateNo : '',certificateFileName:'',step5NextButton : false})
			this.setState({certificatesErrorMsg:''})
		}
		else{
			console.log("Please Select all Fields");
			this.setState({certificatesErrorMsg:'Please Select all Fields'})
		}
	}

	handleAddGovernanceCertificate = () =>{
		let { governanceCertificates, certificateType , certificateBy, certificateFile , certificateValid, certificateNo} = this.state
		let governanceCertCount = 0
		if(certificateType && certificateBy && certificateFile && certificateValid && certificateNo){
			for (let index = 0; index < governanceCertificates.length; index++) {
				const element = governanceCertificates[index];
				if(element.certificateType == certificateType){
					element.certificates.push({
						certificateFile : certificateFile,
						certificateNo : certificateNo,
						certificateValid : certificateValid,
						certificateBy : certificateBy,
					})
				}	
				governanceCertCount = governanceCertCount + element.certificates.length;
			}
			console.log(governanceCertificates)
			this.setState({governanceCertificates : governanceCertificates , governanceCertificatesCount : governanceCertCount})
			this.setState({certificateBy : '',certificateFile : '',certificateValid : '',certificateNo : '',certificateFileName:'',step5NextButton : false})
			this.setState({certificatesErrorMsg:''})
		}
		else{
			console.log("Please Select all Fields");
			this.setState({certificatesErrorMsg:'Please Select all Fields'})
		}
	}

	handleAddSocialCertificate = () =>{
		let { socialCertificates, certificateType , certificateBy, certificateFile , certificateValid, certificateNo} = this.state
		let socialCertificatesCount = 0
		if(certificateType && certificateBy && certificateFile && certificateValid && certificateNo){
			for (let index = 0; index < socialCertificates.length; index++) {
				const element = socialCertificates[index];
				if(element.certificateType == certificateType){
					element.certificates.push({
						certificateFile : certificateFile,
						certificateNo : certificateNo,
						certificateValid : certificateValid,
						certificateBy : certificateBy,
					})
				}	
				socialCertificatesCount = socialCertificatesCount + element.certificates.length;
			}
			console.log(socialCertificates)
			this.setState({socialCertificates : socialCertificates,socialCertificatesCount : socialCertificatesCount})
			this.setState({certificateBy : '',certificateFile : '',certificateValid : '',certificateNo : '',certificateFileName:'',step5NextButton : false})
			this.setState({certificatesErrorMsg:''})
		}
		else{
			console.log("Please Select all Fields");
			this.setState({certificatesErrorMsg:'Please Select all Fields'})
			
		}
	}

	handleSaveCertificates = () => {
		let certificates = [ {enviromental : []} ,{governance : []},{social : []} ] 
      
			if(this.state.enviromentalCertificatesCount > 0){
				certificates[0].enviromental = this.state.enviromentalCertificates
			}
			if(this.state.governanceCertificatesCount > 0){
				certificates[1].governance = this.state.governanceCertificates
			}
			if(this.state.socialCertificatesCount > 0){
				certificates[2].social = this.state.socialCertificates
			}
		
		

		this.setState({certificates : certificates, step5NextButton : true})

	}
	// 



	render(): JSX.Element {
		const steps = [{ label: 'Add Facility', id: 0 },
		{ label: 'Facility KYC', id: 1 },
		{ label: 'Facility Info.', id: 2 },
		{ label: 'Product Selection', id: 3 },
		{ label: 'Capacity', id: 4 },
		{ label: 'Sections', id: 5 }];

		const { facilities, inputFecilityName } = this.state

		//Steop3Form 
		const step3InitialValues: any = {
			addrLine1: '',
			addrLine2: '',
			state: '',
			country: '',
			pincode: '',
			addrLineType: '',
			locationMap: '',
			mentionNumber: '',
			contactPhone: '',
			contactEmail: '',
			typeofService: '',
			service: '',
			customercareAdministration: ''
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
										<AiFillExclamationCircle />
										<div className="imgshow mb-4">
											<img src={Vector1} />
											<p className="text-center my-3">Syndicate Fashions</p>
										</div>
									</div>
									<p className="addfac mt-2">Add Facility</p>
									<div className="pt-2 mb-2 typefacility">
										<div className="add-button text-center">
											<span><input type='text' placeholder='Type the Facility name' value={inputFecilityName} style={{ backgroundColor: 'transparent', border: '0px solid transparent', }} onChange={(e: any) => this.setState({ inputFecilityName: e.target.value })} /></span>
											<div className="add-btn" onClick={() => this.handleAddFacility()}>
												<BsPlusLg className="add-icon" />
											</div>
										</div>
										<div className='facilities-container pt-4 pb-2'>
											{/* <PerfectScrollbar> */}
											{
												facilities.length > 0 ?
													facilities.map((facility: any, key) => {
														return (

															<div className='facility-item'>
																<ImCross className="cross" onClick={() => this.handleRemoveFacility(key)} />
																<img src={clarity_factory_line} />
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
											<button type="submit" onClick={this.step1Complete} disabled={facilities.length > 0 ? false : true} className="btn next-btn mx-2 next float-end">Next&emsp;<AiFillCaretRight />
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
								<FacilityHome onClick={(state) => { this.step2Complete(state) }} selected_Facilities={facilities} />
							</div> :
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
											initialValues={step3InitialValues}
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
												if (!values.contactPhone) {
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
												this.setState({ step3NextButton: false, step3SubmitedData: values })
											}}
										>
											{({
												values,
												errors,
												touched,
												handleChange,
												handleBlur,
												handleSubmit,
												isSubmitting, setFieldValue, isValid, dirty
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
																						<Field type="text" id="" className="input-box" name="addrLine1" aria-label="line1" onChange={handleChange} onBlur={handleBlur} value={values.addrLine1} placeholder="Line 1" />
																						<Field type="text" id="" className="input-box" name="addrLine2" aria-label="line2" placeholder="Line 2" onChange={handleChange} onBlur={handleBlur} value={values.addrLine2} />
																						<div className='inbox-line3'>
																							<Field type="text" id="" className="input-box add" name="state" aria-label="state" placeholder="State" onChange={handleChange} onBlur={handleBlur} value={values.state} />
																							<Field type="text" id="" className="input-box add" name="country" aria-label="country" placeholder="Country" onChange={handleChange} onBlur={handleBlur} value={values.country} />
																							<Field type="text" id="" className="input-box add" name="pincode" aria-label="pincode" placeholder="Pincode" onChange={handleChange} onBlur={handleBlur} value={values.pincode} />
																						</div><br />
																						<p className="validation-error" style={{ color: 'red' }}>{errors.address}</p>
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
																							onChange={(e: any) => setFieldValue("addrLineType", e.value)}
																							isOptionDisabled={(option: any) => option.disabled}
																						/>
																						{/* </form> */}
																						<Field type="hidden" id="" className="input-box mt-3" name="addrLineType" aria-label="addrLineType" placeholder="Mention Number" onChange={handleChange} onBlur={handleBlur} value={values.addrLineType} />
																						<Field type="text" id="" className="input-box mt-3" name="mentionNumber" aria-label="mentionNumber" placeholder="Mention Number" onChange={handleChange} onBlur={handleBlur} value={values.mentionNumber} />
																					</div>
																				</div>
																				<div className="row  mt-5 d-flex ">
																					<h3 className="col-md-3">Reverse Gecoding<span className='required'> </span></h3>
																					<div className="col-md-4 input-parent">
																						<Field type="text" id="" className="input-box" name="locationMap" aria-label="locationMap" placeholder="Enter Latitude" onChange={handleChange} onBlur={handleBlur} value={values.locationMap} />
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
																						<Field type="number" id="" className="input-box" name="contactPhone" aria-label="contactPhone" placeholder="+91 XXXXXXXXX" onChange={handleChange} onBlur={handleBlur} value={values.contactPhone} />
																						<p className="validation-error" style={{ color: 'red' }}>{errors.contactPhone && touched.contactPhone && errors.contactPhone}</p>
																					</div>
																				</div>
																				<div className="row mt-3 d-flex ">
																					<h3 className="col-md-3">Email -Id<span className='required'> </span></h3>
																					<div className="col-md-4 input-parent">
																						<Field type="text" id="" className="input-box" name="contactEmail" aria-label="contactEmail" placeholder="xyz@gmail.com or company Id" onChange={handleChange} onBlur={handleBlur} value={values.contactEmail} />
																						<p className="validation-error" style={{ color: 'red' }}>{errors.contactEmail && touched.contactEmail && errors.contactEmail}</p>
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
																						<Field type="number" id="" className="input-box" name="typeofService" aria-label="typeofService" placeholder="Customer service, etc" onChange={handleChange} onBlur={handleBlur} value={values.typeofService} />

																					</div>
																				</div>
																				<div className="row mt-3 d-flex ">
																					<h3 className="col-md-3">Service<span className='required'> </span></h3>
																					<div className="col-md-4 input-parent">
																						<Field type="number" id="" className="input-box" name="service" aria-label="service" placeholder="+91 XXXXXXXXX" onChange={handleChange} onBlur={handleBlur} value={values.service} />
																					</div>
																				</div>
																				<div className="row mt-3 d-flex ">
																					<h3 className="col-md-3">Customer care administration<span className='required'> </span></h3>
																					<div className="col-md-4 input-parent">
																						<Field type="text" id="" className="input-box" name="customercareAdministration" aria-label="customercareAdministration" placeholder="xyz@gmail.com or company Id" onChange={handleChange} onBlur={handleBlur} value={values.customercareAdministration} />
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
																		<button type="submit" className="btn btn-default mx-4 saveq" disabled={!(isValid && dirty)} >Save</button>
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
										<Businesshour onClick={this.step4Complete} />
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
															{/* step5ActiveTab:{ Environmental:false, Social:false, Governance:false } */}
															<div className="box_buttons d-flex justify-content-center pb-3">
																<div className="position-relative">
																	<Button href="#" variant="light" className={this.state.step5ActiveTab.Environmental ? "tab-btn active" : "tab-btn"} size="lg" onClick={this.handleEnviromentalChange} >
																		Environmental
																	</Button> {this.state.enviromentalCertificatesCount > 0 ? <span className="circle">{this.state.enviromentalCertificatesCount}</span> : " "}
																</div>
																<div className="position-relative">
																	<Button href="#" variant="light" className={this.state.step5ActiveTab.Social ? "tab-btn active" : "tab-btn"} size="lg" onClick={this.handleSocialChange} >
																		Social
																	</Button>{this.state.socialCertificatesCount > 0 ? <span className="circle">{this.state.socialCertificatesCount}</span> : " "}
																</div>
																<div className="position-relative">
																	<Button href="#" variant="light" className={this.state.step5ActiveTab.Governance ? "tab-btn active" : "tab-btn"} size="lg" onClick={this.handleGovernanceChange}>
																		Governance
																	</Button>{this.state.governanceCertificatesCount > 0 ? <span className="circle">{this.state.governanceCertificatesCount}</span> : " "}
																</div>
															</div>
															{this.state.initialPage ?
																<div className="box_content d-flex justify-content-center">
																	<div className="d-flex flex-column justify-content-center align-items-center">
																		<p>Click on the above buttons to add the</p><p> ESG Certificates.</p>
																	</div>
																</div> :
																<div className="box_tab_content">
																	{/* Initial Page */}
																	{this.state.enviromentalChange ?
																		<PerfectScrollbar>
																			<div className="certificates-container">
																				<div className="row certificates-content">
																					<div className='col-md-12 pb-3'>
																						<h4 className="">Attach your certificates</h4>
																					</div>
																					<div className='col-md-12 py-3 row'>
																						<div className="left_column col-md-4 d-flex flex-column">
																							<div className="mb-3">
																								<form data-testid="governance">
																									<label htmlFor="select-governance" hidden>Select Certificate</label>
																									<Select
																										name="governance"
																										inputId="select-governance"
																										options={this.environmental}
																										width='100%'
																										position='bottom'
																										placeholder='Select Certificate'
																										onChange={(value) => {this.handleCertificateTypeChange(value)}}></Select>
																								</form>
																							</div>
																						</div>
																						<div className="right_column col-md-8">
																							<div className="input_file d-flex mb-4">
																								<div className="position-relative file-upload">
																									<label htmlFor="registration-certificate" className="label-file" id="file-chosen">Attach your certificate here</label>
																									<input aria-label="registration-certificate" type="file" id="registration-certificate" name="registration-certificate"  onChange={(e)=>{this.handleCertificateFileChange(e)}}  placeholder="Attach your files here" hidden />
																									<label htmlFor="registration-certificate" className='upload-icon'><ImAttachment /></label>
																									{this.state.certificateFileName ? <p className='certificates-filename'>{this.state.certificateFileName}</p>: ''}
																								</div>
																							</div>
																							<div className="input_multifile d-flex mb-3 ">
																								<div className='input_file'><Form.Control type="text" onChange={(e) => this.handleCertificateNoChange(e.target.value)}  value={this.state.certificateNo} placeholder="Certificate No." /></div>
																								<div className='input_file'><DatePicker onChange={(value) => this.handleCertificateValidChange(value)}  /></div>
																								<div className='input_file'><ScrollSelect options={this.cerifiedby} width='100%' position='bottom' placeholder='Cerified by' onChange={(value) => this.handleCertificateByChange(value)}></ScrollSelect></div>
																							</div>
																							<div className="plusIcon d-flex">
																								<img src={Vector5} className="image_one" alt="" onClick={() => this.handleAddEnvironnentalCertificate()} />
																								<p onClick={() => this.handleAddEnvironnentalCertificate()}>Add</p>
																								{this.state.certificatesErrorMsg ? <p className='certificatesErrorMsg'>{this.state.certificatesErrorMsg}</p>: ''}
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</PerfectScrollbar> : null}
																	{/* enviromental Page */}

																	{this.state.socialChange ?
																		<PerfectScrollbar>
																			<div className="certificates-container">
																				<div className="row certificates-content">
																					<div className='col-md-12 pb-3'>
																						<h4 className="">Attach your certificates</h4>
																					</div>
																					<div className='col-md-12 py-3 row'>
																						<div className="left_column col-md-4 d-flex flex-column">
																							<div className="mb-3">
																								<form data-testid="governance">
																									<label htmlFor="select-governance" hidden>Select Certificate</label>
																									<Select
																										name="governance"
																										inputId="select-governance"
																										options={this.social}
																										width='100%'
																										position='bottom'
																										placeholder='Select Certificate'
																										onChange={(value) => {this.handleCertificateTypeChange(value)}}></Select>
																								</form>
																							</div>
																						</div>
																						<div className="right_column col-md-8">
																							<div className="input_file d-flex mb-4">
																								<div className="position-relative file-upload">
																									<label htmlFor="registration-certificate" className="label-file" id="file-chosen">Attach your certificate here</label>
																									<input aria-label="registration-certificate" type="file" id="registration-certificate" name="registration-certificate"  onChange={(e)=>{this.handleCertificateFileChange(e)}}  placeholder="Attach your files here" hidden />
																									<label htmlFor="registration-certificate" className='upload-icon'><ImAttachment /></label>
																									{this.state.certificateFileName ? <p className='certificates-filename'>{this.state.certificateFileName}</p>: ''}
																								</div>
																							</div>
																							<div className="input_multifile d-flex mb-3 ">
																								<div className='input_file'><Form.Control type="text" onChange={(e) => this.handleCertificateNoChange(e.target.value)} value={this.state.certificateNo} placeholder="Certificate No." /></div>
																								<div className='input_file'><DatePicker onChange={(value) => this.handleCertificateValidChange(value)} /></div>
																								<div className='input_file'><ScrollSelect options={this.cerifiedby} width='100%' position='bottom' placeholder='Cerified by' onChange={(value) => this.handleCertificateByChange(value)}></ScrollSelect></div>
																							</div>
																							<div className="plusIcon d-flex">
																								<img src={Vector5} className="image_one" alt="" onClick={() => this.handleAddSocialCertificate()} />
																								<p onClick={() => this.handleAddSocialCertificate()}>Add</p>
																								{this.state.certificatesErrorMsg ? <p className='certificatesErrorMsg'>{this.state.certificatesErrorMsg}</p>: ''}
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</PerfectScrollbar> : null}
																	{/* Social Page */}

																	{this.state.GovernanceChange ?
																		<PerfectScrollbar>
																			<div className="certificates-container">
																				<div className="row certificates-content">
																					<div className='col-md-12 pb-3'>
																						<h4 className="">Attach your certificates</h4>
																					</div>
																					<div className='col-md-12 py-3 row'>
																						<div className="left_column col-md-4 d-flex flex-column">
																							<div className="mb-3">
																								<form data-testid="governance">
																									<label htmlFor="select-governance" hidden>Select Certificate</label>
																									<Select
																										name="governance"
																										inputId="select-governance"
																										options={this.governance}
																										width='100%'
																										position='bottom'
																										placeholder='Select Certificate'
																										onChange={(value) => {this.handleCertificateTypeChange(value)}}></Select>
																								</form>
																							</div>
																						</div>
																						<div className="right_column col-md-8">
																							<div className="input_file d-flex mb-4">
																								<div className="position-relative file-upload">
																									<label htmlFor="registration-certificate" className="label-file" id="file-chosen">Attach your certificate here</label>
																									<input aria-label="registration-certificate" type="file" id="registration-certificate" name="registration-certificate" onChange={(e)=>{this.handleCertificateFileChange(e)}} placeholder="Attach your files here" hidden />
																									<label htmlFor="registration-certificate" className='upload-icon'><ImAttachment /></label>
																									{this.state.certificateFileName ? <p className='certificates-filename'>{this.state.certificateFileName}</p>: ''}
																								</div>
																							</div>
																							<div className="input_multifile d-flex mb-3 ">
																								<div className='input_file'><Form.Control onChange={(e) => this.handleCertificateNoChange(e.target.value)} type="text" value={this.state.certificateNo} placeholder="Certificate No." /></div>
																								<div className='input_file'><DatePicker onChange={(value) => this.handleCertificateValidChange(value)} /></div>
																								<div className='input_file'><ScrollSelect options={this.cerifiedby} width='100%' position='bottom' placeholder='Cerified by' onChange={(value) => this.handleCertificateByChange(value)}></ScrollSelect></div>
																							</div>
																							<div className="plusIcon d-flex" >
																								<img src={Vector5} className="image_one" alt="" onClick={() => this.handleAddGovernanceCertificate()} />
																								<p onClick={() => this.handleAddGovernanceCertificate()}>Add</p>
																								{this.state.certificatesErrorMsg ? <p className='certificatesErrorMsg'>{this.state.certificatesErrorMsg}</p>: ''}
																							</div>
																						</div>
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
																	<button type="button" onClick={this.step3Complete} className="btn back-btn mx-2 back float-start"><AiFillCaretLeft />&ensp;Back</button>
																	{/* <button type="button" className="btn-back back-btn"><AiFillCaretLeft className="left-array-btn" />Back</button> */}
																	<div className="m-auto">
																		<button type="button" className="btn btn-default  mx-4 remove"  >Remove</button>
																		<button type="submit" className="btn btn-default mx-4 saveq" onClick={() =>this.handleSaveCertificates()} disabled={ this.state.enviromentalCertificatesCount || this.state.socialCertificatesCount || this.state.governanceCertificatesCount  ? false : true  }>Save</button>
																	</div>
																	{/* <button type="button" className="btn-next next-btn">Next<AiFillCaretRight className="right-array-btn" /></button> */}
																	<button type="button" className="btn next-btn mx-2 next float-end" onClick={() => {console.log(this.state.certificates)}} disabled={this.state.step5NextButton ? false : true} >Next&ensp;<AiFillCaretRight /> </button>
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
					onHide={() => { this.setState({ showModel: false }) }}
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
											<BsTelephone />
											<span>9832239554</span>
										</div>
										<div className="mt-4">
											<AiOutlineClockCircle />
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