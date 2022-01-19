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



interface typeState {
    linetype: string,
    showSummary: boolean,
    step1: boolean,
    step2: boolean,
}


class Facilityform extends Component<{}, typeState> {

    constructor(props: any) {
        super(props);
        this.state = {
            linetype :"",
            showSummary: false,
            step1: true,
            step2: false,
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
    


    render() {
        return (
            <div className="h-100 kyc-facility-facility-info">
            {
                this.state.step1 ?
                <Facilityhome onClick={this.step1Complete}/> :
                <div className="machine main d-flex facilitykyc1 h-100">
                
                    <div className="col-md-12 d-flex flex-column h-100">
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
                                                                    position='top' 
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
            }
            </div>
        );
    }
}


export default Facilityform;
