import React, { Component } from 'react';
import img from 'react-bootstrap';
import ScroolArea from 'react-scrollbar';



class M3 extends Component {
    render(){
        return(
          <div className="x-scrooler">

       
      
            <div className="row">
              <div className="col-sm-4">
                <div className="card">
                 <img src="http://via.placeholder.com/200x200"/>
                </div>
              </div>
              <div className="col-sm-4">
              <div className="card">
                 <img src="http://via.placeholder.com/200x200"/>
                </div>

              </div>
              <div className="col-sm-4">
              <div className="card">
                 <img src="http://via.placeholder.com/200x200"/>
                </div>
              </div>
              
            </div>   
             
        </div>     


            
            
        );
    }
}

export default M3;