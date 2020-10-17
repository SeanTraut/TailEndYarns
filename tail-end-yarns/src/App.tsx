import React from 'react';
import './App.scss';
import { Product, Category, db } from './data';
import { HomePage } from './homepage/homepage';
import { ShopPage } from './shoppage/shoppage';
import { AboutPage } from './aboutpage/aboutpage';
import { ContactPage } from './contactpage/contactpage';

export let app:App | undefined = undefined;

declare global{
  namespace JSX {
    interface IntrinsicElements {
      [key:string]: any
    }
  }
}

interface AppState{
  page: string;
  product: Product;
  category: Category;
}
class App extends React.Component<{}>{
  state: AppState = {
    page: "contact",
    product: db.products[0],
    category: db.categories[0]
  };
  
  hash_changed = () => {
    let url = window.location.hash.slice(1);
    console.log(url);

    let [page, index] = url.split("/");
    
    if(!page) return;

    let new_state = {...this.state, page: page};

    if(page === "product"){
      if(isNaN(+index)) return;
      new_state.product = db.products[+index];
    }else if(page === "category"){
      if(isNaN(+index)) return;
      new_state.category = db.categories[+index];
    }

    this.setState(new_state);
  }

  componentDidMount(){
    window.addEventListener("hashchange", this.hash_changed);
    this.hash_changed();

    app = this;
  }

  render(){
    let content;
    if(this.state.page === "home"){
      content = <HomePage />;
    }else if(this.state.page === "about"){
      content = <AboutPage />;
    }else if(this.state.page === "shop"){
      content = <ShopPage />;
    }else if(this.state.page === "contact"){
      content = <ContactPage />;
    }else{
      content = <div>404: Page Not Found</div>
    }

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;
