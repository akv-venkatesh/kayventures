import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BuyerTypes.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import bag from "../../assets/icons/bag.svg";
import { Link } from "react-router-dom";

function BuyerTypes() {
  const [selectedOption, setselectedOption] = useState(null);
  const [Visibility, setVisibility] = useState("none");
  const handleChange = (e) => {
    setselectedOption(e.target.value);
    if (e.target.value) {
      setVisibility("");
    }
  };
  return (
    <>
      <div className="Buyertypes_category">
        <div className="Buyertypes_category_body">
          <div className="Buyertypes_category_container py-4">
            <div className="Buyertypes_choose_category_head">
              <h1 className="m-0">We are</h1>
            </div>
            <div className="Buyertypes_category_section">
              <div className="Buyertypes_category_item_section">
                <label  for="RetailChain" className="Buyertypes_category_item ">
                  <img src={bag} />
                  <h1>Retail Chain</h1>
                  <div className="Buyertypes_category_item_radio">
                    <input
                      type="radio"
                      id="RetailChain"
                      name="category"
                      value="RetailChain"
                      onChange={handleChange}
                    />
                    <label for="RetailChain"></label>
                  </div>
                </label>
                <label for="SpecialityChain" className="Buyertypes_category_item ">
                  <img src={bag} />
                  <h1>Speciality Chain</h1>
                  <div className="Buyertypes_category_item_radio">
                    <input
                      type="radio"
                      id="SpecialityChain"
                      name="category"
                      value="SpecialityChain"
                      onChange={handleChange}
                    />
                    <label for="SpecialityChain"></label>
                  </div>
                </label>
                <label for="RegionalChain" className="Buyertypes_category_item ">
                  <img src={bag} />
                  <h1>Regional Chain </h1>
                  <div className="Buyertypes_category_item_radio">
                    <input
                      type="radio"
                      id="RegionalChain"
                      name="category"
                      value="Knitting"
                      onChange={handleChange}
                    />
                    <label for="RegionalChain"></label>
                  </div>
                </label>
              </div>
              <div className="Buyertypes_category_item_section">
                <label for="DepatmentalStore" className="Buyertypes_category_item ">
                  <img src={bag} />
                  <h1>Depatmental Store</h1>
                  <div className="Buyertypes_category_item_radio">
                    <input
                      type="radio"
                      id="DepatmentalStore"
                      name="category"
                      value="DepatmentalStore"
                      onChange={handleChange}
                    />
                    <label for="DepatmentalStore"></label>
                  </div>
                </label>
                <label for="Standalonestoreretailer" className="Buyertypes_category_item ">
                  <img src={bag} />
                  <h1>Standalone store retailer</h1>
                  <div className="Buyertypes_category_item_radio">
                    <input
                      type="radio"
                      id="Standalonestoreretailer"
                      name="category"
                      value="Standalonestoreretailer"
                      onChange={handleChange}
                    />
                    <label for="Standalonestoreretailer"></label>
                  </div>
                </label>
                <label for="GlobaBrand" className="Buyertypes_category_item ">
                  <img src={bag} />
                  <h1>Globa Brand </h1>
                  <div className="Buyertypes_category_item_radio">
                    <input
                      type="radio"
                      id="GlobaBrand"
                      name="category"
                      value="GlobaBrand"
                      onChange={handleChange}
                    />
                    <label for="GlobaBrand"></label>
                  </div>
                </label>
              </div>
              <div className="Buyertypes_category_item_section">
                <label for="Spinning" className="Buyertypes_category_item ">
                  <img src={bag} />
                  <h1>Spinning</h1>
                  <div className="Buyertypes_category_item_radio">
                    <input
                      type="radio"
                      id="Spinning"
                      name="category"
                      value="Spinning"
                      onChange={handleChange}
                    />
                    <label for="Spinning"></label>
                  </div>
                </label>
                <label for="Spinnin" className="Buyertypes_category_item ">
                  <img src={bag} />
                  <h1>Spinning</h1>
                  <div className="Buyertypes_category_item_radio">
                    <input
                      type="radio"
                      id="Spinnin"
                      name="category"
                      value="Spinnin"
                      onChange={handleChange}
                    />
                    <label for="Spinnin"></label>
                  </div>
                </label>
                <label for="Knitting" className="Buyertypes_category_item ">
                  <img src={bag} />
                  <h1>Spinning </h1>
                  <div className="Buyertypes_category_item_radio">
                    <input
                      type="radio"
                      id="Knitting"
                      name="category"
                      value="Knitting"
                      onChange={handleChange}
                    />
                    <label for="Knitting"></label>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="Buyertypes_category_btn_section pt-4">
            <div className="Buyertypes_category_btn">
            <Link to="category"> <div className="Buyertypes_category_next_btn1">
                <BsChevronLeft className="Buyertypes_category_BsChevronLeft" />
                <span>Back </span>
              </div>
              </Link>
              <Link to="buyerprimarydetails" style={{ display: Visibility }}>
                <div className="Buyertypes_category_next_btn2">
                  <span>Next </span>
                  <BsChevronRight className="Buyertypes_category_BsChevronRight" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyerTypes;
