import React from 'react'
import "../Manage/Manage.css"


export default function Manage() {
    return (
        <div>
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
                    <input name='origin'></input>
                    <input name='destination'></input>
                    <input name='dates'></input>
                    <input name='passengers'></input>
                    <button className='flight'>Search Flights</button>
                </div>
            </div>
        </div>


    )
}
