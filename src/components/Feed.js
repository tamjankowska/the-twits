import React, {Component, useState} from 'react';
import './Feed.css';
import Zardoz from './../images/feed-zardoz.jpg';

const Feed = () => {
    const [tweets, setTweets] = useState([])
    const [tweet, setTweet] = useState({})


    recordTweet = (event) => {        
        tweet.user = "Zardoz"
        tweet.handle = "zarz"
        tweet.profilePic = Zardoz;
        tweet.content = event.target.textContent;
        // update the tweet object to have some sort of post content and 
        // that's going to come from the event target

        setTweets({
            currentTweet: tweet
        })
    }

    tweetButton = () => {
        this.setState({
            tweets: [...this.state.tweets, this.state.currentTweet],
            currentTweet: "",
        })
    }
}

// class Feed2 extends Component {

//     state = {
//         tweets: []
//     }

   
//     render(){
//         let eachTweet = null;



//         return (
//             <div className = "feed">

//                 <div id = "home">
//                     <h1 id = "homeLink">Home</h1>
//                 </div>

//                 <div id = "post">
//                     <img src = "" alt = ""/>
//                     <input 
//                         placeholder = "What's happening?"
//                     />
//                 </div>
//                 <div id = "tweetBar">
//                     <button id = "tweet">Tweet</button>
//                 </div>

//                 <div id = "twitterFeed">

//                     <div className = "tweet">

//                         <h2 className = "user">User</h2>
//                         <h3 className = "handle">@handle</h3>
//                         <h4 className = "timePosted">Time</h4>
//                         <h5 className = "headline">Headline</h5>
//                         <img src = "" alt = "" /> 

//                         {/* buttons need to be added here  */}

//                     </div>

//                 </div>

//             </div>
//         )
//     }
// }



export default Feed;