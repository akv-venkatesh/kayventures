import React, { Component } from 'react';
import './ProductGroups.scss';
import { AiOutlineSkin, AiFillCaretLeft, AiFillCaretRight, AiOutlineRight } from "react-icons/ai";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Navigation from '../../component/manufacturer_navigation';
import '../m-login.scss';
import { BiX } from "react-icons/bi";
import { HiUserCircle, HiOutlineFingerPrint } from "react-icons/hi";
import { ImMenu } from "react-icons/im";
import { Accordion } from "react-bootstrap";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import Collapsible from 'react-collapsible';
class ProductGroups extends React.Component {
    render() {
        return (
            <>
                <div className='d-flex flex-wrap m-settings'>
                    <div className="container">
                        <section className='s-sec1'>
                            <Navigation />
                        </section>
                        <section className="s-sec2">
                            <div className="navigation align-items-center d-flex justify-content-between mt-2 mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="me-3">
                                        <ImMenu className="d-md-none menu-bar" />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="text-end d-md-block d-none">
                                        <h6 className="m-0">Mrs. Jane Doe</h6>
                                        <p className="m-0">User Designation</p>
                                    </div>
                                    <HiUserCircle className="user-image ms-3" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="list">
                                    <ul className="overflow-auto text-center w-50 m-auto position-relative py-3">
                                        <li className="float-start active"><span>Product Selection</span></li>
                                        <li className="float-end"><span>Capacity</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12 mt-2">
                                <div className="row">
                                    <div className="col-md-4 block-1">
                                        <p className="sewing mt-4 mx-4">Sewing</p>
                                        <div className="garments d-flex py-3 px-3 position-relative mt-4">
                                            <label><AiOutlineSkin />&nbsp;Garments</label>
                                            <label className="container gar-con">
                                                <input type="checkbox" checked />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="sub-categories mt-4">
                                            <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>
                                                <ul className="mx-2">
                                                    <li className="px-3 pe-5">Woven&emsp;<BiX className="float-end" /></li>
                                                    <li className="px-3 pe-5">Women&emsp;<BiX className="float-end" /></li>
                                                </ul>
                                                <div className="accordion">
                                                    <ul className="mx-2">
                                                        <Accordion>
                                                            <li className="active px-3"> <Accordion.Header> Underwear </Accordion.Header></li>
                                                            <Accordion.Body>
                                                                <ul className="sub-cat px-4 py-2">
                                                                    <li className="pe-4">Slips &emsp;<BiX className="float-end" /></li>
                                                                    <li className="pe-4">Kinckers&emsp;<BiX className="float-end" /></li>
                                                                    <li className="pe-4">Pants&emsp;<BiX className="float-end" /></li>
                                                                </ul>
                                                            </Accordion.Body>
                                                        </Accordion>
                                                        <li className="px-3 pe-5">Innerwear&emsp;<BiX className="float-end" /></li>
                                                        <li className="px-3 pe-5">NightWear&emsp;<BiX className="float-end" /></li>
                                                        <li className="px-3 pe-5">Activewear&emsp;<BiX className="float-end" /></li>
                                                    </ul>
                                                </div>
                                            </PerfectScrollbar>
                                        </div>

                                    </div>
                                    <div className="col-md-8 block-2">
                                        <div className="box py-5 mt-2">
                                            <p className="mb-4">Select</p>
                                            <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>
                                                <div className="select-category">
                                                    <ul className="category">
                                                        <li className="w-100 float-start mx-2 my-2">
                                                            <span className="w-50 float-start">Woven</span>
                                                            <label className="container w-50 float-end">
                                                                <input type="checkbox" value="Woven" name="Woven" id="Woven" required />
                                                                <span className="checkmark"></span>
                                                            </label></li>
                                                        <li className="w-100 float-start mx-2 my-2">
                                                            <span className="w-50 float-start">Women</span>
                                                            <label className="container w-50 float-end">
                                                                <input type="checkbox" value="Women" name="Women" id="Women" required />
                                                                <span className="checkmark"></span>
                                                            </label></li>
                                                        <li className="w-100 float-start mx-2 my-2">
                                                            <span className="w-50 float-start">Men</span>
                                                            <label className="container w-50 float-end">
                                                                <input type="checkbox" value="Men" name="Men" id="Men" required />
                                                                <span className="checkmark"></span>
                                                            </label></li>
                                                        <li className="w-100 float-start mx-2 my-2">
                                                            <span className="w-50 float-start">Knitted</span>
                                                            <label className="container w-50 float-end">
                                                                <input type="checkbox" value="Woven" name="Woven" id="Woven" required />
                                                                <span className="checkmark"></span>
                                                            </label></li>
                                                    </ul>
                                                </div>
                                            </PerfectScrollbar>
                                            <div className="col-md-12 pb-4">
                                                <div className="row ">
                                                    <div className="w-100">
                                                        <button type="button" className="btn btn-back mx-2 back disabled float-start"><AiFillCaretLeft />&emsp;Back</button>
                                                        <div className="w-50 m-auto">
                                                            <button type="button" className="btn btn-default  mx-4 remove">Remove</button>
                                                            <button type="button" className="btn btn-default  mx-4 save">Save</button>
                                                        </div>
                                                        <button type="submit" className="btn btn-back mx-5 next float-end">Next&emsp;<AiFillCaretRight /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div >
                </div >
            </>
        );
    }
}
export default ProductGroups;