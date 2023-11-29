import "./barpage.css"
import './landing.css'
import Landing from "./landing"
import BarPage from "./BarPage";
import { useState } from "react";

function App() {

  const [hasSearched, setHasSearched] = useState(false)
  const [currentBar, setCurrentBar] = useState("NONE")
  const [barList, setBarList] = useState([])
  const [keyword, setKeyword] = useState("")

  return (
    <>
      {hasSearched ? <BarPage keyword={keyword} barList={barList} currentBar={currentBar}/> : <Landing setKeyword={setKeyword} setBarList={setBarList} setCurrentBar={setCurrentBar} setHasSearched={setHasSearched} currentBar={currentBar} />}
    </>
    
  );
}

export default App;
