import React from 'react';

interface MainHeaderProps{
}
export function MainHeader(props:MainHeaderProps){
  return(
    <div className="MainHeader">
      <a className="logo-link" href="#home">
        <img src="http://placekitten.com/200/100" className="logo-img" alt="logo" />
      </a>
      <nav>
        Nav
      </nav>
    </div>
  );
}