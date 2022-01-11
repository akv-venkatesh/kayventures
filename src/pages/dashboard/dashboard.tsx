import { Component } from 'react';
import '../m-login.scss';
import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineIdcard } from 'react-icons/ai';
import { HiOutlineThumbUp } from 'react-icons/hi';

class Dashboard extends Component{
	render(){
		return (
			<div className='d-flex m-dashboard h-100'>
                <div className="sec1">
					<div>
						<div className="title d-flex align-items-center mb-3">
							<MdOutlineDashboard />
							<p className="m-0 ms-3">Dashboard</p>
						</div>
					 	<div className="d-flex flex-wrap">
							<div className="d-card text-center me-3 mb-3">
								<AiOutlineIdcard />	
								<p className="m-0 py-2">Kyc</p>
								<span></span>
							</div>
							<div className="d-card text-center me-3 mb-3">
								<AiOutlineIdcard />	
								<p className="m-0 py-2">Operation</p>
								<span></span>
							</div>
							<div className="d-card text-center me-3 mb-3">
								<AiOutlineIdcard />	
								<p className="m-0 py-2">Networking</p>
								<span></span>
							</div>
							<div className="d-card text-center me-3 mb-3">
								<AiOutlineIdcard />	
								<p className="m-0 py-2">Catelogue</p>
								<span></span>
							</div>
							<div className="d-card text-center me-3 mb-3">
								<AiOutlineIdcard />	
								<p className="m-0 py-2">Performance</p>
								<span></span>
							</div>
							<div className="d-card text-center me-3 mb-3">
								<AiOutlineIdcard />	
								<p className="m-0 py-2">Quality</p>
								<span></span>
							</div>
							<div className="d-card text-center me-3 mb-3">
								<AiOutlineIdcard />	
								<p className="m-0 py-2">Term</p>
								<span></span>
							</div>
						 </div>
					</div>
				</div>
				<div className="sec2">
					<div className="h-100 d-flex">
						<div className="left-side h-100">

						</div>
						<div className="right-side d-flex flex-column justify-content-between h-100 text-center">
							<div className="">
								<h4>Profile Completion</h4>
								<p className="m-0">Please Complete your profile</p>
								<div className="percentage my-4" >
									<span>46%</span>
								</div>
								<div className="d-flex justify-content-center align-items-center py-3">
									<p className="me-3 m-0">0%</p>
									<span className="range" data-width='46'></span>
									<p className="ms-3 m-0">100%</p>
								</div>
								<p className="require m-0">Minimum Required profile score 80% </p>
							</div>
							<div className="approve py-4 px-2 d-flex align-items-center">
								<div className="icon">
									<HiOutlineThumbUp />
								</div>
								<div className="text text-start ps-3">
									<h3>APPROVED FOR BUSINESS</h3>
									<p className="m-0 text-left">847563 is your temporary pass code to enter trading section, please change to transact</p>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
		);
	}
}
export default Dashboard;