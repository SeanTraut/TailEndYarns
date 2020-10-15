import React from 'react';
import {MainHeader} from '../shared';

interface HomePageProps{

}
export function HomePage(props:HomePageProps){
  return(
    <div className="HomePage">
      <MainHeader />
      <MainCTA />
    </div>
  );
}

interface MainCTAProps{

}
function MainCTA(props:MainCTAProps){
  return(
    <div className="MainCTA">
      <div className = "hero-image">
        <h1 className="page-title">Tail End Yarns</h1>
        <button className="CTA">Visit Our Store</button>
      </div>
    </div>
  );
}