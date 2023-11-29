import "./barpage.css"
import './landing.css'
import './app.css'
import Landing from "./landing"
import BarPage from "./BarPage";
import { useState } from "react";
import loadingspinner from './assets/partyekdev.gif'

function App() {

  const [hasSearched, setHasSearched] = useState(false)
  const [currentBar, setCurrentBar] = useState("NONE")
  const [barList, setBarList] = useState([])
  const [keyword, setKeyword] = useState("")
  const [loading, setloading] = useState(false)

  return (
    <>
      
      {loading ? (<><div className="loading-container"><img src={loadingspinner} alt="loading..." /><h3 className="bar-title">Loading...</h3></div></>) : (hasSearched ? <BarPage keyword={keyword} barList={barList} currentBar={currentBar}/> : <Landing setloading={setloading} setKeyword={setKeyword} setBarList={setBarList} setCurrentBar={setCurrentBar} setHasSearched={setHasSearched} currentBar={currentBar} />)}
    </>
    
  );
}

export default App;
