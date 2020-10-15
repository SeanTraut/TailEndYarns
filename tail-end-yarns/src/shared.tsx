import React from 'react';

interface MainHeaderProps{}
export function MainHeader(props:MainHeaderProps){
  return(
    <div className="MainHeader">
      <a className="logo-link" href="#home">
        <img src="https://picsum.photos/200/100" className="logo-img" alt="logo" />
      </a>
      <spacer />
      <ul className="nav-list">
        <li className="nav-li"><a className="nav-text" href="#home">Home</a></li>
        <li className="nav-li"><a className="nav-text" href="">Shop</a></li>
        <li className="nav-li"><a className="nav-text" href="#about">About</a></li>
        <li className="nav-li"><a className="nav-text" href="#contact">Contact Us</a></li>
      </ul>
    </div>
  );
}

interface MainFooterProps{}
export function MainFooter(props:MainFooterProps){
  return(
    <div className="MainFooter">
      <SizeWrapper>
        Footer Using CSS Grid
      </SizeWrapper>
    </div>
  );
}

interface SizeWrapperProps{
  children: any
}
export function SizeWrapper(props:SizeWrapperProps){
  return(
    <div className="SizeWrapper">
      <content-wrapper>
        {props.children}
      </content-wrapper>
    </div>
  );
}

interface GalleryProps{
  children: JSX.Element | JSX.Element[];
  title?: string;
}
export function Gallery(props:GalleryProps){
  return(
    <div className="Gallery">
      <SizeWrapper>
        <gallery>
          <h1 className={`gallery-title ${props.title}`}>{props.title}</h1>
          <gallery-items>
            {props.children}
          </gallery-items>
        </gallery>
      </SizeWrapper>
    </div>
  );
}