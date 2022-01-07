import React, { Component } from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import "./machine.css";

import Vector3 from "../../../../assets/icons/various/Vector3.svg"
import MachineIcon from "../../../../assets/icons/various/MachineIcon.svg"
import BottomIcon from "../../../../assets/icons/various/BottomIcon.svg"
import Vector5 from "../../../../assets/icons/various/Vector5.svg"

import PerfectScrollbar from "react-perfect-scrollbar";
import { RiArrowDropRightLine, RiInformationFill } from 'react-icons/ri';
import "react-perfect-scrollbar/dist/css/styles.css";
import Select from '../../../../component/dropdown_select/slelect';
import MachineTypes from './MachineTypes';
import { AiFillCaretRight } from 'react-icons/ai';



interface typeState {
    showSummary: boolean,
    showMachine: boolean,
    addMoreEnable: boolean,
    machineType: any,
    brandType: any,
    typeTech: any,
    machineCount: any,
    machineOptions: any,
    savedState: any,
}
interface typeProps {

}

class Machine extends Component<typeProps, typeState> {

    constructor(props: any) {
        super(props);
        this.state = {
            showSummary: false,
            showMachine: false,
            addMoreEnable: false,
            machineType: [],
            brandType: '',
            typeTech: '',
            machineCount: 0,
            machineOptions: [
                {
                    name: 'selectMachine',
                    machine: [
                        {
                            name: 'Single Needle'
                        },
                        {
                            name: 'Double Needle'
                        },
                        {
                            name: 'Thread Over Look'
                        }
                    ]
                },
                {
                    name: 'selectBrand',
                    barnd: [
                        {
                            name: 'Juki'
                        },
                        {
                            name: 'Pfaff'
                        },
                        {
                            name: 'Brother'
                        }
                    ]
                },
                {
                    name: 'selecttech',
                    technology: [
                        {
                            name: 'Basic'
                        },
                        {
                            name: 'Process Automated'
                        },
                        {
                            name: 'Computerized'
                        }
                    ]
                },
            ],

            savedState: [],
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
    selectMachine = (event: any) => {
        let value: any = event;
        this.setState({
            showMachine: true,
            machineType: value.value,
        }, () => {
            console.log(value)
        })
        // this.setState(prevState => ({
        //     machineType: [
        //         this.state.machineType,
        //         {
        //             name: value.value
        //         }
        //     ]
        // }))
    }
    selectBrand = (event: any) => {
        let value: any = event;
        this.setState({
            brandType: value.value,
        }, () => {
            console.log(value)
        })
    }
    selectTech = (event: any) => {
        let value: any = event;
        this.setState({
            typeTech: value.value,
        })
    }
    changeMachineCount = (e: any) => {
        if (e.currentTarget.value || e.currentTarget.value === "") {
            this.setState({
                machineCount: e.currentTarget.value
            })
        }
    }

    handleSavedMachine = (e: any) => {
        let obj = {
            data: [{
                machineType: this.state.machineType,
                machineBrand: this.state.brandType,
                machineTech: this.state.typeTech,
                machineCount: this.state.machineCount
            }]
        };
        let arr = this.state.savedState;
        arr.push(obj);
        this.setState({
            addMoreEnable: true,
            savedState: arr,
        }, () => {
            console.log(this.state.savedState);
        })

        // this.setState(prevState => {
        //     const state = this.state;
        //     if (!state) return;
        //     const arr = newFields.split(",");
        //     const machine = map(arr, value => ({ value: value, label: value }));

        //     return {
        //         newFields: "",
        //         Fields: [
        //             ...this.state.machine,
        //             {
        //                 name: `Field${this.state.machine.length}`,
        //                 machine
        //             }
        //         ]
        //     };
        // })
    }
    handleAddMore = () => {
        this.setState({
            showMachine: true,
        })
    }


    render() {
        const { machineOptions } = this.state;
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
                    <h4 className="mb-4">Sewing</h4>
                    <h5 >Machine Type</h5>
                    <div className="menu_dropdown mb-3">
                        <div className="mb-3">
                            <form data-testid="machineType">
                                <label htmlFor="select-machine" hidden>select Machine</label>
                                <Select
                                    name="machinetype"
                                    inputId="select-machine"
                                    options={machine}
                                    width='300px'
                                    position='bottom'
                                    placeholder='Select Machine'
                                    onChange={this.selectMachine}
                                ></Select>
                            </form>
                        </div>
                        <div className="mb-3">
                            <form data-testid="machineBrand" >
                                <label htmlFor="select-brand" hidden>select Brand</label>
                                <Select
                                    name="machinebrand"
                                    inputId="select-brand"
                                    options={brand}
                                    width='300px'
                                    position='bottom'
                                    placeholder='Select Brand'
                                    onChange={this.selectBrand}
                                ></Select>
                            </form>

                        </div>
                        <div className="mb-3">
                            <form data-testid="machineTech" >
                                <label htmlFor="select-tech" hidden>select Technology</label>
                                <Select
                                    name="machinetech"
                                    inputId="select-tech"
                                    options={technology}
                                    width='300px'
                                    position='bottom'
                                    placeholder='Select Technology'
                                    onChange={this.selectTech}
                                ></Select>
                            </form>

                        </div>
                    </div>

                    <h5 className="menu_machine_numbers">Add the No. of machines</h5>
                    <div className="mb-3">
                        <div className="machine_input mb-3">
                            <Form.Control
                                type="text"
                                placeholder="0"
                                onChange={this.changeMachineCount}
                            />
                        </div>

                        <div className="iot_switch d-flex mt-4 mb-4">
                            <p className="mr-5">IOT</p>
                            <Form.Check
                                type="switch"
                                data-testid="custom-element"
                            />
                            <p className="ml-5">Enabled</p>
                        </div>

                        <div className="ms-2 mb-3">
                            <Button
                                className="btn btn-secondary submit"
                                disabled={!this.state.machineCount}
                                onClick={this.handleSavedMachine}
                            >
                                Submit
                            </Button>
                        </div>

                        <div className="">
                            <div className="plusIcon d-flex">
                                <button style={{ border: 'none' }} onClick={this.handleAddMore} >
                                    <img src={Vector5} className="image_one" alt="" />
                                </button>
                                <p>  Add More </p>
                            </div>
                            {/* <Button
                                className="btn btn-secondary reset_switch btn btn-primary"
                                disabled={!this.state.brandType}

                            >
                                Reset
                            </Button> */}
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
                    <div className="box py-5 mt-2 position-relative">
                        <div className="scroll pb-3">
                            <PerfectScrollbar>
                                {this.state.showMachine ?
                                    <div className="d-flex flex-wrap pe-4">
                                        <Container>
                                            <Row>
                                                <MachineTypes
                                                    machineTypeProps={this.state.machineType}
                                                    machineBrandProps={this.state.brandType}
                                                    machineTechProps={this.state.typeTech}
                                                    machineCountProps={this.state.machineCount}
                                                />
                                                {
                                                    this.state.addMoreEnable ?
                                                        <div className="plusIcon d-flex">
                                                            <button style={{ border: 'none' }} onClick={this.handleAddMore} >
                                                                <img src={Vector5} className="image_one" alt="" />
                                                            </button>
                                                            <p>  Add More </p>
                                                        </div> : null
                                                }
                                            </Row>
                                        </Container>
                                    </div> : null}
                            </PerfectScrollbar>
                            <div className="bottom_text d-flex justify-content-center position-absolute">
                                <img src={BottomIcon} alt="" />
                                <h6>Add machinary information to view the summary.</h6>
                                <button
                                    type="submit"
                                    className="btn btn-next next"
                                    disabled
                                >Next&emsp;<AiFillCaretRight />
                                </button>
                            </div>

                        </div>
                        <div className="summary">
                            <Button href="#" disabled={!this.state.machineCount} size="sm" onClick={this.handleSummary} data-testid="mySummary">
                                Summary
                                <RiArrowDropRightLine />
                            </Button>
                        </div>
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
                    data-testid="someElemInMyModal"
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

                            <PerfectScrollbar
                                options={{ suppressScrollY: false, suppressScrollX: true }}
                                onScrollY={(container) =>
                                    console.log(`scrolled to: ${container.scrollTop}.`)
                                }
                            >
                                <div className="my-4 mx-3">
                                    <div className="d-flex">
                                        <div className="model_leftmenu d-flex flex-column">
                                            <div className="mb-3">
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
                                        <div className="model_rightmenu d-flex flex-column">
                                            <div className="scroll pb-3">
                                                <PerfectScrollbar>
                                                    <div className="d-flex flex-wrap pe-4">
                                                        <Container>
                                                            <Row>
                                                                <Col xs={3} md={12} className="column d-flex w-100" >
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
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}


export default Machine;

