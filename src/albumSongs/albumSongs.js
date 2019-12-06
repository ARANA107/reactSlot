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
            albumSinger: "Rey"
       
        }
        
    }

    componentDidMount () {
      const number=  Number(this.props.match.params.id);
     const alb = this.state.AlbumsList.filter( album => album.id===number)
    console.log("this is alb "+alb[0].id);
    this.setState({albumName:alb[0].albumName});
    this.setState({albumPhoto:alb[0].albumPhoto});
    this.setState({albumSinger:alb[0].albumSinger});
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
        <Row>No. of songs</Row>
    </Col>
  </Row>

   <div className="tracklistContainer">
            <ul className="tracklist">
                
               <li className='tracklistRow'>
                            <div className='trackCount'>
                            <img className='play' alt="something" src={require('../icons/play-white.png')}/>
                                <span className='trackNumber'>1</span>
                            </div>
        
        
                            <div className='trackInfo'>
                                <span className='trackName'>Song Name</span>
                                <span className='artistName'>Artist Name</span>
                            </div>
        
                            <div className='trackOptions'>
                            <img className='play' alt="something" src={require('../icons/more.png')}/>
                            </div>
        
                            <div className='trackDuration'>
                                <span className='duration'>3:32</span>
                            </div>
        
        
                </li>
                <li className='tracklistRow'>
                    <div className='trackCount'>
                        <img className='play' alt="something" src={require('../icons/play-white.png')}/>
                        <span className='trackNumber'>2</span>
                    </div>


                    <div className='trackInfo'>
                        <span className='trackName'>Song Name</span>
                        <span className='artistName'>Artist Name</span>
                    </div>

                    <div className='trackOptions'>
                    <img className='play' alt="something" src={require('../icons/more.png')}/>
                    </div>

                    <div className='trackDuration'>
                        <span className='duration'>3:32</span>
                    </div>

                </li>
                <li className='tracklistRow'>
                    <div className='trackCount'>
                        <img className='play' alt="something" src={require('../icons/play-white.png')}/>
                        <span className='trackNumber'>3</span>
                    </div>


                    <div className='trackInfo'>
                        <span className='trackName'>Song Name</span>
                        <span className='artistName'>Artist Name</span>
                    </div>

                    <div className='trackOptions'>
                    <img className='play' alt="something" src={require('../icons/more.png')}/>
                    </div>

                    <div className='trackDuration'>
                        <span className='duration'>3:32</span>
                    </div>

                </li>
            </ul>
        </div>

            {this.props.albumInfo}
            </div>
        )
    }
}

export default AlbumSongs;