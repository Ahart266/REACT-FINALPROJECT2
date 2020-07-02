import React from 'react';
import {Route, Link} from 'react-router-dom';
import Home from './Home';

function Title() {
    return (
        <div>
            <h5><Link to="/Home">Enter</Link></h5>
        </div>
    )
};
export default Title;