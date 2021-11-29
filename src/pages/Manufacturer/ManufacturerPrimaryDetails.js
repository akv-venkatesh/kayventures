import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ManufacturerPrimaryDetails.css";
import arrow_left from "../../assets/icons/arrows/arrow-left.svg";
import {Modal,Button} from 'react-bootstrap';

function ManufacturerPrimaryDetails() {
  const [showModel, setShowModel] = useState(false)
    
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="primary_form_body">
          <form className="primary_form_container" >
            <div className="primary_form_head">
             <Link to="/manufacturertypes"><img src={arrow_left}  style={{cursor:"pointer"}} /></Link>
              <h1>
                Primary details / <span>Manufacturer</span>
              </h1>
              <p> Fill in the details to submit your application.</p>
            </div>
            <div className="primary_form">
              <div className="primary_form_details">
                <label>Organization</label>{" "}
                <input type="text" placeholder="Name" required />
              </div>
              <div className="primary_form_details">
                <label>Location</label>{" "}
                <input type="text" placeholder="Current location" required />
              </div>
              <div className="primary_form_details">
                <label>Name of the person</label>{" "}
                <input type="text" placeholder="Name" required />
              </div>
              <div className="primary_form_details">
                <label>Designation</label>{" "}
                <input
                  type="text"
                  placeholder="Director, head, etc Copy"
                  required
                />
              </div>

              <div className="primary_form_details">
                <label>E-mail Id(Compant Id)</label>{" "}
                <input type="text" placeholder="company@xyz.com" required />
              </div>
              <div className="primary_form_details">
                <label>Phone No.</label>{" "}
                <input type="text" placeholder="+91 XXXXXXXXXXX" required />
              </div>
              <div className="primary_form_details">
                <label>URL link Copy</label>{" "}
                <input
                  type="text"
                  placeholder="Paste the website link here"
                  required
                />
              </div>
            </div>
            <div className="primary_form_btn" style={{ display: "flex", justifyContent: "center" }}>
              <span type="submit"  onClick={()=>setShowModel(true)}>
                Submit
              </span >
            </div>
            <div className="primary_form_alert" style={{ display: "flex", justifyContent: "center" }}>
              <span>Please click on the link sent to validate your email id.</span>
            </div>
          </form>
        </div>
      </div>

      <Modal
          show={showModel}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="model"
          onHide={()=>setShowModel(false)}
        >
          <Modal.Header closeButton></Modal.Header>
         
          <Modal.Body  >
            <h4 className="modal-title">Email ID Verification</h4>
            <p className="modal-discription">Kindly verify your email id using the link sent to you. The link will be active till 30 minutes.</p>
            <p className="modal-timer">00:30</p>
            <span className="modal-action-resend"><span>Resend</span></span>
          </Modal.Body>
          
          
        </Modal>


    </>
  );
}

export default ManufacturerPrimaryDetails;
