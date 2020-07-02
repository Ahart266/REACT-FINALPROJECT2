import React from 'react';
import {Route, Link} from 'react-router-dom';
import Home from './Home';

function Title() {
    return (
        <div>
            <body>
               
            <Link to="/Home"><button>Enter</button></Link>
            <div className='title'>
           <h2> Did You Know? </h2>
           </div>
            </body>
        </div>
    )
};
export default Title;