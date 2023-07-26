import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/image/android-chrome-192x192.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UploadModal from './UploadModal';
import { faHome, faUser, faCog, faSearch, faSave, faCloudArrowUp, faBell } from '@fortawesome/free-solid-svg-icons';
const MyApartMent = () =>{
  const [isMyApartMentActive, setMyApartmentIsActive] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [isHomeActive, setIsHomeActive] = useState(true); 
  const navigate = useNavigate()

  const toggleUploadModal = () => {
    setShowUploadModal((prev) => !prev);
  };


    return(
    <div className="mainContainer">
    <div className="topNav1">
      <div className="options">
        <img className="logo" src={logo} alt="" />
        <h1>RealtyHub</h1>
        <button
            className={`home ${isHomeActive ? 'active' : ''}`}
            onClick={() => {
              setIsHomeActive(false);
              setMyApartmentIsActive(true)
              navigate('/dashboard');
            }}>
          <FontAwesomeIcon className="icon" icon={faHome} /> Home
        </button>
        <button onClick={toggleUploadModal}>
          <FontAwesomeIcon className="icon" icon={faCloudArrowUp} /> Upload Apartment
        </button>
        <button className={`home ${isMyApartMentActive ? 'active' : ''}`}
          onClick={() => {
            setIsHomeActive(false);
            setMyApartmentIsActive(true);
            
            navigate('/dashboard/my-apartMent');
          }} >
          <FontAwesomeIcon className="icon" icon={faHome} /> Uploaded-Apartments
        </button>
        <button>
          <FontAwesomeIcon className="icon" icon={faSave} /> Saved Apartments
        </button>
        <button className="user">
          <FontAwesomeIcon className="icon" icon={faUser} /> Profile
        </button>
        <button className="settings">
          <FontAwesomeIcon className="icon" icon={faCog} /> Settings
        </button>
      </div>
      <FontAwesomeIcon className='icon' icon={faBell}/>
    </div>
    {showUploadModal && <UploadModal onClose={toggleUploadModal} />}
</div>
)}
export default MyApartMent;