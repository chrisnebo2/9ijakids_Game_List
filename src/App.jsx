import React from "react"
import Header from "../components/Header"
import Body from "../components/Body"
import Footer from "../components/Footer"
import data from "../src/data"



export default function App() {
  let [allGames, setAllGames] = React.useState([])
  const [allPopularGames, setAllPopularGames] = React.useState(allGames)
  const [searchText, setSearchText] = React.useState("")

  React.useEffect(() => {
    fetch("https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter")
      .then(response => response.json())
      .then(data => setAllGames(data))
  }, [])

  const newArray = allGames.filter(game => {
    return (
      game.GameTitle.toLowerCase().includes(searchText.toLowerCase()) ||
      game.Topic.toLowerCase().includes(searchText.toLowerCase()) ||
      game.Level.toLowerCase().includes(searchText.toLowerCase()) ||
      game.Group.toLowerCase().includes(searchText.toLowerCase())
      )
  })
  

  function searchGames() {
    setAllPopularGames(newArray)
  }

  
  function search(event) {
    setSearchText(event.target.value)
    searchGames()
  }

  

  return (
    <div className="app">
      <Header 
        search={search}
        searchText={searchText}
        searchGames={searchGames}
      />
      <Body 
        allPopularGames={allPopularGames}
        searchText={searchText}
      />
      <Footer />
    </div>
  )
}
