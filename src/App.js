import React, { Component } from 'react';
import img from 'react-bootstrap'

import './App.css'; 
 
class Logo extends Component {
  render(){
    return(
      <img className="img col-2 img-fluid img-circle" alt="200x200" src="http://via.placeholder.com/300x200"/>
      

    );
  }
}
class Title extends Component{
  render(){
    return(
      <h1 className="Title" >
      LITTLE LAMB CHURCH</h1>

    );
  }
}

 class TopContainer extends Component{
   render(){
     return(
       <div className="TopContainer img img-fluid ">
         <Logo className=" col-2 img-circle " />

         <Title className=" col-10" />
       </div>  
     );
   }
 }

 
 

class App extends Component {
  render() {
    return (
      <div  className="Container">
       <TopContainer className="row" />
      
      </div>
    
    );
  }
}

export default App;
