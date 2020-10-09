import React from 'react';

interface MainHeaderProps{
}
export function MainHeader(props:MainHeaderProps){
  return(
    <div className="MainHeader">
      <a className="logo-link" href="#home">
        <img src="http://placekitten.com/200/100" className="logo-img" alt="logo" />
      </a>
      <spacer />
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-li"><a className="nav-text" href="#home">Home</a></li>
          <li className="nav-li"><a className="nav-text" href="">Shop</a></li>
          <li className="nav-li"><a className="nav-text" href="#about">About</a></li>
          <li className="nav-li"><a className="nav-text" href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  );
}