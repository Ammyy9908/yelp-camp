import React from 'react';
import CampCard from '../components/CampCard';
import "./SearchPage.css";
import {Link} from 'react-router-dom';
import HeaderMain from '../components/HeaderMain';
function SearchPage() {
  return <div className='search-page'>
            <div className="page-container">
                <HeaderMain/>
                <div className="search-page-jumbotron">
                    <div className="jumbotron-content">
                    <h1>Welcome to YelpCamp!</h1>
                    <p>View our hand-picked campgrounds from all over the world, or add your own.</p>
                    <form className="search-page-form">
                        <div className="search-page-search-input">
                            <img src="/assets/search.svg" alt="" />
                            <input type="text" placeholder="Search for campus" />
                        </div>
                        <input type="submit" value="Search" />
                    </form>
                    <a href="#new" className='campground-add'>Or add your own campground</a>
                    </div>
                </div>

                <div className="campgrounds">
                        <CampCard image="./assets/camps/low/first.jpg"/>
                        <CampCard image="./assets/camps/low/second.jpg"/>
                        <CampCard image="./assets/camps/low/third.jpg"/>
                        <CampCard image="./assets/camps/low/fourth.jpg"/>
                        <CampCard image="./assets/camps/low/fifth.jpg"/>
                        <CampCard image="./assets/camps/low/sixth.jpg"/>
                </div>

                <footer className='search-page-footer'>
                    <Link to="/">
                        <img src="/assets/logo.svg" alt="" />
                    </Link>
                </footer>
            </div>
        </div>;
}

export default SearchPage;
