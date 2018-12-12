import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";


// ReactDOM.render(
//     <GoogleMapsComponent
//         currentLatitude={40.2946271} 
//         currentLongitude={-3.6597791}
//         destinationLatitude={40.34923015}
//         destinationLongitude={-3.8284724}
//     />, document.getElementById('root'));

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();