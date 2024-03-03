import React from "react";
import "./Dropdown.css"
import Drop1 from "../images/Dropdown-01.webp"

function Dropdown() {
    return (
        <div className="dropdownmenu ">
            <div className="downlists">
                <ul className="downlist">
                    <h6 className="list-head">Book</h6>
                    <li>profile</li>
                    <li>settings</li>
                    <li>Logout</li>

                </ul>
                <ul className="downlist">
                    <h6 className="list-head">Fly</h6>
                    <li>profile</li>
                    <li>settings</li>
                    <li>Logout</li>

                </ul>
                <ul className="downlist">
                    <h6 className="list-head">Manage</h6>
                    <li>profile</li>
                    <li>settings</li>
                    <li>Logout</li>

                </ul>
                <ul className="downlist">
                    <h6 className="list-head">Deals & Offers</h6>
                    <li>profile</li>
                    <li>settings</li>
                    <li>Logout</li>

                </ul>
                <ul className="downlist">
                    <li><img src={Drop1} alt="none" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Dropdown;