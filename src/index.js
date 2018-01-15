import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import M2 from'./m2';
import M3 from'./m3';
import M4 from './m4';
import App from './App';
import Map from'./map';
import registerServiceWorker from './registerServiceWorker';

class APP extends Component{
    render(){
        return(
            <div className="Container" >
                <App  />
                 <M2  />
                 <M3  />
                 <M4  />
                 <Map  />
            </div> 

        );
    }
}

ReactDOM.render(
  <APP/> 
, document.getElementById('root'));
registerServiceWorker();
