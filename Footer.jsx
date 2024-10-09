import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id = 'footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img src={assets.logo1} alt="" />
            <p>At Munchraft, we are passionate about bringing you delicious, handcrafted meals that ignite your taste buds. Whether you're craving a quick snack or a full-course meal, our menu is designed to satisfy all your food cravings with fresh ingredients and vibrant flavors. Explore our diverse selection of dishes, curated to bring the joy of food right to your plate.
With our easy-to-use mobile app, you can order your favorite meals on the go, track your delivery, and enjoy our mouth-watering creations anytime, anywhere.

</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>

            </div>
            
            <div className="footer-content-center">

                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
                
            </div>

            <div className="footer-content-right">

                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-224-556-4775</li>
                    <li>saiabhi1908@gmail.com</li>
                </ul>

            </div>

            
        </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Tomato.com, All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
