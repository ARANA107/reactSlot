import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './SideBar';
import MainDisplay from './MainDisplay'
import Player from './Player'
import {AlbumsList} from './shared/AlbumsList';
import Login from './login';
import Register from './register';

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
