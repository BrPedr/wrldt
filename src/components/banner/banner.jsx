import React from "react";

import "./banner.css";

const Banner = (props) => {
  return (
    <aside>
      <img src={props.imageUrl} alt="Banner of frontpage" />
    </aside>
  );
};

export default Banner;
