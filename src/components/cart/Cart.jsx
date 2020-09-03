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
        // <div>
        <img src={product.image} alt="" />
        /* <div className="product-information">
            <h2 className="product-name information-el">{product.title}</h2>
            <h3 className="author information-el">By Jonas Heart</h3>
            <h3 className="value information-el">
              <b>For:</b> {product.price}
            </h3>
          </div>
        </div> */
      );
    });
  }

  render() {
    // console.log(window.location)
    // console.log(this.state);

    // console.log(
    //   this.state.productsData.filter(
    //     (productId) => productId.id === this.state.imageId
    //   )
    // );
    return (
      <main>
        <div className="product-container">{this.renderImage()}</div>
        <div className="product-information">
          <h2 className="product-name information-el">Astronaut</h2>
          <h3 className="author information-el">By Jonas Heart</h3>
          <h3 className="value information-el">For: R$ 323,30</h3>
          <p className="description information-el">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            harum, eum maxime aperiam delectus iste cupiditate explicabo officia
            dolorem quidem eveniet ab vitae voluptate suscipit consectetur est,
            ratione expedita asperiores.
          </p>
          <h4 className="size">
            Size:
            <select className="size-value" name="size-value" id="">
              <option value="0">A1</option>
              <option value="1">A2</option>
              <option value="2">A3</option>
            </select>
          </h4>
          <br />
          <h4 className="quantity">
            Quantity:
            <select className="quantity-value" name="quantity-value" id="">
              <option value="1">1 </option>
            </select>
          </h4>
          <button className="add-to-cart" type="submit">
            Add to cart
          </button>
        </div>
      </main>
    );
  }
}

export default Cart;
