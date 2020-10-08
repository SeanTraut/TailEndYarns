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
      Testing CTA
    </div>
  );
}