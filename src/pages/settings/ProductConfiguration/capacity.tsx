import React, { ChangeEvent, Component, FormEvent, MouseEvent } from "react";
import { Button, Form, Accordion, Modal } from "react-bootstrap";
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
import { JsxFlags } from "typescript";
import { RiInformationFill } from "react-icons/ri";
import { AiOutlineRight } from "react-icons/ai";


interface typeState {
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
}

class ProductConfiguration extends Component<{}, typeState> {
  constructor(props: any) {
    super(props);
    this.state = {
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
      machinery:[
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
      checkedMachine:[],
      confirmedMachine: [],
      machineCount: 0,
      totalmachinecount: 0,
      showsummary: false,
    };
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
        return el.name === name;
      });
    }
    else{ 
      return false;
    }
  }
  productSelect = (event:ChangeEvent<HTMLInputElement>, item:any):any =>{
    if(event.currentTarget.checked){
      this.state.product_item.some((e:any, index:number)=>{
        e.data.some((data:any, i:number)=>{
          if(!this.check(e.name) && e.name == item){
            let obj = {"name": e.name, data:[]};
            let arr = this.state.selected_product_item;
            arr.push(obj);
            this.setState({
              selected_product_item : arr
            })
          }
          if(e.name == item){
            let obj = {"name": event.currentTarget.value};
            let arr = this.state.selected_product_item;
            if(this.state.selected_product_item[index].data.filter((checking:any) =>
              checking.name == event.currentTarget.value).length == 0){
              arr[index].data.push(obj);
              this.setState({
                selected_product_item: arr
              });
              return;
            }
          }
        })
      })
    }
  }

  lineTypeChange = (event:ChangeEvent<HTMLSelectElement>) =>{
    alert();
    this.setState({
      linetype: event.currentTarget.value
    },()=>{
      console.log(this.state.linetype);
    })
  }
  materialTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      materialtype: event.currentTarget.value
    })
  }

  confirmMachine = (event: MouseEvent<HTMLButtonElement>, count:number) => {
    let obj = {name: this.state.checkedMachine.name, count: count};
    let arr = this.state.confirmedMachine;
    arr.push(obj);
    this.setState({
      confirmedMachine: arr
    },()=>{
      console.log(this.state.confirmedMachine);
    })
    let counting = 0;
    this.state.confirmedMachine.some((data:any, index:number)=>{
      counting = counting + data.count;
    })
    this.setState({
      totalmachinecount: counting
    })
    this.setState({
      checkedMachine: []
    })
  }

  selectMachine = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, event.target.dataset.needlecount)
    let obj = {name: event.target.value, needle_count: event.target.dataset.needlecount};
    this.setState({
      checkedMachine: obj
    },()=>{
      console.log(this.state.checkedMachine);
    })
  }

  machineCount = (event: ChangeEvent<HTMLInputElement>) =>{
    this.setState({
      machineCount: parseInt(event.target.value) > 0 ? parseInt(event.target.value) : 0
    })
  }

  showSummary = (event: MouseEvent<HTMLButtonElement>) =>{
    this.setState({
      showsummary: !this.state.showsummary
    })
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
                                                    onChange={(e) => this.productSelect(e,product.name)} 
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
                            <Form.Select defaultValue="Choose..." onChange={this.lineTypeChange}>
                              <option value="">Line type</option>
                              <option value="open">Open</option>
                              <option value="reserved">Reserved</option>
                            </Form.Select>
                          </div>
                          <div className="custom-select mb-2">
                            <Form.Select defaultValue="Choose..." onChange={this.materialTypeChange}>
                              <option value="">Material type</option>
                              <option value="Natural">Natural</option>
                              <option value="Artificial">Artificial</option>
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
                              {state.machinery.map((name: any, i:number) =>
                              <div className="item text-center" key={'check'+i}>
                                <Form.Check.Input
                                  type="radio"
                                  id={'machine'+i}
                                  name="machine"
                                  value={name.name}
                                  data-needlecount = {name.needle_count}
                                  hidden
                                  onChange={this.selectMachine}
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
                                      <h3>{name.needle_count}</h3>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="m-0 py-2">{name.name}</h4>
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
                            <p className="m-0">{state.checkedMachine.name?state.checkedMachine.name:'Machine' }</p>
                            <Form.Control type="number" placeholder="Enter no of machines" onChange={this.machineCount}/>
                            <span className="divider"></span>
                            <p className="machine-count m-0">{state.checkedMachine.needle_count}</p>
                          </div>
                          <div className="ms-3">
                            <Button 
                              className="active-save-btn" 
                              disabled={state.checkedMachine.name&& state.machineCount ? false : true} 
                              onClick={(e)=>this.confirmMachine(e, state.machineCount)}>
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
                          {
                            state.selected_product_item.map((item:any, index:number)=>
                              <li className="add-machine-product-item py-2">
                                <div className="main d-flex align-items-center">
                                  <BsChevronRight/>
                                  <p className="m-0 ps-2">{item.name}</p>
                                </div>
                                <div className="sub ps-4 d-flex align-items-center">
                                  <BsChevronRight/>
                                  <div className="d-flex ps-2">
                                    {
                                      item.data.map((subitem:any, i:number)=>
                                        <span>{subitem.name}</span>
                                      )
                                    }
                                  </div>
                                </div>
                              </li>
                            )
                          }
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
                          {
                            state.confirmedMachine.map((item:any, i:number)=>
                              <div className="main d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                  <BsChevronRight />
                                  <p className="m-0 ps-2">{item.name}</p>
                                </div>
                                <p className="m-0">{item.count}</p>
                              </div>
                            )
                          }
                          </li>
                        </ul>
                      </div>
                      <div className="total-machine">
                        <ul className="m-0 p-0 mb-4">
                          <li className="">
                            <div className="main d-flex justify-content-between align-items-center">
                              <p className="m-0">Total Machines Selected</p>
                              <p className="m-0">{state.totalmachinecount}</p>
                            </div>
                          </li>
                        </ul>
                        <div className="d-flex justify-content-between">
                          {
                            !state.showsummary ? 
                              <>
                                <Button 
                                  className="active-btn" 
                                  disabled={state.confirmedMachine.length > 0 ? false : true}
                                  onClick={this.showSummary}>
                                  Add Machine
                                </Button>
                                <Button className="active-btn-save" disabled={state.confirmedMachine.length > 0 ? false : true}>
                                  Save
                                </Button>
                              </> :
                              <>
                                <Button 
                                  className="active-btn" 
                                  disabled={state.confirmedMachine.length > 0 ? false : true}
                                  >
                                  Add Line
                                </Button>
                                <Button 
                                  className="active-btn-save" 
                                  disabled={state.confirmedMachine.length > 0 ? false : true}
                                  onClick={this.handleShow}>
                                  Summary
                                </Button>
                              </>
                            }
                        </div>
                      </div>
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
                              <AiOutlineRight className="ml-30"/><span>Natural</span>
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
                            <AiOutlineRight className="ml-30"/><span>Natural</span>
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
    );
  }
}
export default ProductConfiguration;
