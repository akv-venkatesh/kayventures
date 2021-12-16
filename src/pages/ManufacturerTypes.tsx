import React, { ChangeEvent, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ManufacturerTypes.css";
import {
  Backbutton,
  Nextbutton,
  DisableNextbutton,
} from "../component/buttons/button";

import bag from "../assets/icons/bag.svg";
import { Link } from "react-router-dom";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

interface typeState{
  visibility: boolean,
  selectedOption: string
}

class ManufacturerTypes extends Component<{},typeState> {
  constructor(props:any){
    super(props);
    this.state = {
      visibility: false,
      selectedOption: ''
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
            {/* </PerfectScrollbar> */}
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
                  <label htmlFor="Spinning" className="Types_category_item ">
                    <img src={bag} />
                    <h1>Spinning</h1>
                    <div className="Types_category_item_radio">
                      <input
                        type="checkbox"
                        id="Spinning"
                        name="Spinning"
                        value="Spinning"
                        onChange={this.handleChange}
                      />
                      <label htmlFor="Spinning"></label>
                    </div>
                  </label>
                  <label htmlFor="Knitting" className="Types_category_item ">
                    <img src={bag} />
                    <h1>Knitting </h1>
                    <div className="Types_category_item_radio">
                      <input
                        type="checkbox"
                        id="Knitting"
                        name="Knitting"
                        value="Knitting"
                        onChange={this.handleChange}
                      />
                      <label htmlFor="Knitting"></label>
                    </div>
                  </label>
                  {/* </div> */}
                  {/* <div className="Types_category_item_section"> */}
                  <label htmlFor="Weaving" className="Types_category_item ">
                    <img src={bag} />
                    <h1>Weaving</h1>
                    <div className="Types_category_item_radio">
                      <input
                        type="checkbox"
                        id="Weaving"
                        name="Weaving"
                        value="Weaving"
                        onChange={this.handleChange}
                      />
                      <label htmlFor="Weaving"></label>
                    </div>
                  </label>
                  <label htmlFor="Sewing" className="Types_category_item ">
                    <img src={bag} />
                    <h1>Sewing</h1>
                    <div className="Types_category_item_radio">
                      <input
                        type="checkbox"
                        id="Sewing"
                        name="Sewing"
                        value="Sewing"
                        onChange={this.handleChange}
                      />
                      <label htmlFor="Sewing"></label>
                    </div>
                  </label>
                </div>
                <div className="Types_category_type">
                  <label
                    htmlFor="ProcessingFinishing"
                    className="m_category_item m_category_item_img5"
                  >
                    <div className="m_category_item_text">
                      <h3>Processing & Finishing</h3>
                      <p>Pre-treatment, dying, finishing, and washing</p>
                    </div>
                    <div className="m_category_item_radio">
                      <input
                        type="checkbox"
                        id="ProcessingFinishing"
                        name="ProcessingFinishing"
                        value="ProcessingFinishing"
                        onChange={this.handleChange}
                        checked
                      />

                      <label htmlFor="ProcessingFinishing"></label>
                    </div>
                  </label>
                </div>
              </div>

              <div className="Types_category_type_item">
                <label htmlFor="PreTreatment" className="Types_category_item ">
                  <img src={bag} />
                  <h1>PreTreatment</h1>
                  <div className="Types_category_item_radio">
                    <input
                      type="checkbox"
                      id="PreTreatment"
                      name="PreTreatment"
                      value="PreTreatment"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="PreTreatment"></label>
                  </div>
                </label>
                <label htmlFor="Dyeing" className="Types_category_item ">
                  <img src={bag} />
                  <h1>Dyeing </h1>
                  <div className="Types_category_item_radio">
                    <input
                      type="checkbox"
                      id="Dyeing"
                      name="Dyeing"
                      value="Dyeing"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="Dyeing"></label>
                  </div>
                </label>
                {/* </div> */}
                {/* <div className="Types_category_item_section"> */}
                <label htmlFor="Finishing" className="Types_category_item ">
                  <img src={bag} />
                  <h1>Finishing</h1>
                  <div className="Types_category_item_radio">
                    <input
                      type="checkbox"
                      id="Finishing"
                      name="Finishing"
                      value="Finishing"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="Weaving"></label>
                  </div>
                </label>
                <label
                  htmlFor="WashingGarments"
                  className="Types_category_item "
                >
                  <img src={bag} />
                  <h1>Washing Garments</h1>
                  <div className="Types_category_item_radio">
                    <input
                      type="checkbox"
                      id="WashingGarments"
                      name="WashingGarments"
                      value="WashingGarments"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="WashingGarments"></label>
                  </div>
                </label>
              </div>
            </div>
            {/* </PerfectScrollbar> */}
            <div className="Types_category_btn_section pt-4 px-5">
              <div className="Types_category_btn w-100">
              
                <Link to="/category">
                  <Backbutton />
                </Link>
              
                <div>
                  {this.state.visibility ? (
                    <Link to="/primarydetails">
                      <Nextbutton />
                    </Link>
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

export default ManufacturerTypes;
