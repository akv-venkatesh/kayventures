import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ManufacturerTypes.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import bag from "../../assets/icons/bag.svg";
import { Link } from "react-router-dom";

function ManufacturerTypes() {
  

  const [Visibility, setVisibility] = useState("none");
  const [selectedOption, setselectedOption] = useState(null);

  const handleChange = (e) => {
    setselectedOption(e.target.value);
    if (e.target.value) {
      setVisibility("");
    }
  };
  return (
    <>
    <div className="Manufacturertypes_category" >
      <div className="Manufacturertypes_category_body">
        <div className="Manufacturertypes_category_container">
          <div className="Manufacturertypes_choose_category_head">
            <h1>We are</h1>
          </div>
          <div className="Manufacturertypes_category_section">
            <div class="Manufacturertypes_category_item_section">
              <div className="Manufacturertypes_category_item ">
                <img src={bag} />
                <h1>Spinning</h1>
                <div className="Manufacturertypes_category_item_radio">
                  <input
                    type="radio"
                    id="Spinning"
                    name="category"
                    value="Spinning"
                    onChange={handleChange}
                  />
                  <label for="Spinning"></label>
                </div>
              </div>
              <div className="Manufacturertypes_category_item ">
                <img src={bag} />
                <h1>Knitting </h1>
                <div className="Manufacturertypes_category_item_radio">
                  <input
                    type="radio"
                    id="Knitting"
                    name="category"
                    value="Knitting"
                    onChange={handleChange}
                  />
                  <label for="Knitting"></label>
                </div>
              </div>
            </div>
            <div class="Manufacturertypes_category_item_section">
              <div className="Manufacturertypes_category_item ">
                <img src={bag} />
                <h1>Weaving</h1>
                <div className="Manufacturertypes_category_item_radio">
                  <input
                    type="radio"
                    id="Weaving"
                    name="category"
                    value="Weaving"
                    onChange={handleChange}
                  />
                  <label for="Weaving"></label>
                </div>
              </div>
              <div className="Manufacturertypes_category_item ">
                <img src={bag} />
                <h1>Sewing</h1>
                <div className="Manufacturertypes_category_item_radio">
                  <input
                    type="radio"
                    id="Sewing"
                    name="category"
                    value="Sewing"
                    onChange={handleChange}
                  />
                  <label for="Sewing"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Manufacturertypes_category_btn_section">
        <div className="Manufacturertypes_category_btn">
          <Link to="/manufacturerbusinesscategory"><div className="Manufacturertypes_category_next_btn1">
            <BsChevronLeft className="Manufacturertypes_category_BsChevronLeft" />
            <span>Back </span>
          </div></Link>
          <Link to="/manufacturerprimarydetails" style={{display:Visibility}}>
            <div className="Manufacturertypes_category_next_btn2">
              <span>Next </span>
              <BsChevronRight className="Manufacturertypes_category_BsChevronRight" />
            </div>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}

export default ManufacturerTypes;
