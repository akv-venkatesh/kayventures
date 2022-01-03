
import React, { Component } from 'react';
import { Link, Navigate, Outlet } from "react-router-dom";
import './admin.scss'
import { Formik, Field } from "formik";
import { HiUserCircle, HiOutlineFingerPrint } from "react-icons/hi";
import AdminSideNav from '../../component/admin_navigation';
import Adminprofile from '../../component/adminprofile/profile';
import "react-perfect-scrollbar/dist/css/styles.css";
import { BiEditAlt } from "react-icons/bi";
import { useDispatch, useSelector, connect } from "react-redux";
import { adminEditProfile } from "../../actions/admin/editprofile";


interface typeState {
    SuperAdmin: boolean,
    inviteAdmin: boolean,
    invitemail: boolean,
    emailsuccess: boolean,
    imgSrc: any
    imagefile: any
}


interface EditFormValues {
    first_name?: string,
    last_name?: string,
    middle_name?: string,
    email?: string,
    phone?: string,
    address?: string,
    description?: string,

}
interface typeProps {
    admineditprofile: (arg: Object) => void;
    // businesscategory: any
}
class editaccinfo extends Component<typeProps, typeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            SuperAdmin: true,
            inviteAdmin: true,
            invitemail: false,
            emailsuccess: false,
            imgSrc: '',
            imagefile: ''

        };


    }

    initialValues: EditFormValues = {
        first_name: '',
        last_name: '',
        middle_name: '',
        email: '',
        phone: '',
        address: '',
        description: '',
    }


    render(): JSX.Element {


        //  for selecting logo img
        const onImageChange = (e: any) => {
            var file = e.target.files[0];
            var reader = new FileReader();
            var url = reader.readAsDataURL(file);

            reader.onloadend = (e: any) => {
                this.setState({
                    imgSrc: reader.result
                })
            }
            this.setState({ imagefile: file })
            // console.log(url)
            // console.log(file)
        }

        console.log(this.props)



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


                                                <Formik initialValues={this.initialValues}
                                                    validate={values => {
                                                        let errors = {};
                                                        if (!values.email) {
                                                            errors = { ...errors, email: 'Enter Email Id' };
                                                        } else if (
                                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                                        ) {
                                                            errors = { ...errors, email: 'Invalid Email Id' };
                                                        }
                                                        if (!values.first_name) {
                                                            errors = { ...errors, first_name: 'Enter First Name' };
                                                        }
                                                        if (!values.last_name) {
                                                            errors = { ...errors, last_name: 'Enter Last Name' };
                                                        }
                                                        if (!values.phone) {
                                                            errors = { ...errors, phone: 'Enter Phone No' };
                                                        }
                                                        return errors;
                                                    }}
                                                    onSubmit={(values, actions) => {
                                                        // console.log(values)
                                                        var token = localStorage.getItem('authenticate-token');
                                                        // console.log(token);
                                                        this.props.admineditprofile({ values, 'token': token, "imageFile": this.state.imagefile ,"id":1})

                                                        // this.props.admineditprofile(values);

                                                    }}>
                                                    {({ values,
                                                        errors,
                                                        touched,
                                                        handleChange,
                                                        handleBlur,
                                                        handleSubmit,
                                                        isSubmitting, }) => (
                                                        <form onSubmit={handleSubmit}>
                                                            <div className='edit-profile-box mt-5 d-flex align-items-center  justify-content-between '>
                                                                <div className='edit-profile-profile' > {/* <img  src={this.state.imgSrc} /> */} <HiUserCircle className="user-image ms-3" /> </div>
                                                                <div className="d-md-block d-none">
                                                                    <h6 className="m-0">Mrs. Jane Doe</h6>
                                                                    <p className="m-0">User Designation</p>
                                                                </div>
                                                                <div>
                                                                    <div className='edit-profile-profile-icon'><Field type="file" id="upload_logo" accept="image/png, image/gif, image/jpeg" name="upload_logo" onChange={(e: any) => onImageChange(e)} hidden /> <label htmlFor='upload_logo'><BiEditAlt className="user-edit-icon " /></label></div>
                                                                </div>
                                                            </div>
                                                            <Field type="file" id="upload_logo" name="upload_logo" onChange={(e: any) => onImageChange(e)} hidden />
                                                            <div className="field row mt-5 d-flex align-items-center">
                                                                <h3 className="col-md-2 field-name">First Name<span className="required"> *</span></h3>
                                                                <div className="col-md-9 input-field-container">
                                                                    <input name="first_name" type="text" id="" className="input-field" placeholder="First Name"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.first_name}
                                                                    />
                                                                    <div className="validation-error">{errors.first_name && touched.first_name && errors.first_name}</div>
                                                                </div>
                                                            </div>
                                                            <div className=" field row mt-5 d-flex align-items-center">
                                                                <h3 className="col-md-2  field-name">Middle Name<span className="required"> </span></h3>
                                                                <div className="col-md-9 input-field-container">
                                                                    <input name="middle_name" type="text" id="" className="input-field" placeholder="Middle Name"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.middle_name}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="field row mt-5 d-flex align-items-center">
                                                                <h3 className="col-md-2  field-name">Last Name<span className="required"> *</span></h3>
                                                                <div className="col-md-9 input-field-container">
                                                                    <input name="last_name" type="text" id="" className="input-field" placeholder="Last Name"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.last_name} />
                                                                    <div className="validation-error">{errors.last_name && touched.last_name && errors.last_name}</div>
                                                                </div>
                                                            </div>
                                                            <div className="field row mt-5 d-flex align-items-center">
                                                                <h3 className="col-md-2  field-name">Email Address<span className="required"> *</span></h3>
                                                                <div className="col-md-9 input-field-container">
                                                                    <input name="email" type="text" id="" className="input-field" placeholder="Email Address"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.email} />
                                                                    <div className="validation-error">{errors.email && touched.email && errors.email}</div>
                                                                </div>
                                                            </div>
                                                            <div className="field row mt-5 d-flex align-items-center">
                                                                <h3 className="col-md-2  field-name">Phone Number<span className="required"> *</span></h3>
                                                                <div className="col-md-9 input-field-container">
                                                                    <input name="phone" type="text" id="" className="input-field" placeholder="Phone Number"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.phone} />
                                                                    <div className="validation-error">{errors.phone && touched.phone && errors.phone}</div>
                                                                </div>
                                                            </div>
                                                            <div className="field row mt-5 d-flex align-items-center">
                                                                <h3 className="col-md-2  field-name">Address<span className="required"> </span></h3>
                                                                <div className="col-md-9 input-field-container">
                                                                    <textarea name="address" id="" className="input-field-textarea" placeholder="Address"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.address} />

                                                                </div>
                                                            </div>
                                                            <div className="field row mt-5 d-flex align-items-center">
                                                                <h3 className="col-md-2  field-name">Description<span className="required"> *</span></h3>
                                                                <div className="col-md-9 input-field-container">
                                                                    <input name="description" type="text" id="" className="input-field" placeholder="Description"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.description} />
                                                                </div>
                                                            </div>
                                                            <div className='btn-section d-flex align-items-center justify-content-end'>
                                                                <div className='d-flex align-items-center justify-content-center'>
                                                                    {/* <span>
                                                                        Save
                                                                    </span> */}
                                                                    <button className='save-btn' type="submit" disabled={isSubmitting}>Save</button>
                                                                </div>
                                                            </div>
                                                        </form>)}
                                                </Formik>
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

// export default editaccinfo;

const mapStateToProps = (state: any) => {
    return state;
};


const mapDispatchToProps = (dispatch: any, props: any) => {
    return {
        admineditprofile: (editfiles: Object) => {
            console.log(editfiles);

            dispatch(adminEditProfile(editfiles));

        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(editaccinfo);
