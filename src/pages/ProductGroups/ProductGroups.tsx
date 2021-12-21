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
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import Collapsible from 'react-collapsible';
interface IProps {
}
interface IState {
    select: string[];
    group: string[];
    groups: string[];
    select_values: string[];
    group_values: string[];
    groups_values: string[];
    clicked_value: string[];
    select_confirm: boolean,
    group_confirm: boolean,
    groups_confirm: boolean,
    items_confirm: boolean,
    final_confirm: boolean,
    summarize: boolean,
    items_true: boolean
}
class ProductGroups extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = {
            select: ["Woven", "Knitted", "Women", "men"],
            group: ["UnderWear", "Workwear", "StreetWear", "NightWear", "Activewear", "Ceremonial", "Protectivewear", "Sportswear"],
            groups: ["Slips", "Kinkers", "Bra-Top", "cheeky", "Chemise", "Pants", "Bra", "Brief", "Vests", "Tank", "Thong", "Hip Hugger"],
            select_values: [],
            groups_values: [],
            group_values: [],
            clicked_value: [],
            select_confirm: true,
            group_confirm: false,
            groups_confirm: false,
            items_confirm: false,
            final_confirm: false,
            summarize: false,
            items_true: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitSelect = this.handleSubmitSelect.bind(this);
        this.handleSubmitGroup = this.handleSubmitGroup.bind(this);
        this.handleBackSelect = this.handleBackSelect.bind(this);
        this.handleChangeGroup = this.handleChangeGroup.bind(this);
        this.handleBackGroup = this.handleBackGroup.bind(this);
        this.handleSubmitGroups = this.handleSubmitGroups.bind(this);
    }
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // var name: any = e.currentTarget.name;
        // var checked = e.currentTarget.checked;
        // if (checked === true && name != " ") {
        //     this.setState({
        //         select_values: [...this.state.select_values, name],
        //     }, () => {
        //         console.log("Selected Values", this.state.select_values);
        //     });
        // }
        // else {
        //     this.setState({
        //         select_values: [...this.state.select_values.filter(e => e !== name)],
        //     });
        // }
        if (event.target.checked) {
            if (!this.state.select_values.includes(event.target.name)) {
                this.setState(prevState => ({ select_values: [...prevState.select_values, event.target.name] }))
            }
        } else {
            this.setState(prevState => ({ select_values: prevState.select_values.filter(value => value !== event.target.name) }));
        }
    }
    handleChangeGroup = (event: React.ChangeEvent<HTMLInputElement>) => {
        // var group_name: any = e.currentTarget.name;
        // var checked_group = e.currentTarget.checked;
        // if (checked_group == true && group_name != " ") {
        //     this.setState({
        //         group_values: [...this.state.group_values, group_name],
        //     }, () => {
        //         console.log("Selected Values", this.state.group_values);
        //     });
        // }
        // else {
        //     this.setState({
        //         group_values: [...this.state.group_values.filter(e => e !== group_name)],
        //     });
        // }
        if (event.target.checked) {
            if (!this.state.group_values.includes(event.target.name)) {
                this.setState(prevState => ({ group_values: [...prevState.group_values, event.target.name] }))
            }
        } else {
            this.setState(prevState => ({ group_values: prevState.group_values.filter(value => value !== event.target.name) }));
        }
    }
    handleChangeGroups = (event: React.ChangeEvent<HTMLInputElement>) => {
        // var groups_name: any = e.currentTarget.name;
        // var checked_groups = e.currentTarget.checked;
        // if (checked_groups == true && groups_name != " ") {
        //     this.setState({
        //         groups_values: [...this.state.groups_values, groups_name],
        //     }, () => {
        //         console.log("Selected Values", this.state.groups_values);
        //     });
        // }
        // else {
        //     this.setState({
        //         groups_values: [...this.state.groups_values.filter(e => e !== groups_name)],
        //     });
        // }
        if (event.target.checked) {
            if (!this.state.groups_values.includes(event.target.name)) {
                this.setState(prevState => ({ groups_values: [...prevState.groups_values, event.target.name] }))
            }
        } else {
            this.setState(prevState => ({ groups_values: prevState.groups_values.filter(value => value !== event.target.name) }));
        }
    }
    handleSubmitSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            select_confirm: false,
            group_confirm: true
        });
    }
    handleSubmitGroup = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            select_confirm: false,
            group_confirm: true
        });
    }
    handleGoItems = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            groups_confirm: false,
            items_confirm: true
        });
    }
    handleSubmitAgain = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            groups_confirm: true,
            items_confirm: false
        });
    }
    handleBackSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            select_confirm: true,
            group_confirm: false
        });
    }
    handleBackGroup = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            select_confirm: false,
            group_confirm: true,
            groups_confirm: false
        });
    }
    handleBackGroups = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            select_confirm: false,
            group_confirm: false,
            groups_confirm: true,
            items_confirm: false
        });
    }
    handleBackItems = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            items_confirm: false,
            groups_confirm: true
        });
    }
    handleSubmitGroups = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            select_confirm: false,
            group_confirm: false,
            groups_confirm: true
        })
    }
    handleSubmitItems = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            select_confirm: false,
            group_confirm: false,
            groups_confirm: false,
            items_confirm: true,
            final_confirm: false
        })
    }
    handleSubmitfinal = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            select_confirm: false,
            group_confirm: false,
            groups_confirm: false,
            items_confirm: false,
            final_confirm: true
        })
    }
    render() {
        return (
            <>
                <div className='d-flex flex-wrap h-100 m-settings'>
                    <div className="container">
                        <section className='s-sec1'>
                            <Navigation />
                        </section>
                        <section className="s-sec2">
                            <div className="navigation align-items-center d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <div className="me-3">
                                        <ImMenu className="d-md-none menu-bar" />
                                    </div>
                                    {/* <ul className="d-flex mb-0 ps-0">
                                        <li className="me-3">{localStorage.getItem('business_category')}</li>
                                        <li className="me-3 active">Settings</li>
                                    </ul> */}
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
                                <div className="list py-4 px-3 ">
                                    <ul className="d-flex text-center w-50 m-auto position-relative">
                                        <li className="px-5 active"><span>Product Selection</span></li>
                                        <li className="px-5"><span>Capacity</span></li>
                                    </ul>
                                </div>
                            </div>
                            {
                                this.state.select_confirm ?
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
                                            </div>
                                            <div className="col-md-8 block-2">
                                                <div className="box pt-4 mt-2">
                                                    <p className="mb-4">Select</p>
                                                    <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>
                                                        <div className="select-category">
                                                            <ul className="category">
                                                                {this.state.select.map((data, index) => {
                                                                    return <li className="w-100 float-start mx-2 my-2">
                                                                        <span className="w-50 float-start">{data}</span>
                                                                        <label className="container w-50 float-end">
                                                                            <input type="checkbox" value={index} name={data} id={data} onChange={this.handleChange} required />
                                                                            <span className="checkmark"></span>
                                                                        </label></li>
                                                                })}
                                                            </ul>
                                                        </div>
                                                    </PerfectScrollbar>
                                                    <div className="col-md-12 pb-4">
                                                        <div className="row ">
                                                            <button type="button" className="btn btn-back mx-2 back disabled"><AiFillCaretLeft />&emsp;Back</button>
                                                            <button type="button" className="btn btn-default  mx-4 remove">Remove</button>
                                                            <button type="button" className="btn btn-default  mx-4 save">Save</button>
                                                            <button type="submit" className="btn btn-back mx-5 next" onClick={this.handleSubmitSelect}>Next&emsp;<AiFillCaretRight /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : null
                            }
                            {
                                this.state.group_confirm ?
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
                                                <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>

                                                    <div className="sub-categories mt-4">
                                                        <ul className="mx-2">
                                                            {this.state.select_values.map((value, index) => {
                                                                console.log("Categories", value);
                                                                console.log("Index", index);
                                                                return <li key={index}>{value}</li>
                                                            })}
                                                        </ul>
                                                    </div>
                                                </PerfectScrollbar>
                                            </div>
                                            <div className="col-md-8 block-2">
                                                <div className="box pt-4 mt-2">
                                                    <p className="mb-4">Select Product Group</p>
                                                    <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>
                                                        <div className="product_categories categories">
                                                            <div className="row">
                                                                <ul className="category">
                                                                    {this.state.group.map((cat, index) => {
                                                                        console.log("Hi", cat);
                                                                        return <li className="w-75 mx-3"><span className="w-50"><AiOutlineSkin />&nbsp;{cat}</span>
                                                                            <label className="container w-25">
                                                                                <input type="checkbox" value={index} name={cat} id={cat} onChange={this.handleChangeGroup} required />
                                                                                <span className="checkmark"></span>
                                                                            </label>
                                                                        </li>
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </PerfectScrollbar>
                                                    <div className="col-md-12 pb-4">
                                                        <div className="row ">
                                                            <button type="button" className="btn btn-back mx-2 back" onClick={this.handleBackSelect}><AiFillCaretLeft />&emsp;Back</button>
                                                            <button type="button" className="btn btn-default  mx-4 remove">Remove</button>
                                                            <button type="button" className="btn btn-default  mx-4 save">Save</button>
                                                            <button type="submit" className="btn btn-back mx-5 next" onClick={this.handleSubmitGroups}>Next&emsp;<AiFillCaretRight /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : null
                            }
                            {
                                this.state.groups_confirm ?
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
                                                <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>

                                                    <div className="sub-categories mt-4">
                                                        <ul className="mx-2">
                                                            {this.state.select_values.map((value, index) => {
                                                                console.log("Categories", value);
                                                                console.log("Index", index);
                                                                return <li key={index}>{value}</li>
                                                            })}
                                                        </ul>
                                                        <ul className="sub-menus mx-2">
                                                            {this.state.group_values.map((value, index) => {
                                                                return <button className="px-2" onClick={this.handleGoItems} name={value}>{value}<BiX className="float-end" /></button>
                                                            })}
                                                        </ul>
                                                        <h5>Recently Searched</h5>
                                                        <ul className="sub-menus mx-2">
                                                            {this.state.clicked_value.map((value, index) => {
                                                                return <button className="px-2" name={value}>{value}<BiX className="float-end" /></button>
                                                            })}
                                                        </ul>
                                                    </div>
                                                </PerfectScrollbar>
                                            </div>
                                            <div className="col-md-8 block-2">
                                                <div className="box product_items pt-4 mt-2">
                                                    <p className="mb-4">Click on the selected product groups to view their product items</p>

                                                    <div className="col-md-12 pb-4">
                                                        <div className="row ">
                                                            <button type="button" className="btn btn-back mx-2 back" onClick={this.handleBackGroup}><AiFillCaretLeft />&emsp;Back</button>
                                                            <button type="button" className="btn btn-default  mx-4 remove">Remove</button>
                                                            <button type="button" className="btn btn-default  mx-4 save">Save</button>
                                                            <button type="submit" className="btn btn-back mx-5 next" onClick={this.handleSubmitGroups}>Next&emsp;<AiFillCaretRight /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : null
                            }
                            {
                                this.state.items_confirm ?
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
                                                <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>

                                                    <div className="sub-categories mt-4">
                                                        <ul className="mx-2">
                                                            {this.state.select_values.map((value, index) => {
                                                                console.log("Categories", value);
                                                                console.log("Index", index);
                                                                return <li key={index}>{value}</li>
                                                            })}
                                                        </ul>

                                                        <ul className="sub-menus mx-2">
                                                            {this.state.group_values.map((value, index) => {
                                                                return <button className="px-2" name={value} onClick={this.handleGoItems}>{value}<BiX className="float-end" /></button>

                                                            })}
                                                        </ul>

                                                    </div>
                                                </PerfectScrollbar>
                                            </div>
                                            <div className="col-md-8 block-2">
                                                <div className="box pt-4 mt-2">
                                                    <p className="mb-4">Select items of selected group</p>

                                                    <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>
                                                        <div className="product_categories categories">
                                                            <div className="row">
                                                                <ul className="category">
                                                                    {this.state.groups.map((items, index) => {
                                                                        console.log("Hi", items);
                                                                        return <li className="w-75 mx-3"><span className="w-50"><AiOutlineSkin />&nbsp;{items}</span>
                                                                            <label className="container w-25">
                                                                                <input type="checkbox" value={index} name={items} id={items} onChange={this.handleChangeGroups} required />
                                                                                <span className="checkmark"></span>
                                                                            </label>
                                                                        </li>
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </PerfectScrollbar>
                                                    <div className="col-md-12 pb-4">
                                                        <div className="row ">
                                                            <button type="button" className="btn btn-back mx-2 back" onClick={this.handleBackGroups}><AiFillCaretLeft />&emsp;Back</button>
                                                            <button type="button" className="btn btn-default  mx-4 remove">Remove</button>
                                                            <button type="button" className="btn btn-default  mx-4 save">Save</button>
                                                            <button type="submit" className="btn btn-back mx-5 next" onClick={this.handleSubmitAgain}>Next&emsp;<AiFillCaretRight /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : null
                            }
                            {
                                this.state.final_confirm ?
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
                                                <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>

                                                    <div className="sub-categories mt-4">
                                                        <ul className="mx-2">
                                                            {this.state.select_values.map((value, index) => {
                                                                console.log("Categories", value);
                                                                console.log("Index", index);

                                                                return <li key={index}>{value}</li>
                                                            })}
                                                        </ul>
                                                        <ul className="sub-menus mx-2">
                                                            {this.state.group_values.map((value, index) => {
                                                                return <div id={value}>
                                                                    <button className={value} value={index}>
                                                                        {value}<BiX className="float-end" />
                                                                    </button>
                                                                </div>
                                                            })}
                                                            <ul className="sub-menus-1">
                                                                {this.state.groups_values.map((value, index) => {
                                                                    return <li key={index} className="ps-4 mx-4">{value}<BiX className="float-end" /></li>
                                                                })}
                                                            </ul>
                                                        </ul>
                                                    </div>
                                                </PerfectScrollbar>
                                            </div>
                                            <div className="col-md-8 block-2">
                                                <div className="box pt-4 mt-2">
                                                    <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>
                                                        <div className="product_categories categories">
                                                            <div className="row">
                                                                <p>Click on the summary button to view the selection</p>
                                                            </div>
                                                        </div>
                                                    </PerfectScrollbar>
                                                    <div className="col-md-4 pb-4 float-end">
                                                        <div className="row ">
                                                            {/* <button type="button" className="btn btn-back mx-2 back" onClick={this.handleBackGroup}><AiFillCaretLeft />&emsp;Back</button>
                                                        <button type="button" className="btn btn-default  mx-4 remove">Remove</button>
                                                        <button type="button" className="btn btn-default  mx-4 save">Save</button> */}
                                                            <button type="submit" className="btn btn-back mx-5 next float-end">Summary<AiOutlineRight /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : null
                            }
                        </section>
                    </div >
                </div >
            </>
        );
    }

}

export default ProductGroups;