import React from 'react';
import Header from '../components/Header';
import "./Landing.css";
import {Link} from 'react-router-dom';
function Landing() {
  return <div className='landing-page'>

      <div className="landing-textual">
        <Header/>
        <div className="hero-image-mobile">
          <img src="/assets/hero_small.jpg" alt="" />
        </div>
        <div className="landing-body">
          <h1>Explore the best
camps on Earth.</h1>
<p>YelpCamp is a curated list of the best camping spots on
Earth. Unfiltered and unbiased reviews.</p>
<ul className="app_features">
  <li><img src="/assets/checkmark.svg" alt="" />Add your own camp suggestions.</li>
  <li><img src="/assets/checkmark.svg" alt="" />Leave reviews and experiences.</li>
  <li><img src="/assets/checkmark.svg" alt="" />See locations for all camps.</li>
</ul>
<Link to="/browse" className='btn btn-large btn-view-camps'>View Campgrounds</Link>
<div className="partners">
  <div className="partner-headeing">Partnered with:</div>
  <div className="partners-companies">
    <img src="/assets/Airbnb.svg" alt="" />
    <img src="/assets/Booking.svg" alt="" />
    <img src="/assets/Plum_Guide.svg" alt="" />
  </div>
</div>
        </div>
      </div>
     <div className="hero-image">
     <img src="/assets/hero.jpg" alt="" className="landing-hero-image" />
     </div>
    </div>;
}

export default Landing;
