import React, { Component } from 'react';
import img from 'react-bootstrap';
import './m4.css'

class M4 extends Component{
    render(){
        return(
            <div className="img-fluid img max-width:100% col-12" >
                <img style={{marginTop:20}} className="img-fluid img col-12 " alt="need to be filled , right now empty " src="http://via.placeholder.com/1250x400"/>
            </div> 
        );
    }
}

export default M4;