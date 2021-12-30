import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { AiOutlineSetting } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { BsGlobe2, BsPlug } from "react-icons/bs";
import { RiBriefcase5Fill } from "react-icons/ri";

class AdminSideNav extends React.Component {
  render() {
    return (
      <div className='admin-home-navigation'>
        <div className='side-navg'>
          <NavLink to='/home'>
            <div className="icon">
              <HiHome className="navg-icons my-3" />
            </div>
          </NavLink>
          <NavLink to='/admin-bizcategories'>
            <div className="icons icons-first">
              <RiBriefcase5Fill className="navg-icons my-4" />  <span>Business Categories</span>
            </div>
          </NavLink>
          <NavLink to='/superadmin'>
            <div className="icons">
              <AiOutlineSetting className="navg-icons my-4" /> <span>Super admin list</span>
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}
export default AdminSideNav;