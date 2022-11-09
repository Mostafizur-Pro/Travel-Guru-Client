import React from "react";
import useTitle from "./../../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="my-10">
      <div className="card w-full border-4 border-indigo-500/50 mb-10">
        <div className="card-body items-center text-start">
          <h2 className="card-title underline mb-2">
            Difference between SQL and NoSQL
          </h2>
          <p>
            SQL is the programming language used to interface with relational
            databases.{" "}
            <strong>
              Relational databases model data as records in rows and tables with
              logical links between them
            </strong>
            . NoSQL is a class of DBMs that are non-relational and generally do
            not use SQL.
          </p>
        </div>
      </div>

      <div className="card w-full border-4 border-indigo-500/50 mb-10">
        <div className="card-body items-center text-start">
          <h2 className="card-title underline mb-2">
            What is JWT, and how does it work?
          </h2>
          <p>
            What is JWT <strong>JSON Web Token</strong>? JSON Web Token{" "}
            <strong>JWT</strong> is an open standard <strong>RFC 7519</strong>{" "}
            for securely transmitting information between parties as JSON
            object. It is compact, readable and digitally signed using a private
            key/ or a public key pair by the Identity Provider
            <strong>IdP</strong>
          </p>
        </div>
      </div>

      <div className="card w-full border-4 border-indigo-500/50 mb-10">
        <div className="card-body items-center text-start">
          <h2 className="card-title underline mb-2">
            What is the difference between javascript and NodeJS?
          </h2>
          <p>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </p>
        </div>
      </div>

      <div className="card w-full border-4 border-indigo-500/50 mb-10">
        <div className="card-body items-center text-start">
          <h2 className="card-title underline mb-2">
            How does NodeJS handle multiple requests at the same time?
          </h2>
          <p>
            How NodeJS handle multiple client requests?{" "}
            <strong>
              NodeJS receives multiple client requests and places them into
              EventQueue
            </strong>
            . NodeJS is built with the concept of event-driven architecture.
            NodeJS has its own EventLoop which is an infinite loop that receives
            requests and processes them
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
