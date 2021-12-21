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
    <Link to={props.link} className="cbtn back_btn" onClick={props.onClick}>
      <img src={buttonarrowleft} className="back_btn_left" />
      <span>Back </span>
    </Link>
  );
};
export const Nextbutton = (props: Props) => {
  return (
    <Link to={props.link} className="cbtn next_btn">
      <span>Next </span>
      <img src={buttonarrowright} className="next_btn_right" />
    </Link>
  );
};
export const DisableNextbutton = (props: Props) => {
  return (
    <Link to="#" className="dbtn next_btn">
      <span>Next </span>
      <img src={buttonarrowright} className="next_btn_right" />
    </Link>
  );
};
