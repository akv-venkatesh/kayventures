import React, { Component } from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import "./Facility1.css";
import { Formik , Field, ErrorMessage } from "formik";
import Vector3 from "../../../assets/icons/various/Vector3.svg"
import MachineIcon from "../../../assets/icons/various/MachineIcon.svg"
import BottomIcon from "../../../assets/icons/various/BottomIcon.svg"
import Vector5 from "../../../assets/icons/various/Vector5.svg"

import PerfectScrollbar from "react-perfect-scrollbar";
import { RiArrowDropRightLine, RiInformationFill } from 'react-icons/ri';
import "react-perfect-scrollbar/dist/css/styles.css";
import Select from '../../../component/dropdown_select/slelect';
import { AiOutlineRight } from 'react-icons/ai';
import { BsCalendar3 } from 'react-icons/bs';


interface typeState {
    showSummary: boolean,
}


class Facilityday extends Component<{}, typeState> {

    constructor(props: any) {
        super(props);
        this.state = {
            showSummary: false,
        }
    }

    handleSummary = () => {
        this.setState({
            showSummary: true,
        });
    }
    hideSummary = () => {
        this.setState({
            showSummary: false
        })
    }


    render() {
        const machine = [
            { value: 'Single Needle', label: 'Single Needle' },
            { value: 'Double Needle', label: 'Double Needle' },
            { value: 'Thread Over Look', label: 'Thread Over Look' }
        ]
        const brand = [
            { value: 'Juki', label: 'Juki' },
            { value: 'Pfaff', label: 'Pfaff' },
            { value: 'Brother', label: 'Brother' }
        ]
        const technology = [
            { value: 'Basic', label: 'Basic' },
            { value: 'Process Automated', label: 'Process Automated' },
            { value: 'Computerized', label: 'Computerized' }
        ]

        return (
            <div className="machine main d-flex facilitykyc1 h-100">
               
                <div className="col-md-12 d-flex flex-column h-100">
                    <div className="facility1 d-flex">
                        <img src={Vector3} alt="" />
                        <p>Facility 1</p>
                        <p>|</p>
                        <img src={Vector3} alt="" />
                        <p>Facility 2</p>
                        <p>|</p>
                        <img src={Vector3} alt="" />
                        <p>Facility 3</p>
                        <p>|</p>
                    </div>
                    <div className="box py-5 mt-2">
                        <div className="scroll pb-3">
                            <PerfectScrollbar>
                                <div className="d-flex flex-wrap pe-4 facilityform">
                                    <Container>
                                    <Row>
                                        <Formik
                                            initialValues={{
                                            
                                            }}
                                            validate={(values) => {
                                                const errors = {};

                                                return errors;
                                            }}
                                            onSubmit={(values, { setSubmitting }) => {
                                                // setTimeout(() => {
                                                // 	alert(JSON.stringify(values, null, 2));
                                                // $('#status-check').modal('show');
                                                setSubmitting(false);
                                                // }, 400);
                                            }}
                                            >
                                            {({
                                                values,
                                                errors,
                                                touched,
                                                handleChange,
                                                handleBlur,
                                                handleSubmit,
                                                isSubmitting,
                                            }) => (
                                                <form onSubmit={handleSubmit} className="ps-xl-5 form-bh">
                                                 <div className="d-flex align-items-center justify-content-space-between">
                                                        <h5 className="col-md-2 mt-4">Days</h5>
                                                        <h3 className="col-md-3 mt-4">Start</h3>
                                                        <h3 className="col-md-3 mt-4">End</h3>
                                                    </div>                                               
                                                <div className="days">
                                                    <div className="row mt-3 d-flex align-items-center">
                                                        <h3 className="col-md-2">Monday<span className='required'> </span></h3>
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <Field type="text" id="" className="input-box" name="leagal_name" placeholder="00 hrs" />
                                                            <span className="time">AM / PM</span>
                                                        </div>
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <Field type="text" id="" className="input-box" name="leagal_name" placeholder="00 hrs" />
                                                            <span className="time">AM / PM</span>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3 d-flex align-items-center">
                                                        <h3 className="col-md-2">Tuesday<span className='required'> </span></h3>
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <Field type="text" id="" className="input-box" name="leagal_name" placeholder="00 hrs" />
                                                            <span className="time">AM / PM</span>
                                                        </div>
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <Field type="text" id="" className="input-box" name="leagal_name" placeholder="00 hrs" />
                                                            <span className="time">AM / PM</span>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3 d-flex align-items-center">
                                                        <h3 className="col-md-2">Wednesday<span className='required'> </span></h3>
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <Field type="text" id="" className="input-box" name="leagal_name" placeholder="00 hrs" />
                                                            <span className="time">AM / PM</span>
                                                        </div>
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <Field type="text" id="" className="input-box" name="leagal_name" placeholder="00 hrs" />
                                                            <span className="time">AM / PM</span>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3 d-flex align-items-center">
                                                        <h3 className="col-md-2">Thrusday<span className='required'> </span></h3>
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <Field type="text" id="" className="input-box" name="leagal_name" placeholder="00 hrs" />
                                                            <span className="time">AM / PM</span>
                                                        </div>
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <Field type="text" id="" className="input-box" name="leagal_name" placeholder="00 hrs" />
                                                            <span className="time">AM / PM</span>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3 d-flex align-items-center">
                                                        <h3 className="col-md-2">Friday<span className='required'> </span></h3>
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <Field type="text" id="" className="input-box" name="leagal_name" placeholder="00 hrs" />
                                                            <span className="time">AM / PM</span>
                                                        </div>
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <Field type="text" id="" className="input-box" name="leagal_name" placeholder="00 hrs" />
                                                            <span className="time">AM / PM</span>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3 d-flex align-items-center">
                                                        <h3 className="col-md-2">Saturday<span className='required'> </span></h3>
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <Field type="text" id="" className="input-box" name="leagal_name" placeholder="00 hrs" />
                                                            <span className="time">AM / PM</span>
                                                        </div>
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <Field type="text" id="" className="input-box" name="leagal_name" placeholder="00 hrs" />
                                                            <span className="time">AM / PM</span>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3 d-flex align-items-center">
                                                        <h3 className="col-md-2">Sunday<span className='required'> </span></h3>
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <Field type="text" id="" className="input-box" name="leagal_name" placeholder="00 hrs" />
                                                            <span className="time">AM / PM</span>
                                                        </div>
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <Field type="text" id="" className="input-box" name="leagal_name" placeholder="00 hrs" />
                                                            <span className="time">AM / PM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-5 d-flex align-items-center justify-content-space-between">
                                                    <h5>Other Holidays</h5>
                                                </div>
                                                <div className="row mt-3 d-flex">
                                                    <h3 className="col-md-2">Holiday 1<span className='required'> </span></h3>
                                                    <div className="col-md-5">
                                                        <div className="d-flex align-items-center">
                                                            <Field type="text" id="" className="input-box" name="leagal_name" placeholder="Enter name of the holiday" />
                                                            <BsCalendar3 className="calender"/>
                                                        </div>
                                                        <div className="plusIcon d-flex">
                                                            <img src={Vector5} className="image_one" alt="" />
                                                            <p>  Add more</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-4 col-md-8 m-auto savebtn">
                                                    <button>Save</button>
                                                </div>          
                                                </form>
                                            )}
                                            </Formik>                                           
                                        
                                    </Row>
                                    </Container>
                                </div>
                            </PerfectScrollbar>
                        </div>
                        <div className="summary">
                            <Button href="#" variant="secondary" size="sm" onClick={this.handleSummary}>Summary
                            <RiArrowDropRightLine /></Button>
                        </div>            
                    </div>
                </div>
            </div>
        );
    }
}


export default Facilityday;
