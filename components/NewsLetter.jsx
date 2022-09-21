import React from "react"
import "../src/css/NewsLetter.css"

export default function NewsLetter() {
    return(
        <div className="NewsLetter">
            <div className="container">
                <div className="content">
                    <p>Subscrible now</p>
                    <h1>Be in the know...</h1>
                    <form action="">
                        <i className="fa-solid fa-envelope"></i>
                        <input type="email" placeholder="Enter Email address" />
                        <button>Subscribe now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}