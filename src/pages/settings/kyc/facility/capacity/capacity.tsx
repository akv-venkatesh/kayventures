import React, { ChangeEvent, Component, FormEvent, MouseEvent } from "react";
import { Button, Form, Accordion, Modal } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { GiSewingMachine } from "react-icons/gi";
import {
  Nextbutton,
  DisableNextbutton,
} from "../../../../../component/buttons/button";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar"
import { JsxFlags } from "typescript";
import { RiInformationFill } from "react-icons/ri";
import { AiOutlinePlus, AiOutlineRight } from "react-icons/ai";
// import Select from 'react-select';

import Select from '../../../../../component/dropdown_select/slelect';
import $ from 'jquery';
interface typeProps{
  // value:string,
}
interface typeState {
  manufacturingActivity: any,
  selectedOption: string;
  line_number: string;
  product_item: any;
  selected_product_item: any;
  product_item_index: number;
  linetype: string;
  materialtype: string;
  machinery: any;
  checkedMachine: any;
  confirmedMachine: any;
  machineCount: number;
  totalmachinecount: number;
  showsummary: boolean;
  showModel: boolean;
  disable_input: boolean;
  count: number;
  finalstate: any;
}

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

class ProductConfiguration extends Component<typeProps, typeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      manufacturingActivity: '',
      showModel: false,
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
      selected_product_item: [],
      product_item_index: 0,
      linetype: '',
      materialtype: '',
      machinery: [
        {
          name: 'Single Needle',
          needle_count: 50,
        },
        {
          name: 'Double Needle',
          needle_count: 51,
        },
        {
          name: 'Single Needle',
          needle_count: 52,
        },
        {
          name: 'Single Needle',
          needle_count: 53,
        },
        {
          name: 'Single Needle',
          needle_count: 54,
        },
        {
          name: 'Single Needle',
          needle_count: 55,
        },
        {
          name: 'Single Needle',
          needle_count: 56,
        },
        {
          name: 'Single Needle',
          needle_count: 57,
        },
        {
          name: 'Single Needle',
          needle_count: 58,
        },
        {
          name: 'Single Needle',
          needle_count: 59,
        },
        {
          name: 'Single Needle',
          needle_count: 60,
        }
      ],
      checkedMachine: [],
      confirmedMachine: [],
      machineCount: 0,
      totalmachinecount: 0,
      showsummary: false,
      disable_input: false,
      count: -1,
      finalstate: [],
    };
  }




  handleShow = () => {
    this.setState({
      showModel: true,
    });
  };
  handleHide = () => {
    this.setState({
      showModel: false
    })
  }

  line_no_change = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value || e.currentTarget.value == "") {
      this.setState({
        line_number: e.currentTarget.value
      })
    }
  }

  check = (name: any) => {
    if (this.state.selected_product_item.length !== 0) {
      return this.state.selected_product_item.some(function (el: any) {
        return el.name === name;
      });
    }
    else {
      return false;
    }
  }
  productSelect = (event: ChangeEvent<HTMLInputElement>, item: any): any => {
    let count = -1;
    if (event.currentTarget.checked) {
      this.state.product_item.some((e: any, index: number) => {
        e.data.some((data: any, i: number) => {
          if (!this.check(e.name) && e.name == item) {
            let obj = { "name": e.name, data: [] };
            let arr = this.state.selected_product_item;
            arr.push(obj);
            this.setState({
              selected_product_item: arr
            })
          }
          if (e.name == item) {
            let obj = { "name": event.currentTarget.value };
            let arr = this.state.selected_product_item;
            this.state.selected_product_item.map((items:any, ind:number)=>{
              if(item == items.name){
                count = ind;
              }
            })
            if (this.state.selected_product_item[count].data.filter((checking: any) =>
              checking.name == event.currentTarget.value).length == 0) {
              arr[count].data.push(obj);
              this.setState({
                selected_product_item: arr
              });
              return;
            }
          }
        })
      })
    }
    else{
      this.state.product_item.some((e: any, index: number) => {
        e.data.some((data: any, i: number) => {
          if (data.name == event.currentTarget.value) {
            let obj = this.state.selected_product_item;
            this.state.selected_product_item.map((items:any, ind:number)=>{
              if(item == items.name){
                count = ind;
              }
            })
            let arr = this.state.selected_product_item[count].data;
            arr = arr.filter((el:any) => data.name !== el.name);
            obj[count].data = arr;
            this.setState({
              selected_product_item: obj
            })
            if (arr.length == 0) {
              let arrs = this.state.selected_product_item;
              arrs = arrs.filter((el:any) => e.name !== el.name);
              this.setState({
                selected_product_item: arrs
              })
            }
          }
        })
      })
    }
  }

  lineTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    let value:any = event;
    this.setState({
      linetype: value.value
    })
  }
  materialTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    let value:any = event;
    this.setState({
      materialtype: value.value
    })
  }

  confirmMachine = (event: MouseEvent<HTMLButtonElement>, count: number) => {
    let obj = { name: this.state.checkedMachine.name, count: count };
    let arr = this.state.confirmedMachine;
    arr.push(obj);
    this.setState({
      confirmedMachine: arr
    }, () => {
      console.log(this.state.confirmedMachine);
    })
    let counting = 0;
    this.state.confirmedMachine.some((data: any, index: number) => {
      counting = counting + data.count;
    })
    this.setState({
      totalmachinecount: counting
    })
    this.setState({
      checkedMachine: [],
    })
    this.setState({
      disable_input: true
    })
    $('input[type=number]').val('');
    $('.sec2 .product-machinery .item input[type=radio]').prop("checked", false);
  }

  addMachine = (event:MouseEvent<HTMLButtonElement>) =>{
    this.setState({
      disable_input: false,
    })
  }

  selectMachine = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, event.target.dataset.needlecount)
    let obj = { name: event.target.value, needle_count: event.target.dataset.needlecount };
    this.setState({
      checkedMachine: obj
    }, () => {
      console.log(this.state.checkedMachine);
    })
  }

  machineCount = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      machineCount: parseInt(event.target.value) > 0 ? parseInt(event.target.value) : 0
    })
  }

  showSummary = (event: MouseEvent<HTMLButtonElement>) => {
    this.setState({
      showsummary: !this.state.showsummary
    })
  }

  addLine = (event:MouseEvent<HTMLButtonElement>) =>{
    let obj ={
      lineName : this.state.line_number,
      data: [{
        productItem : this.state.selected_product_item,
        lineType : this.state.linetype,
        materialType : this.state.materialtype,
        machine : this.state.confirmedMachine,
      }]
    };
    let arr = this.state.finalstate;
    arr.push(obj);
    this.setState({
      finalstate : arr
    },()=>{
      console.log(this.state.finalstate)
    })
  }
   
  buyerChange = () =>{

  }

  render(): JSX.Element {


    const state = this.state;


    const LineTypeOptions = [
      { value: 'Open', label: 'Open', disabled: state.disable_input},
      { value: 'Reserved', label: 'Reserved', disabled: state.disable_input},


    ]

    const Material_type = [
      { value: 'Natural', label: 'Natural', disabled: state.disable_input},
      { value: 'Artificial', label: 'Artificial',  disabled: state.disable_input},

    ]

    return (
      <div className="kyc-facility-capacity h-100">
        <div className="h-100 p-3">
          <div className="h-100">
            <div className="d-flex capacity h-100">
              <div className="sec1 h-100">
                <div>
                  <h4 className="category-name m-0 py-3">{this.state.manufacturingActivity}</h4>
                </div>
                <div className="scroll">
                  <PerfectScrollbar>
                    <div className="pe-4">
                      <div className="mb-3">
                        <Form.Control 
                          type="text" 
                          placeholder="Enter Line Number" 
                          onChange={this.line_no_change} 
                          disabled={state.disable_input}
                        />
                      </div>
                      <div className="product-item-parent">
                        <div className="d-flex flex-column justify-content-between">
                          <div className="product-item d-flex">
                            <div className="w-100">
                              <h2 className="m-0 py-3">Select Product Item</h2>
                                <Accordion>
                                  {
                                    state.product_item.map((product: any, i: number) => {
                                      return (
                                        <Accordion.Item eventKey={'a' + i} className="mb-2" key={product.name + i}>
                                          <Accordion.Header>{product.name}</Accordion.Header>
                                          <Accordion.Body className="p-0">
                                            <div className="dropdown active ms-3">
                                              {
                                                product.data.map((item: any, j: number) =>
                                                  <div className="py-2 px-4 wear" key={item.name + j}>
                                                    <Form.Check.Input
                                                      type="checkbox"
                                                      id={item.name + j}
                                                      onChange={(e) => this.productSelect(e, product.name)}
                                                      value={item.name}
                                                      data-testid={'prod-grp'+i+j}
                                                      hidden
                                                      disabled={state.disable_input}
                                                    />
                                                    <Form.Check.Label htmlFor={item.name + j} className="w-100 pe-3">
                                                      <div className="d-flex justify-content-between">
                                                        <p className="m-0">{item.name}</p>
                                                        <span className="d-block"></span>
                                                      </div>
                                                    </Form.Check.Label>
                                                  </div>
                                                )
                                              }
                                              <div className="extra-product">
                                                <Accordion>
                                                  <Accordion.Item eventKey={'a' + i} className="mb-3" key={product.name + i}>
                                                    <Accordion.Header className="mt-3">
                                                      <div className="d-flex ui align-items-center">
                                                        <AiOutlinePlus  className="me-3"/>
                                                        <small>Add more product items</small>
                                                      </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body className="p-0">
                                                      <div className="dropdown active ms-3">
                                                        {
                                                          product.data.map((item: any, j: number) =>
                                                            <div className="py-2 px-4 wear" key={item.name + j}>
                                                              <Form.Check.Input
                                                                type="checkbox"
                                                                id={'extra'+item.name + j}
                                                                onChange={(e) => this.productSelect(e, product.name)}
                                                                value={item.name}
                                                                data-testid={'prod-grp'+i+j}
                                                                hidden
                                                                disabled={state.disable_input}
                                                              />
                                                              <Form.Check.Label htmlFor={'extra'+item.name + j} className="w-100 pe-3">
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
                                                </Accordion>
                                              </div>
                                            </div>
                                          </Accordion.Body>
                                        </Accordion.Item>
                                      )
                                    })
                                  }
                                </Accordion>
                            </div>
                          </div>
                          <div className="product-item down-content">
                            <h2 className="m-0 py-3">Line Definition</h2>
                            <div>
                              <div className="mb-3">
                                <form data-testid="form-line-type">
                                  <label htmlFor="line-type" hidden>LineType</label>
                                  <Select 
                                    options={LineTypeOptions} 
                                    width='200px' 
                                    position='top' 
                                    name="linetype"
                                    inputId="line-type"
                                    placeholder='Line type'
                                    onChange={this.lineTypeChange}
                                    isOptionDisabled={(option:any) => option.disabled}
                                  />
                                </form>
                                {
                                  state.linetype == 'Reserved' ?
                                  <>
                                    <p className="info mt-2">*If <b>Line Definition</b> is reserved, Please select reserved    
                                    for which buyer <b>after completing Network.</b></p>
                                    <form data-testid="form-line-type">
                                      <label htmlFor="line-type" hidden>LineType</label>
                                      <Select 
                                        options={LineTypeOptions} 
                                        width='200px' 
                                        position='top' 
                                        name="buyer_name"
                                        inputId="buyer_name"
                                        placeholder='Buyer'
                                        onChange={this.buyerChange}
                                        isOptionDisabled={(option:any) => option.disabled}
                                      />
                                    </form>
                                    <div className="d-flex justify-content-evenly mt-2">
                                      <h6>Visibility</h6>
                                      <div className="visibility d-flex">
                                        <p>Public</p>
                                        <Form.Check 
                                          type="switch"
                                          id="custom-switch"
                                        />
                                        <p>Private</p>
                                      </div>
                                    </div>
                                    
                                  </> : ''
                                }
                              </div>
                            </div>
                            <div>
                            <h2 className="m-0 pt-3">Material type</h2>
                              <p className="mat-type-info">* select any one material type</p>
                              <Form>
                                <Accordion>
                                  {
                                    state.product_item.map((product: any, i: number) => {
                                      return (
                                        <Accordion.Item eventKey={'a' + i} className="mb-2" key={product.name + i}>
                                          <Accordion.Header>{product.name}</Accordion.Header>
                                          <Accordion.Body className="p-0">
                                            <div className="dropdown active ms-3">
                                              {
                                                product.data.map((item: any, j: number) =>
                                                  <div className="wear" key={item.name + j}>
                                                    <Form.Check.Input
                                                      type="radio"
                                                      id={'mat-type'+item.name}
                                                      name={'matType'}
                                                      onChange={(e) => this.productSelect(e, product.name)}
                                                      value={item.name}
                                                      data-testid={'materialType'+i+j}
                                                      hidden
                                                      disabled={state.disable_input}
                                                    />
                                                    <Form.Check.Label htmlFor={'mat-type'+item.name} className="w-100 mt-1 py-2 px-4">
                                                      <div className="d-flex justify-content-between">
                                                        <p className="m-0">{item.name}</p>
                                                        <span className=""></span>
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
                              </Form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PerfectScrollbar>
                </div>
                <div>
                  <Button className="submit-btn" disabled>
                    Save
                  </Button>
                </div>
              </div>
              <div className="sec2 h-100">
                <div className="product-machinery px-4 h-100">
                  <div className="h-100">
                    <h2 className="m-0 py-3">Set Machines</h2>
                    <div className="mid-section py-4">
                      <PerfectScrollbar>
                        <h4>Total machines in inventory - 300</h4>
                        <div className="">
                          <div className="d-flex py-3">
                            <h4 className="m-0 ">Machines assigned to this line</h4>
                            <label htmlFor="" className="setmachineinput d-flex align-items-center">
                              <Form.Control type="number" name="machines" />
                              <span>/</span>
                              <h4 className="m-0">300</h4>
                            </label>
                          </div>
                          <div className="d-flex py-3">
                            <h4 className="m-0">Production Line Number</h4>
                            <h4 className="m-0">INW-F-AM001</h4>
                          </div>
                          <div className="d-flex py-3">
                            <h4 className="m-0">Products Produced</h4>
                            <h4 className="m-0">Production output-per day</h4>
                          </div>
                          <div className="d-flex py-3">
                            <h6 className="m-0">Machines assigned to this line</h6>
                            <label htmlFor="" className="setmachineinput d-flex align-items-center">
                              <Form.Control type="number" name="machines" />
                              <span>/</span>
                              <h4 className="m-0">300</h4>
                            </label>
                          </div>
                          <div className="d-flex py-3">
                          <h6 className="m-0">Machines assigned to this line</h6>
                          <label htmlFor="" className="setmachineinput d-flex align-items-center">
                            <Form.Control type="number" name="machines" />
                            <span>/</span>
                            <h4 className="m-0">300</h4>
                          </label>
                        </div>
                        </div>
                      </PerfectScrollbar>
                    </div>
                    <Button className="submit-btn" disabled>
                        save
                    </Button>
                  </div>
                </div>
              </div>
              <div className="sec3 h-100">
                <div className="add-machine p-4 h-100 d-flex flex-column justify-content-between">
                  {state.line_number == '' ?
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <p>
                        There's no Line Definition
                      </p>
                    </div> :
                    <>
                      <div>
                        <div className="add-line-number d-flex mb-4" >
                          <div className="d-flex align-items-center">
                            <AiOutlinePlus />
                            <p className="ms-3 mb-0">Add Line Number</p>
                            </div>
                            <div className="d-flex">
                            <Button
                              className="active-btn"
                              disabled
                              >
                              Summary
                            </Button>
                          </div>
                        </div>
                        {state.line_number !== "" ?
                          <h2>{state.line_number}</h2> : ' '
                        }
                        <ul className="p-0 m-0">
                          {
                            state.line_number !== "" ?
                              state.selected_product_item.map((item: any, index: number) =>
                                <li className="add-machine-product-item py-2" key={'machine'+index}>
                                  <div className="main d-flex align-items-center">
                                    <BsChevronRight />
                                    <p className="m-0 ps-2">{item.name}</p>
                                  </div>
                                  <div className="sub ps-4 d-flex align-items-center">
                                    <BsChevronRight />
                                    <div className="d-flex ps-2">
                                      {
                                        item.data.map((subitem: any, i: number) =>
                                          <span key={'prod-item'+i}>{subitem.name}</span>
                                        )
                                      }
                                    </div>
                                  </div>
                                  <hr />
                                </li>
                              ) :
                              <></>
                          }
                          { state.selected_product_item.length !== 0 ?
                            <li className="add-machine-line-type py-2">
                              {
                                state.linetype !== "" && state.selected_product_item.length !==0 ?
                                  <div className="main d-flex align-items-center">
                                    <BsChevronRight />
                                    <p className="m-0 ps-2">{state.linetype}</p>
                                  </div> :
                                  <></>
                              }
                              {
                                state.materialtype !== "" && state.linetype !=="" ?
                                  <div className="main d-flex align-items-center">
                                    <BsChevronRight />
                                    <p className="m-0 ps-2">{state.materialtype}</p>
                                  </div> :
                                  <></>
                              }
                            </li>:
                            <></>
                          }

                          <li className="add-machine-type py-2">
                            {
                              state.materialtype !==''?
                                state.confirmedMachine.map((item: any, i: number) =>
                                  <div className="main d-flex align-items-center justify-content-between" key={'machine'+i}>
                                    <div className="d-flex align-items-center">
                                      <BsChevronRight />
                                      <p className="m-0 ps-2">{item.name}</p>
                                    </div>
                                    <p className="m-0">{item.count}</p>
                                  </div>
                                ) :
                              <></>
                            }
                          </li>
                        </ul>
                      </div>
                      <div className="total-machine">
                        {state.totalmachinecount > 0 ?
                          <ul className="m-0 p-0 mb-4">
                            <li className="">
                              <div className="main d-flex justify-content-between align-items-center">
                                <p className="m-0">Total Machines Selected</p>
                                <p className="m-0">{state.totalmachinecount}</p>
                              </div>
                            </li>
                          </ul> :
                          <></>
                        }
                        <div className="d-flex justify-content-center">
                          {
                            !state.showsummary ?
                              <>
                                <Button
                                  className="active-btn"
                                  disabled={state.confirmedMachine.length > 0 ? false : true}
                                  onClick={this.addMachine}
                                  >
                                  Add Machine
                                </Button>
                                <Button 
                                  className="active-btn-save ms-3" 
                                  disabled={state.confirmedMachine.length > 0 ? false : true}
                                  onClick={this.showSummary}
                                  data-testid={'saveline'}
                                  >
                                  Save
                                </Button>
                              </> :
                              <>
                                <Button
                                  className="active-btn"
                                  disabled={state.confirmedMachine.length > 0 ? false : true}
                                  onClick={this.addLine}
                                >
                                  Add Line
                                </Button>
                                <Button
                                  className="active-btn ms-3"
                                  disabled={state.confirmedMachine.length > 0 ? false : true}
                                  onClick={this.handleShow}>
                                  Summary
                                </Button>
                              </>
                          }
                        </div>
                      </div>
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
          <Modal
            show={state.showModel}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="capacity"
            backdropClassName="capacity"
            onHide={this.handleHide}
          >
            <Modal.Header closeButton />
            <Modal.Body className="">
              <div className="header_discription">
                <RiInformationFill className="info-icon" />
                <p>
                  You have successfully completed your product configuration for garments. You have spinning weaving and knitting to complete.
                </p>
              </div>
              <div className="row">
                <div className="col-12">
                  <PerfectScrollbar
                    options={{ suppressScrollY: false, suppressScrollX: true }}
                    onScrollY={(container) =>
                      console.log(`scrolled to: ${container.scrollTop}.`)
                    }
                  >
                    <div className="my-3 mx-3">
                      <div className="col-md-12">
                        <div className="linenum1 back-color">
                          <ul>
                            <h3>Line number 1</h3>
                            <AiOutlineRight />
                            <span>Innerwear</span>
                            <li className="ml-5">
                              <AiOutlineRight />
                              <span className="text-muted">Knickers | Panties</span>
                            </li>
                          </ul>
                          <ul className="totalcal">
                            <AiOutlineRight /><span>Open</span>
                            <AiOutlineRight className="ml-30" /><span>Natural</span>
                            <li className="ml-5 w-40 active">
                              <AiOutlineRight />
                              <span>Single Needle<span className="float-right">30</span></span>
                            </li>
                            <li className="ml-5 w-40">
                              <AiOutlineRight />
                              <span>Double Needle<span className="float-right">30</span></span>
                            </li>

                          </ul>
                          <div className="total"><p className="w-40">Total Machines Selected<span className="float-right">30</span>
                          </p></div>
                        </div>
                        <div className="linenum1">
                          <ul>
                            <h3>Line number 1</h3>
                            <AiOutlineRight />
                            <span>Innerwear</span>
                            <li className="ml-5">
                              <AiOutlineRight />
                              <span className="text-muted">Knickers | Panties</span>
                            </li>
                          </ul>
                          <ul className="totalcal">
                            <AiOutlineRight /><span>Open</span>
                            <AiOutlineRight className="ml-30" /><span>Natural</span>
                            <li className="ml-5 w-40 active">
                              <AiOutlineRight />
                              <span>Single Needle<span className="float-right">30</span></span>
                            </li>
                            <li className="ml-5 w-40">
                              <AiOutlineRight />
                              <span>Double Needle<span className="float-right">30</span></span>
                            </li>

                          </ul>
                          <div className="total"><p className="w-40">Total Machines Selected<span className="float-right">30</span>
                          </p></div>
                        </div>
                      </div>
                    </div>
                  </PerfectScrollbar>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}
export default ProductConfiguration;
