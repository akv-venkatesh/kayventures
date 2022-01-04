import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../m-login.scss';
import "./index.css";
import $ from 'jquery';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Vector1 from "../../../assets/icons/vector1.svg";
import Vector2 from "../../../assets/icons/vector2.svg";
import clarity_factory_line from  '../../../assets/clarity_factory_line.svg';
import { BsPlusLg } from "react-icons/bs";
import { AiFillExclamationCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";



function Facilitykyc():JSX.Element {


  	const [key, setKey] = useState('home');


  	return (
		<div className="facilitykyc h-100">
			<div className="title my-2">
				<img src={Vector2} className="titleimg"/>
				<h4>Organization info</h4>
			</div>
			<div className="content">
					<div className="orgcon py-5">
						<div className="imgshow mb-4">
							<img src={Vector1}/>
							<p className="text-center my-3">Syndicate Fashions</p>
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
						<span className="mt-3 clickadd"><AiFillExclamationCircle/>Please add the facilities</span>
					</div>
					<div className="mt-2 col-md-8 pb-4 m-auto">
                        <div className="row ">
                            <div className="w-100 d-flex justify-content-center">
                                <button type="button" className="btn btn-back mx-2 back float-start"><AiFillCaretLeft />&emsp;Back</button>
                                    <div className="w-30 m-auto">
                                        <button type="button" className="btn btn-default  mx-4 remove">Remove</button>
                                        <button 
                                            type="button" 
                                            className="btn btn-default mx-4 saveq"
                                            >Save</button>
                                    </div>
                                        <button type="submit" className="btn btn-back mx-2 next float-end">Next&emsp;<AiFillCaretRight />
                                        </button> 
                            </div>
                        </div>
                    </div>
			</div>
		</div>
		);
}
export default  Facilitykyc;