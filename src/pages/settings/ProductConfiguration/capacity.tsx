import React, { ChangeEvent, Component } from "react";
import { Button, Form, Accordion } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { GiSewingMachine } from "react-icons/gi";
import {
  Nextbutton,
  DisableNextbutton,
} from "../../../component/buttons/button";
import "./capacity.scss";
import CustomSelect from '../../../component/custom_select';
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar"


interface typeState {
  selectedOption: string;
  line_number: string;
  product_item: any;
  selected_product_item: any;
}

class ProductConfiguration extends Component<{}, typeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedOption: "",
      line_number: '',
      product_item: [
        {
          name: 'Innerwear',
          data: [
            {
              name: 'vests'
            },
            {
              name: 'Knickers',
            },
            {
              name: 'panties',
            }
          ]
        },
        {
          name: 'Activewear',
          data: [
            {
              name: 'Pants'
            },
            {
              name: 'Shirt',
            },
            {
              name: 'Briefs',
            }
          ]
        }
      ],
      selected_product_item: []
    };
  }

  line_no_change = (e:ChangeEvent<HTMLInputElement>) =>{
    if(e.currentTarget.value){
      this.setState({
        line_number: e.currentTarget.value
      })
    }
  }

  check = (name:any) => {
    if(this.state.selected_product_item.length !== 0){
      return this.state.selected_product_item.some(function(el:any) {
        console.log(el.name!==name)
        return el.name !== name;
      });
    }
    else{ 
      return true;
    }
    
  } 

  productSelect = (event:ChangeEvent<HTMLInputElement>) =>{
    if(event.currentTarget.checked){
      this.state.product_item.some((e:any)=>{
        e.data.some((data:any)=>{
          console.log(data.name);
          if(data.name == event.currentTarget.value && this.check(e.name)){
            this.setState({
              selected_product_item : [...this.state.selected_product_item, {"name": e.name}]
            },()=>{
              console.log(this.state.selected_product_item);
            })
          }
        })
      })
    }
  }

  render(): JSX.Element {
    const state = this.state;
    return (
        <div className="h-100 p-3">
            <CustomSelect/>
            <div className="h-100">
                <div className="url-btn">
                    
                </div>
                <div className="d-flex capacity h-100">
                    <div className="sec1 h-100">
                      <div className="mb-3">
                        <Form.Control type="text" placeholder="Enter Line Number" onChange={this.line_no_change}/>
                      </div>
                      <div className="d-flex flex-column justify-content-between product-item-parent">
                        <div className="product-item scroll d-flex">
                          <div className="w-100">
                            <h2 className="m-0 py-3">Select Product Item</h2>
                              <PerfectScrollbar>
                                <Accordion>
                                  {
                                    state.product_item.map((product:any, i:number)=>{
                                      return(
                                        <Accordion.Item eventKey={'a'+i} className="mb-2" key={product.name+i}>
                                          <Accordion.Header>{product.name}</Accordion.Header>
                                          <Accordion.Body className="p-0">
                                            <div className="dropdown active ms-3">
                                              {
                                                product.data.map((item:any, j:number)=>
                                                  <div className="py-2 px-4 wear" key={item.name+j}>
                                                    <Form.Check.Input 
                                                      type="checkbox" 
                                                      id={item.name+j} 
                                                      onChange={this.productSelect} 
                                                      value={item.name}
                                                      hidden
                                                    />
                                                    <Form.Check.Label htmlFor={item.name+j} className="w-100 pe-3">
                                                      <div className="d-flex justify-content-between">
                                                        <p className="m-0">{item.name}</p>
                                                        <span className="d-block"></span>
                                                      </div>
                                                    </Form.Check.Label>
                                                  </div>
                                                )
                                              }
                                            </div>
                                          </Accordion.Body>
                                        </Accordion.Item>
                                      )
                                    })
                                  }
                                </Accordion>
                              </PerfectScrollbar>
                          </div>
                        </div>

                        <div className="product-item down-content">
                          <h2 className="m-0 py-3">Line Definition</h2>
                          <div>
                            <div className="custom-select mb-3">
                              <Form.Select defaultValue="Choose...">
                                <option>Line type</option>
                                <option>Open</option>
                                <option>Reserved</option>
                              </Form.Select>
                            </div>
                            <div className="custom-select mb-2">
                              <Form.Select defaultValue="Choose...">
                                <option>Line type</option>
                                <option>Open</option>
                                <option>Reserved</option>
                              </Form.Select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sec2 h-100">
                      <div className="product-machinery h-100">
                        <div className="h-100">
                          <h2 className="m-0 py-3">Select the machinery</h2>
                          <div className="scroll pb-3">
                            <PerfectScrollbar>
                              <div className="d-flex flex-wrap pe-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i:number) =>
                                <div className="item text-center" key={'check'+i}>
                                  <Form.Check.Input
                                    type="radio"
                                    id={'machine'+i}
                                    name="machine"
                                    hidden
                                  />
                                  <Form.Check.Label htmlFor={'machine'+i}>
                                  <div className="">
                                    <div className="d-flex">
                                      <div className="image">
                                        {/* <img src="/a.jpg"/> */}
                                        <GiSewingMachine />
                                      </div>
                                      <div className="text-content d-flex flex-column justify-content-between">
                                        <span></span>
                                        <h3>50</h3>
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="m-0 py-2">Single Needle</h4>
                                    </div>
                                  </div>
                                </Form.Check.Label>
                                </div>
                                )}
                              </div>
                            </PerfectScrollbar>
                          </div>
                          <div className="selected-content d-flex justify-content-center align-items-center">
                            <div className="d-flex px-3 py-2 align-items-center box">
                              <p className="m-0">Machines</p>
                              <Form.Control type="text" placeholder="Enter no of machines"/>
                              <span className="divider"></span>
                              <p className="machine-count m-0">50</p>
                            </div>
                            <div className="ms-3">
                              <Button className="active-save-btn" disabled>
                                Save
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sec3 h-100">
                      <div className="add-machine p-4 h-100 d-flex flex-column justify-content-between">
                        <div>
                          { state.line_number !== "" ?
                            <h2>{state.line_number}</h2> : ' '
                          }
                          <ul className="p-0 m-0">
                            <li className="add-machine-product-item py-2">
                              <div className="main d-flex align-items-center">
                                <BsChevronRight/>
                                <p className="m-0 ps-2">Innerwear</p>
                              </div>
                              <div className="sub ps-4 d-flex align-items-center">
                                <BsChevronRight/>
                                <div className="d-flex ps-2">
                                  <span>Knickers</span>
                                  <span>Panties</span>
                                </div>
                              </div>
                            </li>
                            <li className="add-machine-line-type py-2">
                              <div className="main d-flex align-items-center">
                                <BsChevronRight />
                                <p className="m-0 ps-2">Open</p>
                              </div>
                              <div className="main d-flex align-items-center">
                                <BsChevronRight />
                                <p className="m-0 ps-2">Natural</p>
                              </div>
                            </li>
                            <li className="add-machine-type py-2">
                              <div className="main d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                  <BsChevronRight />
                                  <p className="m-0 ps-2">Double Needle</p>
                                </div>
                                <p className="m-0">23</p>
                              </div>
                              <div className="main d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                  <BsChevronRight />
                                  <p className="m-0 ps-2">Single Needle</p>
                                </div>
                                <p className="m-0">10</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="total-machine">
                          <ul className="m-0 p-0 mb-4">
                            <li className="">
                              <div className="main d-flex justify-content-between align-items-center">
                                <p className="m-0">Total Machines Selected</p>
                                <p className="m-0">33</p>
                              </div>
                            </li>
                          </ul>
                          <div className="d-flex justify-content-between">
                            <Button className="active-btn" disabled>
                              Add Machine
                            </Button>
                            <Button className="active-btn-arrow" disabled>
                              Save
                              <BsChevronRight />
                            </Button>
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
