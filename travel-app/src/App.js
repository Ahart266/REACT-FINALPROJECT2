import React, { useState} from 'react';
import CountriesList from './CountriesList';
import CountriesDetails from './CountriesDetails';
import Home from "./Home";
import Form from './Form';
import posed, { PoseGroup } from 'react-pose';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';

function App() {
const [countriesData, setCountriesData] = useState({});

const handleSubmit = title => {
  console.log ('handleSubmit - title', title)

  
  let countriesUrl ='http://countryapi.gear.host/v1/Country/getCountries';
  fetch(countriesUrl)
  .then( res => res.json())
  .then( data => console.log('fetch - data', data))

}
  
  
  
  
  
  
  
  
  
  
  return (
    <div className="App">
      
      
      <header>
        <h1>Countries</h1>
        <Link to="/">Home</Link>
        <Link to="/">Countries List</Link>
        <Link to="/">About Us</Link>
      </header>
      <main>
      <Switch>
        <Form handleSubmit={handleSubmit}/>
        <CountriesList />
      
      </Switch>
      </main>
    </div>
  );
}

export default App;
