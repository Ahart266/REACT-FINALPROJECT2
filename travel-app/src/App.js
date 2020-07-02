import React, { useState, useEffect } from 'react';
import CountriesList from './CountriesList';
import CountriesDetails from './CountriesDetails';
import About from './About';
import Home from "./Home";
import Form from './Form';
import {  Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Title from './Title';

function App() {
const [countriesData, setCountriesData] = useState({});


// const RouteContainer = posed.div({
//   enter: {opacity: 1, delay: 300, beforeChildren: true },
//   exit: { opacity: 0 }
// });

const handleSubmit = title => {
  console.log ('handleSubmit - title', )




  let countriesUrl ='http://countryapi.gear.host/v1/Country/getCountries';
  fetch(countriesUrl)
  .then( res => res.json())
  .then( data => console.log('fetch - data', data))

}
  
  
  
  
  
  
   return (
    <Switch>
      <div className="App">
        <nav>
          <Route exact path="/" component={Title}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/CountriesList" component={CountriesList}/>
          <Route exact path="/About" component={About}/>
        </nav>
      </div>
    </Switch>
    /* // <div className="App">
    //   <div className="nav">
    //         <Route */
    //   render= {({ location }) => (
    //     <div id="site-container">
    //   <header>
    //     <h1>Countries</h1>
    //     </header>
    //     <div id="content-containter">
    //       <ul id="site-nav">
    //         <li>
    //     <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //     <Link to="/">Countries List</Link>
    //     </li>
    //     <li>
    //     <Link to="/">About</Link>
    //     </li>
    //     </ul>
    //     <main>
    //       {({ location }) => (
    //     <PoseGroup>
    //       <RouteContainer key={location.key}>
    //         <Switch location={location}>
    //           <Route exact path="/" component={Home} key="home" />
    //           <Route path="/CountriesList" component={CountriesList} key="Countries List" />
    //           <Route path="/About" component={About} key="About" />
    //         </Switch>
    //       </RouteContainer>
    //     </PoseGroup>
    //     )}
    //     </main>
    //     <Form handleSubmit={handleSubmit}/>
    //   </div>
    //     </div>
    //   )}
    //   />
    //   </div>
    //   </div>
    );
    }

export default App;
