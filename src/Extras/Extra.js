import React from 'react'
import '../Extras/Extra.css'



function Extra() {
    return (
        <div className='extras'>

            <div className='mostsearch'>
                <div className='toptext'>
                    <p>Most Searched Flights</p>
                </div>
                <ul className='mostlist'>
                    <li>Delhi to Mumbai - INR 5,099*</li>
                    <li>Mumbai to Delhi - INR 5,049*</li>
                    <li>Delhi to Bengaluru - INR 6,785*</li>
                    <li>Bengaluru to Delhi - INR 6,934*</li>
                    <li>Delhi to Goa - INR 5,950*</li>
                </ul>
            </div>
        </div>
    )
}

export default Extra
