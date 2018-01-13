import React, { Component } from 'react';
import img from 'react-bootstrap';
import './m2.css' ;

class Since extends Component{
    render(){
        return(
            <img src="http://via.placeholder.com/500x400"/>
        );
    }
}
class Mission extends Component{
    render(){
        return(
            <img src="http://via.placeholder.com/500x400"/>
        );
    }
}


class m2 extends Component{
    render(){
        return(
           <div className="main-con">
             <Since/>
             <Mission/>

           </div>
        );
    }
}

export default  App2;
