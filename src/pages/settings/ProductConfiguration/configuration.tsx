import React, { Component, ChangeEvent,MouseEvent } from 'react';
import './configuration.scss';
import { AiOutlineSkin, AiFillCaretLeft, AiFillCaretRight, AiOutlineRight } from "react-icons/ai";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BiX } from "react-icons/bi";
import { HiUserCircle, HiOutlineFingerPrint } from "react-icons/hi";
import { ImMenu } from "react-icons/im";
import { Accordion, Modal } from "react-bootstrap";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import Collapsible from 'react-collapsible';
import $ from 'jquery';
import {RiInformationFill} from 'react-icons/ri';
import vest from "../../../assets/images/vest.svg";

interface typeState{
    producttype: any,
    selectedproducttype: any,
    displayState:any,
    grouptype:any,
    productselection:boolean,
    selectedgrouptype:any,
    groupselection:boolean,
    groupitemselection:any,
    completed:boolean,
    showModel:boolean,
}

class ProductGroups extends React.Component<{}, typeState> {
    constructor(props:any){
        super(props);
        this.state ={
            showModel:false,
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
            productselection:false,
            grouptype: [
                {
                    name: "UnderWear",
                    data: [
                        {
                            name: "Slips"
                        },
                        {
                            name: "Kinkers"
                        },
                        {
                            name: "Bra-Top"
                        }
                    ]
                },
                {
                    name: "WorkWear",
                    data: [
                        {
                            name: "Cheeky"
                        },
                        {
                            name: "Chemise"
                        }
                    ]
                },
                {
                    name: "Streetwear",
                    data: [
                        {
                            name: "Pants"
                        },
                        {
                            name: "Bra"
                        }
                    ]
                },
                {
                    name: "NightWear",
                    data: [
                        {
                            name: "Brief"
                        },
                        {
                            name: "Vests"
                        }
                    ]
                },
                {
                    name: "Activewear",
                    data: [
                        {
                            name: "Tank"
                        },
                        {
                            name: "Thong"
                        }
                    ]
                },
                {
                    name: "Ceremonial",
                    data: [
                        {
                            name: "Hip hugger"
                        }
                    ]
                }
            ],
            groupselection:false,
            selectedproducttype:[],
            selectedgrouptype:[],
            displayState:[],
            groupitemselection:[],
            completed:false,
        }
    }

    handleShow = () => {
        this.setState({
            showModel: true,
        });
    };
    handleHide = ()=>{
        this.setState({
            showModel: false
        })
    }
    componentDidMount(){
        this.setState({
            displayState:this.state.producttype
        })
    }
    selectproducttype = (e: ChangeEvent<HTMLInputElement>) =>{
        if(e.currentTarget.checked){
            let obj = {name: e.currentTarget.value};
            let arr = this.state.selectedproducttype;
            arr.push(obj);
            this.setState({
                selectedproducttype: arr
            },()=>{
                console.log(this.state.selectedproducttype)
            })
        }
        else{
            let arr = this.state.selectedproducttype;
            arr = arr.filter((item:any) => item.name !== e.currentTarget.value);
            this.setState({
                selectedproducttype: arr
            },()=>{
                console.log(this.state.selectedproducttype)
            })
        }
    }
    showgroup = (e: MouseEvent<HTMLButtonElement>) =>{
        this.setState({
            displayState: this.state.grouptype,
            productselection:true,
        })
        $('.category input[type=checkbox]').prop("checked", false);
    }
    selectgrouptype = (e:ChangeEvent<HTMLInputElement>) =>{
        if(e.currentTarget.checked){
            let obj = {name: e.currentTarget.value, data:[]};
            let arr = this.state.selectedgrouptype;
            arr.push(obj);
            this.setState({
                selectedgrouptype: arr
            },()=>{
                console.log(this.state.selectedgrouptype)
            })
        }
        else{
            let arr = this.state.selectedgrouptype;
            arr = arr.filter((item:any) => item.name !== e.currentTarget.value);
            this.setState({
                selectedgrouptype: arr
            },()=>{
                console.log(this.state.selectedgrouptype)
            })
        }
    }
    showgroupitem = (e:MouseEvent<HTMLButtonElement>)=>{
        this.setState({
            displayState: [],
            groupselection:true,
        })
        this.state.selectedgrouptype.some((item:any, i:number)=>{
            if(item.data.length>0){
                this.setState({
                    completed:true
                })
            }
            else{
                this.setState({
                    completed:false
                })
            }
        })
    }
    displaygroupitem = (e:MouseEvent<HTMLElement>, item:any):any =>{
        let arrs:any = [];
        this.state.grouptype.some((e:any, index:number)=>{
            if(e.name==item){
                e.data.some((event:any, i: number)=>{
                    let obj ={name:event.name, parent:item};
                    let arr = arrs;
                    arr.push(obj);
                    this.setState({
                        displayState:arr
                    })
                })
            }
        })
        $('.category input[type=checkbox]').prop("checked", false);
    }
    groupitemselection = (e:ChangeEvent<HTMLInputElement>, item:any):any =>{
        if(e.currentTarget.checked){
            let obj = {name: e.currentTarget.value};
            let arr = this.state.groupitemselection;
            arr.push(obj);
            this.setState({
                groupitemselection: arr
            },()=>{
                console.log(this.state.groupitemselection)
            })
        }
        else{
            let arr = this.state.groupitemselection;
            arr = arr.filter((item:any) => item.name !== e.currentTarget.value);
            this.setState({
                groupitemselection: arr
            },()=>{
                console.log(this.state.groupitemselection)
            })
        }
        this.state.selectedgrouptype.some((e:any, index:number)=>{
            if(e.name==item){
                let obj = this.state.groupitemselection[0];
                let arr = this.state.selectedgrouptype;
                arr[index].data.push(obj);
                this.setState({
                    selectedgrouptype: arr
                },()=>{
                    console.log(this.state.selectedgrouptype)
                })
            }
        })
        this.setState({
            groupitemselection: []
        })
    }

    render() {
        const state = this.state;
        return (
            <>
                <div className="mt-2">
                    <div className="d-flex">
                        <div className="block-1">
                            <p className="sewing mt-4 mx-4">Sewing</p>
                            <div className="garments d-flex py-3 px-3 position-relative mt-4">
                                <label><AiOutlineSkin />&nbsp;Garments</label>
                                <label className="gar-con">
                                    <input type="checkbox" checked hidden/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="sub-categories mt-4">
                                <PerfectScrollbar >
                                    <ul className="mx-2 me-4 pe-4">
                                        {
                                            state.selectedproducttype.map((tag:any, index:number)=>
                                                <li className="px-3 pe-5">{tag.name}</li>
                                            )
                                        }
                                    </ul>
                                    <div className="accordion">
                                        <ul className="mx-2 me-4 pe-4">
                                            <Accordion>
                                                {
                                                    state.selectedgrouptype.map((group:any, i:number)=>
                                                        <Accordion.Item eventKey={'a'+i} className="mb-2" key={group.name+i}>
                                                            <Accordion.Header className={group.data.length>0 ? 'complete' : 'not-completed'}
                                                                onClick={(e)=>this.displaygroupitem(e, group.name)}
                                                            > {group.name} 
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <ul className="sub-cat px-4">
                                                                    {
                                                                        group.data.map((item:any, index:number)=>
                                                                            <li className="pe-4">{item.name}</li>
                                                                        )
                                                                    }
                                                                </ul>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    )
                                                }
                                            </Accordion>
                                        </ul>
                                    </div>
                                </PerfectScrollbar>
                            </div>

                        </div>
                        <div className="block-2">
                            <div className="box py-5 mt-2">
                                <p className="mb-4">Select</p>
                                <PerfectScrollbar >
                                    <div className="select-category">
                                        <ul className="category">
                                            {  
                                                state.displayState.map((tag:any, i:number)=>
                                                    <div>
                                                        <input 
                                                            type="checkbox" 
                                                            value={tag.name} 
                                                            name={tag.name} 
                                                            id={tag.name}
                                                            required 
                                                            hidden
                                                            onChange={!state.productselection ? this.selectproducttype : (!state.groupselection ? this.selectgrouptype : (e)=>this.groupitemselection(e,tag.parent)) }/>
                                                        <label className="w-100 py-2 d-flex" key={'productType'+i} htmlFor={tag.name}>
                                                            <p className="w-50 m-0">{tag.name}</p>
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
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
                                            {
                                                !state.completed ?
                                                <button 
                                                    type="submit" 
                                                    className="btn btn-back mx-5 next float-end"
                                                    onClick={!state.productselection ? this.showgroup : this.showgroupitem}
                                                    >Next&emsp;<AiFillCaretRight />
                                                </button> :
                                                <button 
                                                    type="submit" 
                                                    className="btn btn-back mx-5 next float-end"
                                                    onClick={this.handleShow}
                                                    >Summary&emsp;<AiFillCaretRight />
                                                </button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    show={this.state.showModel}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className="product_config"
                    backdropClassName="product_config"
                    onHide={this.handleHide}
                    >
                    <Modal.Header closeButton />
                      <Modal.Body className="">
                        <div className="header_discription">
                          <RiInformationFill className="info-icon" />
                          <p>
                            You have completed successfully your product configuration for
                            garments.
                          </p>
                        </div>
                        <p className="discription">
                          You have two more categories to configure, only if more than one
                          category was chosen by the byer or manufacturer. In this example,
                          we have shown only garments as the only category chosen. Cross
                          button will take you to the Product Category screen.
                        </p>
                        <div className="row">
                          <div className="col-12">
                            <PerfectScrollbar
                              options={{ suppressScrollY: false, suppressScrollX: true }}
                              onScrollY={(container) =>
                                console.log(`scrolled to: ${container.scrollTop}.`)
                              }
                            >
                              <div>
                                <div style={{ padding: "25px 0px" }}>
                                  <div className="row">
                                    <div className="col-sm-3">
                                      <div className="cat-img-bg">
                                        <img src={vest} className="cat-img" />
                                      </div>
                                      <p className="cat-name">Underwear</p>
                                    </div>
                                  </div>
                                  <div className="row px-3">
                                    <div className="col-sm-4">
                                      <div className="item-container row">
                                        <div className="item-img-bg col-sm-3">
                                          <img src={vest} className="item-img" />
                                        </div>
                                        <div className="item-name-bg col-sm-9">
                                          {" "}
                                          <p className="item-name">Slips</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-4">
                                      <div className="item-container row">
                                        <div className="item-img-bg col-sm-3">
                                          <img src={vest} className="item-img" />
                                        </div>
                                        <div className="item-name-bg col-sm-9">
                                          {" "}
                                          <p className="item-name">Knicker</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-4">
                                      <div className="item-container row">
                                        <div className="item-img-bg col-sm-3">
                                          <img src={vest} className="item-img" />
                                        </div>
                                        <div className="item-name-bg col-sm-9">
                                          {" "}
                                          <p className="item-name">Pants</p>
                                        </div>
                                      </div>
                                    </div>
                                   
                                  </div>
                                </div>
                                <div style={{ padding: "25px 0px" }}>
                                  <div className="row">
                                    <div className="col-sm-3">
                                      <div className="cat-img-bg">
                                        <img src={vest} className="cat-img" />
                                      </div>
                                      <p className="cat-name">Nightwear</p>
                                    </div>
                                  </div>
                                  <div className="row px-3">
                                    <div className="col-sm-4">
                                      <div className="item-container row">
                                        <div className="item-img-bg col-sm-3">
                                          <img src={vest} className="item-img" />
                                        </div>
                                        <div className="item-name-bg col-sm-9">
                                          {" "}
                                          <p className="item-name">Slips</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-4">
                                      <div className="item-container row">
                                        <div className="item-img-bg col-sm-3">
                                          <img src={vest} className="item-img" />
                                        </div>
                                        <div className="item-name-bg col-sm-9">
                                          {" "}
                                          <p className="item-name">Cheeky</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-4">
                                      <div className="item-container row">
                                        <div className="item-img-bg col-sm-3">
                                          <img src={vest} className="item-img" />
                                        </div>
                                        <div className="item-name-bg col-sm-9">
                                          {" "}
                                          <p className="item-name">Knickers</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-4">
                                      <div className="item-container row">
                                        <div className="item-img-bg col-sm-3">
                                          <img src={vest} className="item-img" />
                                        </div>
                                        <div className="item-name-bg col-sm-9">
                                          {" "}
                                          <p className="item-name">Tanga</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-4">
                                      <div className="item-container row">
                                        <div className="item-img-bg col-sm-3">
                                          <img src={vest} className="item-img" />
                                        </div>
                                        <div className="item-name-bg col-sm-9">
                                          {" "}
                                          <p className="item-name">Brief</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-4">
                                      <div className="item-container row">
                                        <div className="item-img-bg col-sm-3">
                                          <img src={vest} className="item-img" />
                                        </div>
                                        <div className="item-name-bg col-sm-9">
                                          {" "}
                                          <p className="item-name">Cheeky</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{ padding: "25px 0px" }}>
                                  <div className="row">
                                    <div className="col-sm-3">
                                      <div className="cat-img-bg">
                                        <img src={vest} className="cat-img" />
                                      </div>
                                      <p className="cat-name">Nightwear</p>
                                    </div>
                                  </div>
                                  <div className="row px-3">
                                    <div className="col-sm-4">
                                      <div className="item-container row">
                                        <div className="item-img-bg col-sm-3">
                                          <img src={vest} className="item-img" />
                                        </div>
                                        <div className="item-name-bg col-sm-9">
                                          {" "}
                                          <p className="item-name">Slips</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-4">
                                      <div className="item-container row">
                                        <div className="item-img-bg col-sm-3">
                                          <img src={vest} className="item-img" />
                                        </div>
                                        <div className="item-name-bg col-sm-9">
                                          {" "}
                                          <p className="item-name">Cheeky</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-4">
                                      <div className="item-container row">
                                        <div className="item-img-bg col-sm-3">
                                          <img src={vest} className="item-img" />
                                        </div>
                                        <div className="item-name-bg col-sm-9">
                                          {" "}
                                          <p className="item-name">Knickers</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-4">
                                      <div className="item-container row">
                                        <div className="item-img-bg col-sm-3">
                                          <img src={vest} className="item-img" />
                                        </div>
                                        <div className="item-name-bg col-sm-9">
                                          {" "}
                                          <p className="item-name">Tanga</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-4">
                                      <div className="item-container row">
                                        <div className="item-img-bg col-sm-3">
                                          <img src={vest} className="item-img" />
                                        </div>
                                        <div className="item-name-bg col-sm-9">
                                          {" "}
                                          <p className="item-name">Brief</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-4">
                                      <div className="item-container row">
                                        <div className="item-img-bg col-sm-3">
                                          <img src={vest} className="item-img" />
                                        </div>
                                        <div className="item-name-bg col-sm-9">
                                          {" "}
                                          <p className="item-name">Cheeky</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </PerfectScrollbar>
                          </div>
                        </div>
                  </Modal.Body>
                </Modal>
            </>
        );
    }
}
export default ProductGroups;