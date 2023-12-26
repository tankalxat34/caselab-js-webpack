import React from 'react';
import "./styles.css";
// import logo1 from "./images/logo.svg";
// import logo2 from "./images/logo.png";

// import logo1 from "@images/logo.svg";
// import logo2 from "@images/logo.png";

import logo1 from "images/logo.svg";
import logo2 from "images/logo.png";

const App = (): JSX.Element => {
    console.log("OK")
    return (
        <>
            <h1>tankalxat34 | React TypeScript Webpack project</h1>
            {process.env.NODE_ENV}
            {process.env.NODE_ENV == 'development' && 'We are in dev environment'}
            {process.env.NODE_ENV == 'production' && 'We are in prod environment'}
            <br />
            <pre>{process.env.BASE_URL}</pre>
            <img src={logo1} alt="" width="400px" />
            <img src={logo2} alt="" width="900px" />
            <p>wefwef!</p>
            {process.env.EXAMPLE_TOKEN}
            <br />
            {process.env.EXAMPLE_AUTH}
            <br />
            {process.env.DB_HOST}
        </>
    )
}
export { App }
