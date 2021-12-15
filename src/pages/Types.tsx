import React, { ChangeEvent, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Types.css";
import {
  Backbutton,
  Nextbutton,
  DisableNextbutton,
} from "../component/buttons/button";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import bag from "../assets/icons/bag.svg";
import { Link } from "react-router-dom";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

function ManufacturerTypes():JSX.Element {
  const [Visibility, setVisibility] = useState<boolean>(false);
  const [selectedOption, setselectedOption] = useState("");

  const [buyerTypes, setBuyerTypes] = useState([
    {
      type : 'Spinning',
      image : 'https://i.pinimg.com/originals/a5/28/96/a52896d05eefff947a92e05346ef1ba2.png',
    },
    {
      type : 'Knitting',
      image : 'https://i.pinimg.com/originals/a5/28/96/a52896d05eefff947a92e05346ef1ba2.png',
    },
    {
      type : 'Sewing',
      image : 'https://i.pinimg.com/originals/a5/28/96/a52896d05eefff947a92e05346ef1ba2.png',
    },
    {
      type : 'Weaving',
      image : 'https://i.pinimg.com/originals/a5/28/96/a52896d05eefff947a92e05346ef1ba2.png',
    }
  ]);
  const [mfgTypes, setMfgTypes] = useState([
    {
      type : 'mfgSpinning',
      image : 'https://i.pinimg.com/originals/a5/28/96/a52896d05eefff947a92e05346ef1ba2.png',
    },
    {
      type : 'Knitting',
      image : 'https://i.pinimg.com/originals/a5/28/96/a52896d05eefff947a92e05346ef1ba2.png',
    },
    {
      type : 'Sewing',
      image : 'https://i.pinimg.com/originals/a5/28/96/a52896d05eefff947a92e05346ef1ba2.png',
    },
    {
      type : 'Weaving',
      image : 'https://i.pinimg.com/originals/a5/28/96/a52896d05eefff947a92e05346ef1ba2.png',
    }
  ]);

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setselectedOption(e.target.value);
    if (e.target.value) {
      setVisibility(true);
    }
  };
  return (
    <>
      <div className="Manufacturertypes_category">
        <div className="Manufacturertypes_category_body">
          <div className="Manufacturertypes_category_container py-4">
            <div className="Manufacturertypes_choose_category_head px-5">
              <h1>We are</h1>
            </div>
            <div className="Manufacturertypes_category_section px-3">
              <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>
                <div className="Manufacturertypes_category_item_section">
                  {
                    localStorage.getItem('business_category')=='Buyer'?
                      buyerTypes.map((type, i)=>(
                        <label htmlFor={type.type} className="Manufacturertypes_category_item ">
                          <img src={type.image} />
                          <h1>{type.type}</h1>
                          <div className="Manufacturertypes_category_item_radio">
                            <input
                              type="radio"
                              id={type.type}
                              name="category"
                              value={type.type}
                              onChange={handleChange}
                            />
                            <label htmlFor="{type.type}"></label>
                          </div>
                        </label>
                      )):
                      mfgTypes.map((type, i)=>(
                        <label htmlFor={type.type} className="Manufacturertypes_category_item ">
                          <img src={type.image} />
                          <h1>{type.type}</h1>
                          <div className="Manufacturertypes_category_item_radio">
                            <input
                              type="radio"
                              id={type.type}
                              name="category"
                              value={type.type}
                              onChange={handleChange}
                            />
                            <label htmlFor="{type.type}"></label>
                          </div>
                        </label>
                      ))
                  }
                </div>
              </PerfectScrollbar>
            </div>
          </div>
          <div className="Manufacturertypes_category_btn_section pt-4">
            <div className="Manufacturertypes_category_btn w-100">
              <Link to="/category">
              <Backbutton  />
              </Link>
              {/* <Link
                to="/primarydetails"
                style={{ display: Visibility }}
              >
                
              </Link> */}
              <div>{Visibility ?   <Link to="/primarydetails"><Nextbutton  /></Link> : <DisableNextbutton  />}</div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManufacturerTypes;
