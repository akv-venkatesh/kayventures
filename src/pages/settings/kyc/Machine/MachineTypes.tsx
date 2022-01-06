import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import MachineIcon from "../../../../assets/icons/various/MachineIcon.svg"

class MachineTypes extends Component {
    render() {
        return (
            <Col xs={3} md={12} className="column d-flex" >
                {/* <div className="machine_items">
                    <div className="machine_image d-flex">
                        <img src={MachineIcon} alt="" />
                        <h3>{this.props.machineCount}</h3>
                    </div>
                    <p>{this.props.state.machineType}</p>
                </div>
                <div className="machine_items_text">
                    <p>{this.state.brandType}</p>
                    <p>{this.state.typeTech}</p>
                </div> */}
            </Col>
        );
    }
}

export default MachineTypes;