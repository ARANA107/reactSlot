import React, {Component} from 'react';
import { Card, CardImg, CardText,Container, Row, Col } from 'reactstrap';
import './albumSongs.css';

class AlbumSongs extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log("this is from album component "+this.props.albumInfo);
        return(
        <div>
            <div className="text-center"><h1>Your Album</h1></div>
         
  <Row className="albumPane">
    <Col className="albumImage">
        <img src={this.props.albumPhoto}/>
    </Col>
    <Col className="albumDetails">
        <Row><h3>title</h3></Row>
        <Row>By Person</Row>
        <Row>No. of songs</Row>
    </Col>
  </Row>

   <div className="tracklistContainer">
            <ul class="tracklist">
                
               <li className='tracklistRow'>
                            <div className='trackCount'>
                            <img class='play' src={require('../icons/play-white.png')}/>
                                <span className='trackNumber'>1</span>
                            </div>
        
        
                            <div className='trackInfo'>
                                <span className='trackName'>Song Name</span>
                                <span class='artistName'>Artist Name</span>
                            </div>
        
                            <div className='trackOptions'>
                            <img class='play' src={require('../icons/more.png')}/>
                            </div>
        
                            <div className='trackDuration'>
                                <span className='duration'>3:32</span>
                            </div>
        
        
                </li>
                <li class='tracklistRow'>
                    <div class='trackCount'>
                        <img class='play' src={require('../icons/play-white.png')}/>
                        <span class='trackNumber'>2</span>
                    </div>


                    <div class='trackInfo'>
                        <span class='trackName'>Song Name</span>
                        <span class='artistName'>Artist Name</span>
                    </div>

                    <div class='trackOptions'>
                    <img class='play' src={require('../icons/more.png')}/>
                    </div>

                    <div class='trackDuration'>
                        <span class='duration'>3:32</span>
                    </div>

                </li>
                <li class='tracklistRow'>
                    <div class='trackCount'>
                        <img class='play' src={require('../icons/play-white.png')}/>
                        <span class='trackNumber'>3</span>
                    </div>


                    <div class='trackInfo'>
                        <span class='trackName'>Song Name</span>
                        <span class='artistName'>Artist Name</span>
                    </div>

                    <div class='trackOptions'>
                    <img class='play' src={require('../icons/more.png')}/>
                    </div>

                    <div class='trackDuration'>
                        <span class='duration'>3:32</span>
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