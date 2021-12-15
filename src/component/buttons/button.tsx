import React from "react";
import "./button.css";
import buttonarrowleft from "../../assets/icons/arrows/buttonarrowleft.svg";
import buttonarrowright from "../../assets/icons/arrows/buttonarrowright.svg";

interface Props {
    // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Backbutton = (props: Props) => {
  return (
    <div className="cbtn back_btn">
      <img src={buttonarrowleft} className="back_btn_left" />
      <span>Back </span>
    </div>
  );
};
export const Nextbutton = (props: Props) => {
  return (
    <div className="cbtn next_btn">
      <span>Next </span>
      <img src={buttonarrowright} className="next_btn_right" />
    </div>
  );
};
export const DisableNextbutton = (props: Props) => {
  return (
    <div className="dbtn next_btn">
      <span>Next </span>
      <img src={buttonarrowright} className="next_btn_right" />
    </div>
  );
};
