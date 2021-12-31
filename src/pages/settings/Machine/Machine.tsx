import React, { Component } from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import "./machine.css";

import Vector3 from "../../../assets/icons/various/Vector3.svg"
import MachineIcon from "../../../assets/icons/various/MachineIcon.svg"
import BottomIcon from "../../../assets/icons/various/BottomIcon.svg"
import Vector5 from "../../../assets/icons/various/Vector5.svg"

import PerfectScrollbar from "react-perfect-scrollbar";
import { RiArrowDropRightLine, RiInformationFill } from 'react-icons/ri';
import "react-perfect-scrollbar/dist/css/styles.css";
import Select from '../../../component/dropdown_select/slelect';
import { AiOutlineRight } from 'react-icons/ai';


interface typeState {
    showSummary: boolean,
}


class Machine extends Component<{}, typeState> {

    constructor(props: any) {
        super(props);
        this.state = {
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
            <div className="machine main d-flex">
                <div className="leftmenu d-flex flex-column">
                    <h5 className="menu_header">Machine Type</h5>
                    <div className="menu_dropdown mb-3">
                        <div className="mb-3">
                            <Select options={machine} width='300px' position='bottom' placeholder='Select Machine' onChange={() => { }}></Select>
                        </div>
                        <div className="mb-3">
                            <Select options={brand} width='300px' position='bottom' placeholder='Select Brand' onChange={() => { }}></Select>
                        </div>
                        <div className="mb-3">
                            <Select options={technology} width='300px' position='bottom' placeholder='Select Technology' onChange={() => { }}></Select>
                        </div>
                    </div>

                    <h5 className="menu_machine_numbers">Add the No. of machines</h5>
                    <div className="mb-3">
                        <div className="machine_input ms-2 mb-3">
                            <Form.Control
                                type="text"
                                placeholder="0"

                            />
                        </div>

                        <div className="ms-2 mb-3">
                            <Button
                                className="btn btn-default submit"
                                disabled
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
                                disabled
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

                                            <Col xs={3} md={12} className="column d-flex" >
                                                <div className="machine_items">
                                                    <div className="machine_image d-flex">
                                                        <img src={MachineIcon} alt="" />
                                                        <h3>1</h3>
                                                    </div>

                                                    <p>juki</p>


                                                </div>
                                                <div className="machine_items_text">
                                                    <p>Brand</p>
                                                    <p>tech</p>
                                                </div>
                                            </Col>
                                            <div className="plusIcon d-flex">
                                                <img src={Vector5} className="image_one" alt="" />
                                                <p>  Add More </p>
                                            </div>

                                        </Row>
                                    </Container>
                                </div>
                            </PerfectScrollbar>
                        </div>
                        <div className="summary">
                            <Button href="#" variant="secondary" size="sm" onClick={this.handleSummary}>
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


                <Modal
                    show={this.state.showSummary}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className="machine"
                    backdropClassName="machine"
                    onHide={this.hideSummary}
                >
                    <Modal.Header closeButton />
                    <Modal.Body className="">
                        <div className="header_discription d-flex">
                            <RiInformationFill className="info-icon" />
                            <p>
                                Select the filters of Machine, Brand and Technology to view the required summary information.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <PerfectScrollbar
                                    options={{ suppressScrollY: false, suppressScrollX: true }}
                                    onScrollY={(container) =>
                                        console.log(`scrolled to: ${container.scrollTop}.`)
                                    }
                                >
                                    <div className="my-3 mx-3">
                                        <div className="d-flex flex-column">
                                            <div className="leftmenu d-flex flex-column">
                                                <div className="menu_dropdown mb-3">
                                                    <div className="mb-3">
                                                        <Select options={machine} width='300px' position='bottom' placeholder='Select Machine' onChange={() => { }}></Select>
                                                    </div>
                                                    <div className="mb-3">
                                                        <Select options={brand} width='300px' position='bottom' placeholder='Select Brand' onChange={() => { }}></Select>
                                                    </div>
                                                    <div className="mb-3">
                                                        <Select options={technology} width='300px' position='bottom' placeholder='Select Technology' onChange={() => { }}></Select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rightmenu d-flex flex-column">
                                                <div className="scroll pb-3">
                                                    <PerfectScrollbar>
                                                        <div className="d-flex flex-wrap pe-4">
                                                            <Container>
                                                                <Row>
                                                                    <Col xs={3} md={12} className="column d-flex" >
                                                                        <div className="machine_items">
                                                                            <div className="machine_image d-flex">
                                                                                <img src={MachineIcon} alt="" />
                                                                                <h3>1</h3>
                                                                            </div>
                                                                            <p>juki</p>
                                                                        </div>
                                                                        <div className="machine_items_text">
                                                                            <p>Brand</p>
                                                                            <p>tech</p>
                                                                        </div>
                                                                    </Col>
                                                                    <div className="plusIcon d-flex">
                                                                        <img src={Vector5} className="image_one" alt="" />
                                                                        <p>  Add More </p>
                                                                    </div>
                                                                </Row>
                                                            </Container>
                                                        </div>
                                                    </PerfectScrollbar>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </PerfectScrollbar>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}


export default Machine;
