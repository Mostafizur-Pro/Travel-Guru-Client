import React from "react";

const RevgiewEdit = ({ servicName, _id }) => {
  const hanldeEdit = (event) => {
    event.preventDefault();
    // const form = event.target;
    // const email = user?.email || "unregisteered";
    // const comment = form.comments.value;
    // const profileImg = user?.photoURL;
    // const userName = user?.displayName;
    // const currentTime = new Date();

    const message = {
      //   service: _id,
      //   servicName,
      //   price,
      //   img,
      //   comment,
      //   email,
      //   rating,
      //   profileImg,
      //   userName,
      //   currentTime,
    };
    console.log("Message", message);
  };
  return (
    <form class="modal modal-bottom sm:modal-middle">
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
          <button onSubmit={() => hanldeEdit()} for="my-modal-6" class="btn">
            Yas !
          </button>
        </div>
      </div>
    </form>
  );
};

export default RevgiewEdit;
