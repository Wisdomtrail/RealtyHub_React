import React, { useState } from 'react';
import '../style/UserProfileUpdate.css';
import saved from "../assets/image/saved.svg"
import favorite from "../assets/image/favorite.svg"
import upload from "../assets/image/upload.svg"
import profileSvg from "../assets/image/Profile.svg"





const SideBar = () => {
    const [isSelected, setIsSeleceted] = useState("profile")

    const handleSelection = option => {
        setIsSeleceted(option);

    }
    return (
        <div className='sideMainContain'>
             <div className="account-info">
                <div className="userBiodata" onClick={()=> handleSelection('profile')}>
                    <img className="favorite" src={profileSvg} alt="" />
                    <span>Profile</span>
                </div>
                <div className="userBiodata" onClick={()=> handleSelection('FavoriteApartments')}>
                    <img className="favorite" src={favorite} alt="" />
                    <span>Favorite Apartments</span>
                </div>
                <div className="userBiodata" onClick={()=> handleSelection('savedApartments')}>
                    <img className="favorite" src={saved} alt="" />
                    <span>Saved Apartments</span>
                </div>
                <div className="userBiodata" onClick={()=> handleSelection('uploadApartments')}>
                    <img className="favorite" src={upload} alt="" />
                    <span>Upload Apartments</span>
                </div>
            </div> 
            {/* <div className='content'>
                {isSelected === "profile" && (
                    <div>
                        <ProfileModal />
                    </div>    
                )}
            </div> */}

        </div>
    )
}

export default SideBar