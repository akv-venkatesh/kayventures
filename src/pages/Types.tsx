import React, { ChangeEvent, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Types.css";
import {
  Backbutton,
  Nextbutton,
  DisableNextbutton,
} from "../component/buttons/button";
import { useDispatch, useSelector, connect } from "react-redux";
import { Button } from "react-bootstrap";
import buttonarrowright from "../assets/icons/arrows/buttonarrowright.svg";

import bag from "../assets/icons/bag.svg";
import { Link, Navigate } from "react-router-dom";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import store from "../store/store";
import { setTypes } from "../actions/business_category/business_category";
import { parse } from "path";

interface typeState {
  visibility: boolean,
  gettypes: boolean,
  selectedOption: string,
  types: any,
  subcategory: String[],
  redirectSuccess: boolean,
}
interface typeProps {
  // setTypes: () => void;
  setTypes: (arg: any[]) => void;
}
class Types extends Component<typeProps, typeState> {
  constructor(props: any) {

    super(props);
    // console.log(props);
    this.state = {
      visibility: false,
      selectedOption: '',
      types: props,
      gettypes: false,
      subcategory: [],
      redirectSuccess: false,

    }

  }
  componentDidMount() {
  }
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    this.setState({ selectedOption: e.target.value });
    let newArray = [...this.state.subcategory, e.target.id];
    if (this.state.subcategory.includes(e.target.id)) {
      newArray = newArray.filter(day => day !== e.target.id);
    }
    if (newArray.length > 0) {
      this.setState({ visibility: true });

    } else {
      this.setState({ visibility: false });
    }
    this.setState({
      subcategory: newArray
    });
    let result = newArray;
    this.props.setTypes(result);
    localStorage.setItem("business_category_types", JSON.stringify(result));
  };
  redirect = () => {
    this.setState({
      redirectSuccess: true,
    });
  };

  redirectNext = () => {
    this.setState({
      gettypes: true,
    });
  };



  render(): JSX.Element {


    if (this.state.gettypes == true) {

      return <Navigate to="/primarydetails" />;
    }
    if (this.state.redirectSuccess === true) {
      return <Navigate to="/category" />
    }


    let types: any = localStorage.getItem("business_category");
    let type = JSON.parse(types);
    // console.log(type.business_category[0]);
    localStorage.setItem("business_category_name", type.business_category[parseInt(type.business_category_single) - 1].name);
    return (
      <>
        <div className="Types_category">
          <div className="Types_category_body ">
            <div className="Types_category_container py-4">
              <div className="Types_choose_category_head">
                <h1>Choose the type</h1>
              </div>
              <PerfectScrollbar>
                <form >
                  <div className="Types_category_section px-5">
                    <div className="Types_category_section_container">
                      <div className="Types_category_type">
                        { }
                        <label
                          htmlFor="Manufacturer"
                          className="m_category_item m_category_item_img1"
                        >
                          <div className="m_category_item_text">
                            <h3>{type.business_category[parseInt(type.business_category_single) - 1].name}</h3>
                            <p>{type.business_category[parseInt(type.business_category_single) - 1].description}</p>
                          </div>
                          <div className="m_category_item_radio">
                            <input
                              type="checkbox"
                              // id="Manufacturer"
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

                          Object.entries(type).length !== 0 ? (
                            type.business_category[parseInt(type.business_category_single) - 1].children.map((data: any, index: number) => {

                              if (data.id !== 1) {

                                return (
                                  <label 
                                  data-testid={"checkbox"}
                                  htmlFor={data.id} key={data.id} className="Types_category_item ">
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
                          )
                            : (
                              <div></div>
                            )
                        }
                      </div>
                    </div>
                  </div>
                </form>
              </PerfectScrollbar>
              <div className="Types_category_btn_section pt-4 px-5">
                <div className="Types_category_btn w-100">
                  <Backbutton  onClick={this.redirect} />
                  <div>
                    {this.state.visibility ? (
                      <Nextbutton onClick={this.redirectNext} />
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

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    setTypes: (Types: any) => {
      // console.log(Types);
      dispatch(setTypes(Types));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Types);

