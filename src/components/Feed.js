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
  const [tweets, setTweets] = useState([]);
  const [tweet, setTweet] = useState({
    user: "Zardoz",
    handle: "@zarz",
    createdAt: undefined,
    profilePic: Zardoz,
    content: "",
  });

  const recordTweet = (event) => {
    setTweet({
      ...tweet,
      content: event.target.value,
    });
  };

  const addTweet = (event) => {
    event.preventDefault();
    tweet.createdAt = new Date();

     setTweets([
      {
        ...tweet,
        id: tweets.length,
      },
      ...tweets,
    ]);

    setTweet({
      user: "Zardoz",
      handle: "@zarz",
      createdAt: undefined,
      profilePic: Zardoz,
      content: "",
    });
  };

   
  const handleTime = (tweetCreatedAt) => {
    let currentTime = new Date();

    let timeDiff = currentTime - tweetCreatedAt;
    let timeDiffInSecs = timeDiff / 1000;
    let timeDiffInMins = Math.floor(timeDiffInSecs / 60);
    let timeDiffInHours = Math.floor(timeDiffInMins / 60);

    if (timeDiffInMins < 1) {
      return `Less than a minute ago`;
    } else if (timeDiffInMins < 60) {
      return `${timeDiffInMins}m`;
    } else {
      return `${timeDiffInHours}h`;
    }
  };

  return (
    <div className = "feed">
      <div className="header" id = "Header">
          <h1 id = "homeLink">Home <HiOutlineSparkles id="sparkle"/></h1>
      </div>
    
      <div className="inputAndButton">
        <div id="picAndInput">
          <img className="profPic" src = {tweet.profilePic} alt = "Profile"/>
          <form onSubmit = {addTweet}>
            <input
              id = "inputBar"
              type="text"
              autoComplete="off"
              placeholder="What's happening?"
              onChange={recordTweet}
              value={tweet.content}
            />
            <input
              type="submit"
              value="Tweet"
              id="tweetBar"
              disabled={tweet.content.length > 0 ? false : true}
            />   
          </form>
            {/* <div id="feedIconsBar">
              <div id="feedIcons">
                  <h2><BiImageAlt/></h2>
                  <h2><MdGif/></h2>
                  <h2><RiBarChartHorizontalFill/></h2>
                  <h2><VscSmiley/></h2>
                  <h2><AiOutlineCalendar/></h2>
              </div>
            </div> */}
          </div>
          <div id="feedIconsBar">
              <div id="feedIcons">
                  <h2><BiImageAlt/></h2>
                  <h2><MdGif/></h2>
                  <h2><RiBarChartHorizontalFill/></h2>
                  <h2><VscSmiley/></h2>
                  <h2><AiOutlineCalendar/></h2>
              </div>
            </div>
       </div>
    
     <div className="twitterFeed">
      <div className="tweet">
          {tweets.map(tweet => (
              <div key = {tweet.id} >
                  <div className="top-row-flex">
                    <img className="profPic" src = {tweet.profilePic} alt="Profile"/>
                    <h2 className = "user">{tweet.user}</h2>
                    <h2 className = "handle">{tweet.handle}</h2>
                    <h2 className="timedot">·</h2>
                    <h2 className = "createdAt">{handleTime(tweet.createdAt)}</h2>
                    <h5 className = "headline">{tweet.content}</h5>
                  </div>
              </div>
          ))}
          <Posts/>
        </div>
      </div>
    </div>
  );
};

export default Feed;
