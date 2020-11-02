import React, {useState} from 'react';
import './Feed.css';
import {HiOutlineSparkles} from 'react-icons/hi';
import {BiImageAlt} from 'react-icons/bi';
import {MdGif} from 'react-icons/md';
import {RiBarChartHorizontalFill} from 'react-icons/ri';
import {VscSmiley} from 'react-icons/vsc';
import {AiOutlineCalendar} from 'react-icons/ai';
import Zardoz from './../images/feed-zardoz.jpg';
import Posts from './Posts';

const Feed = () => {
    const [tweets, setTweets] = useState([
      
    ])
    const [tweet, setTweet] = useState({
        user: "Zardoz", 
        handle: "@zarz", 
        profilePic: Zardoz, 
        content: ""
        
    })

    const recordTweet = (event) => {  
        setTweet({
            ...tweet,
            content: event.target.value})
    }

    // const addTweet = () => {
    //     setTweets([
    //         ...tweets,
    //         {
    //             ...tweet,
    //             id: tweets.length
    //         } 
    //     ])
    //     console.log(tweets, tweet)
    // }


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

            <div className="header" id = "Header">
                <h1 id = "homeLink">Home <HiOutlineSparkles id="sparkle"/></h1>
            </div>

            <div className="inputAndButton">
                <div id="picAndInput">
                <img className="profPic" src = {tweet.profilePic} alt = "Profile"/>
                <input 
                    id="inputBar"
                    type = "text"
                    autoComplete = "off"
                    placeholder = "What's happening?"
                    id="inputBar"
                    onChange = {recordTweet}
                    value = {tweet.content}
                />
                </div>
            <div id="feedIconsBar">
                <div id="feedIcons">
                    <h2><BiImageAlt/></h2>
                    <h2><MdGif/></h2>
                    <h2><RiBarChartHorizontalFill/></h2>
                    <h2><VscSmiley/></h2>
                    <h2><AiOutlineCalendar/></h2>
                </div>
                <div className = "tweetBar">
                    <button id="tweetBar" onClick = {addTweet}>Tweet</button>
                
                </div>
                </div>
            </div>
            <div className="twitterFeed" id = "twitterFeed">
                <div className="tweet">
                    {tweets.map(tweet => (
                        <div key = {tweet.id} >
                            <div className="top-row-flex">
                            <img className="profPic" src = {tweet.profilePic} alt="Profile"/>
                            <h2 className = "user">{tweet.user}</h2>
                            <h2 className = "handle">{tweet.handle}</h2>
                            <h2 className="timedot">·</h2>
                            <h2 className = "timePosted">Time</h2>
                            <h5 className = "headline">{tweet.content}</h5>
                            </div>
                        </div>
                    ))}

                    <Posts/>
                </div>
            </div>
        </div>
    )
}

export default Feed;
