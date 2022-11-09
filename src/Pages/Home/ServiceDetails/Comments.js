import React from "react";
import useTitle from "./../../../Hooks/useTitle";
import Datasort from "react-data-sort";

const Comments = ({ comments }) => {
  useTitle("Comments");
  // console.log(comments);
  const {
    comment,
    email,
    userName,
    price,
    rating,
    servicName,
    service,
    profileImg,
    currentTime,
  } = comments;

  return (
    <div className="flex justify-center items-center bg-base-100 shadow-xl mb-10">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost  avatar">
          <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={profileImg} alt="" />
          </div>
        </label>
      </div>
      <div className="card w-full  ">
        <div className="card-body">
          <h2 className="text-gray-400 card-title">{userName}</h2>
          {/* <h2 className="card-title">Date</h2> */}
          <p>
            {" "}
            <span className="text-2xl"> {comment}</span>
          </p>
          <p> {currentTime}</p>

          {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Edit</button>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Comments;
