import React, { Component, ChangeEvent } from 'react'
import { Button, Form, Accordion, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { IoIosInformationCircle } from "react-icons/io";
import { Link, Navigate } from "react-router-dom";
import {
    Backbutton,
    Nextbutton, DisableBackbutton,
DisableNextbutton,

} from "../../../../../component/buttons/button";
import vest from "../../../../../assets/images/vest.svg";
import $ from 'jquery';

import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { RiArrowRightSLine } from "react-icons/ri";
import Stepper from '../../../../../component/stepper/stepper';


interface initialState {
    visibility: boolean,
    selectedOption: string,
    selectedgrouptype: String[],
    savebtn: boolean,
    removebtn: boolean,
    nextPageEnable: boolean,
    saveEnable: boolean,
    producttype: object[],
    show: boolean,
    summeryModel: boolean
    finish: boolean,
    facilityentry:boolean,
}

export class Operations extends Component<{}, initialState> {
    constructor(props: any) {
        super(props);

        this.state = {
            finish:false,
            visibility: false,
            show: false,
            selectedOption: "",
            selectedgrouptype: [],
            savebtn: false,
            removebtn: false,
            nextPageEnable: false,
            saveEnable: false,
            summeryModel: false,
            producttype: [
                {
                    name: "Production"
                },
                {
                    name: "R&D"
                },
                {
                    name: "Warehouse"
                },
                {
                    name: "Design"
                }
            ],
            facilityentry:false,
        };
    }
    handleChange = (e: any) => {
        this.setState({ selectedOption: e.target.value });
        if (e.target.value) {
            this.setState({ visibility: true });
        }
    };

    redirectNext = () => {
        this.setState({ nextPageEnable: true });

    };
    redirectBack = () => {
        this.setState({ nextPageEnable: false, visibility: false });

    };
    productAdd = () => {
        this.setState({ visibility: true, saveEnable: false })
        if (this.state.selectedgrouptype.length == 0) {
            this.setState({

                visibility: false,

            })
        }

    }
    productremove = () => {
        $('.category input[type=checkbox]').prop("checked", false);
        this.setState({
            visibility: false,
            saveEnable: false,
            selectedgrouptype: []
        })
    }

    selectgrouptype = (e: ChangeEvent<HTMLInputElement>) => {


        let newArray = [...this.state.selectedgrouptype, e.target.value];
        if (this.state.selectedgrouptype.includes(e.target.value)) {
            newArray = newArray.filter(day => day !== e.target.value);

        }
        this.setState({
          
            visibility: false
        })
        if (newArray.length > 0) {
            this.setState({
                selectedgrouptype: newArray,
                saveEnable: true
            })
        } else {
            this.setState({
                selectedgrouptype: [],
                saveEnable: false,
                visibility: false
            })
        }

    }

    finish = () =>{
        this.setState({
            facilityentry : true
        })
    }
    finishbymodal = () =>{
        this.setState({
            finish : true
        })
    }
    

    render() {

        const steps = [{ label: 'KYC', id: 0 }, { label: 'Product Selection', id: 1 }, { label: 'Machinery', id: 2 }, { label: 'Operations', id: 3 }]

        const renderTooltip = (props: any) => (
            <Tooltip id="button-tooltip" {...props}>
                Simple tooltip
            </Tooltip>
        );
        
        if(this.state.finish){
            return <Navigate to = "/settings/kyc/facility/addfacility" />
        }

        return (

            <div className="h-100 kyc-org-operation">


                <div className='my-2 d-flex' style={{ width: '100%' }} >
                    <div style={{ width: '100px' }}></div>
                    <div style={{ width: '100%' }}>
                        <Stepper steps={steps} activeStep={4} />
                    </div>
                </div >
                <div className='operation-section-body d-flex'>
                    <div className='operation-right-panel'>
                        <div className='operation-right-panel-title'>
                            <p>Type of Operation </p>
                            <div className=" me-2">
                                <ul className="p-0 m-0">
                                    <div className="sub-categories">
                                        {this.state.nextPageEnable ?
                                        
                                            <PerfectScrollbar >
                                                <div className='inside-scrool'>
                                                <Accordion >
                                                    <Accordion.Item eventKey={'a1'} className="mb-2" >
                                                        <Accordion.Button className={this.state.selectedgrouptype.length > 0 ? 'complete' : 'not-completed'}>
                                                            Select Operation
                                                        </Accordion.Button>
                                                        <Accordion.Body>
                                                            <ul className="sub-cat m-0">
                                                                {
                                                                    this.state.selectedgrouptype.map((item: any, index: number) =>
                                                                        <li className="pe-4" key={index} >{item}</li>
                                                                    )
                                                                }
                                                            </ul>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                                </div>
                                            </PerfectScrollbar >: ''
                                          
                                        }
                                    </div >
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='box-field-area p-3 h-100'>
                        {
                            this.state.visibility ?
                            <div className='box-field-area-top'>
                                <div className="productconfigutation_btn justify-content-end">
                                    <div className="next_btn">
                                            <button 
                                                className='swmmery-btn' 
                                                onClick={() =>{this.setState({summeryModel:true})}} 
                                            >
                                                Summary 
                                                <span>
                                                    <RiArrowRightSLine className='btn-arrow-right' />
                                                </span>
                                            </button>
                                        
                                    </div>
                                </div>
                            </div> :
                            this.state.nextPageEnable ? 
                            <div className="box-field-area-top">
                                <div className="productconfigutation_btn justify-content-end">
                                    <div className="next_btn">
                                        <button className='swmmery-btn-disable' >
                                            Summary 
                                            <span>
                                                <RiArrowRightSLine className='btn-arrow-right' />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            :<></>
                        }
                        <div className={!this.state.nextPageEnable ? 'operation-area-height-body' : 'operation-area-height-body active'}>
                            {/* <div style={{height:"450px"}}> */}
                            <PerfectScrollbar>
                                <div className={!this.state.nextPageEnable ? 'operation_area h-100 d-flex align-items-center justify-content-center': 'operation_area h-100' }>
                                    {this.state.nextPageEnable ?
                                        <div>
                                            <div className='operation_area_title' >
                                                <h1>Select Operations   </h1>
                                            </div>
                                            <ul className="category d-flex m-0 p-0 flex-wrap">
                                                {
                                                    this.state.producttype.length > 0 ?
                                                        this.state.producttype.map((tag: any, i: number) =>
                                                            <div className="me-5 mb-5" key={'key' + i}>
                                                                <form className='d-flex'>
                                                                    <div className="cat-img-bg me-4">
                                                                        <img src={vest} className="cat-img" />
                                                                    </div>
                                                                    <div>
                                                                        <input type="checkbox" value={tag.name}
                                                                            name={tag.name}
                                                                            id={tag.name} required hidden checked={this.state.selectedgrouptype.includes(tag.name)} onChange={this.selectgrouptype} />

                                                                        <label className="w-100 py-2 justify-content-between align-items-center d-flex" htmlFor={tag.name}>
                                                                            <span className="checkmark">  {tag.name}</span>
                                                                        </label>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        )
                                                        : ''
                                                }

                                            </ul>
                                        </div>
                                        :
                                        <div className='operation-text mx-5 px-5 ' >
                                            <h1>Click on Next Button to select operations handled in your Organisation</h1>
                                        </div>

                                    }
                                </div>
                            </PerfectScrollbar>
                        </div>

                        <div className="productconfigutation_btn operation_btn">
                            <div>{this.state.visibility ? <Backbutton onClick={this.redirectBack} /> : this.state.nextPageEnable ? <Backbutton onClick={this.redirectBack} /> : ''}</div>

                            <div>{this.state.nextPageEnable ? <div> <button
                                type="button"
                                className=" btn-default mx-4 remove"
                                onClick={this.productremove}
                                disabled={this.state.saveEnable ? false : true}
                            >
                                Clear
                            </button>
                                <button
                                    type="button"
                                    className=" btn-default mx-4 save"
                                    disabled={this.state.saveEnable ? false : true}
                                    onClick={this.productAdd}
                                >
                                    Save
                                </button></div> : ''}</div>
                            <div className="next_btn">

                                {
                                    this.state.visibility ?
                                    <>
                                        <div className='icon-parent'> 
                                            <IoIosInformationCircle className='info-icon' /> 
                                        </div>
                                        <Nextbutton onClick={this.finish}/>
                                    </>: 
                                    this.state.nextPageEnable ? 
                                        <DisableNextbutton /> : 
                                        <Nextbutton onClick={this.redirectNext} />
                                }
                            </div>

                        </div>
                    </div>
                </div>
                <Modal
                    show={this.state.summeryModel}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className="summery-model"
                    backdropClassName="summery-model"
                    onHide={() =>{this.setState({summeryModel:false})}}
                >
                    <Modal.Header  closeButton></Modal.Header>
                    <Modal.Body className="">
                    <div className='operation-right-panel-title  '>
                            <p>Type of Operation </p>
                        
                            <PerfectScrollbar >
                                                <div className='inside-scrool'>
                            <Accordion defaultActiveKey='a1'>
                                <Accordion.Item eventKey={'a1'} className="mb-2" >
                                    <Accordion.Button className={this.state.selectedgrouptype.length > 0 ? 'complete' : 'not-completed'}>
                                        Select Operation
                                    </Accordion.Button>
                                    <Accordion.Body className='p-0'>
                                        <ul className="sub-cat m-0">
                                            {
                                                this.state.selectedgrouptype.map((item: any, index: number) =>
                                                    <li className="pe-4 py-3 text-left" key={index} >{item}</li>
                                                )
                                            }
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            </div>
                        </PerfectScrollbar >
                        </div>
                    </Modal.Body>
                </Modal>
                <Modal
					show={this.state.facilityentry}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					className="addfacilityfirstmodal"
					// onHide={() => this.handleHide()}
					>
					<Modal.Header></Modal.Header>
					<Modal.Body className="p-5">
						<h4 className="modal-title">What is a Facility ?</h4>
						<h5 className="modal-discription mt-4">A Facility is a place where youmight be running one or more of the operations indicated in your Organization KYC</h5><br />
						<h5 className="modal-discription">Please add the facilities under the Organization KYC and compile their KYC’s separately</h5>
						<div className="bttn-container text-center mt-4"><Button className="bttn" onClick={this.finishbymodal}>Okay</Button></div>
					</Modal.Body>
				</Modal>
            </div>


        )
    }
}

export default Operations
