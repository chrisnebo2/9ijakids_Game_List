import React from "react"
import Header from "../components/Header"
import Body from "../components/Body"
import Footer from "../components/Footer"
import Axios from "axios"
import data from "../src/data"



export default function App() {
  let [allGames, setAllGames] = React.useState(data)
  const [allPopularGames, setAllPopularGames] = React.useState(allGames)
  const [searchText, setSearchText] = React.useState("")

  /**
   * This is the code where I made the API call,
   * But I ran into a CORS policy error because, there was no
   * Access-Control-Allow-Origin Permision in the header of the 
   * php api. But I figured it will be nice if I had showed my working, 
   * and it actually works with other API.
   * Am not 100% sure the fault is from your end, but I hope it is
   * Because I have tried every possible fix I know.
   * So my last resort was to copy the text in the API into a file called
   */
  
  // React.useEffect(() => {
  //   Axios.get("https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter")
  //     .then(response => console.log(response.data))
  // }, [])

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
