import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './store/reducer';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import '../node_modules/jquery/dist/jquery';
import '../node_modules/bootstrap/dist/js/bootstrap';
// import './shared/js/main';

import './shared/css/main.css';
import './shared/css/util.css';
import "./shared/vendor/animate/animate.css"
import "./shared/vendor/css-hamburgers/hamburgers.min.css"
// import "./shared/vendor/animsition/css/animsition.min.css"
import "./shared/vendor/animate/animate.css"
import './shared/fonts/fontawesome-5.0.8//css/fontawesome-all.min.css';
import './shared/fonts/iconic/css//material-design-iconic-font.min.css';
import "./shared/vendor/bootstrap/css/bootstrap.min.css"
import reducer from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
