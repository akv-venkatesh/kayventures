import React from "react";
import "./button.css";
import buttonarrowleft from "../../assets/icons/arrows/buttonarrowleft.svg";
import buttonarrowright from "../../assets/icons/arrows/buttonarrowright.svg";
import { FC } from "react";
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from "react-icons/ri";
import { AiOutlineSkin, AiFillCaretLeft, AiFillCaretRight, AiOutlineRight } from "react-icons/ai";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  link?: any;
}


// export const Backbutton:FC<Props> = (props) => {
//   return (
//     <div  data-testid="backbutton"
//     className="cbtn back_btn" onClick={props.onClick}>
//       <img src={buttonarrowleft} className="back_btn_left" />
//       <span>Back </span>
//     </div>
//   );
// };
// export const Nextbutton:FC<Props> = (props) => {
//   return (
//     <div data-testid="nextbutton"
//      className="cbtn next_btn" onClick={props.onClick}>
//       <span>Next </span>
//       <img src={buttonarrowright} className="next_btn_right" />
//     </div>
//   );
// };
// export const DisableNextbutton = (props: Props) => {
//   return (
//     <div data-testid="disablenextbutton"
//      className="dbtn next_btn">
//       <span>Next </span>
//       <img src={buttonarrowright} className="next_btn_right" />
//     </div>
//   );
// };

// export const DisableBackbutton = (props: Props) => {
//   return (
//     <div data-testid="disablenextbutton1"
//      className="dbtn back_btn">
//       <span>Back </span>
//       <img src={buttonarrowleft} className="back_btn_left" />
//     </div>
//   );
// };



export const Swmmerybutton:FC<Props> = (props) => {
  return (
    <button className='swmmery-btn' onClick={props.onClick}>Summary <span><RiArrowRightSLine className='btn-arrow-right'/></span></button>
  );
};


export const Backbutton:FC<Props>=(props)=>{
  return(
    <button type="button" className=" btn-back " onClick={props.onClick}><AiFillCaretLeft className="left-array-btn" />Back</button>
  )
}
export const Nextbutton:FC<Props>=(props)=>{
  return(
    <button type="button" className="btn-next" onClick={props.onClick}>Next<AiFillCaretRight className="right-array-btn" /></button>
  )
}

export const DisableBackbutton:FC<Props>=(props)=>{
  return(
    <button type="button" className=" dbtn-back " onClick={props.onClick}><AiFillCaretLeft className="left-array-btn" />Back</button>
  )
}
export const DisableNextbutton:FC<Props>=(props)=>{
  return(
    <button type="button" className="dbtn-next" onClick={props.onClick}>Next<AiFillCaretRight className="right-array-btn" /></button>
  )
}