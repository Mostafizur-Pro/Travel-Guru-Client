import React from "react";

const PersonName = () => {
  return (
    <div>
      <div className="hero bg-white-400">
        <div className="hero-content  lg:flex-row">
          <div className="text-right border-r-4  border-indigo-500 lg:text-right">
            <h3 className="text-2xl font-semibold mr-10 ">Hi, my name is</h3>
            <h1 className="text-3xl font-bold underline mr-10">
              Mostafizur Rahman
            </h1>
          </div>
          <div className="card w-full  max-w-sm ">
            <div className="card-body">
              <h3 className="text-sm font-semibold">
                "No place is boring, <br />
                if you've had a good night's sleep <br />
                and have a pocket full of unexposed film."
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonName;
