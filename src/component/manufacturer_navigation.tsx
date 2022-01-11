import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { BsGlobe2,BsPlug } from "react-icons/bs";

class Home extends React.Component {
  render(){
    return (
      <div className='m-home-navigation'>
        <div className='side-navg text-center'>
            <NavLink to='/home'>
              <div className="icons">
                <HiHome className="navg-icons my-3"/>
              </div>
            </NavLink>
            <NavLink to='/dashboard'>
              <div className="icons">
                <AiOutlineDashboard className="navg-icons my-4"/>
              </div>
            </NavLink>
            <NavLink to='/settings'>
              <div className="icons ">
                <BiCog className="navg-icons my-4"/>
              </div>
            </NavLink>
            <NavLink to='/b'>
              <div className="icons">
                <BsGlobe2 className="navg-icons my-4"/>
              </div>
            </NavLink>
            <NavLink to='/c'>
              <div className="icons">
                <BsPlug className="navg-icons my-4"/>
              </div>
            </NavLink>
        </div>
      </div>
    );
  }
}
export default  Home;