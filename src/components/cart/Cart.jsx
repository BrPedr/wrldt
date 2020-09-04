import React from "react";

import ContentfulClient from "../../api/contentful";

import "./Cart.css";

class Cart extends React.Component {
  state = {
    imageId: window.location.pathname.substr(6),
    productsData: [],
    renderImage: [],
  };

  cart = new ContentfulClient();

  componentDidMount() {
    this.cart.getProducts().then((products) => {
      this.setState({ productsData: products });
    });
  }

  renderImage() {
    const x = this.state.productsData.filter(
      (productId) => productId.id === this.state.imageId
    );
    console.log(x);

    return x.map((product) => {
      return (
        <div>
          <div className="product-container">
            <img
              src={product.image}
              alt={product.description}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div className="product-information">
            <h2 className="product-name information-el">{product.title}</h2>
            <h3 className="value information-el">
              <b>For:</b>&nbsp; $ {product.price}
            </h3>
            <div className="description information-el">
              <h3>
                <b>Description:</b>
              </h3>
              &nbsp; {product.description}
            </div>
            <h3 className="size">
              <b>Size:</b>
              <select className="size-value" name="size-value" id="">
                <option value="0">A1</option>
                <option value="1">A2</option>
                <option value="2">A3</option>
              </select>
            </h3>
            <br />
            <h3 className="quantity">
              <b>Quantity:</b>
              <select className="quantity-value" name="quantity-value" id="">
                <option value="1">1 </option>
              </select>
            </h3>
            <button className="add-to-cart" type="submit">
              Add to cart
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.state.imageId);
    // console.log(window.location)
    // console.log(this.state);

    // console.log(
    //   this.state.productsData.filter(
    //     (productId) => productId.id === this.state.imageId
    //   )
    // );
    return <main>{this.renderImage()}</main>;
  }
}

export default Cart;
