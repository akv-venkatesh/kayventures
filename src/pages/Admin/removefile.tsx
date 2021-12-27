import React, { Component } from 'react';
import { Link, Navigate, Outlet } from "react-router-dom";
// import '../m-login.scss';
import './admin.scss'
import { Formik, Field } from "formik";
import { HiUserCircle, HiOutlineFingerPrint } from "react-icons/hi";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { ImMenu } from "react-icons/im";
import AdminSideNav from '../../component/admin_navigation';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';

interface typeState {

}

class KayAdmin extends Component<{}, typeState> {
	constructor(props: any) {
		super(props);
		this.state = {

		};
	}

	render(): JSX.Element {
		return (
			<>
				<div className='d-flex flex-wrap h-100 admin-settings'>
					<section className='s-sec1'>
						<AdminSideNav />
					</section>
					<section className="py-sm-3 px-3 h-100 s-sec2">
						<div className="h-100">
							<div className="navigation align-items-center d-flex justify-content-between">
								<div className="d-flex align-items-center">
									<input type="text" id="" className="input-box form-control" name="search" placeholder="Search" />
								</div>
								<div className="d-flex align-items-center">
									<div className="text-end d-md-block d-none">
										<h6 className="m-0">Mrs. Jane Doe</h6>
										<p className="m-0">User Designation</p>
									</div>
									<HiUserCircle className="user-image ms-3" />
									{false ? <MdExpandMore className="user-arrow ms-2 me-4" /> : <MdExpandLess className="user-arrow ms-2 me-4" />}
								</div>
							</div>


							<div className="main-content-parent">
								
							</div>
						</div>
					</section>
				</div>
			</>
		);
	}
}

export default KayAdmin;
