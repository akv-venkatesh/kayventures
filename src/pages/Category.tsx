import React, { ChangeEvent, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Category.css";
import axios from "axios";
import {
  Backbutton,
  Nextbutton,
  DisableNextbutton,
} from "../component/buttons/button";
import buttonarrowright from "../assets/icons/arrows/buttonarrowright.svg";

import { setBusinessCategory, getBusinessCategory } from "../actions/business_category/business_category";
import { useDispatch, useSelector, connect } from "react-redux";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Component } from "react";
import store from '../store/store';
import { Button } from "react-bootstrap";

interface typeState {
  Visibility: boolean;
  Category: string;
  selectedOption: string;
  categoryList?: any,
  typeList?: any,
  gettypes: boolean,
}
interface typeProps {
  getBusinessCategory: () => void;
  setBusinessCategory: (arg: string) => void;
}
class Category extends Component<typeProps, typeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      Visibility: false,
      Category: "",
      selectedOption: "",
      categoryList: {},
      gettypes: false,
      typeList: {}
    };

    store.subscribe(() => {
      this.setState({
        categoryList: store.getState().businesscategory,
      });
    });
  }

  componentDidMount() {
    this.props.getBusinessCategory();
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) {
      this.setState({ Visibility: true });
    }
    this.setState({ selectedOption: e.currentTarget.value });
    this.props.setBusinessCategory(e.currentTarget.value);
  };

  setCategory = (e: any) => {
    e.preventDefault();
    this.setState({
      gettypes: true
    })
  };

  render(): JSX.Element {
    if (this.state.gettypes == true) {
      return <Navigate to="/types" state={this.state.categoryList} />;
    }
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
                    {this.state.categoryList.business_category ? (
                      this.state.categoryList.business_category.map((data: any) => {
                        return (
                          <label
                            key={'category' + data.id}
                            htmlFor={'category' + data.id}
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
                                id={'category' + data.id}
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
              <div className="category_btn_section pt-4">
                <div className="category_btn">
                  <Backbutton link="/createaccount" />
                  <div>
                    {this.state.Visibility ?
                      <Button type="submit" className="cbtn next_btn">
                        <span>Next </span>
                        <img src={buttonarrowright} className="next_btn_right" />
                      </Button> :
                      <DisableNextbutton />
                    }
                  </div>
                </div>
              </div>
            </form>
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
    setBusinessCategory: (category: number) => {
      console.log(category);
      dispatch(setBusinessCategory(category));
    },
    getBusinessCategory: () => {
      dispatch(getBusinessCategory('all'));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
// export default Category;