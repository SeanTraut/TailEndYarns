import React from 'react';
import {MainHeader, Banner, MainFooter, SizeWrapper}  from '../shared';

interface AboutPageProps{}
export function AboutPage(props:AboutPageProps){
  return(
    <div className="AboutPage">
      <MainHeader />
      <Banner />
      <SizeWrapper>
        <about>
          <h1 className="about-title">About Us</h1>
          <img src="https://picsum.photos/500/600" alt="The Author's Portrait" className="about" />
          <p className ="about-blurb">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            <br/> <br/>
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            <br/> <br/>
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem
          </p>
        </about>
      </SizeWrapper>
      <MainFooter />
    </div>
  );
}
