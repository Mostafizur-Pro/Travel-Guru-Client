import React from "react";
import img1 from "../../../assets/Banner/1.jpg";
import img2 from "../../../assets/Banner/2.jpg";
const Banner = () => {
  return (
    <div className="my-10 relative ">
      <img
        alt=""
        src={img2}
        className="absolute  right-0  bottom-0 max-w-sm  "
      />
      <img src={img1} alt=""></img>
    </div>
  );
};

export default Banner;
