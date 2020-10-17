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
        <footer-column class="link-column">
          <h1 className="column-header quick-links">Quick Links</h1>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </footer-column>
        <footer-column class="misc-column">
        <h1 className="column-header misc-header">Blurb</h1>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma
        </footer-column>
        <footer-column>
          <h1 className="column-header email-header">Mailing List</h1>
          <input className="first-name" placeholder="First Name"></input>
          <input className="last-name" placeholder="Last Name"></input>
          <input className="email" placeholder="Email Address"></input>
        </footer-column>
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