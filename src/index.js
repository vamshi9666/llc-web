import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import M2 from'./m2';
import M3 from'./m3';
import M4 from './m4';
import App from './App';
import Map from'./map';
import People from './people';

import registerServiceWorker from './registerServiceWorker';

class APP extends Component{
    render(){
        return(
            <div className="Container img-fluid " >
                <App className="img-fluid"  />
                 <M2 className="img-fluid" />
                 <M3 className="img-fluid" />
                 <M4 className="img-fluid"/>
                 <Map className="img-fluid" />
                 <People className="img-fluid" />
                 
            </div> 

        );
    }
}

ReactDOM.render(
  <APP/> 
, document.getElementById('root'));
registerServiceWorker();
