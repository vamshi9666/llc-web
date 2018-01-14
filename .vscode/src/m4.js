import React, { Component } from 'react';
import img from 'react-bootstrap';
import './m4.css'

class M4 extends Component{
    render(){
        return(
            <div className="img-fluid max-width:100%" >
                <img style={{marginTop:20}} className="img-fluid max-width:1250xp " alt="need to be filled , right now empty " src="http://via.placeholder.com/1250x400"/>
            </div> 
        );
    }
}

export default M4;