import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import "./machine.css";

import Vector3 from "../../../assets/icons/various/Vector3.svg"
import MachineIcon from "../../../assets/icons/various/MachineIcon.svg"
import BottomIcon from "../../../assets/icons/various/BottomIcon.svg"
import Vector5 from "../../../assets/icons/various/Vector5.svg"

import PerfectScrollbar from "react-perfect-scrollbar";
import { RiArrowDropRightLine } from 'react-icons/ri';
import "react-perfect-scrollbar/dist/css/styles.css";


function Machine() {
    const [selectMachine, setSelectMachine] = useState();
    const [selectBrand, setSelectBrand] = useState();
    const [selectTech, setSelectTech] = useState();
    const [machineNoChange, setMachineNoChange] = useState(0);

    const handleSelectMachine = (e: any) => {
        setSelectMachine(e.target.value);
    }
    const handleSelectBrand = (e: any) => {
        setSelectBrand(e.target.value);
    }
    const handleSelectTech = (e: any) => {
        setSelectTech(e.target.value);
    }
    const machineChange = (e: any) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === ' ' || re.test(e.target.value)) {
            setMachineNoChange(e.target.value);
        }

    }


    return (
        <div className="main d-flex">
            <div className="leftmenu d-flex flex-column">
                <h5 className="menu_header">Machine Type</h5>
                <div className="menu_dropdown mb-3">
                    <Form.Select value={selectMachine} onChange={handleSelectMachine}>
                        <option value="">Select Machine</option>
                        <option value="Single Needle">Single Needle</option>
                        <option value="Double Needle">Double Needle</option>
                        <option value="Thread Over look">Thread Over look</option>
                    </Form.Select>
                    <Form.Select value={selectBrand} onChange={handleSelectBrand} >
                        <option value="">Select Brand</option>
                        <option value="Juki">Juki</option>
                        <option value="Pfaff">Pfaff</option>
                        <option value="Brother">Brother</option>
                    </Form.Select>
                    <Form.Select value={selectTech} onChange={handleSelectTech}>
                        <option value="">Select Technology</option>
                        <option value="Basic">Basic</option>
                        <option value="Process Automated">Process Automated</option>
                        <option value="Computerized">Computerized</option>
                    </Form.Select>
                </div>

                <h5 className="menu_machine_numbers">Add the No. of machines</h5>
                <div className="mb-3">
                    <div className="ms-2 mb-3">
                        <Form.Control
                            type="text"
                            placeholder="0"
                            onChange={machineChange}
                        />
                    </div>

                    <div className="ms-2 mb-3">
                        <Button
                            className="btn btn-default submit"
                            disabled={!machineNoChange}
                        >
                            Submit
                        </Button>
                    </div>
                    <div className="iot_switch ms-2">
                        <p className="">IOT Enabled</p>
                        <Form.Check
                            type="switch"
                        />
                    </div>
                    <div className="ms-2">
                        <Button
                            className="reset_switch btn btn-primary"
                            disabled={!selectMachine}
                        >
                            Reset
                        </Button>
                    </div>
                </div>
            </div>
            <div className="rightmenu d-flex flex-column">
                <div className="facility d-flex">
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
                            <div className="d-flex flex-wrap pe-4">
                                <Container>
                                    <Row>
                                        {selectMachine ?
                                            <>
                                                <Col xs={3} md={12} className="column d-flex" >
                                                    <div className="machine_items">
                                                        <div className="machine_image d-flex">
                                                            <img src={MachineIcon} alt="" />
                                                            <h3>{machineNoChange}</h3>
                                                        </div>

                                                        <p>{selectMachine}</p>


                                                    </div>
                                                    <div className="machine_items_text">
                                                        <p>{selectBrand}</p>
                                                        <p>{selectTech}</p>
                                                    </div>
                                                </Col>
                                                <div className="plusIcon d-flex">
                                                    <img src={Vector5} className="image_one" alt="" />
                                                    <p>  Add More </p>
                                                </div>
                                            </> : null
                                        }
                                    </Row>
                                </Container>
                            </div>
                        </PerfectScrollbar>
                    </div>
                    <div className="summary">
                        <Button href="#" variant="secondary" size="sm" disabled>
                            Summary
                            <RiArrowDropRightLine />
                        </Button>
                    </div>
                </div>
                <div className="bottom_text d-flex justify-content-center">
                    <img src={BottomIcon} alt="" />
                    <h6>Add machinary information to view the summary.</h6>
                </div>
            </div>
        </div>
    )
}

export default Machine
