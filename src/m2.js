import React, { Component } from 'react';
import img from 'react-bootstrap';
import './m2.css' ;

class Since extends Component{
    render(){
        return(
            <img  className="col img img-fluid max-width:45% "t alt="edo okati" src="http://via.placeholder.com/550x300"/>
        );
    }
}
class Mission extends Component{
    render(){
        return(
            <img className="col img img-fluid max-width:45%" alt="edo okati" src="http://via.placeholder.com/550x300"/>
        );
    }
}


class m2 extends Component{
    render(){
        return(
           <div className="img-fuild img  row">
             <Since  />
             <Mission />

           </div>
        );
    }
}

export default  m2;
