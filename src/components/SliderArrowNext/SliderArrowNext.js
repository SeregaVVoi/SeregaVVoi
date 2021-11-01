import React from "react";
import chevronRight from "../../assets/chevron-right.png";
import "./SliderArrowNext.css";

export const SliderArrowNext = ({ onClick }) => {
  return (
    <div className="SliderArrowNext" onClick={onClick}>
      <img src={chevronRight} className="SliderArrowNext__Image" />
    </div>
  );
};
