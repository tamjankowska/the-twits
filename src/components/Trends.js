import React from 'react';
import './Trends.css';
import {BiSearch} from 'react-icons/bi';
import Biden from '../images/trends-biden.jpg';
import TrendsFood from '../images/trends-food.jpg';


const Trends = () => {

    return(

    <div className="trends-panel">
        
            <i className={BiSearch}>
            <input className="trends-searchBar" type="text"  placeholder="Search Twitter"></input>
            </i>
            <aside className="trends-aside">
                <h2>What's happening</h2>
                <article className="trend-article">
                    <p>US elections. 28 minutes ago</p>
                    <img className="trends-image" src={Biden} alt="Joe Biden" />
                    <h3>Biden seeks to poach votes in Republican South</h3> 
                    <p>Trending with  <a target="/" href="https://www.bbc.co.uk/news/live/election-us-2020-54704747"> BBC News</a></p>
                </article>
                <article className="trend-article">
                    <p>Trending in United Kingdom</p>
                    <h3>#Masks 😷</h3>
                    <p>Wear one!</p>
                </article>
                <article className="trend-article">
                    <p>Trending in United Kingdom</p>
                    <img className="trends-image" src={TrendsFood} alt="Food" />
                    <h3>Free School meals for kids</h3>
                    <p>Trending with <a target="/" href="https://www.bbc.co.uk/news/uk-54669929"> Marcus Rashford</a></p>
                </article>
                <article className="trend-article">
                    <p>Sports. LIVE</p>
                    <h3>Everton win 20/21 Premier League 🏆</h3>
                </article>
                <article className="trend-article">
                    <p>International News</p>
                    <h3>Four people dead as a migrant boat sinks</h3>
                </article>
                <div className="show-more">
                    <a href="/" target="/">Show more</a>
                </div>
            </aside>
            <footer className="trends-footer" > 
                <a href="/" target="/">Terms of Service</a>
                <a href="/" target="/">Privacy Policy</a>
                <a href="/" target="/">Cookie Policy</a>
                <a href="/" target="/">Ads info</a>
                <a href="/" target="/">More...</a>
                <a href="/" target="/">&copy;2020 Twitter, Inc</a>
            </footer>
       
    </div>        
        
    )
}
export default Trends;