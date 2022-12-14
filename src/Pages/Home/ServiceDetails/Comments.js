import React, { useContext } from "react";
import useTitle from "./../../../Hooks/useTitle";
import Datasort from "react-data-sort";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { Link } from "react-router-dom";

const Comments = ({ comments, handleEdit }) => {
  const { user } = useContext(AuthContext);

  useTitle("Comments");
  // console.log(comments);
  const {
    _id,
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
            <label for="my-modal-6" className="btn btn-secondary">
              Edit
            </label>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <form class="modal modal-bottom sm:modal-middle">
              <div class="modal-box">
                <h3 class="font-bold text-lg">
                  Do you sure Edit this review in {servicName}
                </h3>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input mt-2 input-bordered input-secondary w-full max-w-xs"
                />
                <div class="modal-action">
                  <button
                    type="submit"
                    onClick={() => handleEdit(_id)}
                    for="my-modal-6"
                    class="btn"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Comments;
