import React, { Component, ChangeEvent, MouseEvent } from 'react';
import { AiOutlineSkin, AiFillCaretLeft, AiFillCaretRight, AiOutlineRight } from "react-icons/ai";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Accordion, Modal } from "react-bootstrap";
import Collapsible from 'react-collapsible';
import $ from 'jquery';
import { RiInformationFill } from 'react-icons/ri';
import vest from "../../../../../assets/images/vest.svg";
import { FacilityInfo } from '../../../../../Routes/asyncpages';
import { HiInformationCircle } from 'react-icons/hi';
import { IoShirt } from 'react-icons/io5';

interface typeState {
    step1:boolean,
    producttype: any,
    selectedproducttype: any,
    displayState: any,
    grouptype: any,
    productselection: boolean,
    selectedgrouptype: any,
    groupselection: boolean,
    groupitemselection: any,
    completed: boolean,
    showModel: boolean,
    nextbtn: boolean,
    savebtn: boolean,
    removebtn: boolean,
    group: string,
    prodectPage: boolean,
    productSelected:any,
    visibility:boolean,
    selectedOption:string

}

class ProductSelect extends Component<{}, typeState> {
    constructor(props: any) {
        super(props);

        this.state = {
        step1: true,
        showModel: false,
        producttype: [
            {
            name: 'material',
            data:[
                {
                name: "Woven"
                },
                {
                name: "Knitted"
                }
            ]
            },
            {
            name: 'whom',
            data:[
                {
                name: "Women"
                },
                {
                name: "Men"
                }
            ]
            }
        ],
        productselection: false,
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
        groupselection: false,
        selectedproducttype: [
            {
                material: '',
                whom: '',
            }
        ],
        selectedgrouptype: [],
        displayState: [],
        groupitemselection: [],
        completed: false,
        nextbtn: true,
        savebtn: true,
        removebtn: true,
        group: '',
        prodectPage: true,
        productSelected:'',
        visibility: false,
        selectedOption:'' 
        }
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
    componentDidMount() {
        this.setState({
        displayState: this.state.producttype
        })
    }
    selectproducttype = (e: ChangeEvent<HTMLInputElement>) => {
        let arr = this.state.selectedproducttype;
        arr[0].material = e.currentTarget.value;
        this.setState({
            selectedproducttype: arr
        })
        if (this.state.selectedproducttype[0].material !== '' && this.state.selectedproducttype[0].whom !== '') {
            this.setState({
                savebtn: false,
                removebtn: false,
            })
        }
        else{
            this.setState({
                savebtn: true,
                removebtn: true,
            })
        }
    }
    selectwhom = (e:ChangeEvent<HTMLInputElement>)=>{
        let arr = this.state.selectedproducttype;
        arr[0].whom = e.currentTarget.value;
        this.setState({
            selectedproducttype: arr
        })
        if (this.state.selectedproducttype[0].material !== '' && this.state.selectedproducttype[0].whom !== '') {
            this.setState({
                savebtn: false,
                removebtn: false,
            })
        }
        else{
            this.setState({
                savebtn: true,
                removebtn: true,
            })
        }
    }
    showgroup = (e: MouseEvent<HTMLButtonElement>) => {
        this.setState({
        displayState: this.state.grouptype,
        productselection: true,
        nextbtn: true,
        savebtn: true,
        removebtn: true,
        step1: false,
        })
        $('.category input[type=checkbox]').prop("checked", false);
    }
    selectgrouptype = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.checked) {
        let obj = { name: e.currentTarget.value, data: [] };
        let arr = this.state.selectedgrouptype;
        arr.push(obj);
        this.setState({
            selectedgrouptype: arr
        }, () => {
            console.log(this.state.selectedgrouptype)
        })
        if (arr.length > 0) {
            this.setState({
            savebtn: false,
            removebtn: false,
            })
        }
        }
        else {
        let arr = this.state.selectedgrouptype;
        arr = arr.filter((item: any) => item.name !== e.currentTarget.value);
        this.setState({
            selectedgrouptype: arr
        }, () => {
            console.log(this.state.selectedgrouptype)
        })
        if (arr.length == 0) {
            this.setState({
            savebtn: true,
            removebtn: true,
            })
        }
        }
    }
    showgroupitem = (e: MouseEvent<HTMLButtonElement>) => {
        this.setState({
        displayState: [],
        groupselection: true,
        nextbtn: true,
        savebtn: true,
        removebtn: true,
        })
        this.state.selectedgrouptype.some((item: any, i: number) => {
        if (item.data.length > 0) {
            this.setState({
            completed: true,
            })
        }
        else {
            this.setState({
            completed: false,
            })
        }
        })
    }
    displaygroupitem = (e: MouseEvent<HTMLElement>, item: any): any => {
        if (!this.state.completed) {
        this.setState({
            group: item,
            removebtn: true,
        })
        let arrs: any = [];
        this.state.grouptype.some((e: any, index: number) => {
            if (e.name == item) {
                e.data.some((event: any, i: number) => {
                    let obj = { name: event.name, parent: item };
                    let arr = arrs;
                    arr.push(obj);
                    this.setState({
                    displayState: arr
                    })
                })
            }
            $('.category input[type=checkbox]').prop("checked", false);
        })
        }
    }
    groupitemselection = (e: ChangeEvent<HTMLInputElement>, item: any): any => {
        if (e.currentTarget.checked) {
        let obj = { name: e.currentTarget.value };
        let arr = this.state.groupitemselection;
        arr.push(obj);
        this.setState({
            groupitemselection: arr
        }, () => {
            console.log(this.state.groupitemselection)
        })
        if (arr.length > 0) {
            this.setState({
            removebtn: false,
            })
        }
        }
        else {
        if (this.state.groupitemselection.length !== 0) {
            let arr = this.state.groupitemselection;
            arr = arr.filter((items: any) => items.name !== e.currentTarget.value);
            this.setState({
            groupitemselection: arr
            }, () => {
            console.log(this.state.groupitemselection)
            })
        }
        }
        this.state.selectedgrouptype.some((event: any, index: number) => {
        if (event.name == item) {
            if (this.state.groupitemselection.length !== 0) {
            let obj = this.state.groupitemselection[0];
            let arr = this.state.selectedgrouptype;
            arr[index].data.push(obj);
            this.setState({
                selectedgrouptype: arr
            }, () => {
                console.log(this.state.selectedgrouptype)
            })
            }
            else {
            let obj = this.state.selectedgrouptype[index].data;
            let arr = this.state.selectedgrouptype;
            obj = obj.filter((items: any) => items.name !== e.currentTarget.value);
            arr[index].data = obj;
            this.setState({
                selectedgrouptype: arr
            })
            if (obj.length == 0) {
                this.setState({
                removebtn: true
                })
            }
            }
        }
        })
        this.setState({
        groupitemselection: []
        })
        this.state.selectedgrouptype.some((item: any, i: number) => {
        if (item.data.length > 0) {
            this.setState({
            savebtn: false,
            })
        }
        else {
            this.setState({
            savebtn: true,
            })
        }
        })
    }

    save = (e: MouseEvent<HTMLButtonElement>) => {
        this.setState({
        nextbtn: false
        })
    }
    productremove = () => {
        $('.category input[type=checkbox]').prop("checked", false);
        this.setState({
        selectedproducttype: [],
        savebtn: true,
        removebtn: true,
        nextbtn: true,
        })
    }
    groupremove = () => {
        $('.category input[type=checkbox]').prop("checked", false);
        this.setState({
        selectedgrouptype: [],
        savebtn: true,
        removebtn: true,
        nextbtn: true,
        })
    }
    groupitemremove = () => {
        $('.category input[type=checkbox]').prop("checked", false);
        this.setState({
        savebtn: true,
        removebtn: true,
        nextbtn: true,
        })
        this.state.selectedgrouptype.some((event: any, index: number) => {
        if (event.name == this.state.group) {
            let obj = this.state.selectedgrouptype[index].data;
            let arr = this.state.selectedgrouptype;
            obj = [];
            arr[index].data = obj;
            this.setState({
            selectedgrouptype: arr
            })

        }
        })
    }
    productback = () => {

    }
    groupback = () => {
        this.setState({
        displayState: this.state.producttype,
        productselection: false,
        nextbtn: true,
        savebtn: true,
        removebtn: true,
        selectedgrouptype: [],
        selectedproducttype: [
            {
                material: '',
                whom: '',
            }
        ],
        step1: true,
        })
        $('.category input[type=checkbox]').prop("checked", false);
    }
    groupitemback = () => {
        this.setState({
        displayState: this.state.grouptype,
        productselection: true,
        // productselection:true,
        nextbtn: true,
        savebtn: true,
        removebtn: true,
        selectedgrouptype: [],
        groupselection: false,
        })
        $('.category input[type=checkbox]').prop("checked", false);
    }
    render(){
        console.log(this.state.selectedOption);
        const state = this.state;
        return(
            <>
                <div className="h-100 kyc-product-select">
                    <div className="d-flex h-100">
                        <div className="block-1 h-100 pe-3">
                            <p className="sewing py-3 m-0">Sewing</p>
                            <div className="garments d-inline-flex align-items-center my-3 position-relative">
                            <label className="text"><AiOutlineSkin className="mx-2" />&nbsp;Garments</label>
                            <label className="gar-con ms-3">
                                <input type="checkbox" checked hidden />
                                <span className="checkmark"></span>
                            </label>
                            </div>
                            <div className="sub-categories">
                            <PerfectScrollbar >
                                <ul className="m-0 p-0 me-5">
                                    {
                                        state.selectedproducttype.length !== 0 ?
                                        <>
                                            {
                                                state.selectedproducttype[0].material !== '' ?
                                                <li className="py-2" data-testid={"prod1"}>{state.selectedproducttype[0].material}</li>:
                                                <></>
                                            }
                                            {
                                                state.selectedproducttype[0].whom !== '' ?
                                                <li className="py-2" data-testid={"prod2"}>{state.selectedproducttype[0].whom}</li>:
                                                <></>
                                            }
                                        </> :
                                        <></>
                                    }
                                </ul>
                                <div className="accordion me-5">
                                <ul className="p-0 m-0">
                                    <Accordion>
                                    {
                                        state.selectedgrouptype.map((group: any, i: number) =>
                                        <Accordion.Item eventKey={'a' + i} className="mb-2" key={group.name + i}>
                                            <Accordion.Button className={group.data.length > 0 ? 'complete' : 'not-completed'}
                                            onClick={(e) => this.displaygroupitem(e, group.name)}
                                            data-testid={'grp' + i}
                                            >
                                            {group.name}
                                            </Accordion.Button>
                                            <Accordion.Body>
                                            <ul className="sub-cat m-0">
                                                {
                                                group.data.map((item: any, index: number) =>
                                                    <li className="pe-4" key={item.name} >{item.name}</li>
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
                            <div className="box p-4 h-100">
                            {
                                state.displayState.length !== 0 ?
                                (
                                    !state.productselection ?<></>:
                                    !state.groupselection ?
                                        <p className="m-0 py-3">Select product group</p> :
                                        !state.completed ?
                                        <p className="m-0 py-3">Select product items of {state.group}</p> :
                                        <></>
                                ) :
                                <></>
                            }
                            <div className={state.displayState.length !== 0 && !state.step1 ? "select-category" : "select-category empty"}>
                                {
                                state.step1 ?
                                <PerfectScrollbar >
                                    <ul className="category d-flex m-0 p-0 flex-wrap">
                                    <form>
                                    {
                                        state.displayState.map((tag: any, i: number) =>
                                        <>
                                            <p className="m-0 py-3">Select</p>
                                            <div className="d-flex">
                                                {
                                                tag.data.map((data:any, index:number)=>
                                                    <>
                                                    <div className="me-3 form-tag" key={'key' + i +index}>
                                                        <input
                                                            type="radio"
                                                            value={data.name}
                                                            name={'product_category'+i}
                                                            id={data.name}
                                                            data-testid={'testcheck' + i}
                                                            required
                                                            hidden
                                                            onChange={tag.name == 'material' ? this.selectproducttype : this.selectwhom}
                                                        />
                                                        <label className="w-100 py-2 justify-content-between align-items-center d-flex" key={'productType' + i+index} htmlFor={data.name}>
                                                            <span className="checkmark">{data.name}</span>
                                                        </label>
                                                    </div>
                                                    </>
                                                )
                                                }
                                            </div>
                                        </>
                                        )
                                    }
                                    </form>
                                    </ul>
                                </PerfectScrollbar> :
                                state.displayState.length !== 0 ?
                                    <PerfectScrollbar >
                                    <ul className="category d-flex m-0 p-0 flex-wrap">
                                        {
                                        state.displayState.map((tag: any, i: number) =>
                                            <div className="me-3 form-tag" key={'key' + i}>
                                            <form>
                                                <input
                                                type="checkbox"
                                                value={tag.name}
                                                name={tag.name}
                                                id={tag.name}
                                                data-testid={'testcheck' + i}
                                                required
                                                hidden
                                                onChange={!state.productselection ? this.selectproducttype : (!state.groupselection ? this.selectgrouptype : (e) => this.groupitemselection(e, tag.parent))}
                                                />
                                                <label className="w-100 justify-content-between align-items-center d-flex" key={'productType' + i} htmlFor={tag.name}>
                                                    <IoShirt />
                                                    <div className="py-3 d-flex">
                                                        <span className="checkmark">{tag.name}</span>
                                                    </div>
                                                </label>
                                            </form>
                                            </div>
                                        )
                                        }
                                    </ul>
                                    </PerfectScrollbar> :

                                !state.completed ?
                                    <div className="empty-data d-flex h-100 justify-content-center align-items-center">
                                    <p>Click on the selected Product groups </p>
                                    </div> :
                                    <div className="empty-data d-flex h-100 justify-content-center align-items-center">
                                    <p>Click on the summary button to view the selection  </p>
                                    </div>

                                }
                            </div>
                            <div className="buttons py-3">
                                <div className="">
                                <>
                                    {
                                    !state.completed ?
                                        <div className="d-flex justify-content-between">
                                        <button
                                            type="button"
                                            className="btn btn-back back"
                                            onClick={!state.productselection ? this.productback : (!state.groupselection ? this.groupback : this.groupitemback)}
                                        >
                                            <AiFillCaretLeft />&emsp;Back
                                        </button>
                                        <div className="d-flex justify-content-center">
                                            <button
                                            type="button"
                                            className="btn btn-default mx-4 remove"
                                            onClick={!state.productselection ? this.productremove : (!state.groupselection ? this.groupremove : this.groupitemremove)}
                                            disabled={state.removebtn}
                                            >
                                            Remove
                                            </button>
                                            <button
                                            type="button"
                                            className="btn btn-default mx-4 save"
                                            disabled={state.savebtn}
                                            onClick={this.save}
                                            >
                                            Save
                                            </button>
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-next next"
                                            onClick={!state.productselection ? this.showgroup : this.showgroupitem}
                                            disabled={state.nextbtn}
                                        >Next&emsp;<AiFillCaretRight />
                                        </button>
                                        </div> :
                                        <div className="d-flex justify-content-end">
                                        <button
                                            type="submit"
                                            className="btn btn-summary next"
                                            onClick={this.handleShow}
                                        >Summary&emsp;<AiFillCaretRight />
                                        </button>
                                        </div>
                                    }
                                </>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    show={state.showModel}
                    size="lg"
                    centered
                    className="product-selection-modal"
                    backdropClassName="product-selection-modal"
                    onHide={this.handleHide}
                >
                    <Modal.Header closeButton />
                    <Modal.Body className="">
                        <div className="p-4">
                            <div className='d-flex title'>
                                <HiInformationCircle />
                                <p className='ms-3 m-0'>You have successfully completed your product configuration for sewing - garments.</p>
                            </div>
                            <h2 className='m-0 py-3'>
                                sewing
                            </h2>
                            <div className="d-flex category align-items-center">
                                <IoShirt />
                                <h3 className="m-0 px-3">
                                    Garments
                                </h3>
                                <span className='checmark'></span>
                            </div>
                            <ul className="p-0 m-0 py-3">
                                <li className='py-2'>{state.selectedproducttype[0].material}</li>
                                <li className='py-2'>{state.selectedproducttype[0].whom}</li>
                            </ul>
                            <Accordion>
                                {
                                    state.selectedgrouptype.map((group: any, i: number) =>
                                    <Accordion.Item eventKey={'a' + i} className="mb-2" key={group.name + i}>
                                        <Accordion.Button className={group.data.length > 0 ? 'complete' : 'not-completed'}
                                        onClick={(e) => this.displaygroupitem(e, group.name)}
                                        data-testid={'grp' + i}
                                        >
                                        {group.name}
                                        </Accordion.Button>
                                        <Accordion.Body>
                                        <ul className="sub-cat m-0">
                                            {
                                            group.data.map((item: any, index: number) =>
                                                <li className="pe-4 py-2" key={item.name} >{item.name}</li>
                                            )
                                            }
                                        </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    )
                                }
                            </Accordion>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default ProductSelect;