import React from "react";

import Artists from "../../components/artists/artists.jsx";
import ListOfProducts from "../../components/list-of-products/ListOfProducts";

const Homepage = () => {
  return (
    <div>
      <div className="row-of-artists">
        <Artists />
      </div>
      <div className="main-container">
        <ListOfProducts />
      </div>
    </div>
  );
};

export default Homepage;
