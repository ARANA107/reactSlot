import React, {Component} from 'react';
import './App.css';
import Sidebar from './sideBar/SideBar';
import MainDisplay from './MainDisplay/MainDisplay'
import Player from './Player/Player'
import {AlbumsList} from './shared/AlbumsList';
import Login from './loginReg/login';
import Register from './loginReg/register';

class App extends Component {
constructor(props){
  super(props);
  this.state={
    AlbumsList:AlbumsList
  }
}

render(){
  return (
    <div>
    <div className="rowC">
      <Sidebar/>
      <MainDisplay album={this.state.AlbumsList}/>
    </div>
    <Player />
    {/* <Login/>
    <Register/> */}
    </div>
  );
}
  
}

export default App;
