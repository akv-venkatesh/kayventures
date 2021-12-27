import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from 'react-bootstrap';
// import { Field } from 'formik';
import AdminSideNav from '../../component/admin_navigation';
import './BussinessCategories.css';
import './admin.scss';
// import '../m-login.scss';
import { HiUserCircle, HiOutlineFingerPrint } from "react-icons/hi";
import { ImMenu } from "react-icons/im";
import { HiDotsHorizontal } from "react-icons/hi";

import Select from '../../component/dropdown_select/slelect';
import Adminprofile from '../../component/adminprofile/profile'
import ReactTable from "react-table-6";
import 'react-table-6/react-table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ReactTable from "react-table";  
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {
	Backbutton,
	Nextbutton,
	DisableNextbutton,
}
	from "../../component/buttons/button";


class BussinessCategories extends React.Component {
	render() {



		const options = [
			{ value: 'all', label: 'All' },
			{ value: 'Manufactures', label: 'Manufactures' },
			{ value: 'Buyer', label: 'Buyer' },
			{ value: 'Job Contractors', label: 'Job Contractors' },
			{ value: 'Value Additions', label: 'Value Additions' },
			{ value: 'Processing & Finishing', label: 'Processing & Finishing' }
		]
		const options1 = [
			{ value: 'all', label: 'All' },
			{ value: 'OnHold', label: 'On Hold' },
			{ value: 'Approve', label: 'Approve' },
			{ value: 'Reject', label: 'Reject' },
			
		]

		const data = [{
			serialno: 1,
			name: 'Sindhu',
			email: 'sindhu@keyventuers.com',
			phoneno: 9876543210,
			category: 'Manufacturer',
			organisation: 'Emproto Techn...',
			status: 'On Hold',
			actions: <HiDotsHorizontal />
		}, {
			serialno: 2,
			name: 'Sindhu',
			email: 'sindhu@keyventuers.com',
			phoneno: 9876543210,
			category: 'Manufacturer',
			organisation: 'Emproto Techn...',
			status: 'On Hold',
			actions: <HiDotsHorizontal />
		}, {
			serialno: 3,
			name: 'Sindhu',
			email: 'sindhu@keyventuers.com',
			phoneno: 9876543210,
			category: 'Manufacturer',
			organisation: 'Emproto Techn...',
			status: 'On Hold',
			actions: <HiDotsHorizontal />
		}, {
			serialno: 4,
			name: 'Sindhu',
			email: 'sindhu@keyventuers.com',
			phoneno: 9876543210,
			category: 'Manufacturer',
			organisation: 'Emproto Techn...',
			status: 'On Hold',
			actions: <HiDotsHorizontal />
		}, {
			serialno: 5,
			name: 'Sindhu',
			email: 'sindhu@keyventuers.com',
			phoneno: 9876543210,
			category: 'Manufacturer',
			organisation: 'Emproto Techn...',
			status: 'On Hold',
			actions: <HiDotsHorizontal />
		}, {
			serialno: 6,
			name: 'Sindhu',
			email: 'sindhu@keyventuers.com',
			phoneno: 9876543210,
			category: 'Manufacturer',
			organisation: 'Emproto Techn...',
			status: 'On Hold',
			actions: <HiDotsHorizontal />
		}, {
			serialno: 6,
			name: 'Sindhu',
			email: 'sindhu@keyventuers.com',
			phoneno: 9876543210,
			category: 'Manufacturer',
			organisation: 'Emproto Techn...',
			status: 'On Hold',
			actions: <HiDotsHorizontal />
		}]
		const columns = [{
			Header: 'Serial No',
			accessor: 'serialno',
		}, {
			Header: 'Name',
			accessor: 'name'
		}, {
			Header: 'Email',
			accessor: 'email'
		}, {
			Header: 'Phone No',
			accessor: 'phoneno'
		}, {
			Header: 'Category',
			accessor: 'category'
		}, {
			Header: 'Organisation',
			accessor: 'organisation'
		}, {
			Header: 'Status',
			accessor: 'status'
		}, {
			Header: 'Actions',
			accessor: 'actions'
		}]

		return (
			

			<>
				<div className='d-flex flex-wrap h-100 admin-settings'>
					<section className='s-sec1'>
						<AdminSideNav />
					</section>
					<section className="py-sm-3 px-3 h-100 s-sec2">
						<div className="h-100">
							<div className="navigation align-items-center d-flex justify-content-between">
								<div className="d-flex align-items-center ps-3">
									<input type="text" id="" className="input-box form-control" name="search" placeholder="Search" />
								</div>
								<div className="d-flex align-items-center">
									<Adminprofile />
								</div>
							</div>
							<div className="row mt-2 ps-3 category-search">
								<div className='col-5'>
									<div className="d-flex align-items-center " >
										<label className=''>Business Categories</label>
										<div className='ms-2' >
											<Select options={options} width='300px' position='bottom' placeholder='Select Buissness Category'></Select>
										</div>
									</div>
								</div>
								<div className='col-6 ms-3'>
									<div className="d-flex align-items-center">
										<label className=''>Status</label>
										<div className='ms-2'>

											<Select options={options1} width='200px' position='bottom' placeholder='Select'></Select>
										</div>
									</div>
								</div>
							</div>
							<div className="main-content-parent">
								<div className="d-flex flex-wrap h-100">

									<div className="settings-menu-content h-100 px-2 py-4">
										<div className="content">
											<div className="tableFixHead">
												<ReactTable  
													data={data}  
													columns={columns}  
													defaultPageSize = {6}  
													pageSizeOptions = {[2,4, 6]}  
												/>
												
											</div>
										</div>
									</div>

								</div>
							</div>
							
						</div>
					</section>
				</div>
			</>




		);
	}
}

export default BussinessCategories;
