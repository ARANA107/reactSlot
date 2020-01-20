import React from 'react';
import './SideBar.css';
import {Link} from 'react-router-dom';

function SideBar() {
  return (
    <div className="sideMain">
      <nav className="navBar">
          <div className="logo">
            <img src={require("../icons/logo.png")} alt="logo"/>
          </div>

        <div className="group">
          <div className="navItem">
            <div className="navItemLink"> <Link to={`/Search`}>Search</Link>
              <img src={require("../icons/search.png")} className="icon" alt="Search"/>
            </div>
          </div>
        </div>
        
        <div className="group">
          <div className="navItem">
            <div className="navItemLink"> <Link to={`/user`}>Log Out</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  

  );
}

export default SideBar;
