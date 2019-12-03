import React from 'react';
import './MainDisplay.css';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,CardColumns } from 'reactstrap';


function MainDisplay(props) {
  let image = props.album.map((alb)=>{
    return (
      <Card className="card">
        <CardImg src={alb.albumPhoto} alt="Card image cap"/>
        <CardText>Last updated 3 mins ago</CardText>
        </Card>
        )
 })
  return (
      <div className="card-deck">{image}</div>  
  );
}

export default MainDisplay;
