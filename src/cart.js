import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {Link} from 'react-router-dom';
import './cart.css'
import Productdetail from './productdetail';

const Cart = ({cart, setCart,}) => {
    //add quantity
       const addqty = (product) => 
    {
        const exist = cart.find((x) => 
        {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => 
        {
            return curElm.id === product.id ? {...exist, qty: exist.qty + 1} : curElm
        }))
    }
    //minus quantity
    const minusqty = (product) => 
    {
        const exist = cart.find((x) => 
        {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => 
        {
            return curElm.id === product.id ? {...exist, qty: exist.qty - 1} : curElm
        }))
    }
    //remove cart product
    const removeproduct = (product) => 
    {
        const exist = cart.find((x) => 
        {
            return x.id === product.id
        })
        if(exist.qty > 0) 
        {
            setCart(cart.filter((x) => 
            {
                return x.id !== product.id
            }))
        }
    }
    //total price
    const checkout = async () => {
        await fetch('http://localhost:4242/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.id})
        }).then((response) => {
            return response.json(Productdetail);
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url); // Forwarding user to Stripe
            }
        });
    }
    const productsCount  = cart.reduce((sum, item) => sum+ item.qty * item.Price, 0)
  return (
    <>
     <div className='cartcontainer'>
        {cart.length === 0 && 
        <div className='emptycart'>
        <h2 className='empty'>Cart is Empty</h2>
        <Link to='/product' className='emptycartbtn'>Shop Now</Link>
        </div>
        }
        <div className='contant'>
            {
                cart.map((curElm) =>
                {
                    return (
                        <div className='cart_item' key={curElm.id}>
                            <div className='close'>
                                <button onClick={() => removeproduct(curElm)}><AiOutlineCloseCircle /></button>
                                </div>
                            <div className='img_box'>
                                <img src={curElm.images} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                <h4>{curElm.Cat}</h4>
                                <h3>{curElm.Title}</h3>
                                <p>Price: {curElm.Price}</p>
                                <div className='qty'>
                                    <button className='addqty' onClick={() => addqty(curElm)}>+</button>
                                    <input type='text' value={curElm.qty}></input>
                                    <button className='minusqty' onClick={() => minusqty(curElm)}>-</button>
                                </div>
                                <h4 className='subtotal'>sub Total: ${curElm.Price * curElm.qty}</h4>
                                </div>
                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
        {
            cart.length > 0 &&
            <>
                <h2 className='totalprice'>Total : ${productsCount } </h2>
                <button className='cartcheckout' onClick={checkout}>CheckOut</button>
            </>
        }
    </div>
    </>
  )
}

export default Cart
