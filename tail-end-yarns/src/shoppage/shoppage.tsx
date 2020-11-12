import React from 'react';
import  { db, Product, Category } from '../data';
import { MainHeader, Banner, OptionProps, Dropdown,  MainFooter, SizeWrapper, Gallery } from '../shared';

interface ShopPageProps{
  category: Category
}
interface ShopPageState{
  selected: Order
}

type Order = "title-descending" | "title-ascending" | "price-descending" | "price-ascending" | "created-descending" | "created-ascending";

export class ShopPage extends React.Component<ShopPageProps>{
  state:ShopPageState = {
    selected: "title-descending"
  }

  update_selected = (value:string) => {
    this.setState({selected:value});
  }

  compare_alphabetically(a:Product, b:Product):number{
    if(a.title < b.title){
      return -1;
    }else if(a.title > b.title){
      return 1;
    }else{
      return 0;
    }
  }
  
  compare_price(a:Product, b:Product):number{
    let a_num = db.price_to_number(a.price);
    let b_num = db.price_to_number(b.price);

    return b_num - a_num;
  }

  compare_date(a:Product, b:Product):number{
    return b.date.getTime() - a.date.getTime();
  }

  sort_products(array:Product[], order:Order):Product[]{
    let sort_type = {
      "title-descending": this.compare_alphabetically,
      "title-ascending": this.compare_alphabetically,
      "price-descending": this.compare_price,
      "price-ascending": this.compare_price,
      "created-descending": this.compare_date,
      "created-ascending": this.compare_date
    }

    if(order.endsWith("-descending")){
      return array.slice().sort(sort_type[order]);
    }else{
      return array.slice().sort(sort_type[order]).reverse();
    }
  }

  render(){
    let category_sort:OptionProps[] = [
      { value: "title-descending", text: "Alphabetically, A-Z", selected: false },
      { value: "title-ascending", text: "Alphabetically, Z-A", selected: false },
      { value: "price-descending", text: "Price, high to low", selected: false },
      { value: "price-ascending", text: "Price, low to high", selected: false },
      { value: "created-descending", text: "Date, new to old", selected: false },
      { value: "created-ascending", text: "Date, old to new", selected: false }
    ];
    let selected:string = this.state.selected;
    let category:Category = this.props.category;
    let sorted_products = this.sort_products(category.product, this.state.selected);
    let product_sort_elements: JSX.Element[] = [];
  
    for (let product of sorted_products) {
      product_sort_elements.push(<ShopProduct product={product} category={category} />);
    }

    return(
      <div className="ShopPage">
        <MainHeader />
        <Banner />
          <Gallery title={category.title}>{product_sort_elements}</Gallery>
        <MainFooter />
      </div>
    );
  }
}

interface ShopProductProps{
  category: Category,
  product: Product
}

export function ShopProduct(props:ShopProductProps){
  let source = props.product.pictures[0] || "http://placekitten.com/900/900";

  return(
    <div className="ShopProduct">
      <a href = {`#product/${db.products.indexOf(props.product)}`} className = "product">
        <product-image source = {source} style = {{backgroundImage: `url(${source})`}} class = "image product-sort-image"></product-image>
        <h3 className = "shop-product">{props.product.title || "Neon Pink"} | {props.category.title}</h3>
        <div className="review">
          <div className="stars">
            <ion-icon name="star" class="full-star" />
            <ion-icon name="star" class="full-star" />
            <ion-icon name="star" class="full-star" />
            <ion-icon name="star" class="full-star" />
            <ion-icon name="star" class="full-star" />
          </div>
          <review-count>{props.product.reviewCount || "100"} reviews</review-count>
        </div>
        <product-price>{props.product.price || "Sold Out"}</product-price>
      </a>
    </div>
  );
}
