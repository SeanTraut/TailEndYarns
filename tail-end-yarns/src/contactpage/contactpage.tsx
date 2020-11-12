import React from 'react';
import logo from '../assets/logo.png';
import { MainHeader, Banner, MainFooter, SizeWrapper} from '../shared';

interface ContactPageProps{}
export function ContactPage(props:ContactPageProps){
  return(
    <div className="ContactPage">
      <MainHeader />
      <Banner />
      <SizeWrapper>
        <contact>
          <h1 className="contact-title">Contact Us</h1>
          <img src={logo} alt="" className="contact" />
          <p className="contact-blurb">
            You can reach us via Email, our Etsy store page, or our Instagram!
            <a href="mailto:tailendyarns@gmail.com" target="_blank" className="contact-details">tailendyarns@gmail.com</a>
            <a href="https://www.etsy.com/shop/tailendyarns" target="_blank" className="contact-details">Etsy Store</a>
            <a href="https://www.instagram.com/tailendyarns" target="_blank" className="contact-details">Instagram</a>
          </p>
        </contact>
      </SizeWrapper>
      <MainFooter />
    </div>
  );
}