// import React, { Component } from "react";
// import ContentfulClient from "../../api/contentful";

// class Products extends Component {
//   products = new ContentfulClient();
//   printProducts() {
//     console.log(
//       this.products.getProducts().then((result) => console.log(result))
//     );
//   }

//   render() {
//     return <div>{this.printProducts()}</div>;
//   }
// }

// export default Products;

import React, { Component } from "react";
import ContentfulClient from "../../api/contentful";

class Products extends Component {
  state = {
    photosUrl: [],
  };

  products = new ContentfulClient();

  printProducts() {
    console.log(
      this.products
        .getProducts()
        .then((result) => this.setState({ photosUrl: result }))
    );
  }

  componentDidMount() {
    this.printProducts();
    // this.setState({
    //   photosUrl: this.printProducts(),
    // });
  }

  render() {
    return (
      <div></div>
      // <div
      //   className="products product-wraper"
      //   style={{
      //     background: `url(${this.state.image}) no-repeat center`,
      //     backgroundSize: "cover",
      //   }}
      // >
      //   {}
      // </div>
    );
  }
}

export default Products;
