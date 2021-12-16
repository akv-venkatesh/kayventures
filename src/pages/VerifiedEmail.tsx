import React from 'react'
import "./VerifiedEmail.css"
import "bootstrap/dist/css/bootstrap.min.css";

import {Modal,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface typeState{
  showModel: boolean,
}

class ManufacturerVerifiedEmail extends React.Component<{},typeState> {
    
    constructor(props:any){
      super(props);
      this.state = {
        showModel : true
      }
    }

    handleShow = () =>{
      this.setState({
        showModel: !this.state.showModel
      })
    }


    render():JSX.Element{
      return (
        <>
          <div className="email-verified-bg">
          <div className ="email-verified-image" onClick={() => this.handleShow}>
          

          </div>
          </div>
          <Modal
            show={this.state.showModel}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="verifyemailmodel1"
            backdropClassName="verifyemailmodel1"
          >
            <Modal.Header closeButton></Modal.Header>
           
            <Modal.Body  className="text-center">
              <h4 className="modal-title">THANKS  FOR  SIGNING UP!</h4>
              <h5 className="modal-discription">Hi,<br /> You have successfully completed the verification process.</h5>
            
              <Link to='login'><span className="modal-action"><span>Verification completed</span></span></Link>
              <h5 className="modal-thanks">Thanks</h5>
            </Modal.Body>
            
            
          </Modal>
        </>
          
      )
    }
}

export default ManufacturerVerifiedEmail

