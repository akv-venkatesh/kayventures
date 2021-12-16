import React, { ChangeEvent, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import Tshert from "../../../assets/icons/tshert.svg";

import { RiInformationFill } from "react-icons/ri";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
import { Field } from "formik";
import {
  Nextbutton,
  DisableNextbutton,
} from "../../../component/buttons/button";

interface typeState {
  visibility: boolean;
  selectedOption: string;
}

class ProductConfiguration extends Component<{}, typeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      visibility: false,
      selectedOption: "",
    };
  }
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({selectedOption: e.target.value});
    if (e.target.value) {
      this.setState({visibility: true});
    }
  };
  render(): JSX.Element {
 
    return (
      <>
        <div className="productconfiguration_body">
          <div className="productconfiguration_container">
            <div className="productconfigutation_head">
              <h1>Choose your product category</h1>
              <span className="productconfigutation_info_section">
                <span>
                  <RiInformationFill className="info-icon" />
                </span>
                <span className="productconfigutation_info_details">
                  Multiple selection allowed only if all the categories are
                  operating under one business name. If the business names are
                  different, then kindly register separately for each of the
                  product category.
                </span>
              </span>
            </div>
            
            <div className="productconfigutation_productlist">
                {/* body */}
              <div className="productconfigutation_product_body">
                <div className="productconfigutation_product_title">
                  <h1>Spinning</h1>
                  <div className="productconfigutation_product">
                    <div className="productconfigutation_product_field">
                      <label htmlFor="Weaving5" className="product_field">
                        <div className="product_field_item">
                          <img src={Tshert} />
                          <span>Yarn</span>
                        </div>
                        <div>
                          <div className="product_field_circle">
                            <input
                              type="radio"
                              id="Weaving5"
                              name="Weaving"
                              value="Weaving"
                              onChange={this.handleChange}
                            />
                            <label htmlFor="Weaving5"></label>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* body */}
               {/* body */}
               <div className="productconfigutation_product_body">
                <div className="productconfigutation_product_title">
                  <h1>Sewing</h1>
                  <div className="productconfigutation_product">
                    <div className="productconfigutation_product_field">
                      <label htmlFor="Weaving2" className="product_field">
                        <div className="product_field_item">
                          <img src={Tshert} />
                          <span>Garment</span>
                        </div>
                        <div>
                          <div className="product_field_circle">
                            <input
                              type="radio"
                              id="Weaving2"
                              name="Weaving"
                              value="Weaving"
                              onChange={this.handleChange}
                            />
                            <label htmlFor="Weaving2"></label>
                          </div>
                        </div>
                      </label>
                      <label htmlFor="Weaving1" className="product_field">
                        <div className="product_field_item">
                          <img src={Tshert} />
                          <span>Home Furnishing</span>
                        </div>
                        <div>
                          <div className="product_field_circle">
                            <input
                              type="radio"
                              id="Weaving1"
                              name="Weaving"
                              value="Weaving"
                              onChange={this.handleChange}
                            />
                            <label htmlFor="Weaving1"></label>
                          </div>
                        </div>
                      </label>
                      <label htmlFor="Waving" className="product_field">
                        <div className="product_field_item">
                          <img src={Tshert} />
                          <span>MadeUps</span>
                        </div>
                        <div>
                          <div className="product_field_circle">
                            <input
                              type="radio"
                              id="Waving"
                              name="Weaving"
                              value="Weaving"
                              onChange={this.handleChange}
                            />
                            <label htmlFor="Waving"></label>
                          </div>
                        </div>
                      </label>
                      <label htmlFor="Weavng" className="product_field">
                        <div className="product_field_item">
                          <img src={Tshert} />
                          <span>Floor Covering</span>
                        </div>
                        <div>
                          <div className="product_field_circle">
                            <input
                              type="radio"
                              id="Weavng"
                              name="Weaving"
                              value="Weaving"
                              onChange={this.handleChange}
                            />
                            <label htmlFor="Weavng"></label>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* body */}
              {/* body */}
              <div className="productconfigutation_product_body">
                <div className="productconfigutation_product_title">
                  <h1>Weaving</h1>
                  <div className="productconfigutation_product">
                    <div className="productconfigutation_product_field">
                      <label htmlFor="Weavin" className="product_field">
                        <div className="product_field_item">
                          <img src={Tshert} />
                          <span>Weaving Faabric</span>
                        </div>
                        <div>
                          <div className="product_field_circle">
                            <input
                              type="radio"
                              id="Weavin"
                              name="Weaving"
                              value="Weaving"
                              onChange={this.handleChange}
                            />
                            <label htmlFor="Weavin"></label>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* body */}
                  {/* body */}
                  <div className="productconfigutation_product_body">
                <div className="productconfigutation_product_title">
                  <h1>Knitting</h1>
                  <div className="productconfigutation_product">
                    <div className="productconfigutation_product_field">
                      <label htmlFor="Weavin6" className="product_field">
                        <div className="product_field_item">
                          <img src={Tshert} />
                          <span>Kinitted Faabric</span>
                        </div>
                        <div>
                          <div className="product_field_circle">
                            <input
                              type="radio"
                              id="Weavin6"
                              name="Weaving"
                              value="Weaving"
                              onChange={this.handleChange}
                            />
                            <label htmlFor="Weavin6"></label>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* body */}
            </div>
            {/* </PerfectScrollbar> */}
            <div className="productconfigutation_button">
              <div></div>
              <div className="next_btn">
                {/* <Nextbutton /> */}
                {this.state.visibility ? (
                //   <Link to="/primarydetails">
                    <Nextbutton  />
                //   </Link>
                ) : (
                  <DisableNextbutton />
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ProductConfiguration;
