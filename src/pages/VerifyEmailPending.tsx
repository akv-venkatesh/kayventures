import React,{useState} from 'react'
import "./VerifyEmailPending.css"
import "bootstrap/dist/css/bootstrap.min.css";

import {Modal,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';



function VerifyEmailPending():JSX.Element {
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
          className="verifyemailmodel1"
          backdropClassName="verifyemailmodel1"
        >
          <Modal.Header closeButton></Modal.Header>
         
          <Modal.Body  className="text-center">
            <h4 className="modal-title">THANKS  FOR  SIGNING UP!</h4>
            <h5 className="modal-discription">Hi,<br />Your email verification is under process.</h5>
          
            {/* <Link to='login'><span className="modal-action"><span>Proceed to Log In</span></span></Link> */}
            <h5 className="modal-thanks">Verification Pending</h5>
          </Modal.Body>
          
          
        </Modal>
        </>
        
    )
}

export default VerifyEmailPending

