import React from "react";
import img from "../../../assets/UserPhoto/img.jpg";

const Section = () => {
  return (
    <div className="card mx-auto lg:card-side mb-10 w-4/5 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title from-bold">SAINT MARTIN </h2>
        <p>
          St. Martin's Island is a small island in the northeastern part of the
          Bay of Bengla.
        </p>
      </div>
    </div>
  );
};

export default Section;
