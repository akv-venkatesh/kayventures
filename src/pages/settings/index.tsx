import React from 'react';
import { Link } from "react-router-dom";
import '../m-login.scss';
import { Formik, Field } from "formik";
import { HiUserCircle, HiOutlineFingerPrint } from "react-icons/hi";
import { ImMenu } from "react-icons/im";
import Navigation from '../../component/manufacturer_navigation';
import CustomSelect from '../../component/custom_select';
import KYC from './kyc/index';
import $ from 'jquery';

function ManufacturerSettings():JSX.Element {

  	return (
		<div className='d-flex flex-wrap h-100 m-settings'>
			<CustomSelect />
	    	<section className='s-sec1'>
		    	<Navigation />
		    </section>
		    <section className="py-sm-3 px-3 h-100 s-sec2">
		    	<div className="h-100">
		    		<div className="navigation align-items-center d-flex justify-content-between">
		    			<div className="d-flex align-items-center">
		    				<div className="me-3">
		    					<ImMenu className="d-md-none menu-bar" />
		    				</div>
		    				<ul className="d-flex mb-0 ps-0">
		    					<li className="me-3">{localStorage.getItem('business_category')}</li>
		    					<li className="me-3 active">Settings</li>
		    				</ul>
		    			</div>
		    			<div className="d-flex align-items-center">
		    				<div className="text-end d-md-block d-none">
		    					<h6 className="m-0">Mrs. Jane Doe</h6>
		    					<p className="m-0">User Designation</p>
		    				</div>
		    				<HiUserCircle className="user-image ms-3"/>
		    			</div>
		    		</div>
		    		<div className="main-content-parent">
			    		<div className="d-flex flex-wrap h-100">
			    			<div className="settings-menu h-100 d-flex justify-content-center flex-column flex-wrap align-items-center">
			    				<div className="text-center">
			    					<HiOutlineFingerPrint className="settings-icon active"/>
			    					<p>KYC</p>
			    				</div>
			    				<div className="text-center">
			    					<HiOutlineFingerPrint className="settings-icon"/>
			    					<p>Product Configuration</p>
			    				</div>
			    				<div className="text-center">
			    					<HiOutlineFingerPrint className="settings-icon"/>
			    					<p>Operations</p>
			    				</div>
			    				<div className="text-center">
			    					<HiOutlineFingerPrint className="settings-icon"/>
			    					<p>Progress Report</p>
			    				</div>
			    			</div>
			    			<div className="settings-menu-content h-100 px-5 py-3">
			    				<div className="content h-100">
			    					<KYC />
			    				</div>
			    			</div>
			    		</div>
			    	</div>
		    	</div>
		    </section>
		</div>
	);
}
export default  ManufacturerSettings;