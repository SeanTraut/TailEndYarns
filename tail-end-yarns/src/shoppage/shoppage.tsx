import React from 'react';
import { MainHeader, Banner, MainFooter, SizeWrapper } from '../shared';

interface ShopPageProps{}
export function ShopPage(props:ShopPageProps){
  return(
    <div className="ShopPage">
      <MainHeader />
      <Banner />
      <SizeWrapper>
        <h1 className="shop-title">Shop Page</h1>
      </SizeWrapper>
      <MainFooter />
    </div>
  );
}