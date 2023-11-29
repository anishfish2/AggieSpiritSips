import "./barpage.css";
import "./App.css";
function BarPage(props) {



    const bar_descriptions = {
        "cedar_lane":"Cedar Lane is a locally owned and operated bar in the heart of Northgate with an independent attitude, feel-good music, and a fun, warm, and welcoming atmosphere. We've got a full bar, projection TV, pool table, and giant Jenga. Or enjoy your ice-cold drink outside under the stars in our patio arbor. Try our signature drinks like the Cedarade and the Wake-Me-Up. Also available for private parties. Come by!",
        "shiner_park":"Home of the biggest dance floor on Northgate. Dance club playing all the best Country, Hip-Hop, & To",
        "chimys":"On the edge of Northgate sits the perfect place to start your night in Aggieland. Grab an ice cold margarita and some awesome Tex-Mex to experience the absolute A&M spirit! GigEm!",
        "good_bull_icehouse":"HOWDY! Good Bull Icehouse is College Stations newest and only bar & venue with a massive screen out back and a nightclub upstairs. We offer a full-service bar, featuring specialty drinks that range from Capri Funs, Mega Mules, Mimosa Towers, and more. Lets not forget the always exciting bottle service and section rental packages, venue rental opportunities, and live music bookings. At Good Bull Icehouse, youre sure to have a great time. Gig em, Aggies!",
        "twelve":"12 Rooftop Bar & Lounge stands apart on Northgate as a monument to wringing every last drop of fun from your night. With a rooftop bar upstairs and a dance club and lounge downstairs, you're technically getting two bars at once. And while the drinks are always cheap, the music and vibe depends largely on what night you visit.",
        "commanders_cove":" Commander's Cove is a family owned and operated outdoor and indoor bar. We welcome you to sit back, unwind and appreciate the lovely sites and hints of a beach theme. While our best bartenders set you up with a refreshing drink, made with the freshest ingredients.We are known for our margaritas and mojitos. This is because not only do we use the freshest Ingredients, it's because our recipe is inspired by key west. We also offer an array of drinks that is sure to please everyone. ",
        'backyard':" Boasting the largest patio and largest screen on Northgate, The Backyard has something for everyone and can accommodate parties of all sizes for all occasions.",
        'corner':"In 2004 James Nowak and Barry Ivins opened in what was then a small photography studio across from Kyle Field. Their goal was to create a neighborhood bar on Northgate that felt like a second home. After all these years, expansions & changes, that still remains our mission. A bar where you feel like a regular as soon as you step in the door. ",
        'dixie_chicken':"The town and the university have changed, but the Chicken has remained timeless generations of Aggies have walked through the same swinging doors for a great burger or a cold beer.",
        'dry_bean':'The original Northgate shot bar! We specialize in shots, shooters, and all that entails!',
        'duddleys':'Rustic, long-running watering hole with porch seats, plus pool tables, arcade games & sports on TV.', 
        'harrys':'Beer & dance hall featuring live country music, DJs & drink specials.',  
        'icon':'Icon Nightclub & Lounge is a lively bar in College Station offering customers a collection of notable beers. Stop in and experience our notable mixed drinks or socialize with friends in a hip atmosphere.', 
        'logies':'Logies on Campus was established in Northgate in 2004. Beer and shot specials everyday along with food and fun', 
        'mama_sake':'Come by one and only Sake Bar on Northgate!', 
        'obannons':'Offering 75+ of the worlds finest beers as well as a vast selection of top-shelf spirits, this pub is all about refined tastes. Craft beer has boomed over the past several years. Guinness is our flagship, and you wont find a more perfect pint in town than right here at OBannons. But while sticking with our Irish roots, we are also on the frontline of bringing in new & exciting craft beer. In fact we rotate new beer in almost daily! OBannons is Aggie owned and operated, and has been proudly serving Aggieland since 2005.', 
        'paddock':'Paddock is THE bar to be at on Northgate! From Fishbowls to craft beers and specialty cocktails, you can always find something you love here', 
        'rebel':'College Stations best kept secret. A Texas Country and Red Dirt Dive Bar. 60 draft choices, tried and true cocktails, live music and entertainment.',
        'rough_draught':'Laid-back hangout with a cool vibe pouring 275+ global whiskeys, plus seating on a chill patio.',
        'social':'Lively DJ dance club & cocktail bar with late hours, e-hookahs, lighting effects & drink specials.', 
        'spot':'Located on Northgate, the spot serves good food and cold drinks. New HAPPY HOUR specials! EVERY. SINGLE. DAY {except game days and other special events/holidays}. Yall come see us!', 
        'tipsy_turtle':'The Tipsy Turtle is one of Northgates best shot bars! We also have cocktails, 6 different frozen drinks, and a wide variety of beer!'
    }

    const bars = props.barList.slice(1).map((name) =>
        <li className='bar-description' key={name}>{name}</li>
    );
  return (
    <>
        <div className="main-container">
            <div className="left-container">

                <div className="left-top">
                    <div className="title-container">
                        <h1 className="bar-keyword">You asked for: {props.keyword}</h1>
                        <h1 className="bar-title">We recommend: {props.currentBar}</h1>
                    </div>
                    <div className="description-container">
                        <p className="bar-description">{props.currentBar in bar_descriptions ? bar_descriptions[props.currentBar] : "lorem"}</p>
                        <img className='bar-image' src={"../public/" + props.currentBar + ".jpg"}/>
                    </div>
                </div>
                <div className="left-bottom">
                    
                    <h2 className="other-bars-header">Check out these bars aswell</h2>
                    <ul>
                        {bars}
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
