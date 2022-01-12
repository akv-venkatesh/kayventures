import React, { Component } from 'react'
import { Button, Form, Accordion, Modal } from "react-bootstrap";
import { BsChevronRight, BsPlus } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { GiSewingMachine } from "react-icons/gi";
import { Link } from "react-router-dom";
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
    visibility: boolean;
    selectedOption: string;
}

export class Machinery extends Component<{}, initialState> {
    constructor(props: any) {
        super(props);

        this.state = {
            visibility: false,
            selectedOption: "",
        };
    }
    handleChange = (e: any) => {
        this.setState({ selectedOption: e.target.value });
        if (e.target.value) {
            this.setState({ visibility: true });
        }
    };

    render() {
        console.log(this.state.selectedOption)
        return (

            <div>
                <div className='my-3'>
                    ----
                </div >
                <div className='box-field-area p-3'>
                    <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                        <PerfectScrollbar>
                            <div className='box-field-area-title d-flex flex-column justify-content-center align-items-center my-5'>
                                <span >Select the manufacturing activity to complete the machinery selection</span>
                            </div>
                            <div className='Machinery_area d-flex'>
                                {/* body */}

                                <div className="Machinery_product">
                                    <div className="Machinery_product_field ">
                                        <label htmlFor="Sewing" className="product_field">
                                            <div className="product_field_item">
                                                {/* <img src={Tshert} /> */}
                                                <span className={this.state.selectedOption === 'Sewing' ? 'selected' : 'unselected'}>Sewing</span>
                                            </div>
                                            <div>
                                                <div className="product_field_circle">
                                                    <input
                                                        type="radio"
                                                        id="Sewing"
                                                        name="Weaving"
                                                        value="Sewing"
                                                        onChange={this.handleChange}
                                                    />
                                                    <label htmlFor="Sewing"></label>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {/* body */}
                                {/* body */}

                                <div className="Machinery_product">
                                    <div className="Machinery_product_field ">
                                        <label htmlFor="Spinning" className="product_field">
                                            <div className="product_field_item">
                                                {/* <img src={Tshert} /> */}
                                                <span className={this.state.selectedOption === 'Spinning' ? 'selected' : 'unselected'}>Spinning</span>
                                            </div>
                                            <div>
                                                <div className="product_field_circle">
                                                    <input
                                                        type="radio"
                                                        id="Spinning"
                                                        name="Weaving"
                                                        value="Spinning"
                                                        onChange={this.handleChange}
                                                    />
                                                    <label htmlFor="Spinning"></label>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {/* body */}
                                {/* body */}

                                <div className="Machinery_product">
                                    <div className="Machinery_product_field ">
                                        <label htmlFor="Weaving" className="product_field">
                                            <div className="product_field_item">
                                                {/* <img src={Tshert} /> */}
                                                <span className={this.state.selectedOption === 'Weaving' ? 'selected' : 'unselected'}>Weaving</span>
                                            </div>
                                            <div>
                                                <div className="product_field_circle">
                                                    <input
                                                        type="radio"
                                                        id="Weaving"
                                                        name="Weaving"
                                                        value="Weaving"
                                                        onChange={this.handleChange}
                                                    />
                                                    <label htmlFor="Weaving"></label>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {/* body */}
                                {/* body */}

                                <div className="Machinery_product">
                                    <div className="Machinery_product_field ">
                                        <label htmlFor="Knitting" className="product_field">
                                            <div className="product_field_item">
                                                {/* <img src={Tshert} /> */}
                                                <span className={this.state.selectedOption === 'Knitting' ? 'selected' : 'unselected'} >Knitting</span>
                                            </div>
                                            <div>
                                                <div className="product_field_circle">
                                                    <input
                                                        type="radio"
                                                        id="Knitting"
                                                        name="Weaving"
                                                        value="Knitting"
                                                        onChange={this.handleChange}
                                                    />
                                                    <label htmlFor="Knitting"></label>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {/* body */}


                            </div>
                        </PerfectScrollbar>
                        <div className="productconfigutation_button">
                            <div></div>
                            {/* <div>There are no machines defined under Spinning, Weaving, Knitting</div> */}
                            <div className="next_btn">

                                {this.state.visibility ? (
                                    <Link to="/settings/machinery">
                                        <Nextbutton />
                                    </Link>
                                ) : (
                                    <DisableNextbutton />
                                )}
                            </div>
                        </div>

                    </div>


                </div>


            </div>

        )
    }
}

export default Machinery
