import React, { useState } from "react";

import "./Feed.css";
import Zardoz from "./../images/feed-zardoz.jpg";

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
    <div className="feed">
      <div id="home">
        <h1 id="homeLink">Home</h1>
      </div>

      <div id="post">
        <img src="" alt="" />
        <form onSubmit = {addTweet}>
          <input
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
      </div>

      <div id="twitterFeed">
        {tweets.map((tweet) => (
          <div key={tweet.id} className="tweet">
            <h2 className="user">{tweet.user}</h2>
            <h3 className="handle">{tweet.handle}</h3>
            <h4 className="createdAt">{handleTime(tweet.createdAt)}</h4>
            <h5 className="headline">{tweet.content}</h5>
            <img src={tweet.profilePic} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
