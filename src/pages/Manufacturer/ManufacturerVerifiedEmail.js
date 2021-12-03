import React,{useState} from 'react'
import "./ManufacturerVerifiedEmail.css"
import "bootstrap/dist/css/bootstrap.min.css";

import {Modal,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';



function ManufacturerVerifiedEmail() {
    const [showModel, setShowModel] = useState(true)

    return (
        <>
        <div className="email-verified-bg">
        <div className ="email-verified-image" onClick={() => setShowModel(true)}>
        

        </div>
        </div>
        <Modal
          show={showModel}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="model"
        >
          <Modal.Header closeButton></Modal.Header>
         
          <Modal.Body  className="text-center">
            <h4 className="modal-title">THANKS  FOR  SIGNING UP!</h4>
            <h5 className="modal-discription">Hi,<br /> You have successfully completed the verification process.</h5>
          
            <Link to='manufacturer-login'><span className="modal-action"><span>Verification completed</span></span></Link>
            <h5 className="modal-thanks">Thanks</h5>
          </Modal.Body>
          
          
        </Modal>
        </>
        
    )
}

export default ManufacturerVerifiedEmail

