import React, { ChangeEvent, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import Tshert from "../../../assets/icons/tshert.svg";
import blackTshert from "../../../assets/icons/blackTshert.svg";
import { RiInformationFill } from "react-icons/ri";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
import { Field } from "formik";
import Stepper from '../../../component/stepper/stepper'
import {
  Nextbutton,
  DisableNextbutton,
} from "../../../component/buttons/button";

interface typeState {
 
}
interface typeProps {
  handleChange:any,
  nextPageChange:any,
 state:any
}
class ProductConfiguration extends Component<typeProps, typeState> {
  constructor(props: any) {
    super(props);
   }
 render(): JSX.Element {
    const steps = [{ label: 'KYC', id: 0 }, { label: 'Product Selection', id: 1 }, { label: 'Machinery', id: 2 }, { label: 'Operations', id: 3 }]
    const {handleChange,nextPageChange,state} = this.props;
    return (
      <> <div>
        <div className='my-1  '>
          <Stepper steps={steps} activeStep={1} />
        </div >
        <div className="productconfiguration_body">
          <div className="productconfiguration_container">
            <div className="productconfigutation_head">
              <h1>Choose your product category</h1>
            </div>

            <div className="productconfigutation_productlist">

              <PerfectScrollbar>

                {/* body */}
                <div className="productconfigutation_product_body">
                  <div className="productconfigutation_product_title">
                    <h1>Spinning</h1>
                    <div className="productconfigutation_product">
                      <div className="productconfigutation_product_field">
                        <label htmlFor="Weaving5" className="product_field">
                          <div className="product_field_item">
                          {state.selectedOption === 'Yarn'?<img src={Tshert} />:<img src={blackTshert} />}
                            <span>Yarn</span>
                          </div>
                          <div>
                            <div className="product_field_circle">
                              <input
                                type="radio"
                                id="Weaving5"
                                name="Weaving"
                                value="Yarn"
                                onChange={handleChange}
                              />
                              <label htmlFor="Weaving5"></label>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* body */}
                {/* body */}
                <div className="productconfigutation_product_body">
                  <div className="productconfigutation_product_title">
                    <h1>Sewing</h1>
                    <div className="productconfigutation_product">
                      <div className="productconfigutation_product_field">
                        <label htmlFor="Weaving2" className="product_field">
                          <div className="product_field_item">
                          {state.selectedOption ==='Garment  ' ?<img src={Tshert} />:<img src={blackTshert} />}
                            <span>Garment</span>
                          </div>
                          <div>
                            <div className="product_field_circle">
                              <input
                                type="radio"
                                id="Weaving2"
                                name="Weaving"
                                value="Garment"
                                onChange={handleChange}
                              />
                              <label htmlFor="Weaving2"></label>
                            </div>
                          </div>
                        </label>
                        <label htmlFor="Weaving1" className="product_field">
                          <div className="product_field_item">
                          {state.selectedOption ?<img src={Tshert} />:<img src={blackTshert} />}
                            <span>Home Furnishing</span>
                          </div>
                          <div>
                            <div className="product_field_circle">
                              <input
                                type="radio"
                                id="Weaving1"
                                name="Weaving"
                                value="Home Furnishing"
                                onChange={handleChange}
                              />
                              <label htmlFor="Weaving1"></label>
                            </div>
                          </div>
                        </label>
                        <label htmlFor="Waving" className="product_field">
                          <div className="product_field_item">
                          {state.selectedOption ?<img src={Tshert} />:<img src={blackTshert} />}
                            <span>MadeUps</span>
                          </div>
                          <div>
                            <div className="product_field_circle">
                              <input
                                type="radio"
                                id="Waving"
                                name="Weaving"
                                value="MadeUps"
                                onChange={handleChange}
                              />
                              <label htmlFor="Waving"></label>
                            </div>
                          </div>
                        </label>
                        <label htmlFor="Weavng" className="product_field">
                          <div className="product_field_item">
                          {state.selectedOption ?<img src={Tshert} />:<img src={blackTshert} />}
                            <span>Floor Covering</span>
                          </div>
                          <div>
                            <div className="product_field_circle">
                              <input
                                type="radio"
                                id="Weavng"
                                name="Weaving"
                                value="Floor Covering"
                                onChange={handleChange}
                              />
                              <label htmlFor="Weavng"></label>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* body */}
                {/* body */}
                <div className="productconfigutation_product_body">
                  <div className="productconfigutation_product_title">
                    <h1>Weaving</h1>
                    <div className="productconfigutation_product">
                      <div className="productconfigutation_product_field">
                        <label htmlFor="Weavin" className="product_field">
                          <div className="product_field_item">
                          {state.selectedOption ?<img src={Tshert} />:<img src={blackTshert} />}
                            <span>Weaving Faabric</span>
                          </div>
                          <div>
                            <div className="product_field_circle">
                              <input
                                type="radio"
                                id="Weavin"
                                name="Weaving"
                                value="Weaving Faabric"
                                onChange={handleChange}
                              />
                              <label htmlFor="Weavin"></label>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* body */}
                {/* body */}
                <div className="productconfigutation_product_body">
                  <div className="productconfigutation_product_title">
                    <h1>Knitting</h1>
                    <div className="productconfigutation_product">
                      <div className="productconfigutation_product_field">
                        <label htmlFor="Weavin6" className="product_field">
                          <div className="product_field_item">
                            {state.selectedOption ?<img src={Tshert} />:<img src={blackTshert} />}
                            <span>Kinitted Faabric</span>
                          </div>
                          <div>
                            <div className="product_field_circle">
                              <input
                                type="radio"
                                id="Weavin6"
                                name="Weaving"
                                value="Kinitted Faabric"
                                onChange={handleChange}
                              />
                              <label htmlFor="Weavin6"></label>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* body */}
                </PerfectScrollbar>
            </div>

            <div className="productconfigutation_button">
              <div></div>
              <div className="next_btn">
                {/* <Nextbutton /> */}
                {state.visibility ? (
                  //   <Link to="/primarydetails">
                  <Nextbutton onClick={nextPageChange} />
                  //   </Link>
                ) : (
                  <DisableNextbutton />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
export default ProductConfiguration;
