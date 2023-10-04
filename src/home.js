import React from 'react';
import {Link} from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import Homeproduct from './homeproduct';
import './home.css';
const Home = ({detail, view, close, setClose, addtocart}) => {

    const {loginWithRedirect, isAuthenticated} = useAuth0();

  return (
    <>
    {
        close ?
        <div className='product_detail'>
        <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
            {
                detail.map((curElm) =>
                {
                    return(
                        <>
                        <div className='productbox'>
                            <div className='img-box'>
                                <img src={curElm.images} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <h4>{curElm.Cat}</h4>
                                <h2>{curElm.Title}</h2>
                                <h3>{curElm.Price}</h3>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                        </>
                    )
                })
            }
            <div className='productbox'></div>
        </div>
    </div> : null
    }
      <div className='top_banner'>
            <div className='container'>
                <div className='detail'>
                    <h2>Number 1 Smart Phone World Wide</h2>
                    <Link to='/product' className='link'>Shop Now <FaArrowRightLong /></Link>
                </div>
                <div className='img_box'>
                    <img src='./images/best2023.jpg' alt='best2023'></img>
                </div>
            </div>
      </div>
      <div className='product_type'>
        <div className='container'>
            <div className='box'>
                <div className='img_box'>
                    <img src='./images/samsung_s23.jpg' alt='samsungs23'></img>
                </div>
                <div className='detail'>
                    <p>20 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='./images/samsung_s23.jpg' alt='samsungs23'></img>
                </div>
                <div className='detail'>
                    <p>20 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='./images/samsung_s23.jpg' alt='samsungs23'></img>
                </div>
                <div className='detail'>
                    <p>20 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='./images/samsung_s23.jpg' alt='samsungs23'></img>
                </div>
                <div className='detail'>
                    <p>20 products</p>
                </div>
            </div>
        </div>
      </div>
      <div className='about'>
        <div className='container'>
            <div className='box'>
                <div className='icon'>
                    <FiTruck />
                </div>
                <div className='detail'>
                    <h3>Free Shipping</h3>
                    <p>Every Order</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <BsCurrencyDollar />
                </div>
                <div className='detail'>
                    <h3>Return and Refund</h3>
                    <p>Money Back Guarantee</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <CiPercent />
                </div>
                <div className='detail'>
                    <h3>Discount</h3>
                    <p>On Every Order</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <BiHeadphone />
                </div>
                <div className='detail'>
                    <h3>Customer Support</h3>
                    <p>24/7 Customer Support</p>
                </div>
            </div>
        </div>
      </div>
      <div className='product'>
        <h2>Top Product</h2>
        <div className='container'>
                {
                Homeproduct.map((curElm) => {
                    return(
                        <div className='box' key={curElm.id}>
                                <div className='img_box'>
                                    <img src={curElm.images} alt={curElm.Title}></img>
                                    <div className='icon'>
                                        {
                                            isAuthenticated ?
                                            <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                                            :
                                            <li onClick={() => loginWithRedirect()}><AiOutlineShoppingCart /></li>
                                        }
                                        <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                                        <li  onClick={() => view (curElm)}><BsEye /></li>
                                        <li><AiOutlineHeart /></li>                                
                                    </div>
                                </div>
                                    <div className='detail'>
                                        <p>{curElm.Cat}</p>
                                        <h3>{curElm.Title}</h3>
                                        <h4>${curElm.Price}</h4>
                                    </div>
                            </div>
                        )
                    })
                }
        </div>
      </div>
    <div className='banner'>
        <div className='container'>
            <div className='detail'>
            <h4>Latest Product</h4>
            <h3>Apple iPhone15 pro 128Gb</h3>
            <p>$50,000</p>
            <Link to='/product' className='link'>Shop Now  <FaArrowRightLong /></Link>
        </  div>
            <div className='img_box'>
            <img src='./images/iphone15proban.png' alt='iphone15pro'></img>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home
