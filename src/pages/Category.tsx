import React, { ChangeEvent, useState ,useEffect} from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Category.css";
import axios from "axios";
import {
  Backbutton,
  Nextbutton,
  DisableNextbutton,
} from "../component/buttons/button";

import { setBusinessCategory ,getBusinessCategory} from "../actions/business_category/business_category";
import { useDispatch, useSelector, connect } from "react-redux";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Component } from "react";
import { Dispatch } from "redux";

interface typeState {
  Visibility: boolean;
  Category: string;
  selectedOption: string;
}
interface typeProps{
  getBusinessCategory:() => void;
  setBusinessCategory:() => void;
}
class Category extends Component<typeProps, typeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      Visibility: false,
      Category: "",
      selectedOption: "",
    };
  }

  componentDidMount() {
    this.props.getBusinessCategory();
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    if (e.currentTarget.value) {
      this.setState({ Visibility: true });
      this.props.setBusinessCategory();
      localStorage.setItem("business_category", e.currentTarget.value);
    }
    this.setState({ selectedOption: e.currentTarget.value });
    console.log("demo", this.state.selectedOption);
  };

  setCategory = (): void => {
    localStorage.setItem("business_category", this.state.selectedOption);
  };

  render(): JSX.Element {
    return (
      <>
        <div className="category_body">
          <div className="category_container py-4">
            <div className="choose_category_head">
              <h1>Choose business category</h1>
            </div>
            <form onSubmit={this.setCategory}>
              <div className="category_section">
                <PerfectScrollbar>
                  <div className="category_item_section flex-wrap">
                    <label
                      htmlFor="Buyer"
                      className="category_item category_item_img1"
                    >
                      <div className="category_item_text">
                        <h3>Buyer</h3>
                        <p>Retailer, global brands</p>
                      </div>
                      <div className="category_item_radio">
                        <input
                          type="radio"
                          id="Buyer"
                          name="category"
                          value="Buyer"
                          onChange={this.handleChange}
                        />
                        <label htmlFor="Buyer"></label>
                      </div>
                    </label>
                    <label
                      htmlFor="Manufacturer"
                      className="category_item category_item_img2"
                    >
                      <div className="category_item_text">
                        <h3>Manufacturer</h3>
                        <p>Apparel, fabric, yarn, fibre</p>
                      </div>
                      <div className="category_item_radio">
                        <input
                          type="radio"
                          id="Manufacturer"
                          name="category"
                          value="Manufacturer"
                          onChange={this.handleChange}
                        />
                        <label htmlFor="Manufacturer"></label>
                      </div>
                    </label>
                    <label
                      htmlFor="JobContractor"
                      className="category_item category_item_img3"
                    >
                      <div className="category_item_text">
                        <h3>Job Contractor</h3>
                        <p>Apparel, knitting</p>
                      </div>
                      <div className="category_item_radio">
                        <input
                          type="radio"
                          id="JobContractor"
                          name="category"
                          value="JobContractor"
                          onChange={this.handleChange}
                        />
                        <label htmlFor="JobContractor"></label>
                      </div>
                    </label>
                    <label
                      htmlFor="ValueAddition"
                      className="category_item category_item_img4"
                    >
                      <div className="category_item_text">
                        <h3>Value Addition</h3>
                        <p>Printing, emboidery, surface embellishments</p>
                      </div>
                      <div className="category_item_radio">
                        <input
                          type="radio"
                          id="ValueAddition"
                          name="category"
                          value="ValueAddition"
                          onChange={this.handleChange}
                        />
                        <label htmlFor="ValueAddition"></label>
                      </div>
                    </label>
                    <label
                      htmlFor="ProcessingFinishing"
                      className="category_item category_item_img5"
                    >
                      <div className="category_item_text">
                        <h3>Processing & Finishing</h3>
                        <p>Pre-treatment, dying, finishing, and washing</p>
                      </div>
                      <div className="category_item_radio">
                        <input
                          type="radio"
                          id="ProcessingFinishing"
                          name="category"
                          value="ProcessingFinishing"
                          onChange={this.handleChange}
                        />
                        <label htmlFor="ProcessingFinishing"></label>
                      </div>
                    </label>
                    <label
                      htmlFor="ServiceProviders"
                      className="category_item category_item_img6"
                    >
                      <div className="category_item_text">
                        <h3>Service Providers</h3>
                        <p>
                          Freight forwarders, inspection agencies, banks,
                          certifying agencies
                        </p>
                      </div>
                      <div className="category_item_radio">
                        <input
                          type="radio"
                          id="ServiceProviders"
                          name="category"
                          value="ServiceProviders"
                          onChange={this.handleChange}
                        />
                        <label htmlFor="ServiceProviders"></label>
                      </div>
                    </label>
                    <label
                      htmlFor="ServiceProviders"
                      className="category_item category_item_img6"
                    >
                      <div className="category_item_text">
                        <h3>Service Providers</h3>
                        <p>
                          Freight forwarders, inspection agencies, banks,
                          certifying agencies
                        </p>
                      </div>
                      <div className="category_item_radio">
                        <input
                          type="radio"
                          id="ServiceProviders"
                          name="category"
                          value="ServiceProviders"
                          onChange={this.handleChange}
                        />
                        <label htmlFor="ServiceProviders"></label>
                      </div>
                    </label>
                  </div>
                </PerfectScrollbar>
              </div>
            </form>
            <div className="category_btn_section pt-4">
              <div className="category_btn">
                <Backbutton link="/createaccount" />
                <div>
                  {this.state.Visibility ?   
                    <Nextbutton link="/types" />:
                    <DisableNextbutton  />
                  }
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
    setBusinessCategory: (category:number) => {
      dispatch(setBusinessCategory(category));
    },
    getBusinessCategory: () => {
      dispatch(getBusinessCategory('all'));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
// export default Category;