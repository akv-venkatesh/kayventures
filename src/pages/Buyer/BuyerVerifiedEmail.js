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
            <h4 className="modal-title">THANKS  FOR  SIGNING UP!</h4>
            <h5 className="modal-discription">Hi,<br /> You have successfully completed the verification process.</h5>
          
            <span className="modal-action"><span>Verification completed</span></span>
            <h5 className="modal-thanks">Thanks</h5>
          </Modal.Body>
          
          
        </Modal>
        </>
        
    )
}

export default BuyerVerifiedEmail

