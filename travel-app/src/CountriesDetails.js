import React, { useState} from 'react';
import CountriesList from './CountriesList';
import About from './About';
import Home from "./Home";
import Form from './Form';

import {  Route, Link, Switch } from 'react-router-dom';
import './App.css';


  function CountriesDetails() {
    return(
      <div>
       <p> Countries </p>
      </div>
    )
  }

export default CountriesDetails;