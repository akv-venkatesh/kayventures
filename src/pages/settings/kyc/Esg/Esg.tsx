import React, { Component } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import "./esg.css";
import Select from '../../../../component/dropdown_select/slelect';
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import Vector3 from "../../../../assets/icons/various/Vector3.svg"
import Vector5 from "../../../../assets/icons/various/Vector5.svg"
import AttachBlue from "../../../../assets/icons/basic/paperclip.svg"
import FileBlue from "../../../../assets/icons/file/file-text.svg"

import { RiArrowDropRightLine, RiInformationFill } from 'react-icons/ri';
import DatePicker from '../../../../component/calendar/calendar';
import { ImAttachment, ImFileText2 } from 'react-icons/im';
import { FaRegFileAlt } from 'react-icons/fa';




interface typeState {
    enviromentalChange: boolean,
    initialPage: boolean,
    socialChange: boolean,
    GovernanceChange: boolean,
    showSummary: boolean,

}

class Esg extends Component<{}, typeState> {

    constructor(props: any) {
        super(props);
        this.state = {
            initialPage: true,
            enviromentalChange: false,
            socialChange: false,
            GovernanceChange: false,
            showSummary: false,
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

        const datePicker = (e: Date): any => {
        }

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
                                <div className="position-relative">
                                    <Button href="#" variant="light" size="lg" onClick={this.handleEnviromentalChange} >
                                        Environmental
                                    </Button><span className="circle">1</span>
                                </div>
                                <div className="position-relative">
                                    <Button href="#" variant="light" size="lg" onClick={this.handleSocialChange} >
                                        Social
                                    </Button><span className="circle">1</span>
                                </div>
                                <div className="position-relative">
                                    <Button href="#" variant="light" size="lg" onClick={this.handleGovernanceChange}>
                                        Governance
                                    </Button><span className="circle">1</span>
                                </div>
                            </div>
                            {this.state.initialPage ?
                                <div className="box_content d-flex justify-content-center">
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <p>Click on the above buttons to add the</p><p> ESG Certificates.</p>
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
                                                <div className="position-relative file-upload">
                                                    <label htmlFor="registration-certificate" className="label-file" id="file-chosen"></label>
                                                    <label htmlFor="registration-certificate" className="fileupload_inner">Attach your certificate here</label>
                                                    <input aria-label="registration_certificate" type="file" id="registration-certificate" name="registration_certificate" placeholder="Attach your files here" hidden />
                                                    <label htmlFor="registration_certificate-file"><ImAttachment /><FaRegFileAlt /></label>
                                                </div>
                                            </div>
                                            <div className="input_multifile d-flex mb-3">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Certificate No."

                                                />
                                                <DatePicker onChange={(e) => datePicker(e)} />
                                                <form data-testid="CerifiedBy">
                                                    <label htmlFor="select-cerifiedby" hidden>Cerified by</label>
                                                    <Select
                                                        name="CerifiedBy"
                                                        inputId="select-cerifiedby"
                                                        options={cerifiedby}
                                                        width='133%'
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
                                                <div className="position-relative file-upload">
                                                    <label htmlFor="registration-certificate" className="label-file" id="file-chosen"></label>
                                                    <label htmlFor="registration-certificate" className="fileupload_inner">Attach your certificate here</label>
                                                    <input aria-label="registration_certificate" type="file" id="registration-certificate" name="registration_certificate" placeholder="Attach your files here" hidden />
                                                    <label htmlFor="registration_certificate-file"><ImAttachment /><FaRegFileAlt /></label>
                                                </div>
                                            </div>
                                            <div className="input_multifile d-flex mb-3">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Certificate No."

                                                />
                                                <DatePicker onChange={(e) => datePicker(e)} />
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
                                                <div className="position-relative file-upload">
                                                    <label htmlFor="registration-certificate" className="label-file" id="file-chosen"></label>
                                                    <label htmlFor="registration-certificate" className="fileupload_inner">Attach your certificate here</label>
                                                    <input aria-label="registration_certificate" type="file" id="registration-certificate" name="registration_certificate" placeholder="Attach your files here" hidden />
                                                    <label htmlFor="registration_certificate-file"><ImAttachment /><FaRegFileAlt /></label>
                                                </div>
                                            </div>
                                            <div className="input_multifile d-flex mb-3">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Certificate No."

                                                />
                                                <DatePicker onChange={(e) => datePicker(e)} />
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
                    <div className="d-flex">
                        <div className="summary">
                            <Button href="#" size="sm" onClick={this.handleSummary} data-testid="mySummary">
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
                    className="esg"
                    backdropClassName="esg"
                    onHide={this.hideSummary}
                    data-testid="someElemInMyModal"
                >
                    <Modal.Header closeButton />
                    <Modal.Body className="">
                        <PerfectScrollbar>


                            <div className="esg_model_body d-flex flex-column justify-content-center" >
                                <div className="mb-4">
                                    <h4 className="header mb-4">
                                        Environmental
                                    </h4>
                                    <Row>
                                        <Col>
                                            <div className="d-flex flex-column align-items-center">
                                                <ImFileText2 />
                                                <p>EMAS</p>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="d-flex flex-column align-items-center">
                                                <ImFileText2 />
                                                <p>Nordic Swan</p>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="d-flex flex-column align-items-center">
                                                <ImFileText2 />
                                                <p>EU Flower</p>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="d-flex flex-column align-items-center">
                                                <ImFileText2 />
                                                <p>REACH</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="mb-4">
                                    <h4 className="header mb-4">
                                        Social
                                    </h4>
                                    <Row>
                                        <Col>
                                            <div className="d-flex flex-column align-items-center">
                                                <ImFileText2 />
                                                <p>EMAS</p>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="d-flex flex-column align-items-center">
                                                <ImFileText2 />
                                                <p>Nordic Swan</p>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="d-flex flex-column align-items-center">
                                                <ImFileText2 />
                                                <p>EU Flower</p>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="d-flex flex-column align-items-center">
                                                <ImFileText2 />
                                                <p>REACH</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="mb-4">
                                    <h4 className="header mb-4">
                                        Governance
                                    </h4>
                                    <Row>
                                        <Col>
                                            <div className="d-flex flex-column align-items-center">
                                                <ImFileText2 />
                                                <p>EMAS</p>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="d-flex flex-column align-items-center">
                                                <ImFileText2 />
                                                <p>Nordic Swan</p>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="d-flex flex-column align-items-center">
                                                <ImFileText2 />
                                                <p>EU Flower</p>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="d-flex flex-column align-items-center">
                                                <ImFileText2 />
                                                <p>REACH</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </PerfectScrollbar>
                    </Modal.Body>
                </Modal>
            </div >
        );
    }
}

export default Esg
