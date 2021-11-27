import React,{useState} from 'react'
import "./BuyerVerifiedEmail.css"
import "bootstrap/dist/css/bootstrap.min.css";

import {Modal,Button} from 'react-bootstrap';



function BuyerVerifiedEmail() {
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
         
          <Modal.Body  >
            <h4 className="modal-title">THANKS  FOR  SIGNINGUP!</h4>
            <p className="modal-discription">Hi,<br /> You have successfully completed the verification process.</p>
          
            <span className="modal-action"><span>Verification completed</span></span>
            <p className="modal-thanks">Thanks</p>
          </Modal.Body>
          
          
        </Modal>
        </>
        
    )
}

export default BuyerVerifiedEmail

