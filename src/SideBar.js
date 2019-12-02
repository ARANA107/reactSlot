import React from 'react';
import logo from './logo.svg';
import { directive } from '@babel/types';
import './SideBar.css';

function SideBar() {
  return (
    <div className="sideMain">
  <div className="sideMenuItem">Search</div>
    <div className="sideMenuItem">Playlist</div>
    <div className="sideMenuItem">Ash</div>

    </div>
  

  );
}

export default SideBar;
