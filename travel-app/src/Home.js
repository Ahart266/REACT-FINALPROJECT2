import React from 'react';
import { Link } from "react-router-dom";


function Home (props) {
    console.log(props)
    return (
        <>
          <div className="Home">
            <p>
              <Link to={"/Home"} />
            </p>
          </div>
          <h2>Countries</h2>
          <p />
        </>
      );
    }

export default Home;