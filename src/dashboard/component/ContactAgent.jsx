import React, { useState } from "react";
import ChatBot from 'react-simple-chatbot';
import "../style/ContactAgent.css"
import TopNav from "./TopNav";
import SideBar from "./SideBar";

function ContactAgent () {


    return (
        <div>
            <TopNav/>
            <SideBar/>
        </div>
    )
}


export default ContactAgent