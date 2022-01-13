import React, { useState,useEffect,Component } from 'react';
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

interface typeState {
  }

class Organization extends Component<{}, typeState> {
    constructor(props:any){
      super(props);
    }
	 
 

render(): React.ReactNode {
return (
		<div className="organization h-100">
			<div className="title my-2">
				<img src={Vector2} className="titleimg"/>
				<h4>Organization KYC</h4>
			</div>
			<div className="content">
			    
				<div className="contentcen">
				
					<div className="orgcon">
					<AiFillExclamationCircle/>
						<Link to="/settings/Organizationinfo" className="">						
							<div className="imgshow mb-4">
								<img src={Vector1}/>
								<p className="text-center my-3">Syndicate Fashions</p>
							</div>
						</Link>
							{/* <p className="addfac mt-4">Add Facility</p>
							<div className="pt-2 mb-5">
								<div className="add-button text-center">
									<span>Type the Facility name</span>
									<div className="add-btn">
										<BsPlusLg className="add-icon" />
									</div>							
								</div>
							</div> */}
							
					</div>
				</div>
				<span className="clickadd">Click to start with the Organization kYC</span>

					
					{/* <div className="mt-5 col-md-8 pb-4 m-auto">
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
                    </div> */}
			</div>
		</div>
);   
}
}
export default  Organization;