import React, { Component } from 'react';
import './configuration.scss';
import { AiOutlineSkin, AiFillCaretLeft, AiFillCaretRight, AiOutlineRight } from "react-icons/ai";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BiX } from "react-icons/bi";
import { HiUserCircle, HiOutlineFingerPrint } from "react-icons/hi";
import { ImMenu } from "react-icons/im";
import { Accordion } from "react-bootstrap";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import Collapsible from 'react-collapsible';

interface typeState{
    producttype: any,

}

class ProductGroups extends React.Component<{}, typeState> {
    constructor(props:any){
        super(props);
        this.state ={
            producttype: [
                {
                    name: "Woven"
                },
                {
                    name: "Knitted"
                },
                {
                    name: "Women"
                },
                {
                    name: "Men"
                }
            ],
        }
    }
    render() {
        const state = this.state;
        return (
            <>
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
                                            {  
                                                state.producttype.map((tag:any, i:number)=>
                                                    <label className="w-100 my-2 d-flex" key={'productType'+i} htmlFor={tag.name}>
                                                        <span className="w-50">{tag.name}</span>
                                                        <label className="w-50">
                                                            <input type="checkbox" value={tag.name} name={tag.name} id={tag.name} required hidden/>
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </label>
                                                )
                                            }
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
            </>
        );
    }
}
export default ProductGroups;