import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div>
      {services.map((service) => (
        <Service key={service._id} service={service}></Service>
      ))}
      <div className="card-actions justify-center my-10">
        <Link to="/servicesall">
          <button className="btn btn-outline btn-secondary">
            See All <FaArrowRight />{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
