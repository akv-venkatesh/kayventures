import React from "react";
import "./product_config.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiInformationFill } from "react-icons/ri";
import vest from "../assets/images/vest.svg";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

interface typeState {
  showModel: boolean;
}

class ProConfig extends React.Component<{}, typeState> {
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
          className="product_config"
          backdropClassName="product_config"
        >
          <Modal.Header closeButton />
          <Modal.Body className="">
            <div className="header_discription">
              <RiInformationFill className="info-icon" />
              <p>
                You have completed successfully your product configuration for
                garments.
              </p>
            </div>
            <p className="discription">
              You have two more categories to configure, only if more than one
              category was chosen by the byer or manufacturer. In this example,
              we have shown only garments as the only category chosen. Cross
              button will take you to the Product Category screen.
            </p>
            <div className="row">
              <div className="col-12">
                <PerfectScrollbar
                  options={{ suppressScrollY: false, suppressScrollX: true }}
                  onScrollY={(container) =>
                    console.log(`scrolled to: ${container.scrollTop}.`)
                  }
                >
                  <div>
                    <div style={{ padding: "25px 0px" }}>
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="cat-img-bg">
                            <img src={vest} className="cat-img" />
                          </div>
                          <p className="cat-name">Underwear</p>
                        </div>
                      </div>
                      <div className="row px-3">
                        <div className="col-sm-4">
                          <div className="item-container row">
                            <div className="item-img-bg col-sm-3">
                              <img src={vest} className="item-img" />
                            </div>
                            <div className="item-name-bg col-sm-9">
                              {" "}
                              <p className="item-name">Slips</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="item-container row">
                            <div className="item-img-bg col-sm-3">
                              <img src={vest} className="item-img" />
                            </div>
                            <div className="item-name-bg col-sm-9">
                              {" "}
                              <p className="item-name">Knicker</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="item-container row">
                            <div className="item-img-bg col-sm-3">
                              <img src={vest} className="item-img" />
                            </div>
                            <div className="item-name-bg col-sm-9">
                              {" "}
                              <p className="item-name">Pants</p>
                            </div>
                          </div>
                        </div>
                       
                      </div>
                    </div>
                    <div style={{ padding: "25px 0px" }}>
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="cat-img-bg">
                            <img src={vest} className="cat-img" />
                          </div>
                          <p className="cat-name">Nightwear</p>
                        </div>
                      </div>
                      <div className="row px-3">
                        <div className="col-sm-4">
                          <div className="item-container row">
                            <div className="item-img-bg col-sm-3">
                              <img src={vest} className="item-img" />
                            </div>
                            <div className="item-name-bg col-sm-9">
                              {" "}
                              <p className="item-name">Slips</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="item-container row">
                            <div className="item-img-bg col-sm-3">
                              <img src={vest} className="item-img" />
                            </div>
                            <div className="item-name-bg col-sm-9">
                              {" "}
                              <p className="item-name">Cheeky</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="item-container row">
                            <div className="item-img-bg col-sm-3">
                              <img src={vest} className="item-img" />
                            </div>
                            <div className="item-name-bg col-sm-9">
                              {" "}
                              <p className="item-name">Knickers</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="item-container row">
                            <div className="item-img-bg col-sm-3">
                              <img src={vest} className="item-img" />
                            </div>
                            <div className="item-name-bg col-sm-9">
                              {" "}
                              <p className="item-name">Tanga</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="item-container row">
                            <div className="item-img-bg col-sm-3">
                              <img src={vest} className="item-img" />
                            </div>
                            <div className="item-name-bg col-sm-9">
                              {" "}
                              <p className="item-name">Brief</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="item-container row">
                            <div className="item-img-bg col-sm-3">
                              <img src={vest} className="item-img" />
                            </div>
                            <div className="item-name-bg col-sm-9">
                              {" "}
                              <p className="item-name">Cheeky</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: "25px 0px" }}>
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="cat-img-bg">
                            <img src={vest} className="cat-img" />
                          </div>
                          <p className="cat-name">Nightwear</p>
                        </div>
                      </div>
                      <div className="row px-3">
                        <div className="col-sm-4">
                          <div className="item-container row">
                            <div className="item-img-bg col-sm-3">
                              <img src={vest} className="item-img" />
                            </div>
                            <div className="item-name-bg col-sm-9">
                              {" "}
                              <p className="item-name">Slips</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="item-container row">
                            <div className="item-img-bg col-sm-3">
                              <img src={vest} className="item-img" />
                            </div>
                            <div className="item-name-bg col-sm-9">
                              {" "}
                              <p className="item-name">Cheeky</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="item-container row">
                            <div className="item-img-bg col-sm-3">
                              <img src={vest} className="item-img" />
                            </div>
                            <div className="item-name-bg col-sm-9">
                              {" "}
                              <p className="item-name">Knickers</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="item-container row">
                            <div className="item-img-bg col-sm-3">
                              <img src={vest} className="item-img" />
                            </div>
                            <div className="item-name-bg col-sm-9">
                              {" "}
                              <p className="item-name">Tanga</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="item-container row">
                            <div className="item-img-bg col-sm-3">
                              <img src={vest} className="item-img" />
                            </div>
                            <div className="item-name-bg col-sm-9">
                              {" "}
                              <p className="item-name">Brief</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="item-container row">
                            <div className="item-img-bg col-sm-3">
                              <img src={vest} className="item-img" />
                            </div>
                            <div className="item-name-bg col-sm-9">
                              {" "}
                              <p className="item-name">Cheeky</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </PerfectScrollbar>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ProConfig;
