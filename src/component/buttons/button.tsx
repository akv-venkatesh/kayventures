import React from "react";
import "./button.css";
import buttonarrowleft from "../../assets/icons/arrows/buttonarrowleft.svg";
import buttonarrowright from "../../assets/icons/arrows/buttonarrowright.svg";
import { FC } from "react";
import { Link } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  link?: any;
}


export const Backbutton:FC<Props> = (props) => {
  return (
    <div 
    className="cbtn back_btn" onClick={props.onClick}>
      <img src={buttonarrowleft} className="back_btn_left" />
      <span>Back </span>
    </div>
  );
};
export const Nextbutton:FC<Props> = (props) => {
  return (
    <div 
     className="cbtn next_btn" onClick={props.onClick}>
      <span>Next </span>
      <img src={buttonarrowright} className="next_btn_right" />
    </div>
  );
};
export const DisableNextbutton = (props: Props) => {
  return (
    <div 
     className="dbtn next_btn">
      <span>Next </span>
      <img src={buttonarrowright} className="next_btn_right" />
    </div>
  );
};
