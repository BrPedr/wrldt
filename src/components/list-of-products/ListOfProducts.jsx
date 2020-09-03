import React from "react";

import ContentfulClient from "../../api/contentful";
import Products from "../products/products";
import "./ListOfProducts.css";

class ListOfProducts extends React.Component {
  state = {
    productsData: [],
  };

  products = new ContentfulClient();

  componentDidMount() {
    this.products.getProducts().then((products) => {
      this.setState({ productsData: products });
    });
  }

  render() {
    const products = this.state.productsData.map((product) => {
      return (
          <Products
            src={product.image}
            alt={product.description}
            id={product.id}
          />
      );
    });
    
    return <div className="grid-of-products">{products}</div>;
  }
}

export default ListOfProducts;
