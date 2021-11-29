import React from 'react';
import { Link } from "react-router-dom";
import '../pages/home.scss';
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
    			<div><HiHome className="navg-icons my-3"/></div>
    			<div><AiOutlineDashboard className="navg-icons my-4"/></div>
    			<div><BiCog className="navg-icons my-4"/></div>
    			<div><BsGlobe2 className="navg-icons my-4"/></div>
    			<div><BsPlug className="navg-icons my-4"/></div>
    	</div>
    </div>
  );
}
export default  Home;