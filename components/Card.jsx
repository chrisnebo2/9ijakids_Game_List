import React from "react"
import "../src/css/Card.css"

export default function Card(props) {
    return (
        <div className="Card">
            <div className="image">
                <img src={props.GameImage} alt="Games Images" />
            </div>
            <div className="card_body">
                <h3 className="title">
                    {props.GameTitle}
                </h3>
                <p className="description">
                    {props.GameDescription}
                </p>
            </div>
        </div>
    )
}