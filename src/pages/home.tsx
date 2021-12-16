import React , {Component}from 'react';
import { Link } from "react-router-dom";
import './m-login.scss';
import { Formik, Field } from "formik";
import { HiUserCircle, HiPlay } from "react-icons/hi";
import { ImMenu } from "react-icons/im";
import Navigation from '../component/manufacturer_navigation';
import $ from 'jquery';

interface typeState{
	video_vis: boolean
}
class ManufacturerHome extends Component<{}, typeState> {

	constructor(props:any){
		super(props);
		this.state ={
			video_vis: false
		}
	}
	video_visible = () =>{
		this.setState({
			video_vis: !this.state.video_vis,
		});
	}

 	render(){
		return (
			<div className='d-flex flex-wrap h-100 m-home'>
					
				<section className='s-sec1'>
					<Navigation />
				</section>
	
				<section className="py-sm-3 px-sm-5 px-3 h-100 s-sec2">
					<div className="h-100">
						<div className="navigation align-items-center d-flex justify-content-between">
							<div className="d-flex align-items-center">
								<div className="me-3">
									<ImMenu className="d-md-none menu-bar" />
								</div>
								<ul className="d-flex mb-0 ps-0">
									<li className="me-3">{localStorage.getItem('business_category')}</li>
									<li className="me-3 active">Home</li>
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
						<div className="p-lg-5 py-4 main-content-parent">
							<div className="h-100 main-content">
								<div className="p-md-5 py-5 h-100">
									<div className="container-fluid h-100">
										<div className="row h-100">
											<div className="col-lg-6 h-100 mt-3">
												<div className="d-flex flex-column justify-content-between h-100">
													<div className="text-start">
														<h1>WELCOME! to Kay</h1>
														<p>Follow the instructions to complete the business, operation related information settings :</p>
													</div>
													<div className="ratio">
														<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
															{/* { state.mhomepage.video_vis ? */}
																<div className="overlay d-flex justify-content-center align-items-center">
																<HiPlay className="btn" onClick={this.video_visible}/>
															</div> : ''
															{/* } */}
														</div>
												</div>
											</div>
											<div className="col-lg-6 h-100 mt-3">
												<div className="d-flex align-items-end justify-content-center h-100">  
													<img src="./no-image.svg" alt="no-image"/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
	
			</div>
		);
	}
}
export default  ManufacturerHome;