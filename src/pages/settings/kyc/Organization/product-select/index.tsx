import React, { Component, ChangeEvent } from 'react';

import ProConfig from '../../commonFiles/productSelection/category';
import ProductSelect from '../../commonFiles/productSelection';

interface typeState {
  step1:boolean,
  prodectPage: boolean,
  selectedOption: any,
  visibility: boolean,
}

class ProductGroups extends Component<{}, typeState> {
  constructor(props: any) {
    super(props);

    this.state = {
      step1: true, 
      prodectPage: true,
      selectedOption: "",
      visibility: false,
    }
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ selectedOption: e.target.value });
    if (e.target.value) {
      this.setState({ visibility: true });
    }
  };

  nextPageChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ prodectPage: false });
  };
  render() {
    return (
      <>
        {
        this.state.prodectPage? 
          <ProConfig 
            state={this.state} 
            nextPageChange={this.nextPageChange} 
            handleChange={this.handleChange}  
            /> :
          <ProductSelect />
        }
      </>
    )
  }
}
export default ProductGroups;