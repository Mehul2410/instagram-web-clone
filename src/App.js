import React from 'react';
import './App.css';
import Header from "./components/Header"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home"
import Chat from './components/Chat'

function App() {
  return (
    <div className="app">
   
      <Router>
      <Header />
        <Switch>
        <Route path="/Chat">       
            <Chat />
          </Route>
          <Route path="/">       
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
