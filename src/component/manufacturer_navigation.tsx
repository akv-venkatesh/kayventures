import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { BsGlobe2,BsPlug } from "react-icons/bs";

function Home():JSX.Element {

  return (
    <div className='m-home-navigation'>
    	<div className='side-navg text-center'>
    			<NavLink to='/home' activeClassName="active">
            <div className="icons">
              <HiHome className="navg-icons my-3"/>
            </div>
          </NavLink>
          <NavLink to='/a' activeClassName="active">
            <div className="icons">
              <AiOutlineDashboard className="navg-icons my-4"/>
            </div>
          </NavLink>
          <NavLink to='/settings' activeClassName="active">
            <div className="icons ">
              <BiCog className="navg-icons my-4"/>
            </div>
          </NavLink>
          <NavLink to='/b' activeClassName="active">
            <div className="icons">
              <BsGlobe2 className="navg-icons my-4"/>
            </div>
          </NavLink>
          <NavLink to='/c' activeClassName="active">
            <div className="icons">
              <BsPlug className="navg-icons my-4"/>
            </div>
          </NavLink>
    	</div>
    </div>
  );
}
export default  Home;