import React from "react";
import useTitle from "./../../../Hooks/useTitle";

const Comments = ({ comments }) => {
  useTitle("Comments");
  console.log(comments);
  const {
    comment,
    email,
    userName,
    price,
    rating,
    servicName,
    service,
    profileImg,
  } = comments;
  return (
    <div className="flex justify-center items-center bg-base-100 bg-base-300 shadow-xl mb-10">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost  avatar">
          <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={profileImg} alt="" />
          </div>
        </label>
      </div>
      <div className="card w-full  ">
        <div className="card-body">
          <h2 className="card-title">{userName}</h2>
          <h2 className="card-title">Date</h2>
          <p>
            {" "}
            <span className="text-gray-300"></span> {comment}
          </p>
          <p> {servicName}</p>

          {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Edit</button>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Comments;
