import React from "react";
import Slider from "react-slick";
import { ProductCard } from "../ProductCard/ProductCard";
import { SliderArrowPrev } from "../SliderArrowPrev/SliderArrowPrev";
import { SliderArrowNext } from "../SliderArrowNext/SliderArrowNext";
import "./HomePage.css";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <SliderArrowPrev />,
  nextArrow: <SliderArrowNext />
};

export const HomePage = ({ products }) => {
  return (
    <div className="HomePage">
      <h1 className="HomePage__Title">Home Page</h1>
      <Slider {...sliderSettings}>
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Slider>
    </div>
  );
};
