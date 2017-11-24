import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const IS_RTL = true
if (IS_RTL) {
    document.body.parentElement.dir = 'rtl'
} else {
    document.body.parentElement.dir = 'ltr'
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
