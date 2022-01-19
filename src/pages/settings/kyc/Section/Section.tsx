import React, { Component , FormEvent } from 'react';
import "./section.css";

import { Button, Container, Modal, Row } from 'react-bootstrap';
import { Formik } from "formik";
import slider from "../../../../assets/slider.svg"
import Stepper from '../../../../component/stepper/stepper';
import logo_img from  '../../../../assets/insertImage.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import PerfectScrollbar from "react-perfect-scrollbar";
import { RiArrowDropRightLine } from 'react-icons/ri';
import "react-perfect-scrollbar/dist/css/styles.css";
import Select from '../../../../component/dropdown_select/slelect';
import { MdArrowForwardIos } from 'react-icons/md';
import { AiOutlineClockCircle, AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineCamera, HiOutlineVideoCamera } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import Image2 from "../../../../assets/image2.svg";
import Facilityhome from './../commonFiles/facilityhome';
import { Field } from "formik";


interface typeState {
    showModel: boolean,
    showSummary: boolean,
    isActive: boolean,
    photoSection: boolean,
    savedState: any,
    step1:boolean,
    step2:boolean,
    uploadlogo:string,
	uploadedFile?: any,
}

class Section extends Component<{}, typeState> {

    constructor(props: any) {
        super(props);
        this.state = {
            showModel: true,
            showSummary: false,
            isActive: false,
            photoSection: false,
            savedState: [],
            step1:true,
            step2:true,
            uploadlogo:"",
		    uploadedFile: '',
        };
    }

    onImageChange = (event:FormEvent<HTMLInputElement>) => {
		if (event.currentTarget.files && event.currentTarget.files[0]) {
		  let reader = new FileReader();
		  reader.onload = (e) => {
				// setLogoImage(e.target!.result);
				this.setState({ uploadedFile: reader.result });
			};
		  reader.readAsDataURL(event.currentTarget.files[0]);
		}
	}

    handleShow = () => {
        this.setState({
            showModel: !this.state.showModel,
        });
    };

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
    handleOnClick = () => {
        this.setState({
            isActive: true,
        })
    }
    selectArea = (event: any) => {
        let value: any = event;
        let arr = [...this.state.savedState];
        arr.push(value);
        this.setState({
            savedState: arr,
            photoSection: true
        })
    }
    step1Complete = () =>{
        this.setState({
            step1:false,
            step2:true,
        })
    }


    render() {

        const options = [
            { value: 'Building Area', label: 'Building Area' },
            { value: 'Work Area', label: 'Work Area' },
            { value: 'Others', label: 'Others' }
        ]

        const step = [{ label: 'KYC', id: 0 }, { label: 'Product Selection', id: 1 }, { label: 'Machinery', id: 2 }, { label: 'Operations', id: 3 }];
        const { uploadedFile } = this.state;
        return (
            <>
            
            {
                this.state.step1 ?
                <Facilityhome onClick={this.step1Complete}/> :
                <div className="machine main d-flex facilitykyc1 h-100">
                    <div className="col-md-12 d-flex flex-column h-100">
                        <Stepper steps={step} activeStep={2} />
                        <div className="box py-5 mt-2">
                            <div className="scroll pb-3">
                                <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>
                                    <div className="d-flex flex-wrap pe-4 facilityform">
                                        <Container>
                                            <Row>
                                                <Formik
                                                    initialValues={{

                                                    }}
                                                    validate={(values) => {
                                                        const errors = {};

                                                        return errors;
                                                    }}
                                                    onSubmit={(values, { setSubmitting }) => {
                                                        // setTimeout(() => {
                                                        // 	alert(JSON.stringify(values, null, 2));
                                                        // $('#status-check').modal('show');
                                                        setSubmitting(false);
                                                        // }, 400);
                                                    }}
                                                >
                                                    {({
                                                        values,
                                                        errors,
                                                        touched,
                                                        handleChange,
                                                        handleBlur,
                                                        handleSubmit,
                                                        isSubmitting,
                                                    }) => (
                                                        <form onSubmit={handleSubmit} className="ps-xl-5 form-bh">
                                                            <div className="h-100 facilityform">
                                                                <div className="d-flex align-items-center justify-content-space-between">
                                                                    <h4 className="mt-4">Add Sections</h4>
                                                                </div>
                                                                <div className="row mt-3 d-flex ">
                                                                    <h3 className="col-md-3">Sections Within the Unit</h3>
                                                                    <div className="col-md-5">
                                                                        <div className="custom-select">
                                                                            <form data-testid="areaType">
                                                                                <label htmlFor="select-area" hidden>Building Area</label>
                                                                                <Select
                                                                                    name="areaType"
                                                                                    inputId="select-area"
                                                                                    options={options}
                                                                                    width='250px'
                                                                                    position='bottom'
                                                                                    placeholder='Select from options'
                                                                                    onChange={(event: any) => this.selectArea(event)}

                                                                                ></Select>
                                                                            </form>
                                                                        </div>
                                                                        <div className="option_selected m-3">
                                                                            {
                                                                                this.state.savedState.map((area: any) => {
                                                                                    return (
                                                                                        <div className="d-flex align-items-center">
                                                                                            <MdArrowForwardIos /><p className="m-0" >{area.value}</p>
                                                                                        </div>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {this.state.photoSection ?
                                                                    <div className="row mt-3 d-flex ">
                                                                        <h4 className="col-md-3">Add Photos & Videos</h4>
                                                                        <div className="col-md-5">
                                                                            <div className="btnselect">
                                                                                <div className="d-flex">
                                                                                    <Button className={this.state.isActive ? 'active_button' : 'inActive_button'} onClick={this.handleOnClick} variant="light" size="lg" >
                                                                                        Building Area
                                                                                    </Button>
                                                                                    <Button className={this.state.isActive ? 'active_button' : 'inActive_button'} onClick={this.handleOnClick} variant="light" size="lg" >
                                                                                        Work Area
                                                                                    </Button>
                                                                                </div>
                                                                                <div className="d-flex">
                                                                                    <Button className={this.state.isActive ? 'active_button' : 'inActive_button'} onClick={this.handleOnClick} variant="light" size="lg" >
                                                                                        Others
                                                                                    </Button>
                                                                                </div>
                                                                            </div>
                                                                            <div className="my-5 d-flex flex-column">
                                                                                <div className="files d-flex justify-content-evenly align-items-end">
                                                                                    <div className="d-flex justify-content-center align-items-center flex-column p-3 uploadfile_box">
                                                                                        <p className="my-1">Drag the file</p>
                                                                                        <p className="my-1">or</p>
                                                                                        <p className="my-1">Browse from Computer</p>
                                                                                        <label htmlFor="upload-logo" id="file-chosen"> </label>
                                                                                        <Field type="file" id="upload-logo" name="uploadlogo"  onChange={this.onImageChange} hidden/>
                                                                                        <label htmlFor="upload-logo" className="uploadlogo">
                                                                                            <img src={ uploadedFile ? uploadedFile :  logo_img }  className="logo-img" />
                                                                                            <label htmlFor="upload-logo" className="uploadlogo"></label>
                                                                                        </label>
                                                                                    </div>
                                                                                   
                                                                                    <div>
                                                                                        <Button
                                                                                            className="btn btn-secondary save"
                                                                                            disabled
                                                                                        >
                                                                                            Save
                                                                                        </Button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="files_bottom my-3 d-flex justify-content-between align-items-center">
                                                                                    <div className="plusIcon d-flex mb-2">
                                                                                        <button style={{ border: 'none' }} >
                                                                                            <AiOutlinePlus />
                                                                                        </button>
                                                                                        <p>Add more</p>
                                                                                    </div>
                                                                                    <div className="d-flex">
                                                                                        <HiOutlineVideoCamera />
                                                                                        <HiOutlineCamera />
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            <div className="w-50" >
                                                                                <div className="d-flex align-items-center my-3">
                                                                                    <MdArrowForwardIos /><p className="m-0" >Building Area</p>
                                                                                </div>
                                                                                <Carousel autoPlay axis="horizontal">
                                                                                    <div>
                                                                                        {/* <img src={slider} alt="slider" /> */}
                                                                                        {/* <label htmlFor="upload-logo" className="uploadlogo"> */}
                                                                                            <img src={ uploadedFile ? uploadedFile :  logo_img }  className="logo-img" />
                                                                                        {/* </label> */}
                                                                                    </div>
                                                                                    <div>
                                                                                    <img src={ uploadedFile ? uploadedFile :  logo_img }  className="logo-img" />
                                                                                    </div>
                                                                                    <div>
                                                                                    <img src={ uploadedFile ? uploadedFile :  logo_img }  className="logo-img" />
                                                                                    </div>
                                                                                </Carousel>
                                                                            </div>
                                                                        </div>
                                                                    </div> : null}
                                                            </div>
                                                        </form>
                                                    )}
                                                </Formik>
                                            </Row>
                                        </Container>
                                    </div>
                                </PerfectScrollbar>
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
                                    className="btn btn-default mx-3 save"
                                >
                                    Save
                                </button>
                            </div>
                            <div className="summary">
                                <Button className="btn btn-secondary" onClick={this.handleSummary}>
                                    Summary
                                    <RiArrowDropRightLine />
                                </Button>
                            </div>
                        </div>
                    </div>



                    {/* Model */}

                    <Modal
                        show={this.state.showSummary}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        className="facilityinfomodal"
                        backdropClassName="facilityinfomodal"
                        onHide={this.hideSummary}
                    >
                        <Modal.Header closeButton />
                        <Modal.Body className="">
                            <div className="header_discription mt-1">
                                <p className="topbox">Facility 1
                                </p>
                            </div>
                            <PerfectScrollbar
                                options={{ suppressScrollY: false, suppressScrollX: true }}
                                onScrollY={(container) =>
                                    console.log(`scrolled to: ${container.scrollTop}.`)
                                }
                            >
                                <div className="facilitymod">
                                    <div className="leftmenu">
                                        <div className="imgleft">
                                            <img src={Image2} alt="displayedImage" />
                                        </div>
                                        <div className="infor">
                                            <div className="mt-4">
                                                <BiMap />
                                                <span>SGG Road<br></br>
                                                    2nd stage<br></br>
                                                    Jeevan dani road<br></br>
                                                    8948295532<br></br>
                                                    pin code: 000798</span>
                                            </div>
                                            <div className="mt-4">
                                                <BsTelephone />
                                                <span>9832239554</span>
                                            </div>
                                            <div className="mt-4">
                                                <AiOutlineClockCircle />
                                                <span>Mon- Fri <br></br>8.00AM -7.00PM
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rightmenu">
                                        <h4>Gallery</h4>
                                        <div className="row mt-4 d-flex">
                                            <div className="btnselect">
                                                <div className="d-flex">
                                                    <Button href="#" variant="light" size="lg" >
                                                        Building Area
                                                    </Button>
                                                    <Button href="#" variant="light" size="lg" >
                                                        Work Area
                                                    </Button>
                                                </div>
                                                <div className="d-flex">
                                                    <Button href="#" variant="light" size="lg" >
                                                        Others
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-4 d-flex ">
                                            <Carousel autoPlay axis="horizontal">
                                                <div>
                                                    <img src={slider} alt="slider" />
                                                </div>
                                                <div>
                                                    <img src={slider} alt="slider" />
                                                </div>
                                                <div>
                                                    <img src={slider} alt="slider" />
                                                </div>
                                            </Carousel>
                                        </div>
                                    </div>
                                </div>
                            </PerfectScrollbar>
                        </Modal.Body>
                    </Modal>
                </div>
            }
          
            </>
        );
    }
}

export default Section;