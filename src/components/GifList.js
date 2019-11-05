import React from "react";

const GifList = props => {
  console.log(props.gifList);
  return <ul>{props.gifList()}</ul>;
};

export default GifList;
