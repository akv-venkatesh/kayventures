import React, { Component } from "react";
import { Stepper ,Step} from 'react-form-stepper';
import "./stepper.scss";

interface typeProps {
  steps:Object[],
  activeStep:Number
}
interface typeState {
  activeStep :any
}
class stepper extends Component<typeProps, typeState> {
  constructor(props: any) {
    super(props);

    this.state = {
      activeStep : 3
    };
  }
  setActiveStep = (active:number) => {
    this.setState({activeStep : active})
  }

  componentDidMount = () =>{
    this.setState({activeStep:this.props.activeStep})
  }

  render(): JSX.Element {
    const stepperStyles: any = {
      size: 3,
      stepSize: '1px',
      style:'solid'
    }
    // const steps = [{ label: 'KYC',id:0}, { label: 'Product Selection',id:1}, { label: 'Machinery',id:2 }, { label: 'Operations',id:3 }]

    return (
      <div>
        <Stepper connectorStateColors={true} connectorStyleConfig={stepperStyles} className={stepperStyles}  activeStep={this.state.activeStep} >
         {this.props.steps.map((step:any,key)=>{
           return (<Step onClick={(e:any) => this.setState({activeStep:step.id})} value={key} label={step.label}/>)
         })
         }
        </Stepper>
      </div>
    );
  }
}

export default stepper;
