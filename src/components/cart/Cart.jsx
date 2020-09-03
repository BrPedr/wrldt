import React from "react";

import "./Cart.css";

class Cart extends React.Component {
  state = {
  products: this.props.state
  }
  
  componentDidMount() {
    this.setState({products: this.state.props})
  }

  render() {
    console.log(this.state.products);
    return (
      <main>
        <div className="product-container">
          <img className="product" src="" alt="" id="" />
        </div>
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
