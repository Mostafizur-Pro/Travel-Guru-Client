import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaComment, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AuthContext } from "../../../Contexts/AuthProvider";
import Comments from "./Comments";
import Service from "./../Service/Service";
import useTitle from "./../../../Hooks/useTitle";

const ServiceDetails = () => {
  useTitle("ServiceDetails");
  const { user, setLoading } = useContext(AuthContext);
  const { _id, description, title, img, price, rating } = useLoaderData();
  const [commentes, setComments] = useState([]);
  // console.log(commentes);

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
    const userName = user?.displayName;
    const currentTime = new Date();

    // const message = form.message.value;
    // console.log(form);
    const message = {
      service: _id,
      servicName: title,
      price,
      img,
      comment,
      email,
      rating,
      profileImg,
      userName,
      currentTime,
    };
    console.log(message);
    fetch(
      "https://b6a11-service-review-server-side-mostafizur-pro.vercel.app/comments",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(message),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Comments successfully added");
          setLoading(true);
          form.reset("");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (event) => {
    event.preventDefault();
    console.log("edit");
  };

  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-mostafizur-pro.vercel.app/comments?service=${_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        // console.log(data);
        // setLoading(true)
      });
  }, []);

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
        {user?.email ? (
          <>
            <form onSubmit={handleComments} className=" p-4">
              <h1 className="text-3xl mb-3 flex  justify-start items-center">
                {" "}
                <FaComment /> <span className="p-5">Comments</span>
              </h1>
              <div className="input flex  items-center  bg-base-100">
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
                <div className="flex-none gap-4">
                  <div className="font-semibold text-xl">
                    {user?.displayName}
                  </div>
                  <input
                    type="text"
                    name="comments"
                    placeholder="Type here"
                    className="input text-2xl  input-bordered input-secondary "
                  />
                  <input
                    type="submit"
                    value="Post"
                    className="btn  text-xl ml-5 btn-secondary"
                  />
                </div>
              </div>
              <div className="ml-24 mt-10">
                <div className="rating mb-24">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                </div>
              </div>
            </form>
            <div className=" ">
              {commentes &&
                commentes
                  .sort((a, b) => (a.currentTime > b.currentTime ? -1 : 1))
                  .map((comments) =>
                    _id === comments.service ? (
                      <Comments
                        key={comments._id}
                        comments={comments}
                        handleEdit={handleEdit}
                      ></Comments>
                    ) : (
                      <></>
                    )
                  )}
            </div>
          </>
        ) : (
          <>
            {" "}
            <Link to="/login">
              <h3 className="text-2xl py-10 text-red-400">
                Please login to add a review
              </h3>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
