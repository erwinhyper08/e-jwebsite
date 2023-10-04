import React from 'react'
import { RiFacebookFill } from 'react-icons/ri';
import { RiInstagramFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoYoutube } from 'react-icons/bi';
import './footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src='./images/EJ_logo1.png' alt='logo'></img>
                </div>
                <div className='detail'>
                    <p>E & J is The Number 1! Wolrd trusted Online Shop with Quality Latest Smartphone on the Market</p>
                    <div className='icon'>
                        <li><RiFacebookFill /></li>
                        <li><RiInstagramFill /></li>
                        <li><AiOutlineTwitter /></li>
                        <li><BiLogoYoutube /></li>
                    </div>
                </div>
            </div>
            <div className='account'>
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>
            <div className='pages'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Condition</li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
