import React from 'react'
import '../Home/Home.css'
import Carousel from '../Carousel/Carousel';
import Booking from '../Booking/Booking';
import Extra from '../Extras/Extra';
import Owl from '../Owl_carousel/Owl';

export default function Home() {
    return (
        <div>
            <div>
                <Carousel />
                <Booking />
                <Extra />
                <Owl />
            </div>
        </div>
    )
}

