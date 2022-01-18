import React, { Component } from 'react'
import { Button, Form, Accordion, Modal } from "react-bootstrap";
import { BsChevronRight, BsPlus } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { GiSewingMachine } from "react-icons/gi";
import {
    Nextbutton,
    DisableNextbutton,
} from "../../../../component/buttons/button";
import "./Addfacility.css";

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
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillCaretRight } from "react-icons/ai";




import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
// import Machine from '../Machine/Machine';


interface initialState {

}
export class Addfacility extends Component<{}, initialState> {
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
                        {/* <div className="top_text">
                            <BsPlus />
                            <p>add business categroy</p>
                        </div> */}
                        <div className="inner_maintext">
                            <h4>Manufacture</h4>
                        </div>
                        <div className="inner_subtext">
                            <h6>Sweing</h6>
                        </div>
                        <div className="lefthgt">
                        <PerfectScrollbar>
                            <div className="d-flex flex-column justify-content-between product-item-parent">
                                <div className="select_heading mt-3">
                                    <img src={Vector1} alt="" />
                                    {/* <img src={Vector2} className="inner_image" alt="" /> */}
                                    <p>Synticate Industries </p>
                                </div>

                                <div className="select_box d-flex">
                                    <img src={Vector3} alt="" />
                                    <p>Facility 1</p>
                                </div>
                                <div className="select_box d-flex">
                                    <img src={Vector3} alt="" />
                                    <p>Facility 2</p>
                                </div>

                            </div>
                        </PerfectScrollbar>
                        </div>
                    </div>
                </div>
                <div className="rightmenu">
                    <button className="summarybtn">Summary<MdKeyboardArrowRight/></button>
                    <div className="d-flex flex-column product-item-parent-right justify-content-center">                        
                        <p>Click on the Facilities one by one to fill in the details relateing to Location, Contact and Business hours</p>  
                    </div>
                    <button title="nextbutton" type="submit" className="btn btn-back mx-2 next float-end nextbtn">Next&emsp;<AiFillCaretRight />
                        </button>
                </div>
            </div>
        )
    }
}

export default Addfacility
