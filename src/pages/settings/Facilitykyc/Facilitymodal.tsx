import React from "react";
import "./Facilitymodal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiInformationFill } from "react-icons/ri";
import vest from "../../../assets/images/vest.svg";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { ImFilePdf } from "react-icons/im";
import { IoLockClosedOutline } from "react-icons/io5";
import { BiMap } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Image2 from "../../../assets/image2.svg";
interface typeState {
  showModel: boolean;
}

class Facilitymodal extends React.Component<{}, typeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showModel: true,
    };
  }

  handleShow = () => {
    this.setState({
      showModel: !this.state.showModel,
    });
  };

  render(): JSX.Element {
    return (
      <>
        <div className="email-verified-bg" onClick={() => this.handleShow}>
          <div
            className="email-verified-image"
            onClick={() => this.handleShow}
          ></div>
        </div>
        <Modal
          show={this.state.showModel}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="facilitymodal"
          backdropClassName="facilitymodal"
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
                            <BsTelephone/>
                                <span>9832239554</span>
                            </div>
                            <div className="mt-4">
                            <AiOutlineClockCircle/>
                                <span>Mon- Fri <br></br>8.00AM -7.00PM
                                    </span>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className="rightmenu">
                       <h4>Corporate info</h4>
                       <h5>Location</h5>
                       <div className="d-flex mb-3">
                            <h6 className="col-md-5">Location 1:- </h6>
                            <div className="clrblue">
                                <span>ABCDXXXXXX</span><br></br>
                                <span>ABCDXXXXXX</span><br></br>
                                <span>ABCDXXXXXX</span><br></br>
                            </div> 
                        </div>
                        <h5>Contact</h5>
                        <div className="contact">
                            <div className="d-flex mb-3">
                                <h6 className="col-md-5">Name </h6>
                                <div className="clrblue">
                                    <span>Ganesh</span>
                                </div> 
                            </div>
                            <div className="d-flex mb-3">
                                <h6 className="col-md-5">Designation </h6>
                                <div className="clrblue">
                                    <span>Marketing head</span>
                                </div> 
                            </div>
                            <div className="d-flex mb-3">
                                <h6 className="col-md-5">Phone No.  </h6>
                                <div className="clrblue">
                                    <span>7583920757</span>
                                </div> 
                            </div>
                            <div className="d-flex mb-3">
                                <h6 className="col-md-5">Email -Id </h6>
                                <div className="clrblue">
                                    <span>ABCD@id.com</span>
                                </div> 
                            </div>
                        </div>
                        <h5>Service of Contact</h5>
                        <div className="contact">
                            <div className="d-flex mb-3">
                                <h6 className="col-md-5">Tuesday </h6>
                                <div className="clrblue">
                                    <span>8 AM - 6PM</span>
                                </div> 
                            </div>
                            <div className="d-flex mb-3">
                                <h6 className="col-md-5">Wednesday </h6>
                                <div className="clrblue">
                                    <span>8 AM - 6PM</span>
                                </div> 
                            </div>
                            <div className="d-flex mb-3">
                                <h6 className="col-md-5">Thrusday</h6>
                                <div className="clrblue">
                                    <span>Leave</span>
                                </div> 
                            </div>
                            <div className="d-flex mb-3">
                                <h6 className="col-md-5">Friday </h6>
                                <div className="clrblue">
                                    <span>8 AM - 6PM</span>
                                </div> 
                            </div>
                            <div className="d-flex mb-3">
                                <h6 className="col-md-5">Saturday </h6>
                                <div className="clrblue">
                                    <span>8 AM - 6PM</span>
                                </div> 
                            </div>
                            <div className="d-flex mb-3">
                                <h6 className="col-md-5">Sunday </h6>
                                <div className="clrblue">
                                    <span>Leave</span>
                                </div> 
                            </div>
                        </div>
                        <h5>Other Holidays</h5>
                        <div className="contact">
                            <div className="d-flex mb-3">
                                <h6 className="col-md-5">Holiday 1 </h6>
                                <div className="clrblue">
                                    <span>Independence Day</span>
                                </div> 
                            </div>
                            <div className="d-flex mb-3">
                                <h6 className="col-md-5">Holiday 1 </h6>
                                <div className="clrblue">
                                    <span>New Year</span>
                                </div> 
                            </div>
                            
                        </div>   
                    </div>
                </div>

            
          
           </PerfectScrollbar>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Facilitymodal;
