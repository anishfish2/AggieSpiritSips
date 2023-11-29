import { useState } from "react";
import searchImage from "./assets/search.png";
import "./landing.css";

function Landing(props) {


  const [inputText, setInputText] = useState("Enter a keyword")

  const hostname = "http://127.0.0.1:5000/"
  const handleSubmitClick = async (e) => {

    e.preventDefault();
    let result = ""

    //find bar similar to keyword via api call
    const res = await fetch(hostname+"search-by-keyword",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept':'application/json'
      },
      body: JSON.stringify({word: inputText, topk: '4', num_characteristics: "20"})
    }).then(response => response.text()).then(json => result = json)
    
    let cleanstring = ""
    for(let i = 0; i < result.length; i++){
      if(result[i] == "," || result[i] == "'" || result[i] == "[" || result[i] == "]"){
        continue
      }else{
        cleanstring += result[i]
      }
    }

    console.log("cleanstring: ",cleanstring)
    let barsArray = cleanstring.split(" ")

    //do a yelp call for more information (or just cache might be easier)


    //set currentbar to that bar, 

    //finally set searched to true, making it go to the next screen, hopefully with populated data
    props.setHasSearched(true)
    props.setCurrentBar(barsArray[0])
    props.setBarList(barsArray)
    props.setKeyword(inputText)
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
