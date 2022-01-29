import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Landing from './pages/Landing';
import SearchPage from './pages/SearchPage';
import IndividualCamp from './pages/IndividualCamp';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import getuser from "./utils/get_user";
import React from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import Logout from './pages/Logout';
import NewCamp from './pages/NewCamp';
import fetchCamps from './utils/fetch_camps';

function App({setUser,setCamps}) {

  React.useEffect(()=>{
    if(Cookies.get('jwt-token')){
      getuser().then((data)=>{
        console.log(data);
        setUser(data);
      }).catch((e)=>{
        console.log(e);
      })
    }

    fetchCamps().then((data)=>{
      
      setCamps(data.camps);
    }).catch((e)=>{
      console.log(e);
    })
  },
  // eslint-disable-next-line 
  []);
  return (
    <Router>
  <div>
  
  
  <Switch>
  <Route exact path="/">
    <Landing/>
    </Route>

    <Route exact path="/browse">
    <SearchPage/>
    </Route>

    <Route exact path="/logout">
    <Logout/>
    </Route>

    <Route exact path="/new">
    <NewCamp/>
    </Route>

    <Route exact path="/login">
    <LoginPage/>
    </Route>

    <Route exact path="/signup">
    <SignUp/>
    </Route>
   

    <Route
           exact
            path="/camp/:id"
            render={(props) => {
              const id = props.match.params.id;
              return <IndividualCamp id={id && id} />;
            }}
           
          />

    

       
          
          

   
   
  </Switch>
</div>
</Router>
  );
}


const mapDispatchToprops = (dispatch)=>({
  setUser:(user)=>dispatch({type:'SET_USER',user}),
  setCamps:(camps)=>dispatch({type:'SET_CAMPS',camps})
})
export default connect(null,mapDispatchToprops)(App);
