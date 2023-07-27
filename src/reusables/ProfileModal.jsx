import React, { useState } from 'react';
import '../dashboard/style/UserProfileUpdate.css'
import UpdateForm from '../dashboard/component/UpdateForm';
import Profile from "../dashboard/assets/image/Profile.svg"


const ProfileModal = () => {
    const initialValue = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        age: '',
        nationality: '',
        password: '',
        confirmPassword: '',
    }

    const [dataImage, setDataImage] = useState()
    const [state, setState] = useState(false);
    const [data, setData] = useState(initialValue);

    const exitModal = (event) => {
        event.preventDefault()
        setState(false);
    }

    const handleUpdateForm = (e) => {
        state === true ? setState(false) : setState(true)
    }

    const handleChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleImageChange = (e) => {
        setDataImage(e)
    }

    return (
        <>
            {state === false ? (
                <div className="profileInfo">
                    <div className="profileHeader">
                        <span>Profile</span>
                        <br/>
                    </div>
                    <br/>
                    <br/>
                    <img className="profile-img" src={Profile} alt="" />
                    <br />
                    <div className="userProfileBiodata">{data.firstName + '' + data.lastName}</div>
                    <br/>
                    <div className="userProfileBiodata">{data.phoneNumber}</div>
                    <br/>
                    <div className="userProfileBiodata">{data.email}</div>
                    <br/>
                    <div className="userProfileBiodata">{data.age}</div>
                    <br/>
                    <div className="userProfileBiodata">{data.nationality}</div>
                    <br />
                    <div>
                        <button type="submit" onClick={handleUpdateForm}>Update</button>
                    </div>
                </div>
            ):(
                <div>
                    <UpdateForm handleState={handleUpdateForm} handleChange={handleChange} data={data} dataImage={dataImage} handleImageChange={handleImageChange} />
                </div>
            )}
        </>
    )
}

export default ProfileModal