import React from 'react';
import './Feed.css';

const Feed = () => {

    // const tweet = useFormInput("");


    return (
        <div className = "feed">

            <div id = "home">
                <h1 id = "homeLink">Home</h1>
            </div>

            <div id = "post">
                <img src = "" alt = ""/>
                <input 
                    placeholder = "What's happening?"
                />
            </div>
            <div id = "tweetBar">
                <button id = "tweet">Tweet</button>
            </div>

            <div id = "twitterFeed">

                <div className = "tweet">

                    <h2 className = "user">User</h2>
                    <h3 className = "handle">@handle</h3>
                    <h4 className = "timePosted">Time</h4>
                    <h5 className = "headline">Headline</h5>
                    <img src = "" alt = "" /> 

                    {/* buttons need to be added here  */}

                </div>

            </div>

        </div>
    )
}

// const useFormInput = ()

export default Feed;