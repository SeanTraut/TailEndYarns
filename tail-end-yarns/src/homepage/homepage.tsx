import React from 'react';
import {MainHeader} from '../shared';

interface HomePageProps{

}
export function HomePage(props:HomePageProps){
  return(
    <div className="HomePage">
      <MainHeader />
    </div>
  );
}