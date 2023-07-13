import React, { useState } from "react";
import "../style/SignUp.css";
import house from "../assets/image/house.jpeg";
import searchButton from '../assets/image/searchButton.jpeg';

const SignUp = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isBlurry, setIsBlurry] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const openRegistrationForm = () => {
    setIsRegistrationOpen(!isRegistrationOpen);
    setIsLoginOpen(false);
    setIsBlurry(!isBlurry);
  };
  
  const register = () => {
    const userData = {
      email: email,
      password: password
    };
  
    fetch('http://localhost:8080/api/v1/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  const search = () => {
  };
  
  const login = () => {
    const loginData = {
      email: email,
      password: password
    };

    fetch('http://localhost:8080/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  const openLoginForm = () => {
    setIsRegistrationOpen(false);
    setIsLoginOpen(!isLoginOpen);
    setIsBlurry(!isBlurry);
  };

  return (
    <div className={`mainContainer ${isBlurry ? "blurry" : ""}`}>
      <div className="topNav">
        <h2>RealtyHub</h2>
        <button onClick={openRegistrationForm}>Register</button>
        <button onClick={openLoginForm}>Login</button>
        <button>Help</button>
        <button>About us</button>
      </div>
      <br />
      <div className="imgContainer">
        <h1 className="welcome">Agent, Tour, Share Apartment</h1>
        <div>
          <input type="text" placeholder="Enter Address or Zip Code" />
          <img src={searchButton} alt="" onClick={search} />
        </div>
      </div>
      <div className="properties">
        <div className="f">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="s">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {isRegistrationOpen && (
        <div className="formContainer">
          <div className="formContent">
            <button className="closeButton" onClick={openRegistrationForm}>
              X
            </button>
            <form className="form">
              <h2>Welcome to RealtyHub</h2>
              <img className="house" src={house} alt="" />
              <input type="email" placeholder=" Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
              <input type="password" placeholder=" Create Password" value={password} onChange={e => setPassword(e.target.value)} />
              <div className="passwordInstruction">
                Atleast 8 characters <br />
                Mix of letters and numbers <br />
                Atleast 1 special characters <br />
                Atleast 1 uppercase and 1 lowercase
              </div>
              <br />
              <br />
              <button type="submit" onClick={register}>
                Register
              </button>
            </form>
          </div>
        </div>
      )}
      {isLoginOpen && (
        <div className="formContainer">
          <div className="formContent">
            <button className="closeButton" onClick={openLoginForm}>
              X
            </button>
            <form className="form">
              <h2>Welcome to RealtyHub</h2>
              <img className="house" src={house} alt="" />
              <br />
              <input type="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
              <br />
              <input type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />
              <br />
              <br />
              <button type="submit" onClick={login}>
                Login
              </button>
              <br />
              <br />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
