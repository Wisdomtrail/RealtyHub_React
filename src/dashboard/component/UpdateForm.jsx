import React, { useState } from 'react';
import '../style/UserProfileUpdate.css';
import ImageFile from './ImageFile.jsx';

const UpdateForm = (props) => {

     const handleChange = (event) => {
       props.handleChange(event)
     }

    const handleImageChange = (e) => {
        props.handleImageChange(e)
    }

    const handleButton = () => {
        props.handleState()
    }



    return (
        <div className="updateProfile">
            <form className="form4" onSubmit={handleButton}>
                <h2>Update Profile</h2>
                <input className="bio-Data" name='firstName' type="text" placeholder="Firstname" value={props.data.firstName} onChange={handleChange} /><br />
                <br />
                <input className="bio-Data" name="lastName" type="text" placeholder="lastname" value={props.data.lastName} onChange={handleChange} /><br />
                <br />
                <input className="bio-Data" name='phoneNumber' type="text" placeholder="PhoneNumber" value={props.data.phoneNumber} onChange={handleChange} /><br />
                <br />
                <input className="bio-Data" name='email' type="email" placeholder="Email" value={props.data.email} onChange={handleChange} /><br />
                <br />
                <input className="bio-Data" name='age' type="number" placeholder="Age" value={props.data.age} onChange={handleChange} /><br />
                <br />
                <input className="bio-Data" name='nationality' type="text" placeholder="Nationality" value={props.data.nationality} onChange={handleChange} /><br />
                <br />
                <input className="bio-Data" name='password' type="password" placeholder="password" value={props.data.password} onChange={handleChange} /><br />
                <br />
                <input className="bio-Data" name='confirmPassword' type="password" placeholder="confirmPassword" value={props.data.confirmPassword} onChange={handleChange} /><br />
                <br />
                <input name="dataImage" type="file" value={props.dataImage} onChange={handleImageChange} /><br/>
    
                <button className="update" type='submit'>Update</button>
                <br/>
                <br/>
                <button className="cancel" type='submit'>Cancel</button>
                <br />
            </form>
        </div>
    )
}

export default UpdateForm

