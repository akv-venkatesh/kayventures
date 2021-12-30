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


import { setBusCategory, getBusinessCategory } from "../actions/business_category/business_category";
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
  redirectSuccess:boolean,
}
interface typeProps {
  getBusinessCategory: () => void;
  setBusCategory: (arg: string) => void;
}
class Category extends Component<typeProps, typeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      Visibility: false,
      Category: "",
      selectedOption: "",
      redirectSuccess:false,
      categoryList: {},
      gettypes: false,
      typeList: {}
    };
console.log(props);
    store.subscribe(() => {
      this.setState({
        categoryList: store.getState().businesscategory,
      });
     
    });
  }

  componentDidMount() {
    this.props.getBusinessCategory();
  //   this.setState({categoryList:{business_category:[
  //     {
  //         "id": 1,
  //         "name": "Manufacturer",
  //         "description": "Apparel, Fabric, Yarn, Fibre",
  //         "imageUrl": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
  //         "imageDetails": {
  //             "key": "s3-manufacturer-key",
  //             "name": "manufacturer.jpeg",
  //             "value": {
  //                 "url": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
  //                 "size": "1MB",
  //                 "width": "100px",
  //                 "height": "100px",
  //                 "imageType": "jpeg"
  //             }
  //         },
  //         "parentId": null,
  //         "hierarchyLevel": 1,
  //         "createdAt": "2021-12-27T07:04:52.597Z",
  //         "updatedAt": "2021-12-27T07:04:52.597Z",
  //         "children": [
  //             {
  //                 "id": 3,
  //                 "name": "Fabric",
  //                 "description": "Apparel, Fabric, Yarn, Fibre",
  //                 "imageUrl": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
  //                 "imageDetails": {
  //                     "key": "s3-buyer-key",
  //                     "name": "buyer.jpeg",
  //                     "value": {
  //                         "url": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
  //                         "size": "1MB",
  //                         "width": "100px",
  //                         "height": "100px",
  //                         "imageType": "jpeg"
  //                     }
  //                 },
  //                 "parentId": 1,
  //                 "hierarchyLevel": 2,
  //                 "createdAt": "2021-12-27T07:05:23.052Z",
  //                 "updatedAt": "2021-12-27T07:05:23.052Z"
  //             },
  //             {
  //                 "id": 4,
  //                 "name": "Yarn",
  //                 "description": "Apparel, Fabric, Yarn, Fibre",
  //                 "imageUrl": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
  //                 "imageDetails": {
  //                     "key": "s3-buyer-key",
  //                     "name": "buyer.jpeg",
  //                     "value": {
  //                         "url": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
  //                         "size": "1MB",
  //                         "width": "100px",
  //                         "height": "100px",
  //                         "imageType": "jpeg"
  //                     }
  //                 },
  //                 "parentId": 1,
  //                 "hierarchyLevel": 2,
  //                 "createdAt": "2021-12-27T07:05:29.896Z",
  //                 "updatedAt": "2021-12-27T07:05:29.896Z"
  //             },
  //             {
  //                 "id": 5,
  //                 "name": "Fibre",
  //                 "description": "Apparel, Fabric, Yarn, Fibre",
  //                 "imageUrl": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
  //                 "imageDetails": {
  //                     "key": "s3-buyer-key",
  //                     "name": "buyer.jpeg",
  //                     "value": {
  //                         "url": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
  //                         "size": "1MB",
  //                         "width": "100px",
  //                         "height": "100px",
  //                         "imageType": "jpeg"
  //                     }
  //                 },
  //                 "parentId": 1,
  //                 "hierarchyLevel": 2,
  //                 "createdAt": "2021-12-27T07:05:34.328Z",
  //                 "updatedAt": "2021-12-27T07:05:34.328Z"
  //             }
  //         ]
  //     },
  //     {
  //         "id": 2,
  //         "name": "Buyer",
  //         "description": "Apparel, Fabric, Yarn, Fibre",
  //         "imageUrl": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
  //         "imageDetails": {
  //             "key": "s3-buyer-key",
  //             "name": "buyer.jpeg",
  //             "value": {
  //                 "url": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
  //                 "size": "1MB",
  //                 "width": "100px",
  //                 "height": "100px",
  //                 "imageType": "jpeg"
  //             }
  //         },
  //         "parentId": null,
  //         "hierarchyLevel": 1,
  //         "createdAt": "2021-12-27T07:05:10.892Z",
  //         "updatedAt": "2021-12-27T07:05:10.892Z"
  //     }
  // ]}}
  // )
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) {
      this.setState({ Visibility: true });
    }
    this.setState({ selectedOption: e.currentTarget.value });
    this.props.setBusCategory(e.currentTarget.value);
  };

  setCategory = (e: any) => {
    e.preventDefault();
    this.setState({
      gettypes: true
    })
  };
  redirect = () => {
    this.setState({
      redirectSuccess: true,
    });
  };
  render(): JSX.Element {
    if (this.state.gettypes == true) {
      localStorage.setItem("business_category", JSON.stringify(this.state.categoryList));
      return <Navigate to="/types" state={this.state.categoryList} />;
    }
    if (this.state.redirectSuccess === true) {
      return <Navigate to="/createaccount" />
    }
    return (
      <>

        <div className="category_body"  >

          <div className="category_container py-4">
            <div className="choose_category_head">
              <h1>Choose business category</h1>
            </div>
            <form onSubmit={this.setCategory}>
              <div className="category_section">
                <PerfectScrollbar>
                  <div className="category_item_section flex-wrap" >
                    {this.state.categoryList.business_category ? (
                      this.state.categoryList.business_category.map((data: any) => {
                        return (
                          <label 
                        
                            key={'category' + data.id}
                            htmlFor={'category' + data.id}
                            className="category_item "
                            style={{ backgroundImage:
                               `url(https://www.pannaiyarbiriyani.com/kayventures/demo/static/media/1.4f4bf3e1.png)` 
                              //  `url(${data.imageUrl})` 
                            }}
                          >
                            <div className="category_item_text">
                              <h3>{data.name}</h3>
                              <p>{data.description}</p>
                            </div>
                            <div className="category_item_radio">
                              <input   data-testid={"test"+ data.id}
                                type="radio"
                                id={'category' + data.id}
                                name="category"
                                value={data.id}
                                onChange={this.handleChange}
                              />
                              <label htmlFor={'category'+data.id}></label>
                            </div>
                          </label>
                        );
                      })
                    ) : (
                      <div>There is no Data</div>
                    )}

                  </div>
                </PerfectScrollbar>
              </div>
              <div className="category_btn_section pt-4">
                <div className="category_btn">
                  <Backbutton onClick={ this.redirect} />
                  <div>
                    {this.state.Visibility ?
                      <Button type="submit" className="cbtn next_btn">
                        <span>Next </span>
                        <img src={buttonarrowright} className="next_btn_right" />
                      </Button>:
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
    setBusCategory: (category: number) => {
      console.log(category);
      dispatch(setBusCategory(category));
    localStorage.setItem("business_category_id",JSON.stringify(category));

    },
    getBusinessCategory: () => {
      dispatch(getBusinessCategory('all'));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
// export default Category;