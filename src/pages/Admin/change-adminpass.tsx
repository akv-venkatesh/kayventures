
import React, { Component } from 'react';
import { Link, Navigate, Outlet } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import './admin.scss'
import { Formik, Field } from "formik";
import AdminSideNav from '../../component/admin_navigation';
import Adminprofile from '../../component/adminprofile/profile';
import { RiLockPasswordFill } from "react-icons/ri";
import { AiTwotoneEye } from "react-icons/ai";
import { useDispatch, useSelector, connect } from "react-redux";
import { adminPasswordchange } from "../../actions/admin/passwordchange";

interface typeState {
    SuperAdmin: boolean,
    inviteAdmin: boolean,
    invitemail: boolean,
    emailsuccess: boolean,
    psw_vis: boolean,
    psw_vis1: boolean,
    psw_vis2: boolean,
}
interface MyFormValues {
    CurrentPassword?: string,
    NewPassword?: string,
    ConfirmPassword?: string,

}

interface typeProps {
    changepassword: (arg: Object) => void;
    // businesscategory: any
}

class changeadminpass extends Component<typeProps, typeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            SuperAdmin: true,
            inviteAdmin: true,
            invitemail: false,
            emailsuccess: false,
            psw_vis: false,
            psw_vis1: false,
            psw_vis2: false,
        };
console.log(props);

    }
    psw_visible = () => {
        this.setState({ psw_vis: !this.state.psw_vis });
    }
    psw_visible1 = () => {
        this.setState({ psw_vis1: !this.state.psw_vis1 });
    }
    psw_visible2 = () => {
        this.setState({ psw_vis2: !this.state.psw_vis2 });
    }
    initialValues: MyFormValues = {
        CurrentPassword: '',
        NewPassword: '',
        ConfirmPassword: '',

    };
    render(): JSX.Element {
        console.log(this.props);
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
                                        <Formik initialValues={this.initialValues}
                                            validate={values => {
                                                let errors = {};

                                                if (!values.CurrentPassword) {
                                                    errors = { ...errors, CurrentPassword: 'Enter Current password' };
                                                }
                                                if (!values.NewPassword) {
                                                    errors = { ...errors, NewPassword: 'Enter NewPassword' };
                                                }
                                                if (!values.ConfirmPassword) {

                                                    errors = { ...errors, ConfirmPassword: 'Enter Confirm Password' };
                                                }
                                                if (values.ConfirmPassword!==values.NewPassword) {
                                                    
                                                    errors = { ...errors, ConfirmPassword: 'Password Not Match' };
                                                }


                                                return errors;
                                            }}
                                            onSubmit={(values, actions) => {
                                                var token = localStorage.getItem('authenticate-token');
                                                console.log(token);
                                                this.props.changepassword({values,'token':token})
                                                
                                                actions.setSubmitting(false);
                                            }}>
                                            {({ values,
                                                errors,
                                                touched,
                                                handleChange,
                                                handleBlur,
                                                handleSubmit,
                                                isSubmitting, }) => (
                                                //    <form className="primary_form_container" >
                                                <form className="content h-100" onSubmit={handleSubmit}>
                                                    <div className='admin_change_pass py-5 px-5' >
                                                        <div className='admin_change_pass_title ' ><span>Change Password</span></div>


                                                        <div className="field row mt-5 d-flex align-items-center">
                                                            <h3 className="col-md-3 field-name">Current Password<span className="required"> *</span></h3>
                                                            <div className="col-md-5 field-input-icons">
                                                                <RiLockPasswordFill className='lockicon' />

                                                                <input name="CurrentPassword" type={this.state.psw_vis ? 'text' : 'password'} id='CurrentPassword' className="input-field" placeholder="Current Password" onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.CurrentPassword} />
                                                                      <div className="validation-error" style={{position:"absolute",color:"red"}}>{errors.CurrentPassword && touched.CurrentPassword && errors.CurrentPassword}</div>
                                                                {this.state.psw_vis ?
                                                                    <FaEyeSlash className="eye-icon" onClick={this.psw_visible} /> :
                                                                    <FaEye className="eye-icon" onClick={this.psw_visible} />
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className=" field row mt-5 d-flex align-items-center">
                                                            <h3 className="col-md-3  field-name">New Password<span className="required"> * </span></h3>
                                                            <div className="col-md-5 field-input-icons">
                                                                <RiLockPasswordFill className='lockicon' />
                                                                <input name="NewPassword" type={this.state.psw_vis1 ? 'text' : 'password'} id="NewPassword" className="input-field" placeholder="New Password"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.NewPassword} />
                                                                     <div className="validation-error" style={{position:"absolute",color:"red"}}>{errors.NewPassword && touched.NewPassword && errors.NewPassword}</div>
                                                                {this.state.psw_vis1 ?
                                                                    <FaEyeSlash className="eye-icon" onClick={this.psw_visible1} /> :
                                                                    <FaEye className="eye-icon" onClick={this.psw_visible1} />
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="field row mt-5 d-flex align-items-center">
                                                            <h3 className="col-md-3  field-name">Confirm Password<span className="required"> *</span></h3>
                                                            <div className="col-md-5 field-input-icons">
                                                                <RiLockPasswordFill className='lockicon' />
                                                                <input name="ConfirmPassword" type={this.state.psw_vis2 ? 'text' : 'password'} id="ConfirmPassword" className="input-field" placeholder="Confirm Password" onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.ConfirmPassword} />
                                                                      <div className="validation-error" style={{position:"absolute",color:"red"}}>{errors.ConfirmPassword && touched.ConfirmPassword && errors.ConfirmPassword}</div>
                                                                {this.state.psw_vis2 ?
                                                                    <FaEyeSlash className="eye-icon" onClick={this.psw_visible2} /> :
                                                                    <FaEye className="eye-icon" onClick={this.psw_visible2} />
                                                                }
                                                            </div>
                                                        </div>


                                                        <div className='btn-section d-flex align-items-center justify-content-end'>
                                                            <div className=' d-flex align-items-center justify-content-center'>
                                                                {/* <span>
                                                                    Save
                                                                </span> */}

                                                                <button type='submit' style={{ color: "white", border: "none" }} className='save-btn'> Save</button>
                                                            </div>

                                                        </div>


                                                    </div>



                                                </form>
                                            )}
                                        </Formik>

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

// export default changeadminpass;

const mapStateToProps = (state: any) => {
    return state;
  };
  
  
  const mapDispatchToProps = (dispatch: any, props: any) => {
    return {
      changepassword: (password: Object) => {
          console.log(password);
  
        dispatch(adminPasswordchange(password));
  
      },
  
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(changeadminpass);
  