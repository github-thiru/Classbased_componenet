import React, { Component } from "react";
import "./Footer.css";
class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <div className="f1">
            <div className="footer-left">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
                alt="H&M Logo"
                className="logo"
              />
            </div>

            <div className="footer-center">
              <a
                href="https://www.instagram.com/hm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/hm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://www.youtube.com/user/hennesandmauritz"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
              <a
                href="https://open.spotify.com/user/hm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spotify
              </a>
              <a
                href="https://www.facebook.com/hm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>

            <div className="footer-right">
              <a
                href="https://yourportfolio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                thiruthorlikonda967@gmail.com
              </a>
            </div>
          </div>

          <div className="f2">
            <div className="list">
              <small>Shop Ladies Men Baby Kids Home Magazin</small>
            </div>

            <div className="list">
              <small>
                Corporate Info Career at H&M About H&M group Sustainability H&M
                Group Press Investor relations Corporate governance
              </small>
            </div>

            <div className="list">
              <small>
                Help Customer Service My H&M Find a store Legal & privacy
                Contact Secure shopping Cookie Notice Cookie Settings
              </small>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
export default Footer;
