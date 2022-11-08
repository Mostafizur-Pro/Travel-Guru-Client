import React, { useEffect, useState } from "react";
import ServiceList from "./ServiceList";

const ServiceAll = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/servicesall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div className="mb-10">
      {services.map((service) => (
        <ServiceList key={service._id} service={service}></ServiceList>
      ))}
    </div>
  );
};

export default ServiceAll;
