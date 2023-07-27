import React, { useState } from "react";
import "../style/SignUp.css";
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
      <div className="top-navi2">
        <div className="h-tag1"><h2>RealtyHub</h2></div>

        <div className="home" onClick={openRegistrationForm}>Register</div>
        <br/>
        <div className="home" onClick={openLoginForm}>Login</div>
        <br/>
        <div className="home">About</div>
        <br/>
        <div className="home">Help</div>
      </div>
      <br />
      <div className="imgContainer">
        <h1 className="welcome"></h1>
        <div>need to pair or find an apartment?<input type="text" placeholder="search by price or location" />
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
              <input type="email" placeholder=" Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
              <input type="password" placeholder=" Create Password" value={password} onChange={e => setPassword(e.target.value)} />
              <div className="passwordInstruction">
                at least 8 characters <br />
                Mix of letters and numbers <br />
                at least 1 special character <br />
                at least 1 uppercase and 1 lowercase
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
