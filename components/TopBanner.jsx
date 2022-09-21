import React from "react"
import "../src/css/TopBanner.css"

export default function TopBanner() {
    return(
        <div className="top_banner">
            <div className="container">
                <h2>Learning is Fun</h2>
                <h1>Learn New Skills Online Find Best Courses</h1>
                <div className="buttons">
                    <button className="register">Register</button>
                    <button className="login">Login</button>
                </div>
            </div>
        </div>
    )
}