import React from "react";
import "./Facilityinfomodal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiInformationFill } from "react-icons/ri";
import vest from "../../../../assets/images/vest.svg";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { ImFilePdf, ImCross } from "react-icons/im";
import { IoLockClosedOutline } from "react-icons/io5";
import { BiMap } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { BsTelephone } from "react-icons/bs";
import Image2 from "../../../../assets/image2.svg";
import slider from "../../../../assets/slider.svg"
interface typeState {
  showModel: boolean;
}

class Facilityinfomodal extends React.Component<{}, typeState> {
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
          className="facilityinfomodal"
          backdropClassName="facilityinfomodal"
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
                        <button className="build">Building facade</button>
                        <button className="otherbtn"> Reception</button>
                      </div>
                      <div className="d-flex">
                        <button className="otherbtn">Sewing</button>
                        <button className="otherbtn">Cutting</button>
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
      </>
    );
  }
}

export default Facilityinfomodal;
