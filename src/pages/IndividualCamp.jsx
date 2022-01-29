import React from 'react';
import HeaderMain from '../components/HeaderMain';
import "./IndividualCamp.css";

function Review(){
    return <div className='camp-review'>
        <div className="review-header">
            <h3>Adam Jones</h3>
            <span className="review-time">13h ago</span>
        </div>
        <p className="review-text">Honestly one of the best experiences ever, took us a while to figure out
how to get there but it was amazing!</p>
    </div>
}
function IndividualCamp() {
  return <div className='individual-camp'>
        <div className="page-container">
        <HeaderMain/>

        <div className="individual-camp-body">
            <div className="camp-map">
                <img src="/assets/Map.png" alt="" />
            </div>
            <div className="camp-info">
                <div className="camp-card-detailed">
                    <div className="camp-card-image">
                        <img src="/assets/camps/low/first.jpg" alt="" />
                    </div>
                    <div className="card-title-header">
                    <h3 className="card-title">Mount Ulap</h3>
                    <span>$104.99/night</span>
                    </div>
                    <p className="camp-description">
                    Mount Uan is a 7. 7 kilometer moderatelv trafficked noint-to-point trai
located near luba, benguet, Philippines that offers the chance to set
wildite and is rated as moderate. The trail is primarilv used for niking
                    </p>
                    <span className="post-by">Submitted ov Andrew Mike</span>
                </div>


                <div className="camp-reviews">
                    <div className="camp-review-container">
                    <Review/>
                    <Review/>
                    <Review/>
                    </div>
                    <div className="review-footer">
                        <a href="#new_review">Leave a Review</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>;
}

export default IndividualCamp;
