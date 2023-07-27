import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../style/UserProfileUpdate.css';
import Notifications from "./Notifications";

const TopNav = () => {
    const handleLinkClick = (e) => {
    
    }
  return (
    <div className="top-navi2">
    {/*<img className="toolbar" src={toolbar} alt=""/>*/}
    <div className="h-tags"><h1>RealtyHub</h1></div>
    <div className="menu">
        <div className="innerMenu">
            <div className="option"><a href="/home">Home</a></div>
            <div className="option"><a href="/about" onClick={handleLinkClick}>AboutUs</a></div>
            <div className="option"><a href="/myAccount" onClick={handleLinkClick}>MyAccount</a></div>
            <div className="option"><a href="/lgin" onClick={handleLinkClick}>Login</a></div>
            <div className="option"><a href="/admin" onClick={handleLinkClick}>Admin</a></div>
            <Notifications/>
        </div>
    </div>
    
    
</div>
  )
}

TopNav.propTypes = {}

export default TopNav