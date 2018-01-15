import React, { Component } from 'react';
import img from 'react-bootstrap';
import ScroolArea from 'react-scrollbar';
import './m3.css';



class M3 extends Component {
    render(){
        return(
          <div style={{marginTop:10}} >

  
      
            <div className="row img">
              <div className="col-sm-4 img">
                <div className="card img">
                 <img className="img-fluid" src="http://via.placeholder.com/200x200"/>
                </div>
              </div>
              <div className="col-sm-4 img">
              <div className="card img">
                 <img className="img-fluid" src="http://via.placeholder.com/200x200"/>
                </div>

              </div>
              <div className="col-sm-4 img">
              <div className="card img">
                 <img className="img-fluid" src="http://via.placeholder.com/200x200"/>
                </div>
              </div>
             
              
            </div>   
             
        </div>     


            
            
        );
    }
}

export default M3;