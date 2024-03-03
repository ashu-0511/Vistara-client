import React from 'react'
import '../Booking/Booking.css'
import ficon from "../images/ficon.png"
import bicon from "../images/bicon.png"
import cicon from "../images/cicon.png"
import sicon from "../images/sicon.png"
import { Link } from 'react-router-dom'
import arrow from "../images/arrow.png"

export default function Booking() {
    return (
        <div className='booking-box'>
            <div className='booking'>
                <div className='flight-bar'>
                    <div className='click'><span className='icons'><img src={ficon} alt="icon" /></span>Flights</div>
                    <div className='click'><span className='icons'><img src={bicon} alt="icon" /></span>Manage My Booking</div>
                    <div className='click'><span className='icons'><img src={cicon} alt="icon" /></span>Check-in</div>
                    <div className='click'><span className='icons'><img src={sicon} alt="icon" /></span>Flight-Status</div>
                </div>
                <div className='pads'>
                    <div className='booking_promo'>
                        <div className='butn'>
                            <form>
                                <input type="radio" id="html" name="fav_language" value="HTML" />
                                <label for="html">Round Trip</label><br />
                                <input type="radio" id="css" name="fav_language" value="CSS" />
                                <label for="css">One Way</label><br />
                            </form>
                        </div>
                        <div className='promo'>
                            <p>+ Pay Using CV Points</p>
                            <p>+ Add Promo Code</p>
                        </div>
                    </div>
                    <div className='input-box'>
                        <div className='input1'>
                            <input className='origin input2' name='origin' placeholder='Select Departure City' required></input>
                            <label className='label1'>Origin</label>
                        </div>
                        <img src={arrow} alt="NOne" />
                        <div className='input1'>
                            <input className='origin input2' name='origin' placeholder='Select Arrival City' required ></input>
                            <label className='label1'>Destination</label>
                        </div>
                        <div className='input1'>
                            <input className='origin input2' name='origin' placeholder='Departure - Return' required></input>
                            <label className='label1'>Travel Dates</label>
                        </div>
                        <div className='input1'>
                            <input className='origin input2' name='origin' value='1Pax ,Economy'></input>
                            <label className='label1'>Passengers</label>
                        </div>
                        <Link to="/Flight">  <button className='flight'>Search Flights</button></Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
