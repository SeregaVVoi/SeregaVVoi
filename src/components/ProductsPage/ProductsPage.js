import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductsPage.css";

export const ProductsPage = ({ products }) => {
  return (
    <div className="ProductsPage">
      <h1 className="ProductsPage__Title">Products Page</h1>
      <div className="ProductsPage__ProductsList">
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
