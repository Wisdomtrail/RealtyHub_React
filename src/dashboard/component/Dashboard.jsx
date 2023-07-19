import React from "react";
import '../style/DashBoard.css';
import searchButton from '../assets/image/searchButton.jpeg';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faCloudArrowUp, faHeart, faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import defaultImage from '../assets/image/defaultImage.jpeg';

const DashBoard = () => {

  const navigate = useNavigate()

  const search = () => {

  }

  const viewProperty = () =>{
    navigate('/dashboard/viewProperty')
  }

  return (
    <div className="mainContainer">
      <div className="sideNav">
        <div className="imageContainer">
          <img src={defaultImage} alt="" /><br /><br />
          <button className="update">Update Profile</button>
        </div>
        <div className="options">          
          <FontAwesomeIcon icon={faHome}  className="white-icon" />
          <button className="home">Home</button><br /><br /><br />
          <FontAwesomeIcon id="upload" icon={faCloudArrowUp}  className="white-icon" />
          <button  >Upload Property</button><br /><br /><br />
          <FontAwesomeIcon id="profile" icon={faFloppyDisk}  className="white-icon" />
          <button className="prop">Properties</button><br /><br /><br />
          <FontAwesomeIcon id="heart"  icon={faHeart} className="white-icon" />
          <button>Saved properites</button><br /><br /><br />
          <FontAwesomeIcon id="profile" icon={faUser} className="white-icon" />
          <button className="user">Profile</button><br /><br /><br />
          <FontAwesomeIcon id="profile" icon={faCog} className="white-icon" />
          <button className="settings">Settings</button><br />
        </div>
      </div>
      <div className="rightNav">
        <div >
          <div className="flex"><input type="text" placeholder="Enter address, postal code or Price" /> <img className="searchButton" src={searchButton} alt="" onClick={search} /></div>
        </div>
        <div className="properties">
          <div onClick={viewProperty}></div>
          <div onClick={viewProperty}></div>
          <div onClick={viewProperty}></div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
