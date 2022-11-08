import React from "react";
import { FaRecycle } from "react-icons/fa";

const ReviewList = ({ comments, handleDelete }) => {
  const { comment, email, img, price, rating, servicName, service, _id } =
    comments;
  return (
    <tr>
      <th>
        <label>
          <img className="w-48 " src={img} alt="" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          {/* <div className="avatar">
            <div className="rounded w-24 h-24">
              {orderService?.img && (
                <img
                  src={orderService.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div> */}
          <div>
            <div className="font-bold">{servicName}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="font-bold">{comment}</span>
      </td>
      <td>{email}</td>
      <td>${price}</td>
      <td>{rating} star</td>
      <td>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-ghost text-2xl"
          >
            <FaRecycle />
          </button>
        </label>
      </td>
    </tr>
  );
};

export default ReviewList;
