import React from 'react';
import './MainDisplay.css';
import energy from './images/energy.jpg';
import clearday from './images/clearday.jpg';
import funkyelement from './images/funkyelement.jpg';
import goinghigher from './images/goinghigher.jpg';
import popdance from './images/popdance.jpg';
import sweet from './images/sweet.jpg';
import ukulele from './images/ukulele.jpg';

function MainDisplay(props) {
  console.log(props.album);
  return (
    
    <div className="mainDisplay container">
      
        {/* <div className="row px-4"> 
          <img className="imageDisplay col-md-4" src={this.props.album.albumPhoto}></img>
         <img className="imageDisplay col-md-4" src={clearday}></img>
          <img className="imageDisplay col-md-4" src={funkyelement}></img>
          <img className="imageDisplay col-md-4" src={goinghigher}></img>
        </div>
        <div className="row px-4"> 

          <img className="imageDisplay col-md-4" src={popdance}></img>
          <img className="imageDisplay col-md-4" src={sweet}></img>
          <img className="imageDisplay col-md-4" src={ukulele}></img>

      </div> */}
      <img src={energy}></img>
    <img src={props.album[0].albumPhoto}></img>

    </div>
  );
}

export default MainDisplay;
