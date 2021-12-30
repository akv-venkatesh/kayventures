import React from 'react'
import { Button } from 'react-bootstrap';
import "./esg.css";

import Vector3 from "../../../assets/icons/various/Vector3.svg"
import ViewImage from "../../../assets/images/ViewImage.png"
import MapImage from "../../../assets/images/MapImage.png"
import Navigation from "../../../assets/icons/maps/pin.svg"
import Call from "../../../assets/icons/call/call-phone.svg"
import Time from "../../../assets/icons/time/time.svg"

import { RiArrowDropRightLine } from 'react-icons/ri';


function Esg() {
    return (
        <div className="main d-flex flex-column">
            <div className="facility d-flex">
                <img src={Vector3} alt="" />
                <p>Facility 1</p>
                <p>|</p>
                <img src={Vector3} alt="" />
                <p>Facility 2</p>
                <p>|</p>
                <img src={Vector3} alt="" />
                <p>Facility 3</p>
            </div>
            <div className="box py-5 mt-2">
                <div className="scroll pb-3">
                    <div className="d-flex flex-wrap flex-column pe-4">
                        <div className="box_buttons d-flex justify-content-center">
                            <Button href="#" variant="light" size="lg">
                                Environmental
                            </Button>
                            <Button href="#" variant="light" size="lg" >
                                Social
                            </Button>
                            <Button href="#" variant="light" size="lg">
                                Governance
                            </Button>
                        </div>
                        <div className="box_content d-flex justify-content-center">
                            <div className="left_content d-flex flex-column">
                                <img src={MapImage} alt="" />
                                <div className="d-flex mt-2">
                                    <img className="address_icon" src={Navigation} alt="" />
                                    <div className="address_line d-flex flex-column">
                                        <p>SGG Road</p>
                                        <p>2nd stage</p>
                                        <p>Jeevan dani road</p>
                                        <p>8948295532</p>
                                        <p>pin code: 000798</p>
                                    </div>
                                </div>
                                <div className="d-flex mt-2">
                                    <img className="address_icon" src={Call} alt="" />
                                    <div className="address_line d-flex flex-column">
                                        <p>8948295532</p>
                                    </div>
                                </div>
                                <div className="d-flex mt-2">
                                    <img className="address_icon" src={Time} alt="" />
                                    <div className="address_line d-flex flex-column">
                                        <p>Mon- Fri</p>
                                        <p>8.00AM -7.00PM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="right_content">
                                <img src={ViewImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="summary">
                    <Button href="#" variant="secondary" size="sm" disabled>
                        Summary
                        <RiArrowDropRightLine />
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default Esg
