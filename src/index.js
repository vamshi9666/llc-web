import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import M2 from'./m2';
import M3 from'./m3';
import M4 from './m4';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class APP extends Component{
    render(){
        return(
            <div className="Container" >
                <App className="row" />
                 <M2 className="row" />
                 <M3 className="row" />
                 <M4 className="row" />
            </div> 

        );
    }
}

ReactDOM.render(
  <APP/> 
, document.getElementById('root'));
registerServiceWorker();
