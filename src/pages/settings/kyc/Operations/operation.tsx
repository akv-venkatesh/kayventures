import React, { Component, ChangeEvent } from 'react'
import { Button, Form, Accordion, Modal } from "react-bootstrap";
import { BsChevronRight, BsPlus } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { GiSewingMachine } from "react-icons/gi";
import { Link } from "react-router-dom";
import {
    Backbutton,
    Nextbutton, DisableBackbutton,
    DisableNextbutton,
} from "../../../../component/buttons/button";
import "./operations.css";
import vest from "../../../../assets/images/vest.svg";
import $ from 'jquery';

import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { RiArrowRightSLine } from "react-icons/ri";


import { JsxFlags } from "typescript";
import { RiInformationFill } from "react-icons/ri";
import { AiOutlineRight } from "react-icons/ai";
import Select from "react-select";

import Vector1 from "../../../../assets/icons/various/Vector1.svg"
import Vector2 from "../../../../assets/icons/various/Vector2.svg"
import Vector3 from "../../../../assets/icons/various/Vector3.svg"
import Vector5 from "../../../../assets/icons/various/Vector5.svg"
import Vector6 from "../../../../assets/icons/various/Vector6.svg"
import Vector4 from "../../../../assets/icons/arrows/chevron-right.svg"

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';



interface initialState {
    visibility: boolean,
    selectedOption: string,
    selectedgrouptype: String[],
    savebtn: boolean,
    removebtn: boolean,
    nextPageEnable: boolean,
    saveEnable: boolean
}

export class Operations extends Component<{}, initialState> {
    constructor(props: any) {
        super(props);

        this.state = {
            visibility: false,
            selectedOption: "",
            selectedgrouptype: [],
            savebtn: false,
            removebtn: false,
            nextPageEnable: false,
            saveEnable: false
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
        this.setState({ visibility: true })
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
            selectedgrouptype: newArray,
            saveEnable: true
        })


    }
    render() {

        return (

            <div>
                <div className='my-3'>
                    ----
                </div >
                <div className='operation-section-body d-flex'>
                    <div className='operation-right-panel'>
                        <div className='operation-right-panel-title'>
                            <p>Type of Operation </p>
                            <div className=" me-5">
                                <ul className="p-0 m-0">
                                    <div className="sub-categories">
                                        {this.state.nextPageEnable ?
                                            <PerfectScrollbar >
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

                                            </PerfectScrollbar > : ''
                                        }
                                    </div >
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='box-field-area p-3'>
                        <div className='box-field-area-top'>
                            <div className="productconfigutation_btn">
                                <div></div>
                                <div className="next_btn">

                                    {this.state.visibility ? (
                                        <button className='swmmery-btn' >Summary <span><RiArrowRightSLine className='btn-arrow-right' /></span></button>
                                    ) : (
                                        this.state.nextPageEnable ? <button className='swmmery-btn-disable' >Summary <span><RiArrowRightSLine className='btn-arrow-right' /></span></button> : <div className='swmmery-btn-disable' style={{ visibility: "hidden" }}> </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='operation-area-height-body'>
                            {/* <div style={{height:"450px"}}> */}
                            <PerfectScrollbar>
                                <div className='operation_area my-2 h-100'>
                                    {this.state.nextPageEnable ?
                                        <div>
                                            <div className='operation_area_title' >
                                                <h1>Select Operations   </h1>
                                            </div>
                                            <ul className="category d-flex m-0 p-0 flex-wrap">
                                                {/* ......... */}
                                                <div className="me-5 mb-5">
                                                    <form className='d-flex'>
                                                        <div className="cat-img-bg me-4">
                                                            <img src={vest} className="cat-img" />
                                                        </div>
                                                        <div>
                                                            <input type="checkbox" value='Production' name='1' id="b1" required hidden onChange={this.selectgrouptype} />

                                                            <label className="w-100 py-2 justify-content-between align-items-center d-flex" htmlFor='b1'>
                                                                <span className="checkmark">   Production</span>
                                                            </label>
                                                        </div>
                                                    </form>
                                                </div>

                                                <div className="me-5 mb-5 ">
                                                    <form className='d-flex'>
                                                        <div className="cat-img-bg me-4">
                                                            <img src={vest} className="cat-img" />
                                                        </div>
                                                        <div>
                                                            <input type="checkbox" value='R&D' name='1' id="b2" required hidden onChange={this.selectgrouptype} />

                                                            <label className="w-100 py-2 justify-content-between align-items-center d-flex" htmlFor='b2'>
                                                                <span className="checkmark">   R&D</span>
                                                            </label>
                                                        </div>
                                                    </form>
                                                </div>

                                                <div className="me-5  mb-5">
                                                    <form className='d-flex'>
                                                        <div className="cat-img-bg me-4">
                                                            <img src={vest} className="cat-img" />
                                                        </div>
                                                        <div>
                                                            <input type="checkbox" value='Warehouse' name='1' id="b3" required hidden onChange={this.selectgrouptype} />

                                                            <label className="w-100 py-2 justify-content-between align-items-center d-flex" htmlFor='b3'>
                                                                <span className="checkmark">   Warehouse</span>
                                                            </label>
                                                        </div>
                                                    </form>
                                                </div>

                                                <div className="me-5 mb-5  ">
                                                    <form className='d-flex'>
                                                        <div className="cat-img-bg me-4">
                                                            <img src={vest} className="cat-img" />
                                                        </div>
                                                        <div>
                                                            <input type="checkbox" value='Design' name='1' id="b4" required hidden onChange={this.selectgrouptype} />

                                                            <label className="w-100 py-2 justify-content-between align-items-center d-flex" htmlFor='b4'>
                                                                <span className="checkmark">   Design</span>
                                                            </label>
                                                        </div>
                                                    </form>
                                                </div>
                                                {/* ......... */}
                                            </ul>
                                        </div>
                                        :
                                        <div className='operation-text mx-5 px-5 ' >
                                            <h1>Click on Next Button to select operations handled in your Organisation</h1>
                                        </div>

                                    }
                                </div>
                            </PerfectScrollbar>
                            <div className="productconfigutation_btn operation_btn">
                                <div>{this.state.visibility ? <Backbutton onClick={this.redirectBack} /> : this.state.nextPageEnable ? <DisableBackbutton /> : ''}</div>
                                <div>{this.state.nextPageEnable ? <div> <button
                                    type="button"
                                    className="btn btn-default mx-4 remove"
                                    onClick={this.productremove}
                                    disabled={this.state.saveEnable ? false : true}
                                >
                                    Clear
                                </button>
                                    <button
                                        type="button"
                                        className="btn btn-default mx-4 save"
                                        disabled={this.state.saveEnable ? false : true}
                                        onClick={this.productAdd}
                                    >
                                        Save
                                    </button></div> : ''}</div>
                                <div className="next_btn">
                                    {this.state.visibility ? (
                                        <Link to="">
                                            <Nextbutton />
                                        </Link>
                                    ) : (
                                        this.state.nextPageEnable ? <DisableNextbutton /> : <Nextbutton onClick={this.redirectNext} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Operations
