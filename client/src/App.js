import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import ArtistList from "./components/ArtistList";
import Artist from "./components/Artist";


class App extends Component {
  render() {
    return (

        <Router>
      <div className="App">
        <div>
          This is our navbar
        </div>

        <h1>Tunr</h1>
          <div>
              <div><Link to="/">All Artists</Link></div>
          </div>

        <Switch>
            <Route exact path={"/"} component= {ArtistList}/>
            <Route  path={"/artist/:id"} component= {Artist}/>

        </Switch>


      </div>
        </Router>
    );
  }
}

export default App;
