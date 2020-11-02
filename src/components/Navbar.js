import React from 'react';
import './Navbar.css';
import Zardoz from './../images/feed-zardoz.jpg';
import { FaTwitter } from 'react-icons/fa';
import { BiHomeCircle } from 'react-icons/bi';
import { BiHash } from 'react-icons/bi';
import { VscBell } from 'react-icons/vsc';
import { AiOutlineMail } from 'react-icons/ai';
import { FiBookmark } from 'react-icons/fi';
import { BsFileText } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { BsPersonFill } from 'react-icons/bs';
import { FaAngleDown} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar-panel">
          <div className="navicons1">
        
                <h3 className="navtweetlogo"><FaTwitter /></h3>
                <p></p>
                <span className="navtext2a" id="nhome"> <BiHomeCircle className="navicons2a"/> Home </span>
                <p></p>
                <span className="navtext2"> <BiHash className="navicons2"/> Explore </span>
                <p></p>
                <span className="navtext2"> <VscBell className="navicons2"/> Notifications </span>
                <p></p>
                <span className="navtext2"> <AiOutlineMail className="navicons2"/> Messages </span>
                <p></p>
                <span className="navtext2"> <FiBookmark className="navicons2"/> Bookmarks </span>
                <p></p>
                <span className="navtext2"> <BsFileText className="navicons2"/> Lists </span>
                <p></p>
                <span className="navtext2"> <BsPerson className="navicons2"/> Profile </span>
                <p></p>
                <span className="navtext2"> <HiOutlineDotsCircleHorizontal className="navicons2"/> More </span>
                <p></p>
          
                <p></p>
          </div>
      <button className="navbutton1" id="navbutton" >Tweet</button>
      <p></p>
      <p></p>
        <div className="navlogaccount">
          <img className="navlogouta" src ={Zardoz} alt = "Profile"/>
          <h3 className="navlogoutb">Zardoz</h3>
          <h3 className="navlogoutc">@Zarz</h3>
          <h3 className="navlogoutd"><FaAngleDown /></h3>
        </div>
        
      
    </div>
  )
}

export default Navbar;