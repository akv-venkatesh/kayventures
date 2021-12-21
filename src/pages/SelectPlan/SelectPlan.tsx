import React from 'react';
import Fast from './images/girls.png';
import { MdShare } from 'react-icons/md';
import './SelectPlan.scss';
import { BsArrowLeftShort } from "react-icons/bs";
import { BiRupee, BiChevronDown } from 'react-icons/bi';
import '../m-login.scss';
import { BsArrowRight } from 'react-icons/bs';
import Navigation from '../../component/manufacturer_navigation';
import { HiUserCircle, HiOutlineFingerPrint } from "react-icons/hi";
import { ImMenu } from "react-icons/im";
class SelectPlan extends React.Component {
    render() {
        return (
            <div className='d-flex flex-wrap h-100 m-settings'>
                <div className="container h-100">
                    <section className='s-sec1'>
                        <Navigation />
                    </section>
                    <section className="s-sec2">
                        <div className="row">
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
                            <div className="col-md-3 h-100 prl-0 blocks-1">
                                <div className="ad">
                                    <img src={Fast} alt="Fast" className="w-100" />
                                    <div className="content px-4 py-4 w-100">
                                        <h3 className="title">Fast Fashion<MdShare /></h3>
                                        <p className="sub-topic">Subtopic</p>
                                        <p className="kayFashion">#KayFastFashion</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 h-100 prl-0 blocks-2">
                                <div className="buttons mt-3">
                                    <button type="submit" className="btn btn-back-to-events mb-1 back"><BsArrowLeftShort />&nbsp;Back-to-events</button>
                                    <button type="submit" className="btn btn-back-to-events float-end mx-3 mt-1 sponser">Sponser Plans</button>
                                    <button type="submit" className="btn btn-back-to-events float-end mx-3 active theme">Theme,Plan & Pricing<br /><BiChevronDown /></button>
                                </div>
                                <div className="box mx-3">
                                    <div className="plans ms-4">
                                        <div className="row">
                                            <div className="col-md-3 block block-1">
                                                <div className="platinum plan">
                                                    <p>Platinum</p>
                                                </div>
                                                <div className="list px-3">
                                                    <ul>
                                                        <li>10 themes</li>
                                                        <li>1000 mb Display Storage</li>
                                                        <li>Digital Marketing Support</li>
                                                        <li>Display Elements Max</li>
                                                        <li>Email Marketing Support</li>
                                                        <li>Buyer Introduction Max</li>
                                                        <li>Web Analytics</li>
                                                        <li>Custom Dashboard</li>
                                                    </ul>
                                                    <div className="price">
                                                        <p><BiRupee />3,00,000</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 block block-2">
                                                <div className="gold plan">
                                                    <p>Gold</p>
                                                </div>
                                                <div className="list px-3">
                                                    <ul>
                                                        <li>5 themes</li>
                                                        <li>400 mb Display Storage</li>
                                                        <li>Digital Marketing Support</li>
                                                        <li>Display Elements Max</li>
                                                        <li>Email Marketing Support</li>
                                                        <li>Buyer Introduction 10</li>
                                                        <li>Web Analytics</li>
                                                        <li>Standard Dashboard</li>
                                                    </ul>
                                                    <div className="price">
                                                        <p><BiRupee />2,00,000</p>
                                                    </div>
                                                    <div className="arrow">
                                                        <BsArrowRight />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 block block-3">
                                                <div className="silver plan">
                                                    <p>Silver</p>
                                                </div>
                                                <div className="list px-3">
                                                    <ul>
                                                        <li>3 themes</li>
                                                        <li>220 mb Display Storage</li>
                                                        <li>Display Elements 10</li>
                                                        <li>Display Elements Max</li>
                                                        <li>Email Marketing Support</li>
                                                        <li>Web Analytics</li>
                                                        <li>Standard Dashboard</li>
                                                    </ul>
                                                    <div className="price">
                                                        <p><BiRupee />1,20,000</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default SelectPlan;