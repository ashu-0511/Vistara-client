import React from 'react'
import "../Footer/Footer.css"
import twitter from "../images/twitter-logo-01.webp"
import facebook from "../images/facebook-1.webp"
import insta from "../images/instagram-1.webp"
import youtube from "../images/youtube-1.webp"
import linkedin from "../images/linkedin.webp"
import whatsapp from "../images/WhatsApp-Icon-1.webp"
import award1 from "../images/award1.webp"
import award2 from "../images/award2.webp"
import award3 from "../images/award3.webp"
import link from "../images/external.webp"
// import top from '../images/top.png'

export default function Footer() {
    return (
        <div>
            {/* <button id="myBtn"><a href="#top"><img src={top} alt='none' /></a></button> */}
            <div className='footer-wrapper'>
                <div className='navs'>
                    <div className='company percent'>
                        <p className='heading'>Our Company</p>
                        <ul className='lists'>
                            <li>About Vistara</li>
                            <li>Corporate Information</li>
                            <li>Careers</li>
                            <li>FAQs</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                            <li>ABAC Policy</li>
                            <li>Site Map</li>
                            <li>CSR and Sustainability</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='services percent'>
                        <p className='heading'>Services</p>
                        <ul className='lists'>
                            <li>Vistara Bridge</li>
                            <li>Cargo</li>
                            <li>Charter Booking</li>
                            <li>Group Booking</li>
                            <li>Tariff Sheet</li>
                        </ul>
                    </div>
                    <div className='Media percent'>
                        <p className='heading'>Media Centre</p>
                        <ul className='lists'>
                            <li>Press Releases</li>
                            <li>Press Information Kit</li>
                            <li>Media Library</li>
                            <li>Media Contacts</li>
                            <li>Awards & Accolades</li>
                        </ul>
                    </div>
                    <div className='signup percent'>
                        <div>
                            <p className='heading'>Sign Up</p>
                            <p>Subscribe and receive exclusive updates, offers and promotional mails straight to your inbox</p>
                            <input placeholder='Enter Your EMAIL ID' type="email" pattern='[A_Z_]'></input>
                            <button className='subscribe'>Subscribe</button>
                            <p className='heading'>Connect With Us</p>
                            <div className='social percent'>
                                <img src={twitter} alt="none" />
                                <img src={facebook} alt="none" />
                                <img src={insta} alt="none" />
                                <img src={youtube} alt="none" />
                                <img src={linkedin} alt="none" />
                                <img src={whatsapp} alt="none" />
                            </div>
                            <div className='awards'>
                                <div><img src={award1} alt="none" />
                                    <p className='atext'>Best Airline in India and Southern Asia</p></div>
                                <div><img src={award2} alt="none" />
                                    <p className='atext'>Favourite Domestic Airline, India</p></div>
                                <div><img src={award3} alt="none" />
                                    <p className='atext'>Asia’s 3rd Youngest Aircraft Fleet</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bline'>
                <div className='line'>  <span><img src={link} alt="none" className='link' /></span> External links open in a new window. These website may not meet the accessibility guidelines of airvistara.com.</div>
                <div className='copyright'>© 2023 TATA SIA Airlines Limited</div>
            </div>
        </div>
    )
}
