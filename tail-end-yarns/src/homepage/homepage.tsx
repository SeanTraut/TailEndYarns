import React from 'react';
import {MainHeader, MainFooter, Gallery}  from '../shared';
import { db, Product } from "../data";

interface HomePageProps{}
export function HomePage(props:HomePageProps){
  return(
    <div className="HomePage">
      <MainHeader />
      <MainCTA />
      <Gallery title="Available Yarns">{product_elements}</Gallery>
      <MainFooter />
    </div>
  );
}

interface MainCTAProps{}
export function MainCTA(props:MainCTAProps){
  return(
    <div className="MainCTA">
      <div className = "hero-image">
        <h1 className="page-title">Tail End Yarns</h1>
        <button className="CTA">Visit Our Store</button>
      </div>
    </div>
  );
}

interface HomeProductProps{
  product: Product
}
function HomeProduct(props:HomeProductProps){
  let product = props.product;
  let source = product.pictures[0] || "http://placekitten.com/900/900";

  return(
    <div className="HomeProduct">
      <a href = {`#product/${db.products.indexOf(product)}`} className = "product">
        <product-image source={source} style={{ backgroundImage: `url(${source})` }} class="image product-home-image" />
        <product-title>{product.title || "Neon Pink"}</product-title>
        <product-price>{product.price || "$15.00"}</product-price>
        <ion-icon name="heart-half" class="favorite-heart"></ion-icon>
      </a>
    </div>
  );
}

let product_elements:JSX.Element[] = [];
for(let product of db.products){
  product_elements.push(<HomeProduct product = {product} />);
}