import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import MachineIcon from "../../../../assets/icons/various/MachineIcon.svg"

interface typeProps {
    machineTypeProps: any,
    machineBrandProps: any,
    machineTechProps: any,
    machineCountProps: any,
}
class MachineTypes extends Component<typeProps, {}> {
    render() {
        return (
            <Col xs={3} md={12} className="column d-flex" >
                <div className="machine_items">
                    <div className="machine_image d-flex">
                        <img src={MachineIcon} alt="" />
                        <h3>{this.props.machineCountProps}</h3>
                    </div>
                    <p>{this.props.machineTypeProps}</p>
                </div>
                <div className="machine_items_text">
                    <p>{this.props.machineBrandProps}</p>
                    <p>{this.props.machineTechProps}</p>
                </div>
            </Col>
        );
    }
}

export default MachineTypes;