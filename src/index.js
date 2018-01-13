import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from'./m2'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
   <div> 

    
    <App/>
    <App2/>
   </div> 
, document.getElementById('root'));
registerServiceWorker();
