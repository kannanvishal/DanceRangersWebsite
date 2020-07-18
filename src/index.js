import React from 'react';
import ReactDOM from 'react-dom';

import App from  "./App";
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <App></App>,
  document.getElementById('root')
);

/* Deploy Setup
npm uninstall gh-pages
npm install --save gh-pages
yarn add gh-pages
create repository in Git hub
git add .
git commit -m "First Commit."
git remote rm origin
git remote add origin https://github.com/kannanvishal/DanceRangersWebsite.git - url in github code page
git push -u origin master
add Homepage in package.json paste the url in github settings->branch master - //"homepage": "https://kannanvishal.github.io/DanceRangersWebsite/",
add the below comment in script
"predeploy": "yarn build",
"deploy": "gh-pages -d build"
git add .
git commit -m "Add GitHub Pages Config."
git config --global credential.helper wincred
yarn run deploy 
*/