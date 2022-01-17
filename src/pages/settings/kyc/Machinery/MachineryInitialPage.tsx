import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {
    Nextbutton,
    DisableNextbutton,
} from "../../../../component/buttons/button";
import "./machinery.css";

import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Button } from 'react-bootstrap';
import Machinery from './Machinery';
import stepper from '../../../../component/stepper/stepper';
import { AiFillCaretRight } from 'react-icons/ai';

interface initialState {
    visibility: boolean;
    HomePage: boolean;
    selectedOption: string;
}
interface typeProps {

}

export class MachineryInitialPage extends Component<typeProps, initialState> {
    constructor(props: any) {
        super(props);

        this.state = {
            visibility: false,
            HomePage: true,
            selectedOption: "",
        };
    }
    handleChange = (e: any) => {
        this.setState({ selectedOption: e.target.value });
        if (e.target.value) {
            this.setState({ visibility: true });
        }
    };
    changeMachineryStart = () => {
        this.setState({
            HomePage: false,
        })
    }

    render() {
        console.log(this.state.selectedOption)
        return (

            <div>
                {this.state.HomePage ?
                    (<div>
                        <div className='my-3'>
                            -----
                        </div >
                        <div className='box-field-area p-3'>
                            <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                                <PerfectScrollbar>
                                    <div className='box-field-area-title d-flex flex-column justify-content-center align-items-center my-5'>
                                        <span >Select the manufacturing activity to complete the machinery selection</span>
                                    </div>
                                    <div className='Machinery_area d-flex'>
                                        {/* body */}

                                        <div className="Machinery_product">
                                            <div className="Machinery_product_field ">
                                                <label htmlFor="Sewing" className="product_field">
                                                    <div className="product_field_item">
                                                        {/* <img src={Tshert} /> */}
                                                        <span className={this.state.selectedOption === 'Sewing' ? 'selected' : 'unselected'}>Sewing</span>
                                                    </div>
                                                    <div>
                                                        <div className="product_field_circle">
                                                            <input
                                                                type="radio"
                                                                id="Sewing"
                                                                name="Weaving"
                                                                value="Sewing"
                                                                onChange={this.handleChange}
                                                                data-testid="inputcheck1"
                                                            />
                                                            <label htmlFor="Sewing"></label>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>

                                        {/* body */}
                                        {/* body */}

                                        <div className="Machinery_product">
                                            <div className="Machinery_product_field ">
                                                <label htmlFor="Spinning" className="product_field">
                                                    <div className="product_field_item">
                                                        {/* <img src={Tshert} /> */}
                                                        <span className={this.state.selectedOption === 'Spinning' ? 'selected' : 'unselected'}>Spinning</span>
                                                    </div>
                                                    <div>
                                                        <div className="product_field_circle">
                                                            <input
                                                                type="radio"
                                                                id="Spinning"
                                                                name="Weaving"
                                                                value="Spinning"
                                                                onChange={this.handleChange}
                                                                data-testid="inputcheck"
                                                            />
                                                            <label htmlFor="Spinning"></label>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>

                                        {/* body */}
                                        {/* body */}

                                        <div className="Machinery_product">
                                            <div className="Machinery_product_field ">
                                                <label htmlFor="Weaving" className="product_field">
                                                    <div className="product_field_item">
                                                        {/* <img src={Tshert} /> */}
                                                        <span className={this.state.selectedOption === 'Weaving' ? 'selected' : 'unselected'}>Weaving</span>
                                                    </div>
                                                    <div>
                                                        <div className="product_field_circle">
                                                            <input
                                                                type="radio"
                                                                id="Weaving"
                                                                name="Weaving"
                                                                value="Weaving"
                                                                onChange={this.handleChange}
                                                                data-testid="inputcheck"
                                                            />
                                                            <label htmlFor="Weaving"></label>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>

                                        {/* body */}
                                        {/* body */}

                                        <div className="Machinery_product">
                                            <div className="Machinery_product_field ">
                                                <label htmlFor="Knitting" className="product_field">
                                                    <div className="product_field_item">
                                                        {/* <img src={Tshert} /> */}
                                                        <span className={this.state.selectedOption === 'Knitting' ? 'selected' : 'unselected'} >Knitting</span>
                                                    </div>
                                                    <div>
                                                        <div className="product_field_circle">
                                                            <input
                                                                type="radio"
                                                                id="Knitting"
                                                                name="Weaving"
                                                                value="Knitting"
                                                                onChange={this.handleChange}
                                                                data-testid="inputcheck"
                                                            />
                                                            <label htmlFor="Knitting"></label>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>

                                        {/* body */}


                                    </div>
                                </PerfectScrollbar>
                                <div className="productconfigutation_button">
                                    <div></div>
                                    {/* <div>There are no machines defined under Spinning, Weaving, Knitting</div> */}
                                    <div className="next_btn"  >



                                        <div className="d-flex">
                                            <button
                                                type="submit"
                                                data-testid="nextbuttonelement"
                                                className="btn btn-next next"
                                                disabled={!this.state.visibility}
                                                onClick={this.changeMachineryStart}
                                            >Next&emsp;<AiFillCaretRight />
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) :
                    (<div>
                        <Machinery machineProps={this.state.selectedOption} />
                    </div>)
                }

            </div>

        )
    }
}

export default MachineryInitialPage
