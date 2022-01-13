import React from "react";
import "./OrganizationinfoModal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Field } from "formik";
import { RiInformationFill } from "react-icons/ri";
import vest from "../../../../assets/images/vest.svg";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { ImFilePdf } from "react-icons/im";
import { IoLockClosedOutline } from "react-icons/io5";
import logo_img from  '../../../../assets/insertImage.png';
import { FaRegEdit } from "react-icons/fa";

interface typeState {
  showModel: boolean;
}

class OrganizationinfoModalSyn extends React.Component<{}, typeState> {
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
          className="organizationinfomodal"
          backdropClassName="organizationinfomodal"
        >
          <Modal.Header closeButton />
          <Modal.Body className="">
            <div className="header_discription">
               
            </div>
            <PerfectScrollbar
                        options={{ suppressScrollY: false, suppressScrollX: true }}
                        onScrollY={(container) =>
                            console.log(`scrolled to: ${container.scrollTop}.`)
                        }
                        >
           <div className="organisyn">
               <div className="profilechoose d-flex">
                    <label htmlFor="upload-logo" id="file-chosen"> </label>
                    {/* <Field type="file" id="upload-logo" name="upload_logo" hidden/> */}
                    <label htmlFor="upload-logo"><img src={logo_img} alt="insertImage" className="logo-img mr-3" /></label>
                    <div><h3 className="syshead">Syndicate Fashions
                    <label className="position-absolute edit"><FaRegEdit/></label></h3>
                    <p data-testid="para">Private Limited Company</p>
                    <span className="text-muted">DD/MM/YYYY</span></div>
               </div>
               <ul>
                   <li><span>PAN Number <span className="clrred">*</span></span>
                   <span className="clrchnge">ABCDXXXXXX</span></li>
                   <li><span>I/E Code <span className="clrblue">( only India )</span></span>
                   <span className="clrchnge">Text</span></li>
                   <li><span>Company Registration Certificate <span className="clrred">*</span></span>
                   <span className="clrchnge">Attach your files here</span></li>
               </ul>
               <ul>
                   <h5>Tax Registration<label className="position-absolute edit"><FaRegEdit/></label></h5>
                   <li className="d-flex"><span className="wdth30">GST Type</span>
                   <span className="clrchnge">ABCDXXXXXX</span></li>
                   <li className="d-flex"><span className="wdth30">GST Number</span>
                   <span className="clrchnge">Text</span></li>
                   <li className="d-flex"><span className="wdth30">GST Certificate</span>
                   <span className="clrchnge">Attach your files here</span></li>
               </ul>
               <ul className="rating">
                   <h5>Rating & Evaluation<label className="position-absolute edit"><FaRegEdit/></label></h5>
                   <li><span className="clrblue">Credit Report<span className="circle">1</span> </span>
                   <span className="clrchnge">|</span></li>
                   <li><span className="clrblue">Risk Report<span className="circle">1</span></span>
                   <span className="clrchnge">|</span></li>
                   <li><span className="clrblue">Banking & Relationship Report</span>
                   <span className="clrchnge">|</span></li>
                   <li><span className="clrblue">Legal Report</span></li>
               </ul>
              
               <h5>Company Link<label className="position-absolute edit"><FaRegEdit/></label></h5>
               <ul className="row">

                   <li className="d-flex">
                     <span className="wdth30">Website Link</span>
                     <span className="clrchnge">www.BCDXXXXXX</span>
                    </li>
                    <li className="d-flex">
                     <span className="wdth30">Social Media Link</span>
                     <span className="clrchnge">www.BCDXXXXXX</span>
                    </li>
               </ul>

               <h5>Location<label className="position-absolute edit"><FaRegEdit/></label></h5>
               <ul className="row">                                     
                   <li className="d-flex">
                     <span className="wdth30">Location 1:-</span>                    
                     <div>
                      <p className="clrchnge">ABCDXXXXXX</p>
                      <p className="clrchnge">ABCDXXXXXX</p>
                      <p className="clrchnge">ABCDXXXXXX</p>
                     </div>
                    </li>
                   
               </ul>
               <h5>Business Hours<label className="position-absolute edit"><FaRegEdit/></label></h5>
               <h4>Days</h4>
               <ul className="row">                                     
                   <li className="d-flex">
                     <span className="wdth30">Monday</span>
                     <span className="clrblur">8 AM - 6PM</span>
                    </li>
                    <li className="d-flex">
                     <span className="wdth30">Tuesday</span>
                     <span className="clrblur">8 AM - 6PM</span>
                    </li>
                    <li className="d-flex">
                     <span className="wdth30">Wednesday</span>
                     <span className="clrblur">8 AM - 6PM</span>
                    </li>
                    <li className="d-flex">
                     <span className="wdth30">Thrusday</span>
                     <span className="clrblur">8 AM - 6PM</span>
                    </li>
                    <li className="d-flex">
                     <span className="wdth30">Friday</span>
                     <span className="clrblur">8 AM - 6PM</span>
                    </li>
                    <li className="d-flex">
                     <span className="wdth30">Saturday</span>
                     <span className="clrblur">8 AM - 6PM</span>
                    </li>
                    <li className="d-flex">
                     <span className="wdth30">Sunday</span>
                     <span className="clrblur">8 AM - 6PM</span>
                    </li>
                   
               </ul>
           </div>

            
          
           </PerfectScrollbar>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default OrganizationinfoModalSyn;
