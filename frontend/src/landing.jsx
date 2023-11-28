import searchImage from "./assets/search.png";
import "./landing.css";

function Landing(props) {

  const handleSubmitClick = () => {
    props.setHasSearched(true)
    props.setCurrentBar("cool bar name")
  }
  return (
    // Source: https://www.youtube.com/watch?v=9hnJsNIBq1g
    <div className="overall-container">
      <div className="title">
        <h1>AggieSpiritSips</h1>
      </div>
      <div className="container">
        <form action="" className="search-bar">
          <input type="text" placeholder="Enter a keyword..." />
          <button onClick={handleSubmitClick}type="submit">
            <img src={searchImage} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Landing;
