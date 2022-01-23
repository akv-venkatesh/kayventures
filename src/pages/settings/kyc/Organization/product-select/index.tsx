import React, { Component, ChangeEvent } from 'react';

import ProConfig from '../../commonFiles/productSelection/category';
import ProductSelect from '../../commonFiles/productSelection';
import { Navigate } from 'react-router-dom';

interface typeState {
  step1:boolean,
  prodectPage: boolean,
  selectedOption: any,
  finish: boolean,
}

class ProductGroups extends Component<{}, typeState> {
  constructor(props: any) {
    super(props);

    this.state = {
      step1: true, 
      prodectPage: true,
      selectedOption: "",
      finish: false,
    }
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    this.setState({ selectedOption: e });
  };

  nextPageChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ prodectPage: false });
    this.setState({ selectedOption: e });
  };
  complete = () =>{
    this.setState({ prodectPage: true });
  }
  nextpage = () =>{
    this.setState({
        finish : true
    })
  }
  render() {
    if(this.state.finish){
      return <Navigate to = "/settings/kyc/organization/machinery" />
    }
    return (
      <>
        {
        this.state.prodectPage? 
          <ProConfig 
            state={this.state}
            nextPageChange={(e:any)=>this.nextPageChange(e)} 
            // handleChange={(e:any)=>this.handleChange(e)}  
            /> :
          <ProductSelect 
            category={this.state.selectedOption}
            onComplete = {this.complete}
            nextpage = {this.nextpage}
          />
        }
      </>
    )
  }
}
export default ProductGroups;