import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import ServiceList from "./ServiceList";
import useTitle from "./../../../Hooks/useTitle";

const ServiceAll = () => {
  useTitle("Service All");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-mostafizur-pro.vercel.app/servicesall"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="mb-10">
        {services.map((service) => (
          <ServiceList key={service._id} service={service}></ServiceList>
        ))}
      </div>
    </div>
  );
};

export default ServiceAll;
