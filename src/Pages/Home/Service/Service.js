import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { description, title, img, price, rating } = service;
  return (
    <div>
      <div className="card card-side bg-base-100 mb-5 shadow-xl">
        <figure>
          <img className="ml-20 w-96" src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-secondary">{title}</h2>
          <p>
            {description.slice(0, 250) + "..."}{" "}
            <Link to="/servicedetails" className="text-red-400">
              Read More
            </Link>{" "}
          </p>
          <div className="">
            <div className="card-actions  justify-start">
              <div className="flex justify-center text-orange-400 items-center">
                <div className="mr-2 text-black">{rating}</div>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <div>Price: {price} TK</div>
            </div>

            <div className="card-actions justify-end">
              <Link to="/servicedetails">
                <button className="btn btn-secondary">Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
