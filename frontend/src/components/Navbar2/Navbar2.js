import React from 'react';
import {Link} from 'react-router-dom';
import "./Navbar2.css";


function Navbar2(){
    return(
        <header>
            <div className="category-container">
                    <ul className='firt_row'>
                        <li>Amazon Mini TV</li>
                        <li>Sells</li>
                        <li>Best Sellers</li>
                        <li>Today's Deals</li>
                        <li>Mobiles</li>
                        <li>New Releases</li>
                        <li>Customer Service</li>
                        <li>Prime</li>
                        
                    </ul>
                    <ul className='last_row'>
                        <img src="https://m.media-amazon.com/images/G/31/Events/img23/Aug23ART/SWM_400x39_Shop_now._CB601306814_.jpg" height="80%" />
                    </ul>
                </div>

        </header>
    )
}

export default Navbar2;