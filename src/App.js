import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Landing from './pages/Landing';
import SearchPage from './pages/SearchPage';
import IndividualCamp from './pages/IndividualCamp';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';


function App() {
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

export default App;
