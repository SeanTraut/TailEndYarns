import React from 'react';
import logo from './assets/logo.png';

interface MainHeaderProps{}
export function MainHeader(props:MainHeaderProps){
  return(
    <div className="MainHeader">
      <a className="logo-link" href="#home">
        <img src={logo} className="logo-img" alt="logo" />
      </a>
      <spacer />
      <ul className="nav-list">
        <li className="nav-li"><a className="nav-text" href="#home">Home</a></li>
        <li className="nav-li"><a className="nav-text" href="#shop">Shop</a></li>
        <li className="nav-li"><a className="nav-text" href="#about">About</a></li>
        <li className="nav-li"><a className="nav-text" href="#contact">Contact Us</a></li>
      </ul>
    </div>
  );
}

interface BannerProps{}
export function Banner(props:BannerProps){
  return(
    <div className="Banner" />
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
        <h1 className="column-header misc-header">News Blurb</h1>
          We are always working on inspiration for new colorways and would be excited to hear from you! Please let us know if you have any ideas you would like to turn into a reality.
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

export interface OptionProps{
  value: string;
  text: string;
  selected: boolean;
}
interface DropdownProps {
  class: string;
  children: any[];
  selected: string;
  onChanged: (value:string) => any;
}
interface DropdownState {
  open: boolean;
}

export class Dropdown extends React.Component<DropdownProps> {
  state: DropdownState = {
    open: false
  };

  toggle_options = () => {

    this.setState({
      open: !this.state.open
    });
  };

  select_option = (event: React.MouseEvent<HTMLOptionElement>) => {

    this.setState({
      open: false
    });

    this.props.onChanged(event.currentTarget.value);

    event.stopPropagation();
  };

  render() {
    let options = [];
    let style = `${this.props.class} ${this.state.open ? "open" : "closed"}`;
    let text = this.props.children[0] ? this.props.children[0].text : "EMPTY";

    for (let option of this.props.children) {
      if (option.value === this.props.selected) {
        text = option.text;
      }

      options.push(<option value={option.value} onClick={this.select_option}>{option.text}</option>);
    }

    return (
      <dropdown onClick={this.toggle_options} className={style}>
        <dropdown-nav>
          <current-value>{text}</current-value>
          <ion-icon name="chevron-down" />
        </dropdown-nav>
        <option-list>
          {options}
        </option-list>
      </dropdown>
    );
  }
}
