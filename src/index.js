import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var config = {
  apiKey: "AIzaSyBuMpkL0uFgp5jXMj62kq7QFSkfBHs8LtA",
  authDomain: "bill-tracker-2928e.firebaseapp.com",
  databaseURL: "https://bill-tracker-2928e.firebaseio.com",
  projectId: "bill-tracker-2928e",
  storageBucket: "bill-tracker-2928e.appspot.com",
  messagingSenderId: "357211666774"
};
firebase.initializeApp(config);

ReactDOM.render(<MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
