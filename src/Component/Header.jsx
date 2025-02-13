import React, { Component } from "react";
import "./Header.css";
class Header extends React.Component {
  render() {
    return (
      <>
        <div className="Header"style={{display:"flex",height:"100px",marginTop:"20px"}}>
          <div className="main-nav" style={{width:"100%"}}>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Sustainability
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Customer Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          <div className="container-fluid" style={{textAlign:"center"}}>
            <a className="navbar-brand" href="#">
              <img
                src="https://brandeps.com/logo-download/H/H-&-M-logo-01.png"
                alt="Logo"
                width="70px"
                height="70px"
                className="d-inline-block align-text-top"
              />
            </a>
          </div>

          <div className="container-fluid" >
            <a className="navbar-brand" href="#" style={{display:"flex",gap:"20px"}}>
              <img
                src="https://th.bing.com/th/id/OIP.F977i9e7dMrznvOT8q8azgHaEf?w=289&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Logo"
                width="30"
                height="25"
                className="d-inline-block align-text-top"
              />
              <span>Sign In</span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/60/60993.png "
                alt="Logo"
                width="25"
                height="20"
                className="d-inline-block align-text-top"
              />
              <span>Shopping Bag</span>
              <img
                src="https://media.istockphoto.com/id/1282650520/vector/shopping-bag-icon-in-black-eco-paper-bag-handbag-icon-vector-on-isolated-white-background.jpg?s=612x612&w=0&k=20&c=gMzSXnbZvpJ6FywQYCftnHElWUO10rlo30Lwvrfu8mk="
                alt="Logo"
                width="50"
                height="32"
                className="d-inline-block align-text-top"
              />
              <span>Sign In</span>
            </a>
          </div>
          </div>

        <div className="items">
          <ul>
            <li>
              <a href="">Ladies</a>
            </li>
            <li>
              <a href="">Mens</a>
            </li>
            <li>
              <a href="">Baby</a>
            </li>
            <li>
              <a href="">Kids</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
          

          <input type="search" placeholder="Search" className="searchbar"></input>
        </div>
     

      </>
    );
  }
}

export default Header;
