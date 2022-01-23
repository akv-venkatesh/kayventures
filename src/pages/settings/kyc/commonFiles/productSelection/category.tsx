import React, { ChangeEvent, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tshert from "../../../../../assets/icons/tshert.svg";
import blackTshert from "../../../../../assets/icons/blackTshert.svg";
import { RiInformationFill } from "react-icons/ri";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
import { Field } from "formik";
import Stepper from '../../../../../component/stepper/stepper'
import {
  Nextbutton,
  DisableNextbutton,
} from "../../../../../component/buttons/button";

interface typeState {
  categorylist:any,
  visiblity:boolean,
  selectedCategory: any,
}
interface typeProps {
  // handleChange:any,
  nextPageChange:any,
  state:any,
}
class ProductConfiguration extends Component<typeProps, typeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      categorylist:[
        {
          name: 'spinning',
          list: [
            {
              name: 'yarn'
            },
          ]
        },
        {
          name: 'sewing',
          list: [
            {
              name: 'Garments'
            },
            {
              name: 'Home furnishing'
            },
            {
              name: 'MadeUps'
            },
            {
              name: 'Covering'
            },
          ]
        },
        {
          name: 'Weaving',
          list: [
            {
              name: 'Weaving fabric'
            },
          ]
        },
        {
          name: 'knitted',
          list: [
            {
              name: 'knitted fabric'
            },
          ]
        },
      ],
      visiblity:false,
      selectedCategory: [],
    }
  }
  change = (e:any, parent:any) =>{
    let obj = {
      category_parent : parent,
      category: e.target.value,
    }
    this.setState({
      visiblity: true,
      selectedCategory: obj,
    })
  }

  next = () =>{
    this.props.nextPageChange(this.state.selectedCategory)
  }

 render(): JSX.Element {
    const steps = [{ label: 'KYC', id: 0 }, { label: 'Product Selection', id: 1 }, { label: 'Machinery', id: 2 }, { label: 'Operations', id: 3 }]
    const {nextPageChange,state} = this.props;
    return (
      <> 
      <div className="h-100 kyc-org-prod-select-category">
        <div className='my-1  '>
          <Stepper steps={steps} activeStep={1} />
        </div >
        <div className="productconfiguration_body">
          <div className="productconfiguration_container h-100">
            <div className="productconfigutation_head">
              <h1>Choose your product category</h1>
            </div>

            <div className="productconfigutation_productlist">

              <PerfectScrollbar>
                {
                  this.state.categorylist.map((item:any, i: number)=>
                  <div className="productconfigutation_product_body">
                    <div className="productconfigutation_product_title">
                      <h1>{item.name}</h1>
                      <div className="productconfigutation_product">
                        <div className="productconfigutation_product_field">
                          {
                            item.list.map((list:any, j:number)=>
                              <label htmlFor={'category'+i+j} className="product_field">
                                <div className="product_field_item">
                                {state.selectedOption === list.name?
                                  <img src={Tshert} />:<img src={blackTshert} />}
                                  <span>{list.name}</span>
                                </div>
                                <div>
                                  <div className="product_field_circle">
                                    <input
                                      type="radio"
                                      id={'category'+i+j}
                                      name='category'
                                      value={list.name}
                                      onChange={(e:any)=>this.change(e, item.name)}
                                    />
                                    <label htmlFor={'category'+i+j}></label>
                                  </div>
                                </div>
                              </label>
                            )
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                }
               
              </PerfectScrollbar>
            </div>

            <div className="productconfigutation_button">
              <div></div>
              <div className="next_btn">
                {/* <Nextbutton /> */}
                {this.state.visiblity ? (
                  //   <Link to="/primarydetails">
                  <Nextbutton onClick={this.next} />
                  //   </Link>
                ) : (
                  <DisableNextbutton />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
export default ProductConfiguration;
