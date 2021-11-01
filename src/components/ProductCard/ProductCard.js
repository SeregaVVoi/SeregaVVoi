import React from "react";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  return (
    <div className="ProductCard">
      <img src={product.image.url} className="ProductCard__Image" />
      <div className="ProductCard__Texts">
        <div className="ProductCard__Tag">{product.breed_group}</div>
        <div className="ProductCard__Name">{product.name}</div>
      </div>
    </div>
  );
};
