import { useState } from "react";
import searchImage from "./assets/search.png";
import "./landing.css";


function Landing() {
  const [count, setCount] = useState(0);

  return (
    // Source: https://www.youtube.com/watch?v=9hnJsNIBq1g
    <>
    <div className="title">
        <h1>AggieSpiritSips</h1>
    </div>
    <div className="search-container">
        <form action="">
            <input type="text" placeholder="enter a keyword"/>
            <button type="submit">
                <img src={searchImage}/>
            </button>
        </form>
    </div>
    </>
  );
}

export default Landing;
