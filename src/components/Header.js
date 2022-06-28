// import { useEffect, useState } from "react";
import './Header.css';

function Header(props) {
    return (
      <div className="Header">
        <div className='leftside'>
            <div className="gameName">Nature Memory Card</div>
            <div className='explanation'>Don't click any images more than once!</div>
        </div>
        <div className="scores">
            <div id="bestscore">Best: {props.bestscore}</div>
            <div id="currentscore">Current: {props.currentscore}</div>
        </div>
      </div>
    );
  }
  
  export default Header;