import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../../m-login.scss';
import "./index.css";
import $ from 'jquery';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Vector1 from "../../../../assets/icons/vector1.svg";
import Vector2 from "../../../../assets/icons/vector2.svg";
import { BsPlusLg } from "react-icons/bs";
import { AiFillExclamationCircle } from "react-icons/ai";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import Stepper from '../../../../component/stepper/stepper'




function Organization(): JSX.Element {


	const [key, setKey] = useState('home');
	const steps = [{ label: 'KYC', id: 0 }, { label: 'Product Selection', id: 1 }, { label: 'Machinery', id: 2 }, { label: 'Operations', id: 3 }]

	return (
		<div className="organization h-100">
			<div className="title my-2">
				<Stepper steps={steps} activeStep={1} />
			</div>
			<div className="content">
				<div className="orgcon py-5">
					<Link to="/settings/Organizationinfo" className="">
						<div className="imgshow mb-4">
							<img src={Vector1} />
							<p className="text-center my-3">Syndicate Fashions</p>
						</div></Link>
					<p className="addfac mt-4">Add Facility</p>
					<div className="pt-2 mb-5">
						<div className="add-button text-center">
							<span>Type the Facility name</span>
							<div className="add-btn">
								<BsPlusLg className="add-icon" />
							</div>
						</div>
					</div>
					<span className="mt-5 clickadd"><AiFillExclamationCircle />Click to add Organization kyc</span>
				</div>
				<div className="mt-5 col-md-8 pb-4 m-auto">
					<div className="row ">
						<div className="w-100 d-flex justify-content-center">
							<button title="backbutton" type="button" className="btn btn-back mx-2 back float-start"><AiFillCaretLeft />&emsp;Back</button>
							<div className="w-30 m-auto">
								<button title="removebutton" type="button" className="btn btn-default  mx-4 remove">Remove</button>
								<button title="savebutton"
									type="button"
									className="btn btn-default mx-4 saveq"
								>Save</button>
							</div>
							<button title="nextbutton" type="submit" className="btn btn-back mx-2 next float-end">Next&emsp;<AiFillCaretRight />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Organization;