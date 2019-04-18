import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Mail from './Mail';

let data  = [
{
    "id":1,
    "to":"moverr@gmail.com",
    "subject":"RE: HELLO",
    "body":"Hello , Let me know if you are good",
    "type":"INBOX",
    "status":"ACTIVE",
    "datecreated":"4/17/2019" 
},
{
    "id":2,
    "to":"moverr@gmail.com",
    "subject":"RE: HELLO",
    "body":"Hello , Let me know if you are good",
    "type":"INBOX",
    "status":"ACTIVE",
    "datecreated":"4/17/2019" 
}

];

ReactDOM.render(<Mail mailbox={data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
