import React from 'react';
import CampCard from '../components/CampCard';
import "./SearchPage.css";
import {Link} from 'react-router-dom';
import HeaderMain from '../components/HeaderMain';
import { connect } from 'react-redux';
import axios from 'axios';
function SearchPage({user,camps}) {
    console.log(user);
    const [query,setQuery] = React.useState('');
    const [results,setResults] = React.useState(null);

    const handleSearch = (e)=>{
        e.preventDefault();
        console.log(query);
        axios.get(`https://yelpcampserver.herokuapp.com/api/search?q=${query}`).then((res)=>{
            console.log(res.data);
            setResults(res.data.camps);
            setQuery('');
        }).catch(e=>console.log(e));
    }

    const handleReset =(e)=>{
        setResults(null);
    }
  return <div className='search-page'>
            <div className="page-container">
                <HeaderMain/>
                <div className="search-page-jumbotron">
                    <div className="jumbotron-content">
                    <h1>Welcome to YelpCamp!</h1>
                    <p>View our hand-picked campgrounds from all over the world, or add your own.</p>
                    <form className="search-page-form" onSubmit={handleSearch}>
                        <div className="search-page-search-input">
                            <img src="/assets/search.svg" alt="" />
                            <input type="text" placeholder="Search for campus" value={query} onChange={(e)=>setQuery(e.target.value)}/>
                        </div>
                        <input type="submit" value="Search" />
                    </form>
                    <Link to="/new" className='campground-add'>Or add your own campground</Link>
                    </div>
                </div>

                {results && <button className='clear_btn' onClick={handleReset}>Clear</button>}

                <div className="campgrounds">
                        {/* <CampCard image="./assets/camps/low/first.jpg"/>
                        <CampCard image="./assets/camps/low/second.jpg"/>
                        <CampCard image="./assets/camps/low/third.jpg"/>
                        <CampCard image="./assets/camps/low/fourth.jpg"/>
                        <CampCard image="./assets/camps/low/fifth.jpg"/>
                        <CampCard image="./assets/camps/low/sixth.jpg"/> */}

                        {
                            results && results.map((camp,index)=>{
                                return <CampCard key={index} image={camp.image} title={camp.title} description={camp.description} id={camp._id}/>
                            })
                        }

                        {
                            !results && camps && camps.map((camp,index)=>{
                                return <CampCard key={index} image={camp.image} title={camp.title} description={camp.description} id={camp._id}/>
                            })
                        }
                </div>

                <footer className='search-page-footer'>
                    <Link to="/">
                        <img src="/assets/logo.svg" alt="" />
                    </Link>
                </footer>
            </div>
        </div>;
}



const mapStateToProps = (state) => ({
    user:state.appReducer.user,
    camps:state.appReducer.camps
})
export default connect(mapStateToProps,null)(SearchPage);
