
import React, { Component } from 'react';
import { Link, Navigate, Outlet } from "react-router-dom";
import './admin.scss'
import { Formik, Field } from "formik";
import { HiUserCircle, HiOutlineFingerPrint } from "react-icons/hi";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { ImMenu } from "react-icons/im";
import AdminSideNav from '../../component/admin_navigation';
import Adminprofile from '../../component/adminprofile/profile';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
import Table from 'react-bootstrap/Table'
import {
    Backbutton,
    Nextbutton,
    DisableNextbutton,
} from "../../component/buttons/button";
import ReactTable from "react-table-6";
import 'react-table-6/react-table.css';
import './BussinessCategories.css';
import { connect } from 'react-redux';
import { invite } from '../../actions/admin/invite'
import { Button } from 'react-bootstrap';

interface typeState {
    SuperAdmin: boolean,
    inviteAdmin: boolean,
    invitemail: boolean,
    emailsuccess: boolean,
    mailid: any
}
interface typeProps{
    invite:(arg:{})=> void;
}

class superadmin extends Component<typeProps, typeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            SuperAdmin: false,
            inviteAdmin: true,
            invitemail: false,
            emailsuccess: false,
            mailid: '',
        };

        this.inviteAdmin = this.inviteAdmin.bind(this);
        this.invitemail = this.invitemail.bind(this);
        this.SuperAdmin = this.SuperAdmin.bind(this);
        this.backadmin = this.backadmin.bind(this);

    }

    SuperAdmin = (e: any) => {
        this.setState({
            SuperAdmin: false,
            inviteAdmin: false,
            invitemail: true,
            emailsuccess: false
        })
    }
    inviteAdmin = (e: any) => {
        this.setState({
            inviteAdmin: false,
            invitemail: true,
            emailsuccess: false
        })
    }
    invitemail = (e: any) => {
        e.preventDefault();
        const data = new FormData(e.target);
        this.setState({
            inviteAdmin: false,
            invitemail: false,
            emailsuccess: true,
            mailid: data.get('email')
        })
        this.props.invite({
            email : data.get('email')
        });
    }
    backadmin = (e: any) => {
        this.setState({
            SuperAdmin: true,
            inviteAdmin: false,
            invitemail: false,
            emailsuccess: true
        })
    }

    render(): JSX.Element {



        const data = [{
            serialno: 1,
            name: 'Sindhu',
            email: 'sindhu@keyventuers.com',
            phoneno: 9876543210,
          

        }, {
            serialno: 2,
            name: 'Sindhu',
            email: 'sindhu@keyventuers.com',
            phoneno: 9876543210,
           

        }, {
            serialno: 3,
            name: 'Sindhu',
            email: 'sindhu@keyventuers.com',
            phoneno: 9876543210,
         

        }, {
            serialno: 4,
            name: 'Sindhu',
            email: 'sindhu@keyventuers.com',
            phoneno: 9876543210,
           

        }, {
            serialno: 5,
            name: 'Sindhu',
            email: 'sindhu@keyventuers.com',
            phoneno: 9876543210,
           

        }, {
            serialno: 6,
            name: 'Sindhu',
            email: 'sindhu@keyventuers.com',
            phoneno: 9876543210,
         

        }, {
            serialno: 6,
            name: 'Sindhu',
            email: 'sindhu@keyventuers.com',
            phoneno: 9876543210,
           

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
        } ]

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
                                    {this.state.SuperAdmin ? <input type="text" id="" className="input-box form-control" name="search" placeholder="Search" /> : <div></div>}
                                </div>
                                <div className="d-flex align-items-center">
                                    <Adminprofile />
                                </div>
                            </div>


                            <div className={this.state.SuperAdmin ? "main-content-parent" : "main-content-parent-height-50 "}>
                                <div className="d-flex flex-wrap h-100">
                                    {this.state.SuperAdmin ? <span id='superadmin-title-text'>Super Admins List</span> : <div></div>}
                                    {/* super admin screen */}
                                    <div className="settings-menu-content h-100 px-2 py-3">

                                        <div className="content h-100">

                                            {
                                                this.state.SuperAdmin ? <div className='superadmin-table'>

                                                    <div className="tableFixHead">
                                                        <ReactTable
                                                            data={data}
                                                            columns={columns}
                                                            defaultPageSize={6}
                                                            pageSizeOptions={[2, 4, 6]}
                                                        />

                                                    </div>


                                                  <div className=' superadmin-table-footer d-flex align-items-center  justify-content-between '>
                                                        <div className='invite-sadmin d-flex align-items-center justify-content-center' onClick={this.SuperAdmin}>
                                                            <span>Invite another Super Admin</span>

                                                        </div>
                                                    </div> 








                                                </div> : this.state.inviteAdmin ?

                                                    <div className=' invite_sadmin d-flex align-items-center  justify-content-center h-100 flex-column'>
                                                        <div>
                                                            <h1>There are no super admins added</h1>
                                                        </div>
                                                        <div className='invite_section mt-5 d-flex align-items-center  justify-content-center flex-column' >
                                                            <h1>Invite a Super Admin</h1>
                                                            <div className='invite-btn mt-3' onClick={this.inviteAdmin}>
                                                                <span >Invite</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    : this.state.invitemail ?
                                                        <div className=' invite_sadmin_email d-flex align-items-center  justify-content-center  flex-column'>
                                                            <h1>Invite a Super Admin</h1>
                                                            <div className='invite_email_body mt-5 d-flex px-5 py-5 flex-column' >
                                                                <form onSubmit={this.invitemail}>
                                                                    <div className='invite_email_field d-flex flex-column '>
                                                                        <span className='pb-5'>Invite</span>
                                                                        <div className='invite_email_ifield '>
                                                                            <FaEnvelope className='mail-icon' />
                                                                            <input type="text" name="email" className='invite_email_inputfield' placeholder='Enter Mail Id' />
                                                                        </div>
                                                                    </div>
                                                                    <div className='pt-5 sendinvite-section d-flex justify-content-end'>
                                                                        <Button type="submit" className='sendinvite-btn'><span>Send Invite </span></Button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div> : true ?
                                                            <div className=' invite_sadmin_e_successfully d-flex align-items-center  justify-content-center  flex-column' >
                                                                <h1>Invite a Super Admin</h1>
                                                                <div className='invite_e_successfully_body mt-5 d-flex px-5 py-5 flex-column' >
                                                                    <div className='invite_e_successfully_field d-flex align-items-center  justify-content-center h-100 flex-column '>
                                                                        <span className='invite_e_successfully_field_text mb-4'>Invitation successfully sent to <span className='admin_email_id'>{this.state.mailid}</span></span>
                                                                        <span className='Back-btn mt-4' onClick={this.backadmin}><span>Back</span></span>
                                                                    </div>
                                                                </div>
                                                            </div> : <div></div>
                                            }



                                        </div>
                                    </div>

                                    {/* super admin screen */}


                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state: any) => {
    return state;
};


const mapDispatchToProps = (dispatch: any, props: any) => {
return {
    invite: (data:any) => {
        console.log(data);
        dispatch(invite(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(superadmin);
