import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL_GET, API_URL_GET_CUST, API_URL_GET_EMP } from "../url/url";
import "./dashboard.css"
const Dashboard = () => {
  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);
  const [data3, setdata3] = useState([]);

  const [ref, setref] = useState(true);
  const [tableLength, setTableLength] = useState(0);

  useEffect(() => {
    axios.get(API_URL_GET).then((res) => {
      console.log(res.data);
      setdata1(res.data);
      setTableLength(res.data.length);
    });
  }, [ref]);

  useEffect(() => {
    axios.get(API_URL_GET_EMP).then((res) => {
      console.log(res.data);
      setdata2(res.data);
      setTableLength(res.data.length);
    });
  }, [ref]);

  useEffect(() => {
    axios.get(API_URL_GET_CUST).then((res) => {
      console.log(res.data);
      setdata3(res.data);
      setTableLength(res.data.length);
    });
  }, [ref]);

  return (
    <>
      <div className="dashboard">
      <center><h2>DASHBOARD</h2></center>
      <div className="dashboard">
      <div className="dashboardbox">
        <div id="one">
          <h4>Students</h4>
          <p>{data1.length}</p>
        </div>
        <div id="two">
          <h4>Employee</h4>
          <p>{data2.length}</p>
        </div>
        <div id="three">
          <h4>Customer</h4>
          <p>{data3.length}</p>
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Dashboard;