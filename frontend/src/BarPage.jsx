import "./barpage.css";
import "./App.css";

function BarPage(props) {

  return (
    <>
        <div className="main-container">
            <div className="left-container">

                <div className="left-top">
                    <div className="title-container">
                        <h1 className="bar-title">{props.currentBar}</h1>
                    </div>
                    <div className="description-container">
                        <p className="bar-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique quod ratione, delectus earum repudiandae eum doloribus rem quibusdam deserunt natus rerum saepe, laboriosam libero odio blanditiis! Illo, pariatur beatae.</p>
                    </div>
                </div>
                <div className="left-bottom">
                    <h2>Check out these bars aswell</h2>
                    <ul>
                        <li>bar</li>
                    </ul>
                </div>
            </div>
            <div className="right-container">
                <div>
                    google tracker thing
                </div>
            </div>
        </div>
    </>
  );
}

export default BarPage;
