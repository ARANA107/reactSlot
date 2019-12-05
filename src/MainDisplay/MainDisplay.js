import React,{Component} from 'react';
import './MainDisplay.css';
import { Card, CardImg, CardText } from 'reactstrap';
import AlbumSongs from '../albumSongs/albumSongs';


class MainDisplay extends Component{
  constructor(props){
    super(props);
    this.state={

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
//   let image = this.props.album.map((alb)=>{
//     return (
//       <Card key={alb.id}  className="card">
//         <CardImg  onClick={() => this.sendInfo(alb)} src={alb.albumPhoto} alt="Card image cap"/>
//         <CardText>{alb.albumName}</CardText>
//       </Card>
//         )
//  })
  return (
    <div className="hello">
{/* <h1 className="text-center">Music You Might Like!</h1>
<div className="card-deck">{image}</div>   */}

<AlbumSongs albumName={this.state.albumName} albumPhoto={this.state.albumPhoto} albumSinger={this.state.albumSinger}/>
    </div>
  );
 }
}

export default MainDisplay;
