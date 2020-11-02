import React, {useState} from 'react';
import './Feed.css';
import Zardoz from './../images/feed-zardoz.jpg';
import Posts from './Posts';

const Feed = () => {
    // let currentTime = Date.now(); still working on this 
    const [tweets, setTweets] = useState([]);
    const [tweet, setTweet] = useState({
        user: "Zardoz", 
        handle: "@zarz",
        // time: currentTime,
        profilePic: Zardoz,
        content: "",
    })

    
    const recordTweet = (event) => {  
        setTweet({
            ...tweet,
            content: event.target.value})
    }

    const addTweet = () => {
        setTweets([
            ...tweets,
            {
                ...tweet,
                id: tweets.length
            } 
        ])
        setTweet({
            user: "Zardoz", 
            handle: "@zarz",
            // time: currentTime,
            profilePic: Zardoz,
            content: ""});

        console.log(tweet.content, tweets)
        
    }

    // const handleTime = () => {

    //     let timePosted = 
    // }

    return (
        <div className = "feed">

            <div id = "home">
                <h1 id = "homeLink">Home</h1>
            </div>

            <div id = "post">
                <img src = "" alt = ""/>
                <input 
                    type = "text"
                    autoComplete = "off"
                    placeholder = "What's happening?"
                    onChange = {recordTweet}
                    value = {tweet.content}
                />
            </div>

            <div id = "tweetBar">
                <button id = "tweet" onClick = {addTweet}>Tweet</button>
                {/* buttons need to be added here  */}
            </div>

            <div id = "twitterFeed">
                    {tweets.map(tweet => (
                        <div key = {tweet.id} className = "tweet">
                            <h2 className = "user">{tweet.user}</h2>
                            <h3 className = "handle">{tweet.handle}</h3>
                            {/* <h4 className = "timePosted">{tweet.time}</h4> */}
                            <h5 className = "headline">{tweet.content}</h5>
                            <img src = {tweet.profilePic}/>
                        </div>
                    ))}

                    <Posts/>
            </div>
        </div>
    )
}

export default Feed;