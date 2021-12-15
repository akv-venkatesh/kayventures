import React, { ChangeEvent, useState ,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Category.css";
import axios from "axios";
import {
  Backbutton,
  Nextbutton,
  DisableNextbutton,
} from "../component/buttons/button";
// // import Backarrow from '../assets/icons/buttonarrowleft.svg'
// import buttonarrowleft from "../assets/icons/arrows/buttonarrowleft.svg";
// import buttonarrowright from "../assets/icons/arrows/buttonarrowright.svg";
// import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
// import { RiArrowLeftSFill } from "react-icons/ri";

import { setBusinessCategory } from "../actions/business_category";
import { useDispatch, useSelector } from "react-redux";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
// RiArrowLeftSFill

function Category(): JSX.Element {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

  const [Visibility, setVisibility] = useState<boolean>(false);
  const [selectedOption, setselectedOption] = useState<string>("");
  const [category, setcategory] = useState([]);

  useEffect(() => {
    axios.get(`http://kv-stage-1013818088.ap-south-1.elb.amazonaws.com/user-management/business-group/all
    `)
    .then(res => {
      setcategory(res.data.data.businessGroups[0]) ;
      console.log( res.data.data.businessGroups[0]);
    })
  }, [])
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setselectedOption(e.currentTarget.value);
    if (e.currentTarget.value) {
      setVisibility(true);
      // dispatch(setBusinessCategory(selectedOption));
      // localStorage.setItem("business_category", selectedOption);
      dispatch(setBusinessCategory(e.currentTarget.value));
      localStorage.setItem("business_category", e.currentTarget.value);
    }
  };

  const setCategory = (): void => {
    dispatch(setBusinessCategory(selectedOption));
    localStorage.setItem("business_category", selectedOption);
    // history.push("/types");
  };
  

  return (
    <>
      <div className="category_body">
        <div className="category_container py-4">
          <div className="choose_category_head">
            <h1>Choose business category</h1>
          </div>
          <form onSubmit={setCategory}>
            <div className="category_section">
              <PerfectScrollbar
                onScrollY={(container) =>
                  console.log(`scrolled to: ${container.scrollTop}.`)
                }
              >
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
              <Link to="createaccount">
               <Backbutton  />
              </Link>
              <div>{Visibility ?   <Link to="/types"><Nextbutton  /></Link> : <DisableNextbutton  />}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
