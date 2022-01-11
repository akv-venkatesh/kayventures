import React, { ChangeEvent , Component } from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import "./Facilityform.css";
import { Formik , Field, ErrorMessage } from "formik";
import Vector3 from "../../../../assets/icons/various/Vector3.svg"
import slider from "../../../../assets/slider.svg"

import MachineIcon from "../../../../assets/icons/various/MachineIcon.svg"
import BottomIcon from "../../../../assets/icons/various/BottomIcon.svg"
import Vector5 from "../../../../assets/icons/various/Vector5.svg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import PerfectScrollbar from "react-perfect-scrollbar";
import { RiArrowDropRightLine, RiInformationFill } from 'react-icons/ri';
import "react-perfect-scrollbar/dist/css/styles.css";
import Select from '../../../../component/dropdown_select/slelect';
import { AiOutlineRight , AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { ImCross } from "react-icons/im";



interface typeState {
    linetype: string,
    showSummary: boolean,
}


class Facilityform extends Component<{}, typeState> {

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
                        <img src={Vector3} alt="" className="vector"/>
                        <p>Facility 1</p>
                        <p>|</p>
                        <img src={Vector3} alt="" className="vector"/>
                        <p>Facility 2</p>
                        <p>|</p>
                        <img src={Vector3} alt="" className="vector"/>
                        <p>Facility 3</p>
                        <p>|</p>
                    </div>
                    <div className="crossicon">
                        <ImCross className="cross" />
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
                                                        <h4 className="mt-4">Select Activity</h4>
                                                    </div>
                                                    <div className="row mt-3 d-flex ">
                                                        <h3 className="col-md-3">Type of Activities<span className='required'></span></h3>
                                                        <div className="col-md-5">
                                                        <div className="custom-select">
                                                        <form data-testid="form-line-type">
                                                        <label htmlFor="line-type" hidden>LineType</label>
                                                        <Select 
                                                            options={this.LineTypeOptions} 
                                                            width='480px' 
                                                            position='top' 
                                                            name="linetype"
                                                            inputId="line-type"
                                                            placeholder='Line type'
                                                            onChange={this.lineTypeChange}
                                                            // isOptionDisabled={(option:any) => option.disabled}
                                                            />
                                                            </form>
                                                        </div>
                                                        
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3 d-flex ">
                                                        <h3 className="col-md-3">Sections Within the Unit<span className='required'></span></h3>
                                                        <div className="col-md-5">
                                                        <Select 
                                                            options={this.LineTypeOptions} 
                                                            width='480px' 
                                                            position='top' 
                                                            name="linetype"
                                                            inputId="line-type"
                                                            placeholder='Line type'
                                                            onChange={this.lineTypeChange}
                                                            // isOptionDisabled={(option:any) => option.disabled}
                                                            />
                                                        
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-space-between">
                                                        <h5 className="mt-4">Location</h5>
                                                    </div>
                                                    <div className="row mt-3 d-flex ">
                                                        <h3 className="col-md-3">Address<span className='required'></span></h3>
                                                        <div className="col-md-5">
                                                        <p>ABCDXXXXXX</p>
                                                        <p>ABCDXXXXXXABCDXXXXXX</p>
                                                        <p>ABCDXXXABCDXXXXXX</p>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3 d-flex ">
                                                        <h3 className="col-md-3">Traceability(Enabled) <span className='required'></span></h3>
                                                        <div className="col-md-5">
                                                        <p>ABCDXXXXXX</p>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3 d-flex ">
                                                        <h3 className="col-md-3">Location <span className='required'></span></h3>
                                                        <div className="col-md-5">
                                                        <p className="clrgreen">Verified</p>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3 d-flex ">
                                                        <h3 className="col-md-3">Add Photos & Videos <span className='required'></span></h3>
                                                        <div className="col-md-5">
                                                            <div className="btnselect">
                                                                <div className="d-flex">
                                                                    <button className="build">Building facade</button>
                                                                    <button className="otherbtn"> Reception</button>
                                                                </div>
                                                                <div className="d-flex">
                                                                    <button className="otherbtn">Sewing</button>
                                                                    <button className="otherbtn">Cutting</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3 d-flex ">
                                                        <h3 className="col-md-3">Location <span className='required'></span></h3>
                                                        <div className="col-md-5">
                                                            <Carousel  autoPlay axis="horizontal">
                                                                <div>
                                                                    <img src={slider} alt="slider"/>
                                                                   
                                                                </div>
                                                                <div>
                                                                    <img src={slider} alt="slider"/>
                                                                    
                                                                </div>
                                                                <div>
                                                                    <img src={slider} alt="slider"/>
                                                                   
                                                                </div>
                                                            </Carousel>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 col-md-6 m-auto savebtn">
                                                    <button>Save</button>
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


export default Facilityform;
