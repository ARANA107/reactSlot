import React,{Component} from 'react';
import { Card, CardImg, CardText } from 'reactstrap';
import {AlbumsList} from '../shared/AlbumsList';
import {Link} from 'react-router-dom';
import './Search.css';
import {songs} from '../shared/SongList'

class Search extends Component{
  constructor(props){
    super(props);
    
    this.state = {
        initialItems: songs,
        items: []
    }
  }
  componentDidMount(){
      this.props.setDisplayOff(false);
  }

  filterList = (event) => {
      if(event.target.value){
        let items = this.state.initialItems;
        items = items.filter((item) => {
          if(item.songName.toLowerCase().includes(event.target.value.toLowerCase()) ){
              return item.songName;
          }
        });
        this.setState({items: items});
      }else{
          this.setState({items:[]})
      }
   
  }

 
  
 render(){
  return (

<div className="searchContainer">

<h4>Search for an artist, album or song</h4>
<input type="text" className="searchInput" placeholder="Start typing..." onChange={this.filterList} ></input>
<div>IF SONGS APPEAR UNDERNEATH THIS LINE THAT MEANS THEY ARE IN ONE OF THE ALBUMS!</div>
<div>
            {
                this.state.items.map((item,idx)=> {
                    return <div key={idx}>{item.songName}</div>
                })
            }
            </div>
</div>

  );
 }
}

export default Search;
