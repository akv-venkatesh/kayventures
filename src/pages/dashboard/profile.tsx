import { Component, MouseEvent, MouseEventHandler } from 'react';
import '../m-login.scss';
import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineIdcard, AiOutlinePlus } from 'react-icons/ai';
import { HiDotsHorizontal, HiOutlineRefresh, HiOutlineThumbUp } from 'react-icons/hi';
import PerfectScrollbar from 'react-perfect-scrollbar';
import "react-perfect-scrollbar/dist/css/styles.css";
import { Form } from 'formik';
import { Link, useLocation } from 'react-router-dom';
import profileimg from "../../assets/profile-dummy.svg";
import { FaEdit } from 'react-icons/fa';
import ReactTable from "react-table-6";
import { Dropdown } from 'react-bootstrap';
import 'react-table-6/react-table.css';
import { BsThreeDotsVertical } from 'react-icons/bs';

interface typeState{
    columns : any,
    data : any,
}	
interface typeProps{
    location: any
}
class Profile extends Component<typeProps,typeState>{
	constructor(props:any){
		super(props);
		this.state = {
            data : [
                {
                    serialno: 1,
                    name: 'Facility 1',
                    createdon: 'completed',
                    kyc: 'pending',
                    facility: 'pending',
                    machinery: 'pending',
                    esg: 'pending',
                    actions: ''
                },
                {
                    serialno: 2,
                    name: 'Facility 2',
                    createdon: 'completed',
                    kyc: 'pending',
                    facility: 'pending',
                    machinery: 'pending',
                    esg: 'pending',
                    actions: ''
                },
                {
                    serialno: 2,
                    name: 'Facility 3',
                    createdon: 'completed',
                    kyc: 'pending',
                    facility: 'pending',
                    machinery: 'pending',
                    esg: 'pending',
                    actions: ''
                },
                {
                    serialno: 2,
                    name: 'Facility 4',
                    createdon: 'completed',
                    kyc: 'pending',
                    facility: 'pending',
                    machinery: 'pending',
                    esg: 'pending',
                    actions: ''
                },
                {
                    serialno: 2,
                    name: 'Facility 5',
                    createdon: 'completed',
                    kyc: 'pending',
                    facility: 'pending',
                    machinery: 'pending',
                    esg: 'pending',
                    actions: ''
                }
            ],

            columns : [{
                Header: 'SR No',
                accessor: 'serialno',
            }, {
                Header: 'Facility',
                accessor: 'name'
            }, {
                Header: 'Created On',
                accessor: 'createdon',
                Cell: ()=>(
                    <div className="completed">completed</div>
                )
            }, {
                Header: 'KYC Status',
                accessor: 'kyc',
                Cell: ()=>(
                    <div className="pending">pending</div>
                )
            }, {
                Header: 'Facility Info',
                accessor: 'facility',
                Cell: ()=>(
                    <div className="pending">pending</div>
                )
            }, {
                Header: 'Machinery',
                accessor: 'machinery',
                Cell: ()=>(
                    <div className="pending">pending</div>
                )
            }, {
                Header: 'ESG',
                accessor: 'esg',
                Cell: ()=>(
                    <div className="view">View</div>
                )
            }, {
                Header: '',
                accessor: 'actions',
                Cell: (value: any) => (<Dropdown>
                    <Dropdown.Toggle variant='tranparent' className='d-flex align-items-center' id="dropdown-basic">
                        <BsThreeDotsVertical />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item name="Approve">Approve</Dropdown.Item>
                        <Dropdown.Item name="Reject">Reject</Dropdown.Item>
                        <Dropdown.Item name="On Hold">On Hold</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>)
            }]
		}
        
	}
	render(){
		return (
			<div className='d-flex m-profile h-100'>
                <div className="sec1 pe-3">
					<div className="text text-center d-flex flex-column justify-content-between h-100 py-4 px-3">
						<PerfectScrollbar>
                            <div>
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
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <AiOutlinePlus className="me-3 plus"/>
                                <p className="m-0">Add Business Category</p>
                            </div>
                        </PerfectScrollbar>
                    </div>
				</div>
				<div className="sec2">
					<div className="d-flex justify-content-end">  
						<div className="d-flex align-items-center">
                            <input 
                                name="addfacility" 
                                id="addfacility" 
                                className="form-control me-3 px-4"
                                placeholder="Enter facility name here" />
                            <div className="add-facility-btn d-flex align-items-center">
                                <AiOutlinePlus className="me-3"/>
                                <p className="m-0">Add Facility</p>
                            </div>
                        </div>
					</div>
                    <div className="data p-3">
                        <ReactTable
                            data={this.state.data}
                            columns={this.state.columns}
                            defaultPageSize={10}
                            // pageSizeOptions={[2, 4, 6]}
                            className="h-100"
                            showPaginationBottom={this.state.data.length > 10 ? true: false}
                        />
                        {/* <div className="d-flex justify-content-center align-items-center h-100">
                            <p className="m-0">Add the facility here to see the data</p>
                        </div> */}
                    </div>
				</div>
            </div>
		);
	}
}
export default Profile;