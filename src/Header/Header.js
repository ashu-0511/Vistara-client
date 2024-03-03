import React, { useState } from 'react'
import './Header.css'
import Logo from "../images/logo.png"
import india from "../images/india.png"
import call from "../images/customer-care.png"
import { Link } from 'react-router-dom'
import top from '../images/top.png'
import Dropdown from '../Dropdown/Dropdown'
// import Dropdown1 from '../Dropdown/Dropdown1'


export default function Header() {

    const [open, close] = useState(false)
    // const [On, Off] = useState(false)

    return (
        <div className='header'>
            <div className='topline'>
                <div className='contact'>
                    <div className='clogo'>  <img src={call} alt="phone" /></div>
                    <div>+91-9289228888</div>
                </div>
                <div className='country'>
                    <div>  <img src={india} alt="flag" /> </div>
                    <div className="dropdown">
                        <button className=" boot btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            India
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <p>Bangladesh</p>
                            <p>France</p>
                            <p>Germany</p>
                            <p>Hong kong</p>
                            <p>Indonesia</p>
                            <p>Maldives</p>
                            <p>Mauritius</p>
                            <p>Nepal</p>
                            <p>Oman</p>
                            <p>Qatar</p>
                            <p>Saudi Arabia</p>
                            <p>Singapore</p>
                            <p>Sri Lanka</p>
                            <p>Thailand</p>
                            <p>Uae</p>
                            <p>UK</p>
                        </div>
                    </div>
                </div >
            </div >
            <div className='main'>
                <div className='head'>
                    <Link to="/">  <img src={Logo} alt="logo" /></Link>
                </div>
                <div className='navbar'>
                    <ul className='list logs'>
                        <li onClick={() => close((prev) => !prev)} >Plan Travel</li>
                        <li >Travel Information</li>
                        <li >Club Vistara</li>
                        <Link to="/Login" style={{ textDecoration: 'none' }}><li>Login</li></Link>
                        <li >Enrol</li>
                        <div>
                            <input placeholder='Search' className='search' type="search"></input>
                        </div>

                    </ul>
                </div>
            </div>
            <button id='top'><img src={top} alt="none" /><a href='/'>Top</a></button>
            {
                open && <Dropdown />
            }
            {/* {
                On && <Dropdown1 />
            } */}
        </div >
    )
}
