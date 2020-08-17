import React ,{useEffect,useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import NoMatch from "./pages/NoMatch";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import { Container } from 'reactstrap';
import Game from '../src/pages/Game/Game'
import API from '../src/utils/API';
import Home from '../src/components/Home/Home'
import ReactDOM from 'react-dom'
import GameState from '../src/components/GameState/GameState'

function App() {
  const [user, setUser] = useState({
    loggedIn: false,
    user: {}
})

  useEffect(() => {
    API.isLoggedIn().then(user => {
        if (user.data.loggedIn) {
                     setUser({
                loggedIn: true,
                user: user.data.user
            });
            
        }
    },
        )
}, [])
  return (
      <Router>
        <>
          <TopNav />
          <Container>
            <Switch>
            <Route exact path="/" ><Home user={user}></Home></Route>
              <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
              <Route exact path="/login" render={(props) => <Auth {...props} action="login" />} />
              <Route exact path="/profile" ><Home user={user}></Home></Route>
              <Route exact path="/map" ><Game></Game></Route> 
              <Route exact path='/gametest' ><Game></Game></Route>
              <Route exact path='/:id' ><GameState user={user} ></GameState></Route>

              <Route component={NoMatch} />
            </Switch>
          </Container>
        
        </>
      </Router>
  );
}

export default App;
