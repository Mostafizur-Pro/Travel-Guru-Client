import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const AddService = () => {
  useTitle("ServiceDetails");
  // service_Id, title, img, price, rating, description
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const img = form.photo.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const service = {
      title,
      img,
      price,
      rating,
      description,
    };
    console.log(service);
  };
  return (
    <div className="  rounded-secondary">
      <div className="hero-content  flex-col ">
        <form
          onSubmit={handleSubmit}
          className="card flex-shrink-0  w-full max-w-xl shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl font-bold text-secondary">Add Service</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-secondary">Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title name"
                className="input input-bordered input-secondary"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-secondary">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photoURL"
                className="input input-bordered input-secondary"
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-secondary">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="price"
                  className="input input-bordered input-secondary "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-secondary">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="rating"
                  className="input input-bordered bg-inherit input-secondary"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-secondary">Description</span>
              </label>
              <textarea
                type="text"
                name="description"
                placeholder="description"
                className="textarea textarea-bordered bg-inherit textarea-secondary"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-secondary bg-secondary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
