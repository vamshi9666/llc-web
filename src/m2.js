import React, { Component } from 'react';
import img from 'react-bootstrap';
import './m2.css' ;

class Since extends Component{
    render(){
        return(
            <img className="col" alt="edo okati" src="http://via.placeholder.com/450x300"/>
        );
    }
}
class Mission extends Component{
    render(){
        return(
            <img className="col" alt="edo okati" src="http://via.placeholder.com/450x300"/>
        );
    }
}


class m2 extends Component{
    render(){
        return(
           <div className="row main-con">
             <Since/>
             <Mission/>

           </div>
        );
    }
}

export default  m2;
