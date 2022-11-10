import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../Contexts/AuthProvider";
import ReviewList from "../ReviewList/ReviewList";
import useTitle from "./../../../Hooks/useTitle";

const Review = () => {
  useTitle("Review");
  const { user } = useContext(AuthContext);

  const [commentes, setComments] = useState([]);
  // console.log(commentes[0]);

  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-mostafizur-pro.vercel.app/comments?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(
        `https://b6a11-service-review-server-side-mostafizur-pro.vercel.app/comments/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = commentes.filter((comment) => comment._id !== id);
            setComments(remaining);
          }
        });
    }
  };

  return (
    <div className="overflow-x-auto w-full">
      {commentes[0] ? (
        <>
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <img
                      className="w-20 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  </label>
                </th>

                <th className="font-bold text-lg">Place name</th>
                <th className="font-bold text-lg">Comments</th>
                <th className="font-bold text-lg">Email</th>
                <th className="font-bold text-lg">Price</th>
                <th className="font-bold text-lg">Rating</th>
                <th className="font-bold text-lg">Edit Review</th>
                <th className="font-bold text-lg">Delete</th>
              </tr>
            </thead>
            <tbody>
              {commentes.map((comments) => (
                <ReviewList
                  key={comments._id}
                  comments={comments}
                  handleDelete={handleDelete}
                ></ReviewList>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <h1 className="text-3xl text-center my-12 font-bold">
          No Reviews ware added
        </h1>
      )}

      {/* <div>
        <hi>{user?.email}</hi>
        <h3 className="text-2xl">You have {comments.length} Comments</h3>
      </div> */}
    </div>
  );
};

export default Review;
