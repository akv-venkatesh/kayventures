import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import "./esg.css";
import Select from '../../../component/dropdown_select/slelect';
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import Vector3 from "../../../assets/icons/various/Vector3.svg"
import Vector5 from "../../../assets/icons/various/Vector5.svg"
import AttachBlue from "../../../assets/icons/basic/paperclip.svg"
import FileBlue from "../../../assets/icons/file/file-text.svg"
import ViewImage from "../../../assets/images/ViewImage.png"
import MapImage from "../../../assets/images/MapImage.png"
import Navigation from "../../../assets/icons/maps/pin.svg"
import Call from "../../../assets/icons/call/call-phone.svg"
import Time from "../../../assets/icons/time/time.svg"

import { RiArrowDropRightLine } from 'react-icons/ri';



interface typeState {
    enviromentalChange: boolean,
    initialPage: boolean,
    socialChange: boolean,
    GovernanceChange: boolean,

}

class Esg extends Component<{}, typeState> {

    constructor(props: any) {
        super(props);
        this.state = {
            initialPage: true,
            enviromentalChange: false,
            socialChange: false,
            GovernanceChange: false,
        }

    }

    handleEnviromentalChange = () => {
        this.setState({
            initialPage: false,
            enviromentalChange: true,
            socialChange: false,
            GovernanceChange: false,
        });
    }
    handleSocialChange = () => {
        this.setState({
            initialPage: false,
            socialChange: true,
            enviromentalChange: false,
            GovernanceChange: false,
        });
    }
    handleGovernanceChange = () => {
        this.setState({
            initialPage: false,
            GovernanceChange: true,
            socialChange: false,
            enviromentalChange: false,
        });
    }

    render() {
        const certificates = [
            { value: 'EMAS', label: 'EMAS' },
            { value: 'Nordic Swan', label: 'Nordic Swan' },
            { value: 'EU Flower', label: 'EU Flower' },
            { value: 'REACH', label: 'REACH' }
        ]
        const cerifiedby = [
            { value: 'SSG', label: 'SSG' },
            { value: 'TUV Rheinland', label: 'TUV Rheinland' },
            { value: 'Intertek', label: 'Intertek' },
            { value: 'Control Union', label: 'Control Union' },
            { value: 'DNV', label: 'DNV' },
            { value: 'Textile Committee', label: 'Textile Committee' },
            { value: 'GOTS', label: 'GOTS' }
        ]
        const social = [
            { value: 'SA 8000', label: 'SA 8000' },
            { value: 'OHSAS / 8001', label: 'OHSAS / 8001' },
            { value: 'Fair Trade', label: 'Fair Trade' },
            { value: 'Wrap Union', label: 'Wrap' }
        ]
        const Governance = [
            { value: 'PE, ESI', label: 'PE, ESI' },
            { value: 'AA 1000', label: 'AA 1000' },
            { value: 'Siatutari', label: 'Siatutari' },
            { value: 'Licences', label: 'Licences' }
        ]

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
                                <Button href="#" variant="light" size="lg" onClick={this.handleEnviromentalChange} >
                                    Environmental
                                </Button>
                                <Button href="#" variant="light" size="lg" onClick={this.handleSocialChange} >
                                    Social
                                </Button>
                                <Button href="#" variant="light" size="lg" onClick={this.handleGovernanceChange}>
                                    Governance
                                </Button>
                            </div>
                            {this.state.initialPage ?
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
                                </div> : null}
                            {/* Initial Page */}

                            {this.state.enviromentalChange ?
                                <PerfectScrollbar>
                                    <div className="d-flex justify-content-center mt-5">
                                        <div className="left_column d-flex flex-column">
                                            <h4 className="mb-4">Attach your certificates</h4>
                                            <div className="mb-3">
                                                <form data-testid="environmental">
                                                    <label htmlFor="select-environmental" hidden>Select Certificate</label>
                                                    <Select
                                                        name="environmental"
                                                        inputId="select-environmental"
                                                        options={certificates}
                                                        width='300px'
                                                        position='bottom'
                                                        placeholder='Select Certificate'
                                                        onChange={() => { }}></Select>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="right_column d-flex flex-column">
                                            <div className="input_file d-flex mb-5">
                                                <Form.Control
                                                    type="file"
                                                    placeholder="Attach your certificate here"

                                                />
                                                <img src={AttachBlue} alt="" />
                                                <img src={FileBlue} alt="" />
                                            </div>
                                            <div className="input_multifile d-flex mb-3">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Certificate No."

                                                />
                                                <Form.Control
                                                    type="date"
                                                    placeholder="Valid Till"

                                                />
                                                <form data-testid="CerifiedBy">
                                                    <label htmlFor="select-cerifiedby" hidden>Cerified by</label>
                                                    <Select
                                                        name="CerifiedBy"
                                                        inputId="select-cerifiedby"
                                                        options={cerifiedby}
                                                        width='30%'
                                                        position='bottom'
                                                        placeholder='Cerified by'
                                                        onChange={() => { }}></Select>
                                                </form>
                                            </div>
                                            <div className="plusIcon d-flex">
                                                <img src={Vector5} className="image_one" alt="" />
                                                <p>  Add</p>
                                            </div>
                                            <div className="bottom_switch w-50">
                                                <button
                                                    type="button"
                                                    className="btn btn-default mx-4 remove"

                                                >
                                                    Remove
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-default mx-4 save"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </PerfectScrollbar> : null}
                            {/* enviromental Page */}

                            {this.state.socialChange ?
                                <PerfectScrollbar>
                                    <div className="d-flex justify-content-center mt-5">
                                        <div className="left_column d-flex flex-column">
                                            <h4 className="mb-4">Attach your certificates</h4>
                                            <div className="mb-3">
                                                <form data-testid="social">
                                                    <label htmlFor="select-social" hidden>Select Certificate</label>
                                                    <Select
                                                        name="social"
                                                        inputId="select-social"
                                                        options={social}
                                                        width='300px'
                                                        position='bottom'
                                                        placeholder='Select Certificate'
                                                        onChange={() => { }}></Select>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="right_column d-flex flex-column">
                                            <div className="input_file d-flex mb-5">
                                                <Form.Control
                                                    type="file"
                                                    placeholder="Attach your certificate here"

                                                />
                                                <img src={AttachBlue} alt="" />
                                                <img src={FileBlue} alt="" />
                                            </div>
                                            <div className="input_multifile d-flex mb-3">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Certificate No."

                                                />
                                                <Form.Control
                                                    type="date"
                                                    placeholder="Valid Till"

                                                />
                                                <Select options={cerifiedby} width='30%' position='bottom' placeholder='Cerified by' onChange={() => { }}></Select>
                                            </div>
                                            <div className="plusIcon d-flex">
                                                <img src={Vector5} className="image_one" alt="" />
                                                <p>  Add</p>
                                            </div>
                                            <div className="bottom_switch w-50">
                                                <button
                                                    type="button"
                                                    className="btn btn-default mx-4 remove"

                                                >
                                                    Remove
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-default mx-4 save"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </PerfectScrollbar> : null}
                            {/* Social Page */}

                            {this.state.GovernanceChange ?
                                <PerfectScrollbar>
                                    <div className="d-flex justify-content-center mt-5">
                                        <div className="left_column d-flex flex-column">
                                            <h4 className="mb-4">Attach your certificates</h4>
                                            <div className="mb-3">
                                                <form data-testid="governance">
                                                    <label htmlFor="select-governance" hidden>Select Certificate</label>
                                                    <Select
                                                        name="governance"
                                                        inputId="select-governance"
                                                        options={Governance}
                                                        width='300px'
                                                        position='bottom'
                                                        placeholder='Select Certificate'
                                                        onChange={() => { }}></Select>
                                                </form>

                                            </div>
                                        </div>
                                        <div className="right_column d-flex flex-column">
                                            <div className="input_file d-flex mb-5">
                                                <Form.Control
                                                    type="file"
                                                    placeholder="Attach your certificate here"

                                                />
                                                <img src={AttachBlue} alt="" />
                                                <img src={FileBlue} alt="" />
                                            </div>
                                            <div className="input_multifile d-flex mb-3">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Certificate No."

                                                />
                                                <Form.Control
                                                    type="date"
                                                    placeholder="Valid Till"

                                                />
                                                <Select options={cerifiedby} width='30%' position='bottom' placeholder='Cerified by' onChange={() => { }}></Select>
                                            </div>
                                            <div className="plusIcon d-flex">
                                                <img src={Vector5} className="image_one" alt="" />
                                                <p>  Add</p>
                                            </div>
                                            <div className="bottom_switch w-50">
                                                <button
                                                    type="button"
                                                    className="btn btn-default mx-4 remove"

                                                >
                                                    Remove
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-default mx-4 save"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </PerfectScrollbar> : null}
                            {/* Governance Page */}
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
        );
    }
}

export default Esg
