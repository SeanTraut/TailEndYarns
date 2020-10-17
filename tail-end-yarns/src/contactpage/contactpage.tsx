import React from 'react';
import { MainHeader, Banner, MainFooter, SizeWrapper} from '../shared';

interface ContactPageProps{}
export function ContactPage(props:ContactPageProps){
  return(
    <div className="ContactPage">
      <MainHeader />
      <Banner />
      <SizeWrapper>
        <h1 className="contact-title">Contact Us</h1>
      </SizeWrapper>
      <MainFooter />
    </div>
  );
}