import React from "react";
import Banner from "../Banner/Banner";
import PersonName from "../PersonName/PersonName";
import Section from "../Section/Section";
import Services from "../Services/Services";
import useTitle from "./../../../Hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <PersonName></PersonName>
      <Section></Section>
      <Services></Services>
    </div>
  );
};

export default Home;
