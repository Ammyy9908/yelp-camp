import React from 'react';
import "./CampCard.css";
import {Link} from 'react-router-dom';
function CampCard({image,title,description,id}) {
  return <div className='camp-card'>
        <div className="camp-card-image">
            <img src={image} alt="" />
        </div>
        <h3 className="camp-title">{title}</h3>
        <p>{description}</p>
        <Link to={`/camp/${id}`} className="camp-view-btn">View Campground</Link>
  </div>;
}

export default CampCard;
