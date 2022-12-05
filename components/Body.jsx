import React from "react"
import TopBanner from "./TopBanner"
import GamesSection from "./GamesSection"
import NewsLetter from "./NewsLetter"


export default function Body(props) {

    return(
        <div className="body">
            <TopBanner />
            <div className="win_big">
            </div>
            <GamesSection 
                allPopularGames={props.allPopularGames}
            />
            <NewsLetter />
        </div>
    )
}