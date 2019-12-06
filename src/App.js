import React, {Component} from 'react';
import './App.css';
import Sidebar from './sideBar/SideBar';
import MainDisplay from './MainDisplay/MainDisplay'
import Player from './Player/Player'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './loginReg/login';
import Register from './loginReg/register';
import AlbumSongs from './albumSongs/albumSongs';

class App extends Component {
constructor(props){
  super(props);
  this.state={
  }
}

render(){
  return (
    
     <Router>
     
      <Sidebar/>
      {/* <MainDisplay album={this.state.AlbumsList}/>  */}
    <Player /> 
    <Route path="/main" component={MainDisplay}></Route>
     <Route path="/login" component={Login}/>
     <Route path="/register" component={Register}/>
     <Route path="/albumSongs/:id" component={AlbumSongs}/>

    </Router> 
  );
}
  
}

export default App;
