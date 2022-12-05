import React from "react"
import Card from "./Card"
import "../src/css/GamesSection.css"



export default function GamesSection({allPopularGames}) {

    
    const cardElements = allPopularGames.map((game, index) => {
        return (
            <Card 
                key={index}
                GameImage={game.GameImage}
                GameTitle={game.GameTitle}
                GameDescription={game.GameDescription}
            />
        )
    })

    return(
        <div className="section">
            <div className="container">
                <h1>Popular Games</h1>
                <div className="games">
                    {cardElements}
                </div>
            </div>
        </div>
    )
}