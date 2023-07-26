import React, { useState, useEffect } from 'react';
import '../style/DashBoard.css';
import logo from '../assets/image/android-chrome-192x192.png';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faSearch, faSave, faCloudArrowUp, faBell } from '@fortawesome/free-solid-svg-icons';
import defaultImage from '../assets/image/defaultImage.jpeg';
import UploadModal from './UploadModal';

const DashBoard = () => {
  const navigate = useNavigate();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [properties, setProperties] = useState([]);
  const [isMyApartMentActive, setMyApartmentIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isHomeActive, setIsHomeActive] = useState(true); 

  const fetchProperties = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const url = `http://localhost:8080/api/v1/property/view/properties`;

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          page: 1,
          pageSize: 10,
        }),
      };

      const response = await fetch(url, requestOptions);
      const data = await response.json();
      const propertiesArray = data.body;
      setProperties(propertiesArray);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const toggleUploadModal = () => {
    setShowUploadModal((prev) => !prev);
  };

  const search = () => {
    console.log('Search Query:', searchQuery);
  };
  const savedApartMent = () => {
    navigate('/dashboard/my-apartMent')
  }

  return (
    <div className="mainContainer">
      <div className="topNav1">
        <div className="options">
          <img className="logo" src={logo} alt="" />
          <h1>RealtyHub</h1>
          <button
            className={`home ${isHomeActive ? 'active' : ''}`}
            onClick={() => {
              setIsHomeActive(true);
              setMyApartmentIsActive(false)
              navigate('/dashboard');
            }}
          >
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
            <FontAwesomeIcon className="icon" icon={faHome} /> My-Apartment
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
        <FontAwesomeIcon className='notification' icon={faBell}/>
      </div>

      <div className="properties-section">
        <div className="search-container">
          <br />
          <br />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            placeholder="Search..."
          />
          <button className="search-button" onClick={search}>
            <FontAwesomeIcon className="icon" icon={faSearch} />
          </button>
        </div>
        <br />
        <br />

        <div className="properties-header">Available Properties</div>
        <div className="properties-list">
          {properties.length === 0 ? (
            <div className="no-properties">No available properties!</div>
          ) : (
            properties.map((property) => (
              <div key={property.id} className="property-card">
                {property.houseDetail.images.length > 0 ? (
                  <img src={property.houseDetail.images[0]} alt={`Property ${property.id}`} className="property-image" />
                ) : (
                  <img src={defaultImage} alt={`Property ${property.id}`} className="property-image" />
                )}
                <div className="property-details">
                  <div className="property-title">{property.title}</div>
                  <div className="property-address">{property.address}</div>
                  <div className="property-location">Location: {property.country}, {property.state}, {property.city}</div>
                  <div className="property-bedroom">Number of Bedrooms: {property.houseDetail.numberOfBedroom}</div>
                  <div className="property-price">Price: {property.houseDetail.price}</div>
                  <div className="property-status">Status: {property.houseDetail.houseStatus}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showUploadModal && <UploadModal onClose={toggleUploadModal} />}
    </div>
  );
};

export default DashBoard;
