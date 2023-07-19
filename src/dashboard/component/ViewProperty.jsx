import React, { useState } from "react";
import "../style/ViewProperty.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

const ViewProperty = () => {
  const [formisOpen, setFormIsOpen] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const saveToFavourites = () => {
    // Handle save to favourites
  };

  const share = () => {
    // Handle share
  };

  const requestSharing = () => {
    // Handle sharing request
  };

  const requestTour = () => {
    // Handle tour request
  };

  const openEnlargedImage = (image) => {
    setEnlargedImage(image);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  return (
    <div className="mainContainer">
      <center>
        <div className="property">
          <div className="imagesContainer">
            <div className="imagesDiv">
              <img src="image1.jpg" alt="" onClick={() => openEnlargedImage("image1.jpg")} />
              <img src="image2.jpg" alt="" onClick={() => openEnlargedImage("image2.jpg")} /><br />
              <img src="image3.jpg" alt="" onClick={() => openEnlargedImage("image3.jpg")} />
              <img src="image4.jpg" alt="" onClick={() => openEnlargedImage("image4.jpg")} /><br />
              <img src="image5.jpg" alt="" onClick={() => openEnlargedImage("image5.jpg")} />
              <img src="image6.jpg" alt="" onClick={() => openEnlargedImage("image6.jpg")} />
            </div>
          </div>

          <div className="description">
            <div className="topDiv">
              <h2>RealityHub</h2> 
              <FontAwesomeIcon className="fa" icon={faHeart} onClick={saveToFavourites} /> <p onClick={saveToFavourites}>Save</p>
              <FontAwesomeIcon className="fa" icon={faShare} /> <p onClick={share}>Share</p>
            </div>
            <br />
            <button className="request" onClick={requestSharing}>Request Sharing</button>
            <button className="tour" onClick={requestTour}>Request Tour</button>
          </div>
          <div className="HouseDetails"></div>
        </div>
      </center>

      {enlargedImage && (
        <div className="enlargedImageContainer">
          <div className="enlargedImageContent">
            <img src={enlargedImage} alt="Enlarged Image" />
            <button className="closeButton" onClick={closeEnlargedImage}>x</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewProperty;
