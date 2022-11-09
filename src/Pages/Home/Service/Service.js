import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ImgsViewer from "react-images-viewer";

const Service = ({ service }) => {
  const { _id, description, title, img, price, rating } = service;
  return (
    <div>
      <div className="card lg:card-side  bg-base-100 mb-5 shadow-xl">
        <figure>
          {/* <ImgsViewer
            imgs={[{ src: { img } }, { src: { img } }]}
            currImg={this.state.currImg}
            isOpen={this.state.viewerIsOpen}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            onClose={this.closeViewer}
          /> */}
          <img className="ml-20 w-96" src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-secondary">{title}</h2>
          <p>
            {description.slice(0, 250) + "..."}{" "}
            <Link to={`/servicedetails/${_id}`} className="text-red-400">
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
              <Link to={`/servicedetails/${_id}`}>
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
