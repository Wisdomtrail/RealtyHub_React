import React, { useState, useEffect } from "react";
import '../style/UserProfileUpdate.css'
import UserProfileUpdate from "./UserProfileUpdate.jsx";
import notification from "../assets/image/notification.svg";
import home from "../assets/image/home.svg";
import favorite from "../assets/image/favorite.svg";
import saved from "../assets/image/saved.svg";
import upload from "../assets/image/upload.svg"
import axios from 'axios';
import TopNav from "./TopNav";
import ProfileModal from '../../reusables/ProfileModal';
import profileSvg from "../assets/image/Profile.svg"
import SideBar from "./SideBar";


function SavedApartments() {
    const [Profile, setProfile] = useState(false);
    const [isMyAccount, setMyAccount] = useState(false);
    const [isUpdateProfile, setIsUpdateProfile] = useState(false);
    const [saveApartment, setSaveApartment] = useState([]);

    useEffect(() => {
        fetchSavedApartment();
    }, []);

    const handleLinkClick = (e, link) => {
        e.preventDefault();

        if (link === "MyAccount") {
            setMyAccount(true);
            setProfile(false);
        } else if (link === "Profile") {
            setMyAccount(true);
            setProfile(true);
        }
    };

    const fetchSavedApartment = async () => {
        try {
            const response = await axios.get('/api/saved-apartments');
            setSaveApartment(response.data);
        } catch (error) {
            console.error('Apartments not found:', error);
        }
    };

    return (
        <div>
            <TopNav/>
           <SideBar/>

        </div>
    )
}

export default SavedApartments;