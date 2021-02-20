import React from "react";

function Meme({ url, name }) {
  return (
    <div className="meme">
      <img src={url} alt="" />
      <pre>{name}</pre>
    </div>
  );
}

export default Meme;
