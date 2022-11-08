import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [success, setSuccess] = useState("");

  const { user, signIn, setLoading, createGoogle, createGithub } =
    useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log("hiuser", user);
        form.reset();
        // setSuccess("Success login");
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginError(
          "Please confirm your email and password. Please create account"
        );
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleGoogleSignIn = (event) => {
    event.preventDefault();
    createGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        // navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  const handleGithubSignIn = (event) => {
    event.preventDefault();
    createGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
        // navigate(from, { replace: true });
        // setUser(user);
      })
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
                Please Login Now !!!
              </h1>
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
              <label className="label">
                <Link className="label-text-alt link link-hover text-secondary">
                  Forgot password?
                </Link>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-secondary bg-secondary">Login</button>
            </div>
            <Link to="/register">
              <span className="text-lg text-orange-400">Create Account</span>
            </Link>
            <div className="flex justify-center  w-full lg:flex-row">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline btn-success w-14  text-2xl rounded-full"
              >
                <FaGoogle />
              </button>
              <div className="divider lg:divider-horizontal">OR</div>
              <button
                onClick={handleGithubSignIn}
                className="btn  btn-outline w-14 text-2xl rounded-full"
              >
                <FaGithub />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
