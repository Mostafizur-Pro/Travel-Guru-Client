import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaComment, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AuthContext } from "../../../Contexts/AuthProvider";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { _id, description, title, img, price, rating } = useLoaderData();
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
  const handleComments = (event) => {
    event.preventDefault();
    const form = event.target;
    // const comments = `${form.first.value} ${form.last.value}`;
    const email = user?.email || "unregisteered";
    const comment = form.comments.value;
    const profileImg = user?.photoURL;
    // const message = form.message.value;
    const message = {
      service: _id,
      servicName: title,
      price,
      img,
      comment,
      email,
      rating,
      profileImg,
    };
    // console.log(message);
    fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Comments successfully added");
          form.reset("");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="card w-full mt-20 mb-12 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="" />
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
            {/* <Link to={`/servicedetails/${_id}`}>
            <button className="btn btn-secondary">Details</button>
          </Link> */}
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={handleComments} className=" p-4">
          <h1 className="text-3xl mb-3 flex  justify-start items-center">
            {" "}
            <FaComment /> <span className="p-5">Comments</span>
          </h1>
          <div className="input flex  bg-base-100">
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn mr-5  btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="" />
                </div>
              </label>
            </div>
            <div className="flex-none gap-2">
              <input
                type="text"
                name="comments"
                placeholder="Type here"
                className="input text-3xl  input-bordered input-secondary w-full max-w-xs"
              />
            </div>
            <input
              type="submit"
              value="Post"
              className="btn ml-5 btn-secondary"
            />
          </div>
          <div className="ml-24 my-2">
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                checked
              />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
