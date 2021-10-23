import React from "react";

const ProductColumn = ({ SliderData, current }) => {
  return SliderData.map(
    (slide, index) =>
      index === current && <img 
      className={index === current ? 'slide active' : 'slide'}
      key={index} 
      src={slide.image} 
      alt="product" />
  );
};

export default ProductColumn;
