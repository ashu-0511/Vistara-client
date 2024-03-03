import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../Owl_carousel/Owl.css'
import img1 from '../images/owl1.webp'
import img2 from '../images/owl2.webp'
import img3 from '../images/owl3.webp'
import img4 from '../images/owl4.webp'
import img5 from '../images/owl5.webp'
import img6 from '../images/owl6.webp'


// className "owl-theme" is optional
function Owl() {
    return (
        <div>
            {/* <h3>EXTRAS</h3> */}
            <div className='owl'>
                <OwlCarousel className='owl-theme' loop margin={10} nav id='owl-wrapper'>
                    <div class='item'>
                        <img src={img1} alt='none' />
                    </div>
                    <div class='item'>
                        <img src={img2} alt='none' />
                    </div>
                    <div class='item'>
                        <img src={img3} alt='none' />
                    </div>
                    <div class='item'>
                        <img src={img4} alt='none' />
                    </div>
                    <div class='item'>
                        <img src={img5} alt='none' />
                    </div>
                    <div class='item'>
                        <img src={img6} alt='none' />
                    </div>
                </OwlCarousel>

            </div>
        </div>
    )
}

export default Owl;