import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Category.css";
import { BsChevronRight,BsChevronLeft } from "react-icons/bs";
import { setBusinessCategory } from '../actions/business_category';
import { useDispatch, useSelector } from 'react-redux'; 

function Category() {

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const history = useHistory();

  const [Visibility, setVisibility] = useState("none");
  const [selectedOption, setselectedOption] = useState(null);

  const handleChange = (e) => {
    setselectedOption(e.target.value);
    if (e.target.value) {
      setVisibility("");
    }
  };

  const setCategory = () => {
    dispatch(setBusinessCategory(selectedOption));
    if(selectedOption == 'Manufacturer'){
      history.push('/manufacturertypes')
    }
    if(selectedOption == 'Buyer'){
      history.push('/buyertypes');
    }
  }

  return (
    <>
      <div className="category_body">
        <div className="category_container py-4">
          <div className="choose_category_head">
            <h1>Choose your business category</h1>
          </div>
          <form onSubmit={setCategory}>
            <div className="category_section">
              <div class="category_item_section flex-wrap">
                <label  for="Buyer" className="category_item category_item_img1">
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
                      onChange={handleChange}
                    />
                    <label for="Buyer"></label>
                  </div>
                </label>
                <label for="Manufacturer" className="category_item category_item_img2">
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
                      onChange={handleChange}
                    />
                    <label for="Manufacturer"></label>
                  </div>
                </label>
                <label  for="JobContractor" className="category_item category_item_img3">
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
                      onChange={handleChange}
                    />
                    <label for="JobContractor"></label>
                  </div>
                </label>
                <label for="ValueAddition" className="category_item category_item_img4">
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
                      onChange={handleChange}
                    />
                    <label for="ValueAddition"></label>
                  </div>
                </label>
                <label for="ProcessingFinishing" className="category_item category_item_img5">
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
                      onChange={handleChange}
                    />
                    <label for="ProcessingFinishing"></label>
                  </div>
                </label>
                <label for="ServiceProviders" className="category_item category_item_img6">
                  <div className="category_item_text">
                    <h3>Service Providers</h3>
                    <p>
                      Freight forwarders, inspection agencies, banks, certifying
                      agencies
                    </p>
                  </div>
                  <div className="category_item_radio">
                    <input
                      type="radio"
                      id="ServiceProviders"
                      name="category"
                      value="ServiceProviders"
                      onChange={handleChange}
                    />
                    <label for="ServiceProviders"></label>
                  </div>
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="category_btn_section pt-4">
          <div className="category_btn">
            {/*<Link to="createaccount"> 
              <div className="category_next_btn1">
                <BsChevronLeft className="category_BsChevronLeft" />
                <span>Back </span>
              </div>
            </Link>*/}
            <div>
              <div className="category_next_btn2" style={{display:Visibility}} onClick={setCategory}>
                <span>Next </span>
                <BsChevronRight className="category_BsChevronRight" />
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Category;
