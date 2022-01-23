import React, { ChangeEvent , Component } from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import { Formik } from "formik";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import PerfectScrollbar from "react-perfect-scrollbar";
import { RiArrowDropRightLine } from 'react-icons/ri';
import "react-perfect-scrollbar/dist/css/styles.css";
import Select from '../../../../../component/dropdown_select/slelect';
import { ImCross } from "react-icons/im";
import Facilityhome from '../../commonFiles/facilityhome';
import '../../../../m-login.scss';
import { Navigate } from 'react-router-dom';
import { boolean } from 'yup';



interface typeState {
    linetype: string,
    showSummary: boolean,
    step1: boolean,
    step2: boolean,
    facilities: any,
    finish: boolean,
}

const facilities = localStorage.getItem('facilities');
let facility = facilities?.split(',')



class Facilityform extends Component<{}, typeState> {

    constructor(props: any) {
        super(props);
        this.state = {
            linetype :"",
            showSummary: false,
            step1: true,
            step2: false,
            facilities : facility,
            finish: false,
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
    ];

    step1Complete = () =>{
        this.setState({
            step1: false,
            step2: true
        })
    }
    step2Complete = () =>{
        this.setState({
            step1:true,
            step2:false,
        })
    }
    finish = () =>{
        this.setState({
            finish : true,
        })
    }
    


    render() {
        
        if(this.state.finish){
            return <Navigate to ="/settings/kyc/facility/product-selection" />
        }
        
        return (
            <div className="kyc-facility-facility-info h-100">
            
            {
                this.state.step1 ?
                <Facilityhome onClick={this.step1Complete} selected_Facilities={this.state.facilities}/> :
                <div className="machine main facilitykyc1 h-100">
                
                    <div className=" h-100">
                        <div className="d-flex justify-content-end">
                            <div className="crossicon">
                                <ImCross className="cross" />
                            </div>
                        </div>
                        <div className="box p-3">
                            <div className="summary d-flex justify-content-end py-3">
                                <Button 
                                    variant="secondary" 
                                    size="sm" 
                                    onClick={this.handleSummary}
                                    disabled = {this.state.linetype !== '' ? false : true}
                                    >Summary
                                <RiArrowDropRightLine /></Button>
                            </div>
                            <div className="scroll">
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
                                                                    <h4 className="mt-4">Select Operation</h4>
                                                                </div>
                                                                <div className="row mt-3 d-flex ">
                                                                    <h3 className="col-md-3">Type of Operation<span className='required'></span></h3>
                                                                    <div className="col-md-5">
                                                                    <div className="custom-select">
                                                                    <form data-testid="form-line-type">
                                                                    <label htmlFor="line-type" hidden>Operation List</label>
                                                                    <Select 
                                                                        options={this.LineTypeOptions} 
                                                                        width='480px' 
                                                                        position='bottom' 
                                                                        name="linetype"
                                                                        inputId="line-type"
                                                                        placeholder='Operation list'
                                                                        onChange={this.lineTypeChange}
                                                                        // isOptionDisabled={(option:any) => option.disabled}
                                                                        />
                                                                        </form>
                                                                    </div>
                                                                    
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
                                                            </div>          
                                                        </form>
                                                    )}
                                                </Formik>
                                            </Row>
                                        </Container>
                                    </div>
                                </PerfectScrollbar>
                            </div>
                            <div className="py-3 px-5 savebtn">
                                <div className="d-flex justify-content-between">
                                    {
                                        this.state.step2 ?
                                        <button 
                                            onClick={this.step2Complete}
                                        >
                                            back
                                        </button>
                                    
                                    :<></>
                                    }
                                    <button
                                        disabled = {this.state.linetype !== '' ? false : true}
                                        onClick = {this.finish}
                                        >
                                        Next
                                    </button>
                                </div>
                            </div>          
                        </div>
                    </div>
                </div>
            }
            </div>
        );
    }
}


export default Facilityform;
