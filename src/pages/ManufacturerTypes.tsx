import React, { ChangeEvent, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ManufacturerTypes.css";
import {
  Backbutton,
  Nextbutton,
  DisableNextbutton,
} from "../component/buttons/button";
import { useDispatch, useSelector, connect } from "react-redux";


import bag from "../assets/icons/bag.svg";
import { Link } from "react-router-dom";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import store from "../store/store";

interface typeState{
  visibility: boolean,
  selectedOption: string,
  types:any
}

class ManufacturerTypes extends Component<{},typeState> {
  constructor(props:any){
    super(props);
    console.log(props);
    this.state = {
      visibility: false,
      selectedOption: '',
      types: props.location.state,
    }
  }


  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({selectedOption: e.target.value});
    if (e.target.value) {
      this.setState({visibility: true});
    }
  };
  render():JSX.Element{
    return (
          <>
      <div className="Types_category">
        <div className="Types_category_body ">
          <div className="Types_category_container py-4">
            <div className="Types_choose_category_head">
              <h1>Choose the type</h1>
            </div>
            <PerfectScrollbar>
              <div className="Types_category_section px-5">
                <div className="Types_category_section_container">
                  <div className="Types_category_type">
                    {}
                    <label
                      htmlFor="Manufacturer"
                      className="m_category_item m_category_item_img1"
                    >
                      <div className="m_category_item_text">
                        <h3>Manufacturer</h3>
                        <p>Apparel, fabric, yarn, fibre</p>
                      </div>
                      <div className="m_category_item_radio">
                        <input
                          type="checkbox"
                          id="Manufacturer"
                          name="Manufacturer "
                          value="Manufacturer"
                          onChange={this.handleChange}
                          checked
                        />
                        <label htmlFor="Manufacturer"></label>
                      </div>
                    </label>
                  </div>
                  <div className="Types_category_type_item">
                    {
                      this.state.types ? (
                        this.state.types.map((data:any, index:number) => {
                          if(data.id !== 1){
                            return (
                              <label htmlFor={data.id} className="Types_category_item ">
                                <img src={bag} />
                                <h1>{data.name}</h1>
                                <div className="Types_category_item_radio">
                                  <input
                                    type="checkbox"
                                    id={data.id}
                                    name="types"
                                    value={data.id}
                                    onChange={this.handleChange}
                                  />
                                  <label htmlFor={data.id}></label>
                                </div>
                              </label>
                            );
                          }
                        })
                      ) : (
                        <div></div>
                      )
                    }
                  </div>
                </div>
              </div>
            </PerfectScrollbar>
            <div className="Types_category_btn_section pt-4 px-5">
              <div className="Types_category_btn w-100">
                <Backbutton link="/category"/>
                <div>
                  {this.state.visibility ? (
                    <Nextbutton link="/primarydetails"/>
                  ) : (
                    <DisableNextbutton />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
    );
  }
}


const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch:any, props:any) => {
  return {
    // setBusinessCategory: (category:number) => {
    //   dispatch(setBusinessCategory(category));
    // },
    // getBusinessCategory: () => {
    //   dispatch(getBusinessCategory('all'));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManufacturerTypes);
// export default ManufacturerTypes;
