import React, { Component } from 'react'
import { Button, Form, Accordion, Modal } from "react-bootstrap";
import { BsChevronRight, BsPlus } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { GiSewingMachine } from "react-icons/gi";
import {
    Nextbutton,
    DisableNextbutton,
} from "../../../../component/buttons/button";
import "./machinery.css";

import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
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
import Machine from '../Machine/Machine';


interface initialState {

}
export class Machinery extends Component<{}, initialState> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="main d-flex align-items-center">
                <div className="leftmenu">
                    <div className="inner">
                        <div className="top_text">
                            <BsPlus />
                            <p>add business categroy</p>
                        </div>
                        <div className="inner_maintext">
                            <h4>Manufacture</h4>
                        </div>
                        <div className="inner_subtext">
                            <h6>Sweing</h6>
                        </div>
                        <div className="d-flex flex-column justify-content-between product-item-parent">
                            <div className="select_heading">
                                <img src={Vector1} alt="" />
                                <img src={Vector2} className="inner_image" alt="" />
                                <p>Synticate Industries </p>
                            </div>

                            <div className="select_box d-flex">
                                <img src={Vector3} alt="" />
                                <p>Facility 1</p>
                                <img src={Vector4} alt="" />
                            </div>
                            <div className="select_box d-flex">
                                <img src={Vector3} alt="" />
                                <p>Facility 2</p>
                                <img src={Vector4} alt="" />
                            </div>

                            <div className="select_bottom d-flex">
                                <img src={Vector5} className="image_one" alt="" />
                                <p>  Add Facility </p>
                                <img src={Vector6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightmenu d-flex flex-column product-item-parent">
                    <div className="righttop">
                        <Tabs
                            defaultActiveKey="entity"
                            id="settings-tab">
                            <Tab eventKey="entity" title="Facility KYC">
                                <div className="h-100">

                                </div>
                            </Tab>
                            <Tab eventKey="taxRegistraton" title="Facility info">
                                <div className="h-100">
                                    {/* <p>tdg</p> */}
                                </div>
                            </Tab>
                            <Tab eventKey="rating" title="Machinery">
                                {/* <Machine /> */}
                            </Tab>
                            <Tab eventKey="contact" title="Manpower">
                                <div className="h-100">
                                    {/* <p>tdg</p> */}
                                </div>
                            </Tab>
                            <Tab eventKey="businessHours" title="ESG">
                                <div className="h-100">
                                    {/* <p>tdg</p> */}
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}

export default Machinery
