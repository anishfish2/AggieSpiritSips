import "./barpage.css"
import './landing.css'
import Landing from "./landing"
import BarPage from "./BarPage";
import { useState } from "react";

function App() {

  const [hasSearched, setHasSearched] = useState(false)
  const [currentBar, setCurrentBar] = useState("NONE")

  return (
    <>
      {hasSearched ? <BarPage currentBar={currentBar}/> : <Landing setCurrentBar={setCurrentBar} setHasSearched={setHasSearched} currentBar={currentBar} />}
    </>
    
  );
}

export default App;
