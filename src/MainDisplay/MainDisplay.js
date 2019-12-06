import React,{Component} from 'react';
import './MainDisplay.css';
import { Card, CardImg, CardText } from 'reactstrap';
import {AlbumsList} from '../shared/AlbumsList';
import {Link} from 'react-router-dom';


class MainDisplay extends Component{
  constructor(props){
    super(props);
    this.state={
      AlbumsList:AlbumsList,
        albumName:"some album",
        albumPhoto: require('../images/clearday.jpg'),
        albumSinger: "Rey"
      
    }
  }

  sendInfo(album){
    console.log(album);
    this.setState({albumName:album.albumName, albumPhoto:album.albumPhoto, albumSinger: album.albumSinger});
  }

 render(){
  let image = this.state.AlbumsList.map((alb)=>{
    return (
      <Link key={alb.id} to={`/albumSongs/${alb.id}`}>
      <Card className="card">
        <CardImg  onClick={() => this.sendInfo(alb)} src={alb.albumPhoto} alt="Card image cap"/>
        <CardText>{alb.albumName}</CardText>
      </Card>
      </Link>
        )
 })
  return (
    <div className="hello">
<h1 className="text-center">Music You Might Like!</h1>
<div className="card-deck">{image}</div>  

{/* <AlbumSongs albumName={this.state.albumName} albumPhoto={this.state.albumPhoto} albumSinger={this.state.albumSinger}/> */}
    </div>
  );
 }
}

export default MainDisplay;
