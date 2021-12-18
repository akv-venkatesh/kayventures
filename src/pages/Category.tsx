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
  categoryList:any
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
      categoryList:props.businesscategory.business_category,
    };
<<<<<<< HEAD

    }
=======
  }
>>>>>>> a9db7dd5413d03cfa727c8aab6e0d3ac8a7c015e

  componentDidMount() {
    this.props.getBusinessCategory();
    // this.setState({ categoryList.push(props.businesscategory.business_category) })
    // console.log("api done"+this.state.categoryList);
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    if (e.currentTarget.value) {
      this.setState({ Visibility: true });
      this.props.setBusinessCategory();
      localStorage.setItem("business_category", e.currentTarget.value);
    }
    this.setState({ selectedOption: e.currentTarget.value });
    // console.log("demo", this.state.selectedOption);
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
                  {this.state.categoryList ? (
                    this.state.categoryList.map((data:any) => {
                      // var type: any = data;
                      // console.log("Inner Map"+data);
                      return (
                        <label
                          htmlFor={data.id}
                          className="category_item "
                          style={{ backgroundImage: `url(${data.imageUrl})` }}
                        >
                          <div className="category_item_text">
                            <h3>{data.name}</h3>
                            <p>{data.description}</p>
                          </div>
                          <div className="category_item_radio">
                            <input
                              type="radio"
                              id={data.id}
                              name="category"
                              value={data.id}
                              onChange={this.handleChange}
                            />
                            <label htmlFor={data.id}></label>
                          </div>
                        </label>
                      );
                    })
                  ) : (
                    <div></div>
                  )}
                   
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