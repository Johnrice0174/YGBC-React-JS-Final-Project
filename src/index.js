import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/games/uzoanyaquizz/styles/styles.scss';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

const firebase = require("firebase");
require("firebase/firestore");
firebase.initializeApp({
  apiKey: "AIzaSyB7bGjy_OVg0l9u3kuBoyspayWLBxpdtz0",
  authDomain: "ygbc-chat.firebaseapp.com",
  databaseURL: "https://ygbc-chat.firebaseio.com",
  projectId: "ygbc-chat",
  storageBucket: "ygbc-chat.appspot.com",
  messagingSenderId: "801529004156",
  appId: "1:801529004156:web:6d23cf6979e9bf570249f9",
  measurementId: "G-2X8JECWEXJ"
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
