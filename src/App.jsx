import React, { useEffect } from "react"
import Header from "../components/Header"
import Body from "../components/Body"
import Footer from "../components/Footer"




export default function App() {
  const [allGames, setAllGames] = React.useState([])
  let [searchedGames, setSearchedGames] = React.useState([])
  const [searchText, setSearchText] = React.useState("")


  useEffect(() => {
      fetch("https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter")
        .then(response => response.json())
        .then(data => {
          setAllGames(data)
          setSearchedGames(data)
        })
  }, [])

  console.log(allGames)
      
  function searchGames(event) {
    event.preventDefault()
    const searchQuery = searchText.toLowerCase().trim()
    const keys = ["GameTitle", "Group", "Level"]
    const resultOfSearchedGames = allGames.filter(game => (
      keys.some(key => game[key].toLowerCase().includes(searchQuery))
    ))
    setSearchedGames(resultOfSearchedGames)
  }
  
  return (
    <div className="app">
      <Header 
        search={(event) => setSearchText(event.target.value)}
        searchText={searchText}
        searchGames={searchGames}
      />
      <Body 
        allPopularGames={searchedGames}
      />
      <Footer />
    </div>
  )
}
