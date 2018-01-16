import React, { Component } from 'react';
import img from 'react-bootstrap';
import ScroolArea from 'react-scrollbar';
import './m3.css';



class M3 extends Component {
    render(){
        return(
          <div style={{marginTop:5}} className="img-fluid" >

  
      
            <div className="row img img-fluid max-width:30%">
              <div className="col-sm-4 img img-fluid max-width:30%">
                <div className="card img img-fluid max-width:30%">
                 <img className="img-fluid max-width:30%" src="http://via.placeholder.com/200x200"/>
                </div>
              </div>
              <div className="col-sm-4 img img-fluid max-width:30%">
              <div className="card img imgfluid max-width:30%">
                 <img className="img-fluid max-width:30%" src="http://via.placeholder.com/200x200"/>
                </div>

              </div>
              <div className="col-sm-4 img img-fuild max-width:30%">
              <div className="card img img-fluid max-width:30%">
                 <img className="img-fluid max-width:30%" src="http://via.placeholder.com/200x200"/>
                </div>
              </div>
             
              
            </div>   
             
        </div>     


            
            
        );
    }
}

export default M3;