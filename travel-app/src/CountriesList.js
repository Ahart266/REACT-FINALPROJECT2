import React, { useState, useEffect } from "react";
import './CountriesList.css';
import CountriesDetails from './CountriesDetails';
import Form from './Form';
import Home from './Home';



function CountriesList() {
    const [countries, setCountries] = useState();
    const [allCountries, setAllCountries] = useState([]);

    useEffect(() => {
        allCountriesAPI();
    }, []);

    const allCountriesAPI = async () => {
        const URL = 'http://countryapi.gear.host/v1/Country/getCountries';
        const response = await fetch(URL);
        const json = await response.json();
        console.log(json)

        setAllCountries(json.Response)
    };

    const handleSubmit = async (country) => {

        const url = "http://countryapi.gear.host/v1/Country/getCountries?pName=" + country
        console.log(url)
        const res = await fetch(url);
        const json = await res.json();
        console.log(json.Response[0].Name)

        setCountries({
            Name: json.Response[0].Name,
            Alpha2Code: json.Response[0].Alpha2Code,
            CurrencyName: json.Response[0].CurrencyName,
            CurrencySymbol: json.Response[0].CurrencySymbol,
            Flag: json.Response[0].Flag

        })

    };


    if (countries === undefined) {
        return (
            <div>
                <Home />
                <div className="App">
                    <h6>CountriesList</h6>
                    <Form handleSubmit={handleSubmit} />
                </div>
            </div>
        )

    } else {
        return (
            <div>
                <Home />
                <div className="App">
                    <h6>CountriesList</h6>
                    <Form handleSubmit={handleSubmit} />
                    <div>
                        <div>
                            <h2>{countries.Name}</h2>
                            <img style={{ maxHeight: 50 + 'px', maxWidth: 50 + 'px' }} src={countries.Flag}></img>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default CountriesList;