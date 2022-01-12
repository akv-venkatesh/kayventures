import React, { Component, ChangeEvent } from 'react'
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
import { AiFillCaretRight, AiFillExclamationCircle, AiOutlinePlus } from 'react-icons/ai';




interface typeState {
    initialPage: boolean,
    showSummary: boolean,
    showMachine: boolean,
    addMoreEnable: boolean,
    machineType: any,
    brandType: any,
    typeTech: any,
    machineCount: any,
    savedState: any,
    toogleCheck: boolean,
    machineKey: any,
    selectedMachineOption: any,
    selectedBrandOption: any,
    selectedTechOption: any,
    iotEnable: boolean,
}
interface typeProps {

}

class Machine extends Component<typeProps, typeState> {

    constructor(props: any) {
        super(props);
        this.state = {
            initialPage: true,
            selectedMachineOption: null,
            selectedBrandOption: null,
            selectedTechOption: null,
            machineKey: 0,
            showSummary: false,
            showMachine: false,
            addMoreEnable: false,
            machineType: [],
            brandType: '',
            typeTech: '',
            machineCount: 0,
            iotEnable: false,
            toogleCheck: false,
            savedState: [{
                machineType: null,
                machineBrand: null,
                machineTech: null,
                machineCount: null,
                iotEnable: null,
                savedState: false,
            }],
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
    activeSubmit = () => {
        const activeState = this.state.savedState[this.state.machineKey];
        if (activeState['machineType'] !== null && activeState['machineBrand'] !== null && activeState['machineTech'] !== null && activeState['iotEnable'] !== null && activeState['machineCount'] !== null) {
            return false;
        }
        else {
            return true;
        }
    }
    selectMachine = (event: ChangeEvent<HTMLInputElement>) => {
        let value: any = event;
        let machineValue = [...this.state.savedState];
        machineValue[this.state.machineKey] = { ...machineValue[this.state.machineKey], machineType: value.value };
        this.setState({
            initialPage: false,
            savedState: machineValue,
            selectedMachineOption: value.value
        }, () => {
            console.log("selectedMachineOption", this.state.selectedMachineOption);
        })
    }
    selectBrand = (event: ChangeEvent<HTMLInputElement>) => {
        let value: any = event;
        let barndValue = [...this.state.savedState];
        barndValue[this.state.machineKey] = { ...barndValue[this.state.machineKey], machineBrand: value.value };
        this.setState({
            savedState: barndValue,
            selectedBrandOption: value.value
        }, () => {
            console.log(barndValue);
        })
    }
    selectTech = (event: ChangeEvent<HTMLInputElement>) => {
        let value: any = event;
        let techValue = [...this.state.savedState];
        techValue[this.state.machineKey] = { ...techValue[this.state.machineKey], machineTech: value.value };
        this.setState({
            savedState: techValue,
            selectedTechOption: value.value
        }, () => {
            console.log(techValue);
        })
    }
    changeMachineCount = (e: any) => {
        this.setState({
            machineCount: e.currentTarget.value

        });
        if (e.currentTarget.value || e.currentTarget.value === "") {
            let countValue = [...this.state.savedState];
            countValue[this.state.machineKey] = { ...countValue[this.state.machineKey], machineCount: e.currentTarget.value };
            this.setState({
                savedState: countValue,
                machineCount: e.currentTarget.value
            }, () => {
                console.log(countValue);
            })
        }
    }
    handletoggle_checkbox = (e: any) => {
        this.setState({
            iotEnable: e.currentTarget.checked
        });
        let checkValue = [...this.state.savedState];
        checkValue[this.state.machineKey] = { ...checkValue[this.state.machineKey], iotEnable: e.currentTarget.checked };
        this.setState({
            savedState: checkValue,
            toogleCheck: true,
        }, () => {
            console.log(checkValue);
        })
    }

    handleSavedMachine = (e: any) => {
        let obj = {
            machineType: null,
            machineBrand: null,
            machineTech: null,
            machineCount: null,
            iotEnable: null,
            savedState: false,
        };
        let arr = this.state.savedState;

        const currentState = arr[this.state.machineKey];
        console.log("currentState=>", currentState);


        let machineKey = this.state.machineKey;
        console.log("MACHINEkEY=>", machineKey);
        if (currentState.machieType !== null) {
            machineKey = machineKey + 1;
            arr.push(obj);
        }
        arr[this.state.machineKey] = { ...arr[this.state.machineKey], savedState: true };
        this.setState({
            addMoreEnable: true,
            savedState: arr,
            machineKey: machineKey,
            selectedMachineOption: null,
            selectedBrandOption: null,
            selectedTechOption: null,
            toogleCheck: false,
            iotEnable: false,
            machineCount: '',
        }, () => {
            console.log(this.state.savedState);
            console.log(this.state.machineKey);
        })
    }
    handleAddMore = () => {
        this.setState({
            showMachine: true,
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
                    <div className=" leftmenu_header d-flex flex-column">
                        <h4>Sewing</h4>
                        <div className="plusIcon d-flex mb-2">
                            <button style={{ border: 'none' }} onClick={this.handleAddMore} >
                                <AiOutlinePlus />
                            </button>
                            <p>  Add Product Category </p>
                        </div>
                    </div>
                    <div className="leftmenu_body d-flex flex-column">
                        <PerfectScrollbar>
                            <h5 className="mb-3" >Machine Type</h5>
                            <div className="menu_dropdown mb-3">
                                <div className="mb-3">
                                    <form data-testid="machineType">
                                        <label htmlFor="select-machine" hidden>select Machine</label>
                                        <Select
                                            name="machinetype"
                                            inputId="select-machine"
                                            options={machine}
                                            width='250px'
                                            position='bottom'
                                            placeholder='Select Machine'
                                            onChange={(event: any) => this.selectMachine(event)}
                                            value={this.state.selectedMachineOption}
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
                                            width='250px'
                                            position='bottom'
                                            placeholder='Select Brand'
                                            onChange={(event: any) => this.selectBrand(event)}
                                            value={this.state.selectedBrandOption}
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
                                            width='250px'
                                            position='bottom'
                                            placeholder='Select Technology'
                                            onChange={(event: any) => this.selectTech(event)}
                                            value={this.state.selectedTechOption}
                                        ></Select>
                                    </form>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="iot_switch d-flex my-5">
                                    <p className="mr-5">IOT</p>
                                    <Form.Check
                                        type="switch"
                                        data-testid="custom-element"
                                        onChange={(e) => this.handletoggle_checkbox(e)}
                                        checked={this.state.iotEnable}
                                    />
                                    {this.state.iotEnable ? <p className="ml-5">Enabled</p> : <p className="ml-5">Disabled</p>}

                                </div>
                                <h5 className="menu_machine_numbers mb-4">Add the No. of machines</h5>
                                <div className="machine_input mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="0"
                                        onChange={this.changeMachineCount}
                                        value={this.state.machineCount}
                                    />
                                </div>

                                <div className="ms-2 mb-3">
                                    <Button
                                        className="btn btn-secondary submit"
                                        disabled={this.activeSubmit()}
                                        onClick={(e) => this.handleSavedMachine(e)}
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </PerfectScrollbar>
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
                                <div className="d-flex flex-wrap pe-4">
                                    <Container>
                                        <Row>
                                            {
                                                this.state.initialPage ? <div className="initialpage_text d-flex flex-column align-items-center"><p>Click on the machine type to create</p><p>the machine inventory</p></div> : null
                                            }

                                            {this.state.savedState.map((machine: any) => {
                                                return machine.machineType !== null && (<Col xs={3} md={12} className="column d-flex" >
                                                    <div className="machine_items">
                                                        <div className="machine_image d-flex">
                                                            <img src={MachineIcon} alt="" />
                                                            <h3>{machine.machineCount}</h3>
                                                        </div>
                                                        <p data-testid="testMachineType">{machine.machineType}</p>
                                                    </div>
                                                </Col>)
                                            })
                                            }

                                        </Row>
                                    </Container>
                                </div>
                            </PerfectScrollbar>
                            <div className="bottom_text d-flex position-absolute">
                                {this.state.addMoreEnable ?
                                    <div className="exclamination mx-3">
                                        <AiFillExclamationCircle />
                                    </div> : null}

                                <div className="d-flex">
                                    <button
                                        type="submit"
                                        className="btn btn-next next"
                                        disabled={!this.state.addMoreEnable}
                                    >Next&emsp;<AiFillCaretRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="summary">
                                <Button href="#" disabled={!this.state.addMoreEnable} size="sm" onClick={this.handleSummary} data-testid="mySummary">
                                    Summary
                                    <RiArrowDropRightLine />
                                </Button>
                            </div>
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
                                                                {this.state.savedState.map((machine: any) => {
                                                                    return machine.machineType !== null && (<Col xs={3} md={12} className="column d-flex" >

                                                                        <div className="machine_items">
                                                                            <div className="machine_image d-flex">
                                                                                <img src={MachineIcon} alt="" />
                                                                                <h3>{machine.machineCount}</h3>
                                                                            </div>
                                                                            <p>{machine.machineType}</p>
                                                                        </div>
                                                                        <div className="machine_items_text">
                                                                            <p>{machine.machineBrand}</p>
                                                                            <p>{machine.machineTech}</p>
                                                                        </div>
                                                                    </Col>)
                                                                })
                                                                }
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

