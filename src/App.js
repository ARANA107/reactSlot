import React, {Component} from 'react';
import './App.css';
import Sidebar from './sideBar/SideBar';
import MainDisplay from './MainDisplay/MainDisplay'
import Player from './Player/Player'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AlbumSongs from './albumSongs/albumSongs';
import Search from './Search/Search'
import User from './User/User'
class App extends Component {
  
constructor(props){
  super(props);
  this.state={
    play:false,
    showButton:false,
    remTime:0.00,
    currTime:0.00,
    volume:12,
    songList:[],
    shuffleSongList:[],
    currentSongId:0,
    shuffleSong:false,
    repeat:false,
    count:0,
    albumName:null,
    albumPhoto:null,
    albumSinger:null,
    display:true,
    song:require('./shared/songs/bensound-anewbeginning.mp3'),
};
}
componentDidMount() {

  this.props.history.listen((location, action) => {
    if(location.pathname === '/main'){
      this.setState({display:true})
    }
  });
  this.audio= new Audio(this.state.song);
  //console.log("this is app "+this.audio.volume);
  this.setState({volume:this.audio.volume})

  this.audio.onloadedmetadata =()=> {
    this.setState({remTime:this.audio.duration})
    this.setState({currTime:this.audio.currentTime})

};
 this.audio.addEventListener("canplay", ()=> {
    this.setState({remTime:this.audio.duration})
    });
    this.audio.addEventListener("timeupdate", ()=>{
      if(this.audio.duration) {
        this.setState({currTime: this.audio.currentTime})
      }
    });

    this.audio.addEventListener("ended", ()=>{
        this.nextSong();
    })
    //console.log(this.state.shuffleSong)
    //console.log(this.state.songList+ "THIS IS SONG LIST");
}
updateTime(time){
  this.setState({remTime:time})
}

setTime=(time)=>{
this.audio.onloadedmetadata= () => {
};
this.audio.currentTime=time;
}

setVol=(vol)=>{
 
  if(vol){
    if(vol<0){
      vol=0
    }
    if(vol>1){
      vol=1
    }
    this.audio.onloadedmetadata= () => {
    };
    this.audio.volume = vol;
  }else{
    this.audio.muted = !this.audio.muted
  }
 
}
repeatSong=()=>{

    this.setState({repeat: !this.state.repeat});

}

setAlbumDetails=(albumName,albumPhoto,albumSinger)=>{
this.setState({albumName, albumPhoto, albumSinger});

}

componentDidUpdate() {
////console.log("this is from componentDidUpdate(): "+this.state.shuffleSong)
////console.log(this.state.shuffleSongList);

}

shuffleSong=()=>{
  this.setState({shuffleSong: !this.state.shuffleSong});

   let shuffledList = [...this.state.songList];
   //let num1 = this.state.songList.map(item=>item.songId);
  //console.log(shuffledList+"-------------------------------");
   //console.log("these are ids of shuffleSong songList from state"+num1);
   shuffledList = this.shuffleArray(shuffledList);
   //let num2 = shuffledList.map(item=>item.songId);
   //console.log("this is random shuffledList: "+ num2)
   this.setState({shuffleSongList: shuffledList});

}

 shuffleArray(array) {
   //console.log("we are in shuffleAray with array: "+array)
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


nextSong=()=>{
  let nextSongId = null;
  let shuffledIds=null;

  if(this.state.repeat){
    nextSongId = this.state.currentSongId;
  }
 
  if(this.state.shuffleSong){
      shuffledIds = this.state.shuffleSongList.map((obj)=>{
      return obj.songId
    })

    //console.log("these are the IDS---------"+shuffledIds);

    this.setState({count: this.state.count+1})

    if(this.state.count>this.state.songList.length-2){
      this.setState({count:0});
    }

    if(this.state.repeat){
      nextSongId = this.state.currentSongId;
    }else{
      nextSongId = shuffledIds[this.state.count];

    }
    //console.log("THIS IS nextSongId line 141: "+nextSongId+" and count is: "+this.state.count);

    
    if(nextSongId>this.state.songList.length){
      nextSongId=shuffledIds[0];
      this.setState({currentSongId:nextSongId})
    
    }else{
      this.setState({currentSongId:nextSongId})
    }
    
    //console.log("THIS IS nextSongId:---------"+nextSongId);
    this.state.songList.forEach(item =>{
      if(item.songId === nextSongId){
        this.setState({song: require("" + item.songPath)});
       this.audio.src= require(""+item.songPath);
    
       this.audio.load();
       if(this.state.play){
        this.playSong('next');
       }
     
      }
     
    })
  } 
  else{
    if(this.state.repeat){
      nextSongId=this.state.currentSongId
    }else{
      nextSongId = this.state.currentSongId+1;

    }

    if(nextSongId>this.state.songList.length){
      nextSongId=1;
      this.setState({currentSongId:nextSongId})
    
    }else{
      this.setState({currentSongId:nextSongId})
    }
    
    //console.log("THIS IS nextSongId:---------"+nextSongId);
    this.state.songList.forEach(item =>{
      if(item.songId === nextSongId){
        this.setState({song: require("" + item.songPath)});
       this.audio.src= require(""+item.songPath);
       this.audio.load();
       if(this.state.play){
        this.playSong('next');
       }
     
      }
    })
  }
}

prevSong=()=>{
  let prevSongId = null;
  let shuffledIds=null;

  if(this.state.repeat){
    prevSongId = this.state.currentSongId;
  } else{
    prevSongId=this.state.currentSongId-1;
  }

 

  if(this.state.shuffleSong){
      shuffledIds = this.state.shuffleSongList.map((obj,index,array)=>{
      return obj.songId
   }) 

   //console.log("these are the IDS---------"+shuffledIds);
   if(this.state.count === 0){
     //console.log("this is in the count<0");
     let num = this.state.songList.length-1;
     //console.log("this is the list for num-----------------------: "+num);
     this.setState({count: num});
   }else{
    this.setState({count: this.state.count-1})
   }

   if(this.state.repeat){
    prevSongId = this.state.currentSongId;
   }else{
    prevSongId = shuffledIds[this.state.count];
    //console.log("this is current count: "+this.state.count);
   }
   //console.log("THIS IS nextSongId line 141: "+prevSongId);

   
   if(prevSongId<1){
    prevSongId=shuffledIds[this.state.songList.length-1];
     this.setState({currentSongId:prevSongId})
   
   }else{
     this.setState({currentSongId:prevSongId})
   }
   
   //console.log("THIS IS nextSongId:---------"+prevSongId);
   this.state.songList.forEach(item =>{
     if(item.songId === prevSongId){
       this.setState({song: require("" + item.songPath)});
      this.audio.src= require(""+item.songPath);
   
      this.audio.load();
      if(this.state.play){
       this.playSong('prev');
      }
    
     }
   })
 } else{
  if(prevSongId<1){
    prevSongId=this.state.songList.length;
    this.setState({currentSongId:prevSongId})
  
  }else{
    this.setState({currentSongId:prevSongId})
  }
  //console.log("THIS IS prevSongId:---------"+prevSongId);
  this.state.songList.forEach(item =>{
  if(item.songId === prevSongId){
      this.setState({song: require("" + item.songPath)});
      this.audio.src= require(""+item.songPath);
      this.audio.load();

  if(this.state.play){
      this.playSong('prev');
    
    }
 
  }
})
 }
}

playFromAlbum=(songList,path)=>{
  this.setState({songList:songList});
  let currentSongId=0;
  //let lastSongId = songList.length;
  songList.forEach((item) => {
    if(item.songPath===path){
      currentSongId=item.songId
    }
    
  })
//console.log("this is from app: "+this.state.songList+"current song id is "+currentSongId+" last song id is: "+lastSongId );
  this.setState({currentSongId:currentSongId})
   this.setState({song: require("" + path)});
   this.audio.src= require(""+path);
   this.audio.load();
   this.playSong('next');
}


 playSong=(action)=>{
   if(action==='next' || action==='prev'){
    this.setState({play:true});
    this.audio.play();
   }else{
    if(this.state.play === false){
      this.audio.play();
      this.setState({play:true});
      this.setState({showButton:true})
     }else{
      this.audio.pause();
      this.setState({play:false});
      this.setState({showButton:false})
  }
   }
  
}

setPlayList=(list)=>{
  this.setState({songList: list});
}

setDisplayOff=(value)=>{
  this.setState({display: value})
}


render(){


  return (       
    <React.Fragment>         
     <Router>
      
      <Sidebar/>
      <Player setVol={this.setVol} setTime={this.setTime} audio={this.audio} play={this.playSong} songInfo={this.state} nextSong={this.nextSong} prevSong={this.prevSong} repeatSong={this.repeatSong} shuffleSong={this.shuffleSong} albumName={this.state.albumName} albumPhoto={this.state.albumPhoto} albumSinger={this.state.albumSinger}/>  
  
      <Route path="/albumSongs/:id" render={({ location, history }) => <AlbumSongs setAlbumDetails={this.setAlbumDetails} setPlayList={this.setPlayList} location={location.pathname} playFromAlbum={this.playFromAlbum} setDisplayOff={this.setDisplayOff}/>} />
      {this.state.display ? <MainDisplay/> : null}
      <Route path="/search" render={()=><Search setDisplayOff={this.setDisplayOff}/>}/>
      <Route  path="/user" render={()=><User setDisplayOff={this.setDisplayOff}/>}/>

    </Router>
    

    </React.Fragment>  
  );
}
  
}

export default App;
