import React, {useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './contact.css'

const Contact = () => {
    const {loginWithRedirect, user, isAuthenticated} = useAuth0();
    const [users, setUser] = useState(
        {
            Name: '', Email: '', Subject: '', Message: ''
        }
    )
    let name, value
    const data = (e) =>
    {
        name = e.target.name;
        value = e.target.value;
        setUser({...users, [name]: value});
    }
    const senddata = async (e) => 
    {
        const{Name, Email, Subject, Message} = user 
        e.preventDefault();
        const options = {
            method: 'POST',
            Headers: {
                'Content-Type' : 'aplication/json'
            },
            body: JSON.stringify({
                Name, Email, Subject, Message
            })
        }
        const res = await fetch('https://ewongwebsite-default-rtdb.firebaseio.com/Message.json', options)
        console.log(res)
        if(res)
        {
            alert("Message Sent")
        }
        else
        {
            alert("Message Not Sent")
        }
    }
  return (
    <>
      <div className='contact_container'>
        <div className='contant'>
            <h2>Contact Us</h2>
            <div className='form'>
                <form method='POST'>
                    <input type='text' name='Name' value={users.Name} placeholder='Full Name' require autoComplete='off' onChange={data}></input>
                    <input type='email' name='Email' value={users.Email} placeholder='Email' autoComplete='off' onChange={data}></input>
                    <input type='text' name='Subject' value={users.Subject} placeholder='Subject' autoComplete='off' onChange={data}></input>
                    <textarea name='Message' value={users.Message} placeholder='Your Message' autoComplete='off' onChange={data}></textarea>
                    {
                        isAuthenticated ?
                        <button type='submit' onClick={ senddata }>Send Message</button>
                        :
                        <button type='submit' onClick={() => loginWithRedirect()}>Login to Send</button>
                    }
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
