import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../../m-login.scss';
import $ from 'jquery';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import BusinessHr from './businessHours';
import Rating from './rating';
import ContactInfo from './ContactInformation';
import TaxReg from './TaxRegistration';
import Entity from './Entity'


function ManufacturerSettingsKyc() {


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
		        <div>
				
		        	<Entity />
		        </div>
	      	</Tab>
	      	<Tab eventKey="taxRegistraton" title="Tax Registraton">
		        <div>
		        	<TaxReg/>
		        </div>
	      	</Tab>
	      	<Tab eventKey="rating" title="Rating & Evaluation">
		        <Rating />
	      	</Tab>
	      	<Tab eventKey="contact" title="Contact Information">
		        <div>
		        	<ContactInfo />
		        </div>
	      	</Tab>
	      	<Tab eventKey="businessHours" title="Business Hours">
	      		<BusinessHr />
	      	</Tab>
	    </Tabs>
	);
}
export default  ManufacturerSettingsKyc;