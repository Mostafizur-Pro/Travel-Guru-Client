import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name, photo);

    // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
    //   setPasswordError("Please provide at least two uppercase");
    //   return;
    // }
    // if (password.length < 6) {
    //   setPasswordError("Please Should be at least 6 characters");
    //   return;
    // }
    // if (!/(?=.*[!@#$%^*])/.test(password)) {
    //   setPasswordError("Please add at least one special character");
    //   return;
    // }
    // setPasswordError("");

    // User Create
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setError("");
        form.reset();
        handleUpdateUserProfile(name, photo);

        alert("Verify your email");
      })
      .catch((error) => console.error(error));
  };
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero min-h-screen bg-red-100  rounded-secondary bg-inherit">
      <div className="hero-content  flex-col ">
        <form
          onSubmit={handleSubmit}
          className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl font-bold text-secondary">
                Please Register Now !!!
              </h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-secondary">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full name"
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
                placeholder="photo"
                className="input input-bordered input-secondary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-secondary">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered input-secondary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-secondary">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered bg-inherit input-secondary"
                required
              />
              {/* <label className="label">
                <Link className="label-text-alt link link-hover text-secondary">
                  Forgot password?
                </Link>
              </label> */}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-secondary bg-secondary">
                Register
              </button>
            </div>
            <span>
              Already have an account?
              <Link className="text-sm text-secondary" to="/login">
                Please Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
