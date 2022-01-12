import { Component, MouseEvent, MouseEventHandler } from 'react';
import '../m-login.scss';
import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineIdcard, AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineRefresh, HiOutlineThumbUp } from 'react-icons/hi';
import PerfectScrollbar from 'react-perfect-scrollbar';
import "react-perfect-scrollbar/dist/css/styles.css";
import { Form } from 'formik';
import { Link } from 'react-router-dom';
import profileimg from "../../assets/profile-dummy.svg";
import { FaEdit } from 'react-icons/fa';

interface typeState{
}	
class Profile extends Component<{},typeState>{
	constructor(props:any){
		super(props);
		this.state = {
		}
	}
	
	render(){
		return (
			<div className='d-flex m-profile h-100'>
                <div className="sec1 pe-3">
					<div className="text text-center h-100 py-4 px-3">
						<div className="profile-img text-center">
                            <img src={profileimg} alt="profile-image" />
                        </div>
                        <h2 className="m-0 py-3">Syndicate Industries</h2>
                        <p className="m-0 pb-3">Manufacturer</p>
                        <div className="status py-3">
                            <div className="d-flex py-2 justify-content-between align-items-center">
                                <h3 className="m-0">KYC Status</h3>
                                <div className="d-flex align-items-center">
                                    <p className="m-0">Pending</p>
                                    <HiOutlineRefresh className="ms-3"/>
                                </div>
                            </div>
                            <div className="d-flex py-2 justify-content-between align-items-center">
                                <h3 className="m-0">Product Configuration</h3>
                                <div className="d-flex align-items-center">
                                    <p className="m-0">Pending</p>
                                    <FaEdit className="ms-3"/>
                                </div>
                            </div>
                            <div className="d-flex py-2 justify-content-between align-items-center">
                                <h3 className="m-0">Machinery</h3>
                                <div className="d-flex align-items-center">
                                    <p className="m-0">Pending</p>
                                    <FaEdit className="ms-3"/>
                                </div>
                            </div>
                            <div className="d-flex py-2 justify-content-between align-items-center">
                                <h3 className="m-0">Operation</h3>
                                <div className="d-flex align-items-center">
                                    <p className="m-0">Pending</p>
                                    <FaEdit className="ms-3"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>Total Facilty</h3>
                            <p className="facility-count m-0">0</p>
                        </div>
                        <div>
                            <h3>Total Machine</h3>
                            <p className="machine-count m-0">0</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <AiOutlinePlus className="me-3 plus"/>
                            <p className="m-0">Add Business Category</p>
                        </div>
                    </div>
				</div>
				<div className="sec2">
					<div className="h-100 d-flex">
						
					</div>
				</div>
            </div>
		);
	}
}
export default Profile;