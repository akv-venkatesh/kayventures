import React, { ChangeEvent , Component } from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import "./Facility1.css";
import { Formik , Field, ErrorMessage } from "formik";
import Vector3 from "../../../../assets/icons/various/Vector3.svg"
import MachineIcon from "../../../../assets/icons/various/MachineIcon.svg"
import BottomIcon from "../../../../assets/icons/various/BottomIcon.svg"
import Vector5 from "../../../../assets/icons/various/Vector5.svg"

import PerfectScrollbar from "react-perfect-scrollbar";
import { RiArrowDropRightLine, RiInformationFill } from 'react-icons/ri';
import "react-perfect-scrollbar/dist/css/styles.css";
import Select from '../../../../component/dropdown_select/slelect';
import { AiOutlineRight , AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';


interface typeState {
    linetype: string,
    showSummary: boolean,
}


class Facility1 extends Component<{}, typeState> {

    constructor(props: any) {
        super(props);
        this.state = {
            linetype :"",
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

    lineTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        let value:any = event;
        this.setState({
          linetype: value.value
        })
      }
  //  fro selecting logo img

    LineTypeOptions = [
      { value: 'Open', label: 'Open' },
      { value: 'Reserved', label: 'Reserved'},
    ]


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
                                                <div className="h-100 facilityform">
                                                    <div className="d-flex align-items-center justify-content-space-between">
                                                        <h5 className="mt-4">Location</h5>
                                                    </div>
                                                    <div className="row mt-5 d-flex ">
                                                        <h3 className="col-md-3">Address<span className='required'> </span></h3>
                                                        <div className="col-md-5">
                                                            <Field type="text" id="" className="input-box" name="line1" aria-label="line1" placeholder="Line 1" />
                                                            <Field type="text" id="" className="input-box" name="line2" aria-label="line2" placeholder="Line 2" />
                                                            <Field type="text" id="" className="input-box add" name="state" aria-label="state" placeholder="State" />
                                                            <Field type="text" id="" className="input-box add" name="country" aria-label="country" placeholder="Country" />
                                                            <Field type="text" id="" className="input-box add" name="pincode" aria-label="pincode" placeholder="Pincode" />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-5 d-flex ">
                                                        <h3 className="col-md-3">Location Validity (If any)<span className='required'></span></h3>
                                                        <div className="col-md-5">
                                                        <form data-testid="form-line-type">
                                                        <Select 
                                                            options={this.LineTypeOptions} 
                                                            width='480px' 
                                                            position='top' 
                                                            name="linetype"
                                                            inputId="line-type"
                                                            placeholder='Line type'
                                                            onChange={this.lineTypeChange}
                                                            isOptionDisabled={(option:any) => option.disabled}
                                                            />
                                                            </form>
                                                        <Field type="text" id="" className="input-box mt-3" name="mentionnumber" aria-label="mentionnumber" placeholder="Mention Number" />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-5 d-flex ">
                                                        <h3 className="col-md-3">Location Map<span className='required'> </span></h3>
                                                        <div className="col-md-5">
                                                            <Field type="text" id="" className="input-box" name="locationmap" aria-label="locationmap" placeholder="Paste URL link here" />
                                                            <div className="plusIcon d-flex">
                                                                <img src={Vector5} className="image_one" alt="" />
                                                                <p>  Add in case of multiple locations</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-space-between">
                                                        <h5 className="mt-4">Contact</h5>
                                                    </div>
                                                    <div className="row mt-5 d-flex ">
                                                        <h3 className="col-md-3">Service<span className='required'> </span></h3>
                                                        <div className="col-md-5">
                                                            <Field type="number" id="" className="input-box" name="service" aria-label="service" placeholder="+91 XXXXXXXXX" />
                                                        </div>
                                                    </div> 
                                                    <div className="row mt-5 d-flex ">
                                                        <h3 className="col-md-3">Customer care administration<span className='required'> </span></h3>
                                                        <div className="col-md-5">
                                                            <Field type="text" id="" className="input-box" name="customercareadministration" aria-label="customercareadministration" placeholder="xyz@gmail.com or company Id" />
                                                            <div className="plusIcon d-flex">
                                                                <img src={Vector5} className="image_one" alt="" />
                                                                <p>  Add in case of multiple locations</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-space-between">
                                                        <h5 className="mt-4">Location Map</h5>
                                                    </div>
                                                    <div className="row mt-5 d-flex ">
                                                        <h3 className="col-md-3">Reverse Gecoding<span className='required'> </span></h3>
                                                        <div className="col-md-5">
                                                            <Field type="text" id="" className="input-box" name="reversegecoding" aria-label="reversegecoding" placeholder="Paste the link here" />
                                                            <div className="plusIcon d-flex">
                                                                <img src={Vector5} className="image_one" alt="" />
                                                                <p>  Add in case of multiple locations</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-5 col-md-8 pb-4 m-auto">
                                                        <div className="row ">
                                                            <div className="w-100 d-flex justify-content-center">
                                                                <button type="button" className="btn btn-back mx-2 back float-start">
                                                                    <AiFillCaretLeft />&emsp;Back</button>
                                                                    <div className="w-30 m-auto">
                                                                        <button type="button" className="btn btn-default  mx-4 remove">Remove</button>
                                                                        <button 
                                                                            type="button" 
                                                                            className="btn btn-default mx-4 saveq"
                                                                            >Save</button>
                                                                    </div>
                                                                        <button type="submit" className="btn btn-back mx-2 next float-end">Next&emsp;<AiFillCaretRight />
                                                                        </button> 
                                                            </div>
                                                        </div>
                                                    </div>
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


export default Facility1;
