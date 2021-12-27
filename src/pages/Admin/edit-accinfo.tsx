
import React, { Component } from 'react';
import { Link, Navigate, Outlet } from "react-router-dom";
import './admin.scss'
import { Formik, Field } from "formik";
import { HiUserCircle, HiOutlineFingerPrint } from "react-icons/hi";
import AdminSideNav from '../../component/admin_navigation';
import Adminprofile from '../../component/adminprofile/profile';
import "react-perfect-scrollbar/dist/css/styles.css";
import { BiEditAlt } from "react-icons/bi";

interface typeState {
    SuperAdmin: boolean,
    inviteAdmin: boolean,
    invitemail: boolean,
    emailsuccess: boolean
}


class editaccinfo extends Component<{}, typeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            SuperAdmin: true,
            inviteAdmin: true,
            invitemail: false,
            emailsuccess: false
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
                                    {/* {this.state.SuperAdmin ? <input type="text" id="" className="input-box form-control" name="search" placeholder="Search" /> : <div></div>} */}
                                </div>
                                <div className="d-flex align-items-center">
									<Adminprofile />
								</div>
                            </div>


                            <div className="main-content-parent-height-50">
                                <div className="d-flex flex-wrap h-100">
                                    <div className="settings-menu-content  px-2 py-3" style={{ overflow: "hidden" }}>
                                        {/* <PerfectScrollbar
                                            options={{ suppressScrollY: false, suppressScrollX: true }}
                                            onScrollY={(container) =>
                                                console.log(`scrolled to: ${container.scrollTop}.`)
                                            }
                                        > */}
                                        <div className="content h-100 admin_edit_body ">


                                            <div className='admin_edit_acc_info py-5 px-5  h-100' >
                                                <div className='admin_edit_acc_info-title' ><span>Edit Account Information</span></div>

                                                <div className='edit-profile-box mt-5 d-flex align-items-center  justify-content-between '>
                                                    <div className='edit-profile-profile' >  <HiUserCircle className="user-image ms-3" /></div>
                                                    <div className="d-md-block d-none">
                                                        <h6 className="m-0">Mrs. Jane Doe</h6>
                                                        <p className="m-0">User Designation</p>
                                                    </div>
                                                    <div>
                                                        <div className='edit-profile-profile-icon' >  <BiEditAlt className="user-edit-icon " /></div>

                                                    </div>

                                                </div>
                                                <div className="field row mt-5 d-flex align-items-center">
                                                    <h3 className="col-md-2 field-name">First Name<span className="required"> *</span></h3>
                                                    <div className="col-md-9">
                                                        <input name="leagal_name" type="text" id="" className="input-field" placeholder="First Name" value="" />
                                                    </div>
                                                </div>
                                                <div className=" field row mt-5 d-flex align-items-center">
                                                    <h3 className="col-md-2  field-name">Middle Name<span className="required"> </span></h3>
                                                    <div className="col-md-9">
                                                        <input name="leagal_name" type="text" id="" className="input-field" placeholder="Middle Name" value="" />
                                                    </div>
                                                </div>
                                                <div className="field row mt-5 d-flex align-items-center">
                                                    <h3 className="col-md-2  field-name">Last Name<span className="required"> *</span></h3>
                                                    <div className="col-md-9">
                                                        <input name="leagal_name" type="text" id="" className="input-field" placeholder="Last Name" value="" />
                                                    </div>
                                                </div>
                                                <div className="field row mt-5 d-flex align-items-center">
                                                    <h3 className="col-md-2  field-name">Email Address<span className="required"> *</span></h3>
                                                    <div className="col-md-9">
                                                        <input name="leagal_name" type="text" id="" className="input-field" placeholder="Email Address" value="" />
                                                    </div>
                                                </div>
                                                <div className="field row mt-5 d-flex align-items-center">
                                                    <h3 className="col-md-2  field-name">Phone Number<span className="required"> *</span></h3>
                                                    <div className="col-md-9">
                                                        <input name="leagal_name" type="text" id="" className="input-field" placeholder="Phone Number" value="" />
                                                    </div>
                                                </div>
                                                <div className="field row mt-5 d-flex align-items-center">
                                                    <h3 className="col-md-2  field-name">Address<span className="required"> </span></h3>
                                                    <div className="col-md-9">
                                                        <textarea name="leagal_name" id="" className="input-field-textarea" placeholder="Address" value="" />
                                                    </div>
                                                </div>
                                                <div className="field row mt-5 d-flex align-items-center">
                                                    <h3 className="col-md-2  field-name">Description<span className="required"> *</span></h3>
                                                    <div className="col-md-9">
                                                        <input name="leagal_name" type="text" id="" className="input-field" placeholder="Description" value="" />
                                                    </div>
                                                </div>

                                                <div className='btn-section d-flex align-items-center justify-content-end'>
                                                    <div className='save-btn d-flex align-items-center justify-content-center'>
                                                        <span>
                                                            Save
                                                        </span>

                                                    </div>

                                                </div>


                                            </div>


                                        </div>
                                        {/* </PerfectScrollbar> */}

                                        {/* </PerfectScrollbar> */}
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

export default editaccinfo;
