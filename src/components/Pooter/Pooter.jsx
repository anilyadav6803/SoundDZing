import React from 'react'
import './Potter.css'
import {facebookLogo,instagramLogo,twitterLogo} from '../../assets/index'
const Pooter = () => {
  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              Sound<span className="red">DZign</span>
            </a>

            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=100016303812873">
                <img src={facebookLogo} alt="" />
              </a>

              <a href="https://twitter.com/anilyadav6803">
                <img src={twitterLogo} alt="" />
              </a>

              <a href="https://www.instagram.com/anil_yadav9679/">
                <img src={instagramLogo} alt="" />
              </a>
            </div>

            <div className="copyright">
              This website is designed by Anil yadav Ⓒ 2023
            </div>
          </div>

          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>

              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="#">anilyadav6803@gmail.com</a>
              </li>

             
            </ul>
          </div>

          <div className="copyright mobile">
            This website is designed by Anil yadav Ⓒ 2023
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Pooter