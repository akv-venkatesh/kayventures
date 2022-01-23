import { Component } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import "react-perfect-scrollbar/dist/css/styles.css";
import Vector1 from "../../../../../assets/images/vest.svg";
import Vector3 from "../../../../../assets/icons/various/Vector3.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillCaretRight } from "react-icons/ai";
import "./index.scss";

// import Stepper from '../../../../../component/stepper/stepper';


interface typeProps {
    onClick? : any,
    onClickNext?: any,
    onClickBack?: any,
    selected_Facilities?: any
}

class FacilityHome extends Component<typeProps, {}>{
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }

    // click = (arg:any) => {
    //     console.log(arg)
    //     this.props.onClick(arg);
    // }
    render(): JSX.Element {
        const Facilities = this.props.selected_Facilities? this.props.selected_Facilities : []
        console.log(Facilities);
        return (
            <div className="main d-flex h-100">
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
                                    {
                                        //   selected_Facilities.length > 0 ?
                                        Facilities.map((facility: any) => { 
                                            return (<div className="select_box_container">
                                                    {/* <input type='radio' name="facilities"  id={facility} value={facility} style={{display:'none'}} onChange={(e:any)=>{console.log(e.target.value)}}/> */}
                                                    {/* <label style={{width:"100%"}} htmlFor={facility}> */}
                                                        <div className="select_box d-flex"  onClick={()=>this.props.onClick(facility)}>
                                                            <img src={Vector3} alt="" />
                                                            <p>{facility}</p>
                                                        </div>
                                                    {/* </label> */}
                                                    </div>)
                                        })
                                    }
                                </div>
                            </PerfectScrollbar>
                        </div>
                    </div>
                </div>
                {/* <div className=""> */}
                    {/* <Stepper steps={steps} activeStep={2} /> */}
                    <div className="rightmenu p-3">                        
                        <div className="d-flex justify-content-end">
                            <button className="summarybtn">Summary<MdKeyboardArrowRight/></button>
                        </div>
                        <div className="d-flex flex-column product-item-parent-right justify-content-center">                        
                            <p>Click on Next Button to complete the Facility Info.(Operation selection) of selected facility</p>  
                        </div>
                        <div className="d-flex justify-content-end">
                            <button title="nextbutton" type="submit" className="btn btn-back mx-2 next float-end nextbtn">
                                Next&emsp;
                                <AiFillCaretRight />
                            </button> 
                        </div>  
                    </div>
                {/* </div> */}
            </div>
        )
    }
}
export default FacilityHome;