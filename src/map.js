import React, { Component } from 'react';
 
class Map extends Component  {
    

     openMap(url) {
         window.open(url)
    }

    render(){
        return(
            <div className="main-con">
               <img className="img-fluid" onClick={()=>this.openMap("https://www.google.co.in/maps/place/Little+Lamb+Church/@17.331283,78.5658461,17z/data=!3m1!4b1!4m5!3m4!1s0x3bcba1f8f0c37fb1:0x1fb1387776292827!8m2!3d17.331283!4d78.5680348")} src={require('./images/map.png')  }/>
            </div>

        );
    }
    
}


export default Map;