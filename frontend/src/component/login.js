import axios from "axios";
import React, { useState } from "react";
import { LOGIN_URL } from "../url/url";
import "./login.css"


const Login = ({onlogin}) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [collect, setcollect] = useState([]);

  const login_data = async () => {
    await axios
      .post(LOGIN_URL, {
        username,
        password,
      })
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message === "login success") {
          onlogin()
        } else {
          alert(" not valid");
        }
      });
  };

  return (<>
    <div id="box">
    <div className="container">
    <div id="form">
      <div id="page">
      <h3>LOGIN</h3>
      <form id="input">
        <label className="label"> Username</label>
        <input
          type="text"
          className="input"
          onChange={(e) => setusername(e.target.value)}
        />
        <br /><br/>
        <label className="label"> Password</label>
        <input
          type="text"
          className="input"
          onChange={(e) => setpassword(e.target.value)}
        />
      </form>
      <button className="button" onClick={login_data}>
        Login
      </button></div>
      <div className="collect">{collect}</div>
     
      </div>  
    </div>
    </div>
    
    </>
  );
};

export default Login;
