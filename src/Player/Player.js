import React, {Component} from 'react';
import './Player.css';

class  Player extends Component{
    constructor(props){
        super(props);
        this.state={
            play:false,
            showButton:false
        }
       
        this.audio = new Audio(require('../songs/bensound-summer.mp3'));
        
    }

    playSong(){
        if(this.state.play === false){
            this.audio.play();
            this.setState({play:true});
            this.setState({showButton:true})
            console.log("if statement state of showButton: "+this.state.showButton);
        }else{
            this.audio.pause();
            this.setState({play:false});
            this.setState({showButton:false})
            console.log("else block statement state of showButton: "+this.state.showButton);


        }
    }
   

    render(){
    const stl ={
        display: 'none'
        
    }
    return(
        <div className="player">

<div id="nowPlayingLeft">
                    <div className="content">
                        <span className="albumLink">
                            <img src="https://i.ytimg.com/vi/rb8Y38eilRM/maxresdefault.jpg" className="albumArtwork" alt=""/>
                        </span>

                        <div className="trackInfo">

                            <span className="trackName">
                                <span>Happy Birthday</span>
                            </span>

                            <span className="artistName">
                                <span>Ash Rana</span>
                            </span>

                        </div>
                    </div>
                </div>
            <div id="nowPlayingCenter">
                <div className="content playerControls">
                    <div className="buttons">
                        <button className="controlButton shuffle" title="Shuffle button">
                            <img src={require('../icons/shuffle.png')} alt="Shuffle"/>
                        </button>

                        <button className="controlButton previous" title="Previous button">
                            <img src={require('../icons/previous.png')}  alt="Previous"/>
                        </button>

                        <button onClick={() => { this.playSong() }} className="controlButton play" title="Play button" style={{display: this.state.play ? 'none' : '' }}>
                            <img src={require('../icons/play.png')}  alt="Play"/>
                        </button>

                        <button onClick={() => { this.playSong() }} className="controlButton pause" title="Pause button"  style={{display: this.state.play ? '' : 'none' }}>
                            <img src={require('../icons/pause.png')}  alt="Pause"/>
                        </button>

                        <button className="controlButton next" title="Next button">
                            <img src={require('../icons/next.png')}  alt="Next"/>
                        </button>

                        <button className="controlButton repeat" title="Repeat button">
                            <img src={require('../icons/repeat.png')} alt="Repeat"/>
                        </button>
                    </div>


                    <div className="playbackBar">
                        <span className="progressTime current">0.00</span>
                        <div className="progressBar">
                            <div className="progressBarBg">
                                <div className="progress"></div>
                            </div>
                        </div>

                        <span className="progressTime remaining">0.00</span>
                    </div>
</div>
</div>

<div id="nowPlayingRight">
<div className="volumeBar">
    <button className="controlButton volume" title="Volume button">
        <img src={require('../icons/volume.png')} alt="Volume"/>
    </button>

    <div className="progressBar">
        <div className="progressBarBg">
            <div className="progress"></div>
        </div>
    </div>

</div>
</div>
</div>
    );
}    
    
}

export default Player;