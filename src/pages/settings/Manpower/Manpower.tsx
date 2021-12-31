import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import "./manpower.css";

import Vector3 from "../../../assets/icons/various/Vector3.svg"
import User from "../../../assets/icons/various/User.svg"
import BottomIcon from "../../../assets/icons/various/BottomIcon.svg"
import Vector5 from "../../../assets/icons/various/Vector5.svg"

import PerfectScrollbar from "react-perfect-scrollbar";
import { RiArrowDropRightLine } from 'react-icons/ri';

import "react-perfect-scrollbar/dist/css/styles.css";
import Select from '../../../component/dropdown_select/slelect';


interface typeState {

}

class Manpower extends Component<{}, typeState> {

    constructor(props: any) {
        super(props);
        this.state = {

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
                            <Select options={grade} width='300px' position='bottom' placeholder='Select Grade' onChange={() => { }}></Select>
                        </div>
                        <div className="mb-3">
                            <Select options={operation} width='300px' position='bottom' placeholder='Select Operation' onChange={() => { }}></Select>
                        </div>
                        <div className="manpower_input">
                            <Form.Control
                                type="text"
                                placeholder="Enter no. of operators"
                            />
                        </div>

                        <div className="ms-2">
                            <Button
                                className="submit_switch btn btn-primary"
                            >
                                Submit
                            </Button>
                        </div>
                        <div className="ms-2">
                            <Button className="manpower_reset" variant="secondary" size="sm" disabled>
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
                                <PerfectScrollbar>
                                    <div className="manpower_list">
                                        <Container>
                                            <Row>
                                                <Col xs={3} md={2}>
                                                    <div className="manpower_items">
                                                        <div className="manpower_image d-flex">
                                                            <img src={User} alt="" />
                                                            <h3>1</h3>
                                                        </div>
                                                        <p>Tailor</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </PerfectScrollbar>
                                <div className="manpower_plus d-flex">
                                    <img src={Vector5} alt="" />
                                    <p>  Add More </p>
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
                    <div className="bottom_text d-flex justify-content-center">
                        <img src={BottomIcon} alt="" />
                        <h6>You can view the manpower resources grade wise</h6>
                    </div>
                </div>
            </div>
        );
    }
}


export default Manpower
