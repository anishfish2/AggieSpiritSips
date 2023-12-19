import "./barpage.css";
import "./App.css";
import {APIProvider, Map, AdvancedMarker,Pin,InfoWindow} from "@vis.gl/react-google-maps"

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

    const bar_locations = {
        "cedar_lane":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360.9044086643351!2d-96.34683560984998!3d30.61927899659243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683bc35e6ce93%3A0x4aa1584b47ac242a!2sCedar%20Lane!5e0!3m2!1sen!2sus!4v1701227123899!5m2!1sen!2sus",
        "shiner_park":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360.9044086643351!2d-96.34683560984998!3d30.61927899659243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683bcfa9aa225%3A0x386bc4e012fbcc74!2sShiner%20Park!5e0!3m2!1sen!2sus!4v1701227171712!5m2!1sen!2sus",
        "chimys":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.605471757432!2d-96.35039642375058!3d30.61688949122089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683bced4806eb%3A0xc85df025302738ab!2sChimy&#39;s%20College%20Station!5e0!3m2!1sen!2sus!4v1701227218378!5m2!1sen!2sus",
        "twelve":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.605471757432!2d-96.35039642375058!3d30.61688949122089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683bcee1838e1%3A0x60ce92ed59d909d2!2s12%20Rooftop%20Bar%20%26%20Lounge!5e0!3m2!1sen!2sus!4v1701227243742!5m2!1sen!2sus",
        "commanders_cove":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.6031381580765!2d-96.35002832375054!3d30.61695529121754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86468305e69aac43%3A0x3751f592c0b69a6e!2sCommanders%20Cove!5e0!3m2!1sen!2sus!4v1701227268921!5m2!1sen!2sus",
        'backyard':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.6022550775033!2d-96.34987602375053!3d30.616980191216292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683bd0004c56b%3A0x6f641ff379c30321!2sThe%20Backyard!5e0!3m2!1sen!2sus!4v1701227294708!5m2!1sen!2sus",
        'corner':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.576457489703!2d-96.34908462375049!3d30.617707591181475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683bdbca1d889%3A0x6918a4eb7720ab3a!2sThe%20Corner%20Bar%20and%20Rooftop%20Grill%20on%20Northgate!5e0!3m2!1sen!2sus!4v1701227315460!5m2!1sen!2sus",
        'dixie_chicken':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.5654984899147!2d-96.34896882375055!3d30.618016591166384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683bdaa0827b1%3A0x8cb379f26114bdb3!2sDixie%20Chicken!5e0!3m2!1sen!2sus!4v1701227345205!5m2!1sen!2sus",
        'dry_bean':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.5743259898077!2d-96.3489296237505!3d30.617767691178326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683bdaa70cb97%3A0xe0dd92f99b6688d5!2sThe%20Dry%20Bean%20Saloon!5e0!3m2!1sen!2sus!4v1701227366126!5m2!1sen!2sus",
        'duddleys':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.568030772521!2d-96.34874712375048!3d30.617945191169955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683bda99cfa57%3A0x3dc9005bfd97aaa7!2sDuddley&#39;s%20Draw!5e0!3m2!1sen!2sus!4v1701227389276!5m2!1sen!2sus", 
        'harrys':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.368996830196!2d-96.34615362461993!3d30.62355667463714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86468395a63ad063%3A0xe71f7b5d144edd52!2sHurricane%20Harry&#39;s!5e0!3m2!1sen!2sus!4v1701383561366!5m2!1sen!2sus",
        'icon':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.368835401487!2d-96.34844961192967!3d30.62356122551686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683bdaf79429d%3A0xf8d376a95ce1d7c4!2sICON%20Nightclub%20and%20Lounge!5e0!3m2!1sen!2sus!4v1701227439932!5m2!1sen!2sus", 
        'logies':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.5555537318173!2d-96.34847392375049!3d30.618296991153134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683bdb3c2ca47%3A0x52045cfa931a2de5!2zTG9naWXigJlz!5e0!3m2!1sen!2sus!4v1701227461309!5m2!1sen!2sus", 
        'mama_sake':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.5449633961694!2d-96.34862622375051!3d30.6185955911386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683bdb1b46417%3A0x4863c2d12f1ac118!2sMama%20Sake!5e0!3m2!1sen!2sus!4v1701227484363!5m2!1sen!2sus", 
        'obannons':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.5449633961694!2d-96.34862622375051!3d30.6185955911386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683bcf0a166bf%3A0x4f30e9f3a00dfaf1!2sO&#39;Bannon&#39;s%20Taphouse!5e0!3m2!1sen!2sus!4v1701227504817!5m2!1sen!2sus", 
        'paddock':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.590952298177!2d-96.34986832375058!3d30.617298891200996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683bcfb794795%3A0xf296ea53315324fc!2sPaddock!5e0!3m2!1sen!2sus!4v1701227524377!5m2!1sen!2sus", 
        'rebel':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d721.8093817588981!2d-96.34696523263746!3d30.619203296286972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683bc4a7b0735%3A0xfb53484b209d664!2sRebel%20Draft%20House!5e0!3m2!1sen!2sus!4v1701227559613!5m2!1sen!2sus",
        'rough_draught':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.5383334076187!2d-96.35191491193065!3d30.61878252575309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683bc48cf6b2d%3A0x87e8e9e4031f893e!2sRough%20Draught%20Whiskey%20Bar!5e0!3m2!1sen!2sus!4v1701227581541!5m2!1sen!2sus",
        'social':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.5383334076187!2d-96.35191491193065!3d30.61878252575309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683bdb0c5f4e7%3A0xe409a92b36ab8577!2sSocial%20Lounge!5e0!3m2!1sen!2sus!4v1701227606940!5m2!1sen!2sus", 
        'spot':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.5363165626654!2d-96.3483718237505!3d30.618839391127075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683d9bbd6932b%3A0x23012f940d40ea5d!2sThe%20Spot%20On%20Northgate!5e0!3m2!1sen!2sus!4v1701227627370!5m2!1sen!2sus", 
        'tipsy_turtle':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.565626168151!2d-96.35064512375047!3d30.61801299116672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683bcf776cb19%3A0x6922663de967a9c7!2sTipsy%20Turtle!5e0!3m2!1sen!2sus!4v1701227657460!5m2!1sen!2sus"

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
                <div className="map-div">
                    {/*Help from https://www.techomoro.com/add-or-embed-a-google-map-location-on-a-react-app/ */}
                    <iframe className="bar-map" src={bar_locations[props.currentBar]} width="600" height="450"/>
                </div>
            </div>
        </div>
    </>
  );
}

export default BarPage;
