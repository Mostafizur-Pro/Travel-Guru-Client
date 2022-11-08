import React from "react";

const Blog = () => {
  return (
    <div className="my-10">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-t-lg"
      >
        <div className="collapse-title text-xl bg-sky-200 font-medium">
          Difference between SQL and NoSQL
        </div>
        <div className="collapse-content bg-sky-100">
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
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 "
      >
        <div className="collapse-title text-xl  bg-orange-200 font-medium">
          What is JWT, and how does it work?
        </div>
        <div className="collapse-content  bg-orange-100">
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
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 "
      >
        <div className="collapse-title text-xl  bg-lime-200 font-medium">
          What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content  bg-lime-100">
          <p>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-b-lg"
      >
        <div className="collapse-title text-xl bg-violet-200 font-medium">
          How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content bg-violet-100">
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
