import React, { Component, ChangeEvent, FormEvent, FormEventHandler } from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import MachineIcon from "../../../../../assets/icons/various/MachineIcon.svg"
import PerfectScrollbar from "react-perfect-scrollbar";
import { RiArrowDropRightLine, RiInformationFill } from 'react-icons/ri';
import "react-perfect-scrollbar/dist/css/styles.css";
import Select from '../../../../../component/dropdown_select/slelect';
import { AiFillCaretRight, AiFillExclamationCircle, AiOutlinePlus } from 'react-icons/ai';
import Stepper from '../../../../../component/stepper/stepper';
import SelectCategory from '../../commonFiles/selectCategory';
import { Navigate } from 'react-router-dom';

interface typeState {
    manufacturingActivity: any,
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
    previewState: any,
    HomePage: boolean;
    origState: any,
    machineFilter: any,
    brandFilter: any,
    techFilter: any,
    iotFilter: any,
    filter: any,
    firstComponent: boolean,
    finish: boolean,
}
interface typeProps {
    machineProps: any
}

class Machinery extends Component<typeProps, typeState> {

    constructor(props: any) {
        super(props);
        this.state = {
            manufacturingActivity: '',
            initialPage: true,
            HomePage: true,
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
            machineCount: '',
            iotEnable: false,
            toogleCheck: false,
            previewState: [],
            machineFilter: '',
            brandFilter: '',
            techFilter: '',
            iotFilter: '',
            firstComponent: false,
            savedState: [{
                machineType: null,
                machineBrand: null,
                machineTech: null,
                machineCount: null,
                iotEnable: null,
                savedState: false,
            }],
            origState: [],
            filter: [],
            finish: false,
        }
    }

    handleSummary = () => {
        this.setState({
            showSummary: true,
        });
    }
    hideSummary = () => {
        this.setState({
            showSummary: false,
            machineFilter: '',
            brandFilter: '',
            techFilter: '',
            iotFilter: '',
            previewState: this.state.origState,
        })
    }
    activeSubmit = () => {
        const activeState = this.state.origState;
        if (activeState['machineType'] !== null &&
            activeState['machineBrand'] !== null &&
            activeState['machineTech'] !== null &&
            activeState['iotEnable'] !== null &&
            activeState['machineCount'] !== null) {
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
            firstComponent: true,
            savedState: machineValue,
            selectedMachineOption: value.value,

        }, () => {
            console.log(this.state.savedState);
            console.log(this.state.firstComponent);
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
            console.log(this.state.savedState);
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
            console.log(this.state.savedState);
        })
    }
    changeMachineCount = (e: any) => {
        const re = /^[0-9\b]+$/;
        if (e.currentTarget.value === '' || re.test(e.currentTarget.value)) {
            this.setState({ machineCount: e.currentTarget.value })
        }

        if (e.currentTarget.value || e.currentTarget.value === "") {
            let countValue = [...this.state.savedState];
            countValue[this.state.machineKey] = { ...countValue[this.state.machineKey], machineCount: e.currentTarget.value };
            this.setState({
                savedState: countValue,
                machineCount: e.currentTarget.value
            }, () => {
                console.log(this.state.savedState);
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
            console.log(this.state.savedState);
        })
    }
    handleSavedMachine = (e: any) => {
        let obj = [{
            machineType: null,
            machineBrand: null,
            machineTech: null,
            machineCount: null,
            iotEnable: null,
            savedState: false,
        }];

        let object = this.state.savedState[0];
        let arr = this.state.origState;

        arr.push(object);
        this.setState({
            origState: arr,
            savedState: obj,
            toogleCheck: false,
            iotEnable: false,
            addMoreEnable: true,
            selectedMachineOption: null,
            selectedBrandOption: null,
            selectedTechOption: null,
            machineCount: '',
            previewState: this.state.origState,
        }, () => {
            console.log("origState =>", this.state.origState);
            console.log("savedState =>", this.state.savedState);
            console.log("previewState =>", this.state.previewState);
        })
    }
    handleAddMore = () => {
        this.setState({
            showMachine: true,
        })
    }

    modelFilter: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        var filterValue = this.state.origState.filter((data: any) => {
            return (
                data.machineType == this.state.machineFilter &&
                data.machineBrand == this.state.brandFilter &&
                data.machineTech == this.state.techFilter &&
                data.iotEnable == this.state.iotFilter
            );
        })
        // machineType: this.state.machineFilter,
        // machineBrand: this.state.brandFilter,
        // machineTech: this.state.techFilter,
        // iotEnable: this.state.iotFilter,


        // console.log(this.state.filter)
        // let filter = this.state.filter[0];
        // var filterValue = this.state.origState.filter(function (item: any) {
        //     for (let key in filter) {
        //         if (item[key] === undefined || item[key] === '' || item[key] != filter[key])
        //             return false;
        //     }
        //     return true;
        // });
        this.setState({
            previewState: filterValue,
        })
    }
    modelMachineFilter = (event: any) => {
        // debugger;
        // let value: any = event.value;
        // console.log(value);
        // var filterValue = this.state.origState.filter((data: any) => {
        //     return data.machineType == value;
        // })
        // console.log("filterValue=>", filterValue);
        let obj = { machineType: event.value }
        // let arr = this.state.filter[0];
        let arr = this.state.filter;
        // arr[this.state.machineType] = event.value;
        arr.push(obj);
        this.setState({
            machineFilter: event.value,
            filter: arr,
        }, () => {
            console.log("machineFilter =>", this.state.machineFilter);
        })
    }
    modelBrandFilter = (event: any) => {
        // let value: any = event.value;
        // console.log(value);
        // // var filterValue = this.state.origState.filter((data: any) => {
        // //     return data.machineBrand == value;
        // // })
        // // console.log("filterValue=>", filterValue);
        let obj = { machineBrand: event.value }
        let arr = this.state.filter;
        arr.push(obj);
        this.setState({
            brandFilter: event.value,
            filter: arr,
        }, () => {
            console.log("brandFilter =>", this.state.brandFilter);
        })
    }
    modelTechnologyFilter = (event: any) => {
        // let value: any = event.value;
        // console.log(value);
        // // var filterValue = this.state.origState.filter((data: any) => {
        // //     return data.machineTech == value;
        // // })
        // // console.log("filterValue=>", filterValue);
        let obj = { machineTech: event.value }
        let arr = this.state.filter;
        arr.push(obj);
        this.setState({
            techFilter: event.value,
            filter: arr,
        }, () => {
            console.log("techFilter =>", this.state.techFilter);
        })
    }
    modelIotFilter = (event: any) => {

        let obj = { iotEnable: event.value }
        let arr = this.state.filter;
        arr.push(obj);
        this.setState({
            iotFilter: event.value == "Enable" ? true : false,
            filter: arr,
        }, () => {
            console.log("iotFilter =>", this.state.iotFilter);
        })
    }


    changeMachineryStart = (e: any): any => {
        this.setState({
            HomePage: false,
            manufacturingActivity: e,
        })
    }
    complete = () =>{
        this.setState({
            finish : true,
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
            { value: 'Semi Automated', label: 'Semi Automated' },
            { value: 'Fully Automated', label: 'Fully Automated' }
        ]
        const iot = [
            { value: 'Enable', label: 'Enable' },
            { value: 'Disable', label: 'Disable' }
        ]
        const step = [{ label: 'KYC', id: 0 }, { label: 'Product Selection', id: 1 }, { label: 'Machinery', id: 2 }, { label: 'Operations', id: 3 }];

        if(this.state.finish){
            return <Navigate to = "/settings/kyc/organization/operation" />
        }

        return (
            <>
            {
                this.state.HomePage ?
                    <SelectCategory onClick={(e) => this.changeMachineryStart(e)} /> :
                    <div className="h-100 kyc-org-machinery">
                        <div className="h-100">
                            <div className="machine main d-flex h-100">
                                <div className="leftmenu d-flex flex-column h-100">
                                    <div className=" leftmenu_header d-flex flex-column">
                                        <h4>{this.state.manufacturingActivity}</h4>
                                        <div className="plusIcon d-flex mb-2">
                                            <button style={{ border: 'none' }} onClick={this.handleAddMore} >
                                                <AiOutlinePlus />
                                            </button>
                                            <p>Add Product Category</p>
                                        </div>
                                    </div>
                                    <div className="leftmenu_body d-flex flex-column">
                                        <PerfectScrollbar >
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
                                                    <p className="me-3">IOT</p>
                                                    <Form.Check
                                                        type="switch"
                                                        data-testid="custom-element"
                                                        onChange={(e) => this.handletoggle_checkbox(e)}
                                                        checked={this.state.iotEnable}
                                                    />
                                                    {this.state.iotEnable ?
                                                        <p className="ms-3">Enabled</p> : <p className="ms-3">Disabled</p>}

                                                </div>
                                                <h5 className="menu_machine_numbers mb-4">Add the No. of machines</h5>
                                                <div className="machine_input mb-3">
                                                    <Form.Control
                                                        type="number"
                                                        placeholder="0"
                                                        onChange={this.changeMachineCount}
                                                        value={this.state.machineCount}
                                                    />
                                                </div>

                                                <div className="my-3">
                                                    <Button
                                                        className="btn btn-secondary submit"
                                                        disabled={!this.state.selectedMachineOption ||
                                                            !this.state.selectedBrandOption ||
                                                            !this.state.selectedTechOption ||
                                                            !this.state.machineCount}
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
                                    <Stepper steps={step} activeStep={2} />
                                    <div className="box py-2 mt-2 position-relative">
                                        <div className="d-flex mt-4 px-5 justify-content-end">
                                            <div className="summary">
                                                <Button className="btn btn-secondary" disabled={!this.state.addMoreEnable} onClick={this.handleSummary} data-testid="mySummary">
                                                    Summary
                                                    <RiArrowDropRightLine />
                                                </Button>
                                            </div>
                                        </div>
                                        <div className={this.state.initialPage ? 'scroll d-flex justify-content-center align-items-center' : 'scroll'}>
                                            {
                                                this.state.initialPage ?
                                                    <div className="initialpage_text d-flex flex-column align-items-center">
                                                        <p>Click on the machine type to create</p>
                                                        <p>the machine inventory</p>
                                                    </div> : <></>
                                            }
                                            <PerfectScrollbar >
                                                <div className="d-flex flex-wrap pe-4">
                                                    <Container>
                                                        <Row>{
                                                            this.state.origState.map((machine: any) => {
                                                                return (<Col xs={3} md={12} className="column d-flex" >
                                                                    <div className="machine_items" data-testid="selected_element">
                                                                        <div className="machine_image d-flex">
                                                                            <img src={MachineIcon} alt="" />
                                                                            <h3>{machine.machineCount || 0}</h3>
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
                                        </div>
                                        <div className="bottom_text d-flex justify-content-end px-5">
                                            {this.state.addMoreEnable ?
                                                <div className="exclamination mx-3">
                                                    <AiFillExclamationCircle />
                                                </div> : null}
                                            <div className="d-flex">
                                                <button
                                                    type="submit"
                                                    className="btn btn-next next"
                                                    disabled={!this.state.addMoreEnable}
                                                    onClick={this.complete}
                                                >Next&emsp;<AiFillCaretRight />
                                                </button>
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

                                            >
                                                <div className="my-4 mx-3">
                                                    <div className="d-flex">
                                                        <div className="model_leftmenu d-flex flex-column">
                                                            <div className="mb-3">
                                                                <div className="mb-3">
                                                                    <form data-testid="machineTypeFilter" onSubmit={this.modelFilter}>
                                                                        <div>
                                                                            <div className="mb-3">
                                                                                <label htmlFor="filter-machine" hidden>Select Machine</label>
                                                                                <Select
                                                                                    name="machinetypefilter"
                                                                                    inputId="filter-machine"
                                                                                    options={machine}
                                                                                    width='auto'
                                                                                    position='bottom'
                                                                                    placeholder='Select Machine'
                                                                                    onChange={(event) => this.modelMachineFilter(event)}
                                                                                ></Select>
                                                                            </div>
                                                                            <div className="mb-3">
                                                                                <label htmlFor="filter-brand" hidden>Select Brand</label>
                                                                                <Select
                                                                                    name="brandtypeFilter"
                                                                                    inputId="filter-brand"
                                                                                    options={brand}
                                                                                    width='auto'
                                                                                    position='bottom'
                                                                                    placeholder='Select Brand'
                                                                                    onChange={(event) => this.modelBrandFilter(event)}
                                                                                ></Select>
                                                                            </div>
                                                                            <div className="mb-3">
                                                                                <label htmlFor="filter-tech" hidden>Select Technology</label>
                                                                                <Select
                                                                                    name="techtypefilter"
                                                                                    inputId="filter-tech"
                                                                                    options={technology}
                                                                                    width='auto'
                                                                                    position='bottom'
                                                                                    placeholder='Select Technology'
                                                                                    onChange={(event) => this.modelTechnologyFilter(event)}
                                                                                ></Select>
                                                                            </div>
                                                                            <div className="mb-3">
                                                                                <label htmlFor="filter-iot" hidden>IOT</label>
                                                                                <Select
                                                                                    name="iottypefilter"
                                                                                    inputId="filter-iot"
                                                                                    options={iot}
                                                                                    width='auto'
                                                                                    position='bottom'
                                                                                    placeholder='IOT'
                                                                                    onChange={(event) => this.modelIotFilter(event)}
                                                                                ></Select>
                                                                            </div>
                                                                            <div className="my-3">
                                                                                <Button
                                                                                    className="btn btn-secondary submit"
                                                                                    type="submit"
                                                                                    disabled={!this.state.machineFilter || !this.state.brandFilter || !this.state.techFilter}
                                                                                >
                                                                                    Submit
                                                                                </Button>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="model_rightmenu d-flex flex-column">
                                                            <div className="scroll pb-3">
                                                                <PerfectScrollbar>
                                                                    <div className="d-flex flex-wrap pe-4">
                                                                        <Container>
                                                                            <div className="d-flex flex-wrap">
                                                                                {
                                                                                    this.state.previewState.map((machine: any) => {
                                                                                        return machine.machineType !== null && (
                                                                                            <div className="column d-flex" >
                                                                                                <div className="machine_items">
                                                                                                    <div className="machine_image d-flex">
                                                                                                        <img src={MachineIcon} alt="" />
                                                                                                        <h3>{machine.machineCount}</h3>
                                                                                                    </div>
                                                                                                    <p>{machine.machineType}</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </div>
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

                        </div>
                    </div>
            }
            </>
        );
    }
}


export default Machinery;

