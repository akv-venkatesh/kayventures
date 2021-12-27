
import React, { Component } from 'react';
import { Link, Navigate, Outlet } from "react-router-dom";
import './admin.scss'
import { Formik, Field } from "formik";
import AdminSideNav from '../../component/admin_navigation';
import Adminprofile from '../../component/adminprofile/profile';
import { RiLockPasswordFill } from "react-icons/ri";
import { AiTwotoneEye } from "react-icons/ai"; interface typeState {
    SuperAdmin: boolean,
    inviteAdmin: boolean,
    invitemail: boolean,
    emailsuccess: boolean
}

class changeadminpass extends Component<{}, typeState> {
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

                                </div>
                                <div className="d-flex align-items-center">
                                    <Adminprofile />
                                </div>
                            </div>


                            <div className="main-content-parent-height-50">
                                <div className="d-flex flex-wrap h-100">
                                    <div className="settings-menu-content h-100 px-2 py-3">

                                        <div className="content h-100">
                                            <div className='admin_change_pass py-5 px-5' >
                                                <div className='admin_change_pass_title ' ><span>Change Password</span></div>


                                                <div className="field row mt-5 d-flex align-items-center">
                                                    <h3 className="col-md-3 field-name">Current Password<span className="required"> *</span></h3>
                                                    <div className="col-md-5 field-input-icons">
                                                        <RiLockPasswordFill className='lockicon' />

                                                        <input name="leagal_name" type="text" id="" className="input-field" placeholder="Current Password" value="" />
                                                        <AiTwotoneEye className='eye-icon' />
                                                    </div>
                                                </div>
                                                <div className=" field row mt-5 d-flex align-items-center">
                                                    <h3 className="col-md-3  field-name">New Password<span className="required"> * </span></h3>
                                                    <div className="col-md-5 field-input-icons">
                                                        <RiLockPasswordFill className='lockicon' />
                                                        <input name="leagal_name" type="text" id="" className="input-field" placeholder="New Password" value="" />
                                                        <AiTwotoneEye className='eye-icon' />
                                                    </div>
                                                </div>
                                                <div className="field row mt-5 d-flex align-items-center">
                                                    <h3 className="col-md-3  field-name">Confirm Password<span className="required"> *</span></h3>
                                                    <div className="col-md-5 field-input-icons">
                                                        <RiLockPasswordFill className='lockicon' />
                                                        <input name="leagal_name" type="text" id="" className="input-field" placeholder="Confirm Password" value="" />
                                                        <AiTwotoneEye className='eye-icon' />
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

export default changeadminpass;
