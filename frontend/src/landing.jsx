import { useState } from "react";
import searchImage from "./assets/search.png";
import backgroundImage from "./assets/background.jpg";
import "./landing.css";

function Landing() {
  const [count, setCount] = useState(0);

  return (
    // Source: https://www.youtube.com/watch?v=9hnJsNIBq1g
    <>
      <div className="title">
        <h1>AggieSpiritSips</h1>
      </div>
      <div className="container">
        <form action="" className="search-bar">
          <input type="text" placeholder="Enter a keyword..." />
          <button type="submit">
            <img src={searchImage} />
          </button>
        </form>
      </div>
    </>
  );
}

export default Landing;
