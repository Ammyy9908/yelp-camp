import React from 'react';
import "./CampCard.css";
import {Link} from 'react-router-dom';
function CampCard({image}) {
  return <div className='camp-card'>
        <div className="camp-card-image">
            <img src={image} alt="" />
        </div>
        <h3 className="camp-title">Mount Ulap</h3>
        <p>One of the most famous hikes in the Benguet is Mt Ulap in Itogon.</p>
        <Link to="/camp/1" className="camp-view-btn">View Campground</Link>
  </div>;
}

export default CampCard;
