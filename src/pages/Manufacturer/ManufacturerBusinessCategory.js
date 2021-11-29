import React, { useState } from "react";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ManufacturerBusinessCategory.css";
import { BsChevronRight } from "react-icons/bs";

function ManufacturerBusinessCategory() {
  const [Visibility, setVisibility] = useState("none");
  const [selectedOption, setselectedOption] = useState(null);

  const handleChange = (e) => {
    setselectedOption(e.target.value);
    if (e.target.value) {
      setVisibility("");
    }
  };
  // console.log(selectedOption)

  return (
    <>
      <div className="category_body">
        <div className="category_container">
          <div className="choose_category_head">
            <h1>Choose your business category</h1>
            <Link to="/manufacturertypes">
              <div
                className="category_next_btn"
                style={{ display: Visibility }}
              >
                <span>Next </span>
                <BsChevronRight className="BsChevronRight" />
              </div>{" "}
            </Link>
          </div>
          <div className="category_section">
            <div class="category_item_section">
              <div className="category_item category_item_img1">
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
              </div>
              <div className="category_item category_item_img2">
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
              </div>
              <div className="category_item category_item_img3">
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
              </div>
            </div>
            <div class="category_item_section">
              <div className="category_item category_item_img4">
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
              </div>
              <div className="category_item category_item_img5">
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
              </div>
              <div className="category_item category_item_img6">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{display:"flex"}}>
      <Link to="/manufacturertypes">
              <div
                className="category_next_btn"
                style={{ visibility: Visibility }}
              >
                <span>Next </span>
                <BsChevronRight className="BsChevronRight" />
              </div>{" "}
            </Link>
      </div> */}
    </>
  );
}

export default ManufacturerBusinessCategory;
