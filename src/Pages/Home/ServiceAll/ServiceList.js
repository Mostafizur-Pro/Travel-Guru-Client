import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceList = ({ service }) => {
  const { description, title, img, price, rating } = service;

  const ratingFuction = (
    <>
      <div className="flex justify-center text-orange-400 items-center">
        <div className="mr-2 text-black">{rating}</div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
    </>
  );
  return (
    <div className="card w-full mt-20 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{ratingFuction}</div>
          <div className="badge badge-outline">Price: {price}Tk</div>
        </div>
        <div className="card-actions justify-start">
          <Link to="/servicedetails">
            <button className="btn btn-secondary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
