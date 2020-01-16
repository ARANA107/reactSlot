import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import {AlbumsList} from '../shared/AlbumsList';
import './albumSongs.css';


class AlbumSongs extends Component{
    constructor(props){
        super(props);
        this.state={
            AlbumsList:AlbumsList,
            albumName: "some album",
            albumPhoto: require('../images/clearday.jpg'),
            albumSinger: "Rey",
            songList: []
        }
        
    }
    
    componentDidMount () {
        const number=  Number(this.props.location[this.props.location.length-1]);
        const alb = this.state.AlbumsList.filter( album => album.id===number);
        this.setState({albumName:alb[0].albumName, albumPhoto:alb[0].albumPhoto, albumSinger:alb[0].albumSinger}, ()=>{
            this.props.setAlbumDetails(this.state.albumName,this.state.albumPhoto,this.state.albumSinger)
        });

        this.setState({ songList: alb[0].songs }, () => {
            this.props.setPlayList(this.state.songList);
          });  
          
        
      }

      imageClick(songList,item){
          //console.log("play the song with song id: "+item+" "+songList);
          this.props.playFromAlbum(songList,item.songPath);
      }


    render(){
  
       
        return(
            <div>
                <div className="text-center"><h1>Your Album</h1></div>
        
                <Row className="albumPane">
                    <Col className="albumImage">
                        <img  src={this.state.albumPhoto} alt=""></img>
                    </Col>
                    <Col className="albumDetails">
                        <Row><h3>{this.state.albumName}</h3></Row>
                        <Row>{this.state.albumSinger}</Row>
                        <Row>Songs: {this.state.songList.length}</Row>
                    </Col>
                </Row>

                <div className="tracklistContainer">
                    <ul className="tracklist">
                        {this.state.songList.map((item,id)=>{
                            return(
                                <li key={id} className='tracklistRow'>
                                    <div className='trackCount'>
                                        <img onClick={() => this.imageClick(this.state.songList,item)}className='play' alt="something" src={require('../icons/play-white.png')}/>
                                        <span className='trackNumber'>{item.songId}</span>
                                    </div>


                                    <div className='trackInfo'>
                                        <span className='trackName'>{item.songName}</span>
                                        <span className='artistName'>{item.albumSinger}</span>
                                    </div>

                                    <div className='trackOptions'>
                                        <img className='play' alt="something" src={require('../icons/more.png')}/>
                                    </div>

                                    <div className='trackDuration'>
                                        <span className='duration'>3:32</span>
                                    </div>

                                </li>)
                        })}  
                    </ul>
                </div>
   

                {this.props.albumInfo}
            
            </div>
        )
    }
}

export default AlbumSongs;