import React from 'react';
import {MainHeader, MainFooter, Gallery}  from '../shared';
import { db } from "../data";

interface HomePageProps{}
export function HomePage(props:HomePageProps){
  return(
    <div className="HomePage">
      <MainHeader />
      <MainCTA />
      <Gallery />
      <MainFooter />
    </div>
  );
}

interface MainCTAProps{}
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