import React from 'react';
import ReactDOM from 'react-dom';

import App from  "./App";
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <App></App>,
  document.getElementById('root')
);


/* "predeploy": "yarn build",
"deploy": "gh-pages -d build" */