import React, { Component } from 'react';
import img from 'react-bootstrap'

import './App.css'; 
 
class Logo extends Component {
  render(){
    return(
      <img className="HeadImage" alt="200x200" src="http://via.placeholder.com/200x200"/>
      

    );
  }
}
class PanelImage extends Component {
  render(){
    return(
      <img className="PanelImage" alt="750x400" src="http://via.placeholder.com/750x400" />
      
    );
  }
}

 class TopContainer extends Component{
   render(){
     return(
       <div className="TopContainer .img-fluid">
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
       <TopContainer/>
       <h1 className="Title">
       LIIILE LAMB CHURCH
       </h1>
      </div>
    
    );
  }
}

export default App;
