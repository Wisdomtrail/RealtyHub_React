import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import "../style/SignUp.css";
import house from "../assets/image/house.jpeg";
import searchButton from "../assets/image/searchButton.jpeg";

const SignUp = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isBlurry, setIsBlurry] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const openRegistrationForm = () => {
    setIsRegistrationOpen(!isRegistrationOpen);
    setIsLoginOpen(false);
    setIsBlurry(!isBlurry);
  };

  const search =() =>{

  }
  const register = () => {
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }
    const userData = {
      email: email,
      password: password,
    };

    setIsLoading(true);
    setError(null);
    
  
    fetch("http://localhost:8080/api/v1/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 403) {
            throw new Error("User with this email already exists. Please sign in instead.");
          } else {
            throw new Error("Unable to connect to the server. Please try again later.");
          }
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        toast.success("Registration Successful!");
        localStorage.setItem('accessToken', data.token);
        setTimeout(() => {
          navigate("/view");
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
        setError(error.message);
        setIsLoading(false);
      });
  };
  
  

  const login = () => {
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }
    const loginData = {
      email: email,
      password: password,
    };
  
    setIsLoading(true);
    setError(null);
  
    fetch("http://localhost:8080/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 403) {
            throw new Error("Invalid email or password. Please try again or sign up.");
          } else {
            throw new Error("Unable to connect to the server. Please try again later.");
          }
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: "LOGIN_SUCCESS", payload: data.accessToken });

        localStorage.setItem('accessToken', data.access_token);
  
        setIsLoading(false);
        toast.success("Login Successful!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
        setError(error.message);
        setIsLoading(false);
      });
  };
  

  const openLoginForm = () => {
    setIsRegistrationOpen(false);
    setIsLoginOpen(!isLoginOpen);
    setIsBlurry(!isBlurry);
  };

  return (
    <div className={`container ${isBlurry ? "blurry" : ""}`}>
      <div className="topNav">
        <h2>RealtyHub</h2>
        <button onClick={openRegistrationForm}>Register</button>
        <button onClick={openLoginForm}>Login</button>
        <button>Help</button>
        <button>About us</button>
      </div>
      <br />
      <div className="imgContainer">
        <div className="overlay">
          <h1 className="welcome">Agent, Tour, Share Apartment</h1>
          <div className="searchContainer">
          <input type="text" placeholder="Enter Address or Zip Code" /><img src={searchButton} alt="" />
        </div>
        </div>
      </div>
      
      <div className="properties1">
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
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="passwordInstruction">
                At least 8 characters <br />
                Mix of letters and numbers <br />
                At least 1 special character <br />
                At least 1 uppercase and 1 lowercase
              </div>
              <br />
              <br />
              {isLoading ? (
                <div className="loading">Loading...</div>
              ) : (
                <button type="submit" onClick={register}>
                  Register
                </button>
              )}
              {error && <div className="error">{error}</div>}
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
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
              <br />
              {isLoading ? (
                <div className="loading">Loading...</div>
              ) : (
                <button type="submit" onClick={login}>
                  Login
                </button>
              )}
              {error && <div className="error">{error}</div>}
              <br />
              <br />
            </form>
          </div>
        </div>
      )}
      <ToastContainer /> 
    </div>
  );
};

export default SignUp;
