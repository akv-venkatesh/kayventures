import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../m-login.scss';
import $ from 'jquery';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import BusinessHr from './businessHours';
import Rating from './rating';
import ContactInfo from './ContactInformation';
import TaxReg from './TaxRegistration';
import Entity from './Entity'


function ManufacturerSettingsKyc():JSX.Element {


  	const [key, setKey] = useState('home');


  	return (
		 
	    <Tabs
  			defaultActiveKey="entity"
	      	id="settings-tab"
	      	// activeKey={key}
	      	// onSelect={(k) => setKey(k)}
	      	// className=""
	    >
	      	<Tab eventKey="entity" title="Entity">
		        <div className="h-100">
		        	<Entity />
		        </div>
	      	</Tab>
	      	<Tab eventKey="taxRegistraton" title="Tax Registraton">
		        <div className="h-100">
		        	<TaxReg/>
		        </div>
	      	</Tab>
	      	<Tab eventKey="rating" title="Rating & Evaluation">
	      		<div className="h-100">
	      	  		<Rating />
	      	  	</div>
	      	</Tab>
	      	<Tab eventKey="contact" title="Contact Information">
		        <div className="h-100">
		        	<ContactInfo />
		        </div>
	      	</Tab>
	      	<Tab eventKey="businessHours" title="Business Hours">
	      		<div className="h-100">
	      			<BusinessHr />
	      		</div>
	      	</Tab>
	    </Tabs>
	);
}
export default  ManufacturerSettingsKyc;