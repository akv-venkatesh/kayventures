import React, { Component } from 'react'
import { Button, Col, Container, Form, Row, Modal } from 'react-bootstrap';
import "./manpower.css";

import Vector3 from "../../../assets/icons/various/Vector3.svg"
import User from "../../../assets/icons/various/User.svg"
import BottomIcon from "../../../assets/icons/various/BottomIcon.svg"
import Vector5 from "../../../assets/icons/various/Vector5.svg"
import MachineIcon from "../../../assets/icons/various/MachineIcon.svg"

import PerfectScrollbar from "react-perfect-scrollbar";
import { RiArrowDropRightLine, RiInformationFill } from 'react-icons/ri';

import "react-perfect-scrollbar/dist/css/styles.css";
import Select from '../../../component/dropdown_select/slelect';


interface typeState {
    showSummary: boolean,
    selectGrade: boolean,
    gradeType: any,
    operationType: any,
    manPowerCount: number,
}

class Manpower extends Component<{}, typeState> {

    constructor(props: any) {
        super(props);
        this.state = {
            showSummary: false,
            selectGrade: false,
            gradeType: '',
            operationType: '',
            manPowerCount: 0,
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
    handleGrade = (event: any) => {
        let value: any = event;
        this.setState({
            selectGrade: true,
            gradeType: value.value
        })
    }
    handleOperation = (event: any) => {
        let value: any = event;
        this.setState({
            operationType: value.value
        })
    }
    changeManpowerCount = (e: any) => {
        if (e.currentTarget.value || e.currentTarget.value === "") {
            this.setState({
                manPowerCount: e.currentTarget.value
            })
        }
    }

    render() {
        const grade = [
            { value: 'Grade A', label: 'Grade A' },
            { value: 'Grade B', label: 'Grade B' },
            { value: 'Grade C', label: 'Grade C' }
        ]
        const operation = [
            { value: 'Tailor', label: 'Tailor' },
            { value: 'Line supervisor', label: 'Line supervisor' },
            { value: 'Quality Inspector', label: 'Quality Inspector' },
            { value: 'Checker', label: 'Checker' },
            { value: 'Trimmer', label: 'Trimmer' }
        ]


        return (
            <div className="main d-flex">
                <div className="leftmenu d-flex flex-column">
                    <h5 className="menu_header">Operations</h5>
                    <div className="menu_dropdown mb-3">
                        <div className="mb-3">
                            <form data-testid="grade" >
                                <label htmlFor="select-grade" hidden>select Grade</label>
                                <Select
                                    name="grade"
                                    inputId="select-grade"
                                    options={grade}
                                    width='300px'
                                    position='bottom'
                                    placeholder='Select Grade'
                                    onChange={this.handleGrade}
                                ></Select>
                            </form>

                        </div>
                        <div className="mb-3">
                            <form data-testid="opertaion">
                                <label htmlFor="select-operation" hidden>select Opertion</label>
                                <Select
                                    name="operation"
                                    inputId="select-operation"
                                    options={operation}
                                    width='300px'
                                    position='bottom'
                                    placeholder='Select Operation'
                                    onChange={this.handleOperation}
                                ></Select>
                            </form>

                        </div>
                        <div className="manpower_input">
                            <Form.Control
                                type="text"
                                placeholder="Enter no. of operators"
                                onChange={this.changeManpowerCount}
                            />
                        </div>

                        <div className="ms-2">
                            <Button
                                className="submit_switch btn btn-primary"
                                disabled={!this.state.manPowerCount}
                            >
                                Submit
                            </Button>
                        </div>
                        <div className="ms-2">
                            <Button className="btn btn-secondary manpower_reset" disabled={!this.state.gradeType}>
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
                    </div>
                    <div className="box py-5 mt-2">
                        <div className="scroll pb-3">
                            <div className="d-flex flex-wrap flex-column pe-4">
                                <div className="box_header">
                                    <h4>Manpower Setup</h4>
                                    <p>You can view the manpower resources grade wise</p>
                                </div>
                                <div className="box_buttons">
                                    <Button href="#" variant="light" size="lg">
                                        Grade A
                                    </Button>
                                    <Button href="#" variant="light" size="lg" >
                                        Grade B
                                    </Button>
                                    <Button href="#" variant="light" size="lg">
                                        Grade C
                                    </Button>
                                </div>
                                {this.state.selectGrade ?
                                    <PerfectScrollbar>
                                        <div className="manpower_list">
                                            <Container>
                                                <Row>
                                                    <Col xs={3} md={2}>
                                                        <div className="manpower_items">
                                                            <div className="manpower_image d-flex">
                                                                <img src={User} alt="" />
                                                                <h3>{this.state.manPowerCount}</h3>
                                                            </div>
                                                            <p>{this.state.operationType}</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </PerfectScrollbar> : null}
                                <div className="manpower_plus d-flex">
                                    <img src={Vector5} alt="" />
                                    <p>  Add More </p>
                                </div>
                            </div>
                        </div>
                        <div className="summary">
                            <Button href="#" disabled={!this.state.manPowerCount} size="sm" onClick={this.handleSummary}>
                                Summary
                                <RiArrowDropRightLine />
                            </Button>
                        </div>
                    </div>
                    <div className="bottom_text d-flex justify-content-center">
                        <img src={BottomIcon} alt="" />
                        <h6>You can view the manpower resources grade wise</h6>
                    </div>
                </div>

                <Modal
                    show={this.state.showSummary}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className="manpower"
                    backdropClassName="manpower"
                    onHide={this.hideSummary}
                    data-testid="someElemInMyModal"
                >
                    <Modal.Header closeButton />
                    <Modal.Body className="">
                        <div className="header_discription d-flex">
                            <RiInformationFill className="info-icon" />
                            <p>
                                Select the filter of Grade A, B, C to view the required summary information.
                            </p>
                        </div>
                        <div className="row">
                            <PerfectScrollbar
                                options={{ suppressScrollY: false, suppressScrollX: true }}
                                onScrollY={(container) =>
                                    console.log(`scrolled to: ${container.scrollTop}.`)
                                }
                            >
                                <div className="my-3 mx-3">
                                    <div className="d-flex">
                                        <div className="model_leftmenu d-flex flex-column">
                                            <div className="menu_dropdown mb-3">
                                                <div className="mb-3">
                                                    <Select options={grade} width='300px' position='bottom' placeholder='Select Grade' onChange={() => { }}></Select>
                                                </div>
                                                <div className="mb-3">
                                                    <Select options={operation} width='300px' position='bottom' placeholder='Select Operation' onChange={() => { }}></Select>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="model_rightmenu d-flex flex-column">
                                            <div className="scroll pb-3">
                                                <PerfectScrollbar>
                                                    <div className="d-flex flex-wrap pe-4">
                                                        <Container>
                                                            <Row>
                                                                <Col xs={3} md={3} className="column d-flex w-100" >
                                                                    <div className="manpower_items">
                                                                        <div className="manpower_image d-flex">
                                                                            <img src={MachineIcon} alt="" />
                                                                            <h3>1</h3>
                                                                        </div>
                                                                        <p>Tailor</p>
                                                                    </div>
                                                                </Col>
                                                                <Col xs={3} md={3} className="column d-flex w-100" >
                                                                    <div className="manpower_items">
                                                                        <div className="manpower_image d-flex">
                                                                            <img src={MachineIcon} alt="" />
                                                                            <h3>1</h3>
                                                                        </div>
                                                                        <p>Tailor</p>
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
                                        <div className="model_box">
                                            <div className="d-flex flex-column mt-3">
                                                <div className="modelbox_head d-flex">
                                                    <h4>Grade A</h4>
                                                    <h4>87</h4>
                                                </div>
                                                <div className="modelbox_content d-flex">
                                                    <div className="">
                                                        <p>Tailor</p>
                                                        <p>Tailor</p>
                                                        <p>Tailor</p>
                                                        <p>Tailor</p>
                                                    </div>
                                                    <div className="">
                                                        <p>45</p>
                                                        <p>45</p>
                                                        <p>45</p>
                                                        <p>45</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </PerfectScrollbar>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}


export default Manpower
