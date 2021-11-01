import React from "react";
import chevronLeft from "../../assets/chevron-left.png";
import "./SliderArrowPrev.css";

export const SliderArrowPrev = ({ onClick }) => {
  return (
    <div className="SliderArrowPrev" onClick={onClick}>
      <img src={chevronLeft} className="SliderArrowPrev__Image" />
    </div>
  );
};
