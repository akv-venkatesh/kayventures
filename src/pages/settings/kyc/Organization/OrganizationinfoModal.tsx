import React from "react";
import "./OrganizationinfoModal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiInformationFill } from "react-icons/ri";
import vest from "../../../assets/images/vest.svg";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { ImFilePdf } from "react-icons/im";
import { IoLockClosedOutline } from "react-icons/io5";

interface typeState {
  showModel: boolean;
}

class OrganizationinfoModal extends React.Component<{}, typeState> {
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
            <div className="header_discription mt-5">
                <p className="topbox">Risk Report  
                </p>
            </div>
            <PerfectScrollbar
                        options={{ suppressScrollY: false, suppressScrollX: true }}
                        onScrollY={(container) =>
                            console.log(`scrolled to: ${container.scrollTop}.`)
                        }
                        >
            <div className="modalorgani">
              <div className="pdf1">
                <ImFilePdf/>
                <p>Pdf.1</p>
              </div>
              <div className="pdf1">
                <ImFilePdf/>
                <p>Pdf.1</p>
              </div>
              <div className="pdf1">
                <ImFilePdf/>
                <p>Pdf.1</p>
              </div>
              <div className="pdf1">
                <ImFilePdf/>
                <p>Pdf.1</p>
              </div>
              <div className="pdf1">
                <ImFilePdf/>
                <p>Pdf.1</p>
              </div>
              <div className="pdf1">
                <ImFilePdf/>
                <p>Pdf.1</p>
              </div>
              <div className="pdf1">
                <ImFilePdf/>
                <p>Pdf.1</p>
              </div>
              <div className="pdf1">
                <ImFilePdf/>
                <p>Pdf.1</p>
              </div>
              <div className="pdf1">
                <ImFilePdf/>
                <p>Pdf.1</p>
              </div>
              <div className="pdf1">
                <ImFilePdf/>
                <p>Pdf.1</p>
              </div>
              <div className="pdf1">
                <ImFilePdf/>
                <p>Pdf.1</p>
              </div>
              <div className="pdf1">
                <ImFilePdf/>
                <p>Pdf.1</p>
              </div>
              <div className="pdf1">
                <ImFilePdf/>
                <p>Pdf.1</p>
              </div>
              <div className="pdf1">
                <ImFilePdf/>
                <p>Pdf.1</p>
              </div>
              <div className="pdf1">
                <ImFilePdf/>
                <p>Pdf.1</p>
              </div>
              <div className="pdf1">
                <ImFilePdf/>
                <p>Pdf.1</p>
              </div>
            </div>

            
          
           </PerfectScrollbar>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default OrganizationinfoModal;
