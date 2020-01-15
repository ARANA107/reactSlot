import React from 'react';
import './SideBar.css';

function SideBar() {
  return (
    <div className="sideMain">
      <nav className="navBar">
          <a href="index.php" className="logo">
            <img src={require("../icons/logo.png")} alt="logo"/>
          </a>

        <div className="group">
          <div className="navItem">
            <a href="/" className="navItemLink">Search
              <img src={require("../icons/search.png")} className="icon" alt="Search"/>
            </a>
          </div>
        </div>
        
        <div className="group">
          <div className="navItem">
            <a href="/" className="navItemLink">Browse</a>
          </div>

          <div className="navItem">
            <a href="yourMusic.php" className="navItemLink">Your Music</a>
          </div>

          <div className="navItem">
            <a href="profile.php" className="navItemLink">Ash Rana</a>
          </div>
          </div>
      </nav>
    </div>
  

  );
}

export default SideBar;
