import React, { ChangeEvent, Component, FormEvent, MouseEvent } from "react";
import { Button, Form, Accordion, Modal } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { GiSewingMachine } from "react-icons/gi";
import {
  Nextbutton,
  DisableNextbutton,
} from "../../../../component/buttons/button";
import "./index.scss";
import CustomSelect from '../../../../component/custom_select';
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar"
import { JsxFlags } from "typescript";
import { RiInformationFill } from "react-icons/ri";
import { AiOutlineRight } from "react-icons/ai";
import Vector3 from "../../../../assets/icons/various/Vector3.svg"

// import Select from 'react-select';

import Select from '../../../../component/dropdown_select/slelect';
import $ from 'jquery';
interface typeProps{
  value:string,
}
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
  disable_input: boolean;
}

class Facilityinfo extends Component<typeProps, typeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showModel: false,
      selectedOption: "",
      line_number: '',
      product_item: [
        {
          name: 'Activity list',
          data: [
            {
              name: 'Garmenting'
            },
            {
              name: 'Made ps',
            },
            {
              name: 'Home Textiles',
            },
            {
                name: 'Floor Coverings',
              }
          ]
        },
        {
          name: 'Select from options',
          data: [
            {
              name: 'Building facade'
            },
            {
              name: 'Reception',
            },
            {
              name: 'Sewing',
            },
            {
              name: 'Cutting',
            },
            {
              name: 'Stores',
            },
            {
              name: 'Checking',
            },
            {
              name: 'Trimming',
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
            if (this.state.selected_product_item[index].data.filter((checking: any) =>
              checking.name == event.currentTarget.value).length == 0) {
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
    else{
      this.state.product_item.some((e: any, index: number) => {
        e.data.some((data: any, i: number) => {
          if (data.name == event.currentTarget.value) {
            let obj = this.state.selected_product_item;
            let arr = this.state.selected_product_item[index].data;
            arr = arr.filter((el:any) => data.name !== el.name);
            obj[index].data = arr;
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
    
      
      <div className="content1 h-100">
        <div className="facility1 d-flex">
                        <img src={Vector3} alt="" />
                        <p>Facility 1</p>
                        <p>|</p>
                        <img src={Vector3} alt="" />
                        <p>Facility 2</p>
                        <p>|</p>
                        <img src={Vector3} alt="" />
                        <p>Facility 3</p>
                        <p>|</p>
        </div>
        <div className="box h-100 p-3">
          <CustomSelect />
          <div className="h-100">
            <div className="capacity h-100">              
              <div className="sec1 h-100">
                <div className="d-flex flex-column justify-content-between product-item-parent">
                  <div className="product-item scroll d-flex">
                    <div className="w-100">
                      <h2 className="m-0 py-3">Select Activity</h2>
                      <PerfectScrollbar>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Facilityinfo;
