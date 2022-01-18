import { Component } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import "react-perfect-scrollbar/dist/css/styles.css";
import Vector1 from "../../../../../assets/images/vest.svg";
import Vector3 from "../../../../../assets/icons/various/Vector3.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillCaretRight } from "react-icons/ai";
import "./index.scss";

interface typeProps {
    onClick: ()=>void,
}

class FacilityHome extends Component<typeProps,{}>{
    constructor(props:any){
        super(props);
        this.state = {

        }
    }
    click = () =>{
        this.props.onClick();
    }
    render():JSX.Element{
        return(
            <div className="main d-flex align-items-center">
                <div className="leftmenu">
                    <div className="inner">
                        <div className="inner_maintext">
                            <h4>Manufacture</h4>
                        </div>
                        <div className="inner_subtext">
                            <h6>Sweing</h6>
                        </div>
                        <div className="lefthgt">
                        <PerfectScrollbar>
                            <div className="d-flex flex-column justify-content-between product-item-parent">
                                <div className="select_heading mt-3">
                                    <img src={Vector1} alt="" />
                                    {/* <img src={Vector2} className="inner_image" alt="" /> */}
                                    <p>Synticate Industries </p>
                                </div>

                                <div className="select_box d-flex" onClick={this.click}>
                                    <img src={Vector3} alt="" />
                                    <p>Facility 1</p>
                                </div>
                                <div className="select_box d-flex">
                                    <img src={Vector3} alt="" />
                                    <p>Facility 2</p>
                                </div>

                            </div>
                        </PerfectScrollbar>
                        </div>
                    </div>
                </div>
                <div className="rightmenu">
                    <button className="summarybtn">Summary<MdKeyboardArrowRight/></button>
                    <div className="d-flex flex-column product-item-parent-right justify-content-center">                        
                        <p>Click on the Facilities one by one to fill in the details relateing to Location, Contact and Business hours</p>  
                    </div>
                    <button title="nextbutton" type="submit" className="btn btn-back mx-2 next float-end nextbtn">Next&emsp;<AiFillCaretRight />
                    </button>
                </div>
            </div>
        )
    }
}
export default FacilityHome;