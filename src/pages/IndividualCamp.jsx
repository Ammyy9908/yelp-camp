import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import HeaderMain from '../components/HeaderMain';
import "./IndividualCamp.css";

// function Review(){
//     return <div className='camp-review'>
//         <div className="review-header">
//             <h3>Adam Jones</h3>
//             <span className="review-time">13h ago</span>
//         </div>
//         <p className="review-text">Honestly one of the best experiences ever, took us a while to figure out
// how to get there but it was amazing!</p>
//     </div>
// }
function IndividualCamp({id,user}) {
    const [campdata,setCamp] = React.useState(null);
    // const [reviews,setReviews] = React.useState(null);
    const [postBy,setPostBy] = React.useState(null);

    React.useEffect(()=>{
        axios.get('https://yelpcampserver.herokuapp.com/api/camp/'+id).then((res)=>{
            console.log(res.data);
            const {camp} = res.data;
            setCamp(camp);
            return camp.author;
        }).then((author)=>{
             axios.get('https://yelpcampserver.herokuapp.com/api/author/'+author).then((res)=>{
            console.log(res.data);
            setPostBy(res.data);
            // eslint-disable-next-line 
        }).
        catch((e)=>{console.log(e)})
        // eslint-disable-next-line 
        }).
        catch((e)=>{console.log(e)});

        
    },
    // eslint-disable-next-line 
    [])
    
  return <div className='individual-camp'>
        <div className="page-container">
        <HeaderMain/>

        <div className="individual-camp-body">
            {campdata && <div className="camp-map">
                {/* <img src="/assets/Map.png" alt="" /> */}
                <iframe src={`https://maps.google.com/maps?q=${campdata.lat},${campdata.long}&z=15&output=embed`} width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
            </div>}
            {campdata && <div className="camp-info">
                <div className="camp-card-detailed">
                    <div className="camp-card-image">
                        <img src={campdata.image} alt="" />
                    </div>
                    <div className="card-title-header">
                    <h3 className="card-title">{campdata.title}</h3>
                    <span>${campdata.price}/night</span>
                    </div>
                    <p className="camp-description">
                    {campdata.description}
                    </p>
                    <span className="post-by">Submitted by {postBy}</span>
                </div>


                {/* <div className="camp-reviews">
                    <div className="camp-review-container">
                    <Review/>
                    <Review/>
                    <Review/>
                    </div>
                    <div className="review-footer">
                        <a href="#new_review">Leave a Review</a>
                    </div>
                </div> */}
            </div>}
        </div>
        </div>
        </div>;
}


const mapStateToProps = (state) => ({
    user:state.appReducer.user,
})

export default connect(mapStateToProps,null)(IndividualCamp);
