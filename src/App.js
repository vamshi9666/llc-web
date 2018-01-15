import React, { Component } from 'react';
import img from 'react-bootstrap'

import './App.css'; 
 
class Logo extends Component {
  render(){
    return(
      <img className="img col-2 img-fluid" alt="200x200" src="http://via.placeholder.com/200x200"/>
      

    );
  }
}
class PanelImage extends Component {
  render(){
    return(
      <img className="col-10 img img-responsive" alt="750x400" src="http://via.placeholder.com/950x400" />
      
    );
  }
}

 class TopContainer extends Component{
   render(){
     return(
       <div className="TopContainer img .img-fluid">
         <Logo/>
         <PanelImage/>
       </div>  
     );
   }
 }

 
 

class App extends Component {
  render() {
    return (
      <div  className="Container">
       <TopContainer className="row" />
       <h1 className="Title ">
       LITTLE LAMB CHURCH
       </h1>
      </div>
    
    );
  }
}

export default App;
