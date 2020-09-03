import React from "react";

import "./artists.css";
import dataArtists from "../../api/data";

const Artists = () => {
  return dataArtists.map((artist) => (
    <div className="container" key={artist.id}>
      <div className="artist-container">
        <img className="artists" src={artist.imgUrl} alt="artists"></img>
      </div>
      <h6 className="artist-name">{artist.name}</h6>
    </div>
  ));
};

export default Artists;
