import { useState } from "react";
import searchImage from "./assets/search.png";
import "./landing.css";

function Landing(props) {


  const [inputText, setInputText] = useState()

  const handleSubmitClick = () => {


    //find bar similar to keyword via api call

    //do a yelp call for more information

    //set currentbar to that bar, 

    //finally set searched to true, making it go to the next screen, hopefully with populated data
    props.setHasSearched(true)
    props.setCurrentBar(inputText)
  }

  const handleInputChange = (e) => {
    console.log(e.target.value)
    setInputText(e.target.value)
  }

  return (
    // Source: https://www.youtube.com/watch?v=9hnJsNIBq1g
    <div className="overall-container">
      <div className="title">
        <h1>AggieSpiritSips</h1>
      </div>
      <div className="container">
        <form action="" className="search-bar" onSubmit={handleSubmitClick}>
          <input value={inputText} onChange={handleInputChange} type="text" placeholder="Enter a keyword..." />
          <button type="submit">
            <img src={searchImage} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Landing;
