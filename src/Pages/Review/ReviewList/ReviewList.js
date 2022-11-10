import React, { useContext } from "react";
import { FaRecycle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import RevgiewEdit from "../Review/ReviewEdit.js/RevgiewEdit";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReviewList = ({ comments, handleDelete }) => {
  const notify = () => toast("Wow so easy!");
  const { user } = useContext(AuthContext);
  const { comment, email, img, price, rating, servicName, _id } = comments;

  const hanldeEdit = (event) => {
    // event.preventDefault();
    const comment = prompt("Please enter your name", "Type New Comments");
    // const form = event.target;
    const email = user?.email || "unregisteered";
    // const comment = form.text.value;
    const profileImg = user?.photoURL;
    const userName = user?.displayName;
    const currentTime = new Date();

    const message = {
      service: _id,
      servicName,
      price,
      img,
      comment,
      email,
      rating,
      profileImg,
      userName,
      currentTime,
    };

    console.log("Message", message);

    fetch(
      `https://b6a11-service-review-server-side-mostafizur-pro.vercel.app/comments/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(message),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        notify();
      });
  };
  return (
    <tr>
      <th>
        <label>
          <img className="w-48 " src={img} alt="" />
        </label>
      </th>
      {/* <th>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </th> */}
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
        <div onClick={() => hanldeEdit(_id)}>Edit</div>
      </td>
      {/* <td>
        <label for="my-modal-6" className="btn btn-secondary">
          Edit
        </label>
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg">
              Do you sure Edit this review in {servicName}
            </h3>
            <input
              type="text"
              name="comments"
              placeholder="Type new comments "
              id=""
              className="input input-bordered"
            />
            <div class="modal-action">
              <label
                onSubmit={() => hanldeEdit(_id)}
                for="my-modal-6"
                class="btn"
              >
                Yas !
              </label>
            </div>
          </div>
        </div>
      </td> */}
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
