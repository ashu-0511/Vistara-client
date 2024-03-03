import React, { useState } from "react";
import "../Login/Login.css"
import club from "../images/club.png"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5500/login', { email, password })
            .then(res => {
                console.log(res)
                // if (res.data === "success") {
                navigate('/')
                alert("login successful")
                // } else {
                //     alert("please check your username and password")
                // }

            })
            .catch(err => console.log(err))
    }
    return (
        <div className="Login">
            <div className="mains">
                <div className="section">
                    <div className="sec1"><img src={club} alt="none" />
                        <div>
                            <h3>Login</h3>
                            <div className="bar">
                                <form className="bar" onSubmit={handleSubmit}>
                                    <input name="username" placeholder="Email or Club Vistara ID" onChange={(e) => setEmail(e.target.value)}></input>
                                    <input name="password" required placeholder="Password" type='password' onChange={(e) => setPassword(e.target.value)}></input>
                                    <button className="btn">Log In</button>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="sec2">
                        <div className="txt">
                            <h3>Not a Club Vistara member yet? </h3>
                            <h5>Enrol now to enjoy a host of privileges and benefits:</h5>
                            <ul>
                                <li>Bonus 500 CV Points on your first flight</li>
                                <li>Complimentary Lounge access, extra baggage allowance, priority services</li>
                                <li>Rewards when you fly on Vistara and Partner airlines</li>
                                <li>Redeem CV Points for free flights and upgrades</li>
                                <li>Earn CV Points with 35+ partners and much more!</li>
                            </ul>
                            <button className="btn-enrol">Enrol now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;