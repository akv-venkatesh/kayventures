import React from 'react';
import { Link } from "react-router-dom";
import { setHeaderType } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { HiHome } from "react-icons/hi";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { BsGlobe2,BsPlug } from "react-icons/bs";

function Home() {

	const header_type = useSelector(state => state);
	const dispatch = useDispatch();

  return (
    <div className='m-home-navigation'>
    	<div className='side-navg text-center'>
    			<div className="icons"><HiHome className="navg-icons my-3"/></div>
    			<div className="icons"><AiOutlineDashboard className="navg-icons my-4"/></div>
    			<Link to='manufacturer-settings' activeClassName="active"><div className="icons "><BiCog className="navg-icons my-4"/></div></Link>
    			<div className="icons" className="icons"><BsGlobe2 className="navg-icons my-4"/></div>
    			<div className="icons"><BsPlug className="navg-icons my-4"/></div>
    	</div>
    </div>
  );
}
export default  Home;