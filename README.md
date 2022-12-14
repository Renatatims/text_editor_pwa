# text_editor_pwa
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

  ## Description
  This is a full-stack application that meets the PWA criteria and functions both online and offline. Data is stored in the IndexedDB API.

 ![Preview](assets/screenshots/Capture1.PNG)

  ## Link to application:
  Please follow the below link to application deployed with Heroku:
  
  https://renata-jate-text-editor.herokuapp.com/

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Credits](#credits)
  
  ## Installation

  Please make sure that the following packages are included in the client's package.json:

  ````
  "devDependencies": {
    "@babel/core": "^7.15.0",
    "@babel/plugin-transform-runtime": "^7.15.0",
    "@babel/preset-env": "^7.15.0",
    "@babel/runtime": "^7.15.3",
    "babel-loader": "^8.2.2",
    "css-loader": "^6.2.0",
    "html-webpack-plugin": "^5.3.2",
    "http-server": "^0.11.1",
    "style-loader": "^3.2.1",
    "webpack": "^5.51.1",
    "webpack-cli": "^4.8.0",
    "webpack-dev-server": "^4.0.0",
    "webpack-pwa-manifest": "^4.3.0",
    "workbox-webpack-plugin": "^6.2.4"
  },
  "dependencies": {
    "code-mirror-themes": "^1.0.0",
    "idb": "^6.1.2"

 ````
And the following dependencies included in the main package.json:

````
  "dependencies": {
        "express": "^4.17.1"
    },
    "devDependencies": {
        "nodemon": "^2.0.4"
    }
}
````
You can run `npm i` to install all the dependencies and get the node-modules folder:

  ```` 
  npm i
  ````

Once everything is installed, you can run `npm run start` to start the application.

  ## Usage
  
  User can create notes or code snippets online or offline.

  ## Features
 
  1. Webpack bundle javascript files. 
  2. When run WEBPACK plugins it generates an html file, service worker and manifest file. 
  3. Uses next-gen Javascript - application still functions in the browser without errors. 
  4. indexedDB creates a database storage. 
  5. Content is saved in the text editor with indexedDB. 
  6. Content is retrieved from the indexedDB when user re-open the application.
  7. When user clicks on the install button, then the application is downloaded as an icon on the desktop. 
  8. When the web app is loaded then it has a registered service worker using workbox. 
  9. When user register a service worker then the static assets are pre-cached and loading along with the pages and static assets. 


  ## License
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  
  This application is covered by MIT license, available at:
  https://opensource.org/licenses/MIT

  ## Contributing
  Please feel free to send a pull request, the following is my GitHub account: https://github.com/Renatatims

  ## Tests
  To test the application, please run:
  ```` npm run start ````
  You can input notes or code snippets and it will be saved in IndexedDb. 
  When you reopen the application, the data persists.

  ## Questions
  If you have any questions please contact me at:
   - GitHub account:https://github.com/Renatatims
   - e-mail account: renatatims@gmail.com

  ## Credits
  - https://www.npmjs.com/package/idb 
  - https://developer.chrome.com/docs/workbox/ 
  - https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin/ 
  - https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
 
