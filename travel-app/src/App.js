import React, { useState, useEffect } from 'react';
import CountriesList from './CountriesList';
import CountriesDetails from './CountriesDetails';
import About from './About';
import Home from "./Home";
import Form from './Form';
import Contact from './Contact';
import {  Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Title from './Title';

function App() {

  
  
  return (
    <Switch>
      <div className="App">
        <nav>
          <Route exact path="/" component={Title}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/CountriesList" component={CountriesList}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Contact" component={Contact}/>
        </nav>
      </div>
    </Switch>
  
    );
    }

export default App;
