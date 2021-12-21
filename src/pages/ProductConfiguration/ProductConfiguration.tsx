import React from 'react';
import './ProductConfiguration.scss';
import { AiOutlineSkin, AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
class ProductConfiguration extends React.Component {
    render() {
        return (
            <div className="container mt-4">
                <div className="col-md-12">
                    <div className="list py-3 px-3 ">
                        <ul className="d-flex text-center w-50 m-auto position-relative">
                            <li className="px-5 active"><span>Product Selection</span></li>
                            <li className="px-5"><span>Capacity</span></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-12 mt-2">
                    <div className="row">
                        <div className="col-md-4">
                            <p className="sewing mt-4 mx-4">Sewing</p>
                            <div className="garments d-flex py-3 px-3 position-relative mt-4">
                                <label><AiOutlineSkin />&nbsp;Garments</label>
                                <label className="container gar-con">
                                    <input type="checkbox" checked />
                                    <span className="checkmark"></span>
                                </label>
                            </div>

                        </div>
                        <div className="col-md-8">
                            <div className="box pt-4 mt-2">
                                <p className="mb-4">Select</p>
                                <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>
                                    <div className="categories">
                                        <div className="row">
                                            <ul className="category col-md-6">
                                                <li className="w-100 mb-4"><span className="w-50">Woven</span>
                                                    <label className="container w-50">
                                                        <input type="checkbox" />
                                                        <span className="checkmark mt-2"></span>
                                                    </label>
                                                </li>
                                                <br />
                                                <li className="w-100"><span className="w-50">Women</span>
                                                    <label className="container w-50">
                                                        <input type="checkbox" />
                                                        <span className="checkmark mt-2"></span>
                                                    </label>
                                                </li>
                                            </ul>
                                            <ul className="category col-md-6">
                                                <li className="w-100 mb-4"><span className="w-50">Knitted</span>
                                                    <label className="container w-50">
                                                        <input type="checkbox" />
                                                        <span className="checkmark mt-2"></span>
                                                    </label></li>
                                                <br />
                                                <li className="w-100"><span className="w-50">Men</span>
                                                    <label className="container w-50">
                                                        <input type="checkbox" />
                                                        <span className="checkmark mt-2"></span>
                                                    </label></li>
                                            </ul>
                                        </div>
                                    </div>
                                </PerfectScrollbar>
                                <div className="col-md-12 pb-4">
                                    <div className="row ">
                                        <button type="button" className="btn btn-back mx-2 back"><AiFillCaretLeft />&emsp;Back</button>
                                        <button type="button" className="btn btn-default  mx-4 remove">Remove</button>
                                        <button type="button" className="btn btn-default  mx-4 save">Save</button>
                                        <button type="button" className="btn btn-back mx-5 next">Next&emsp;<AiFillCaretRight /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductConfiguration;