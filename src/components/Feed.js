import React, {useState} from 'react';
import './Feed.css';
import Zardoz from './../images/feed-zardoz.jpg';

const Feed = () => {
    const [tweets, setTweets] = useState([])
    const [tweet, setTweet] = useState({
        user: "Zardoz", 
        handle: "zarz",
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
        console.log(tweets, tweet)
    }

    return (
        <div className = "feed">

            <div id = "home">
                <h1 id = "homeLink">Home</h1>
            </div>

            <div id = "post">
                <img src = "" alt = ""/>
                <input 
                    type = "text"
                    placeholder = "What's happening?"
                    onChange = {recordTweet}
                />
            </div>
            <div id = "tweetBar">
                <button id = "tweet" onClick = {addTweet}>Tweet</button>
            </div>

            <div id = "twitterFeed">
                    {tweets.map(tweet => (
                        <div key = {tweet.id} className = "tweet">
                            <h2 className = "user">{tweet.user}</h2>
                            <h3 className = "handle">{tweet.handle}</h3>
                            <h4 className = "timePosted">Time</h4>
                            <h5 className = "headline">{tweet.content}</h5>
                            <img src = {Zardoz}/>
                        </div>
                    ))}


                    {/* buttons need to be added here  */}



            </div>

        </div>
    )
}
    // tweetButton = () => {
    //     this.setState({
    //         tweets: [...this.state.tweets, this.state.currentTweet],
    //         currentTweet: "",
    //     })
    // }





export default Feed;