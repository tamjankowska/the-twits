import React from 'react';
import './Feed.css'
import SeanProfilePic from '../images/sean-connery-profile-pic.jpg';
import AmandasCat from '../images/amandas-cat.jpg';
import BowieProfilePic from '../images/bowie-profile-pic.jpg';
import WombatsProfilePic from '../images/the-wombats-profile-pic.jpg';
import JamesBond from '../images/sean-con-james-bond.jpg';
import TamBowie from '../images/tam-bowie.jpg';


const Posts = () => {
    return (

        <div id = "twitterFeed">
            <div className = "top-row-flex">
                <img className="profPic" src={SeanProfilePic} alt="Sean Connery image"/>
                <h2 className = "user">Sir Sean Connery</h2>
                <h3 className = "handle">@SeanCon</h3>
                <h2 className= "timedot">·</h2>
                <h4 className = "timePosted">10m</h4>
                <h5 className = "headline">The name's Connery.. Sean Connery</h5>
                <img className="tweetImage" src={JamesBond} alt="An image of Sean Connery as James Bond"/>
            </div>                
            <div className = "top-row-flex">
                <img className="profPic" src={AmandasCat} alt="Amanda's cat image"/>
                <h2 className = "user">Leia Forni-Hart</h2>
                <h3 className = "handle">@LeiatheLittleOne</h3>
                <h2 className= "timedot">·</h2>
                <h4 className = "timePosted">48m</h4>
                <h5 className = "headline">Meow meow meow meow. 🐱🐾</h5>     
            </div>                
            <div className = "top-row-flex">
                <img className="profPic" src={BowieProfilePic} alt="David Bowie image" />
                <h2 className = "user">David Bowie</h2>
                <h3 className = "handle">@ZiggyStardust</h3>
                <h2 className= "timedot">·</h2>
                <h4 className = "timePosted">1h</h4>
                <h5 className = "headline">I'm back! ⚡</h5>
                <img className="tweetImage" src={TamBowie} alt="Just Tam as Bowie"/>
            </div>                
            <div className = "top-row-flex">
                <img className="profPic" src={WombatsProfilePic} alt="Wombats band image"/>
                <h2 className = "user">The Wombats</h2>
                <h3 className = "handle">@Wombats</h3>
                <h2 className= "timedot">·</h2>
                <h4 className = "timePosted">2h</h4>
                <h5 className = "headline">We're back in Liverpool and everything feels the same...</h5>
            </div>  
       </div>
    )
}

export default Posts;