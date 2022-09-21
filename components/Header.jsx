import React from "react"
import "../src/css/Header.css"
import brand_logo from "../src/images/logo.png"


export default function Header(props) {
    return(
        <div className="header">
            <div className="heading">
                <div className="container">
                <a href="" className="address">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>9ijakids Lane, Lagos</p>
                </a>
                <a href="" className="email">
                    <i className="fa-solid fa-envelope"></i>
                    <p>9ijakids@test.com</p>
                </a>
                <div className="social_icons">
                    <a href="">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="">
                        <i className="fa-brands fa-pinterest"></i>
                    </a>

                    <a href="">
                        <i className="fa-brands fa-twitter"></i>
                    </a>

                    <a href="">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
                </div>
            </div>
            <nav className="nav_bar">
                <div className="container">
                    <div className="brand">
                        <a href="">
                            <img className="brand_logo" src={brand_logo} alt="9IJAKIDS LOGO" />
                            <p className="brand_name">9IJAKIDS</p>
                        </a>
                    </div>

                    <ul>
                        <a href="">
                            <li>Home</li>
                        </a>
                        <a href="">
                            <li>Games</li>
                        </a>
                        <a href="">
                            <li>About</li>
                        </a>
                        <a href="">
                            <li>Competition</li>
                        </a>
                    </ul>

                    <button className="register">Register</button>
                    <form className="search">
                        <input 
                            type="text"
                            placeholder="Search games.." 
                            onChange={props.search}
                            value={props.searchText}
                        />
                        <i onClick={props.searchGames} className="fa-solid fa-magnifying-glass"></i>
                    </form>
                </div>
            </nav>
        </div>
    )
}