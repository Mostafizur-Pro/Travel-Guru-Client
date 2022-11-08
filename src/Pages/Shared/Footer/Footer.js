import React from "react";
import logo from "../../../assets/logo.png";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer items-center border-t-4 border-secondary p-4 ">
      <div className="items-center grid-flow-col">
        <img src={logo} alt=""></img>
      </div>
      <p>Copyright © 2022 - All right reserved</p>
      <div className="grid-flow-col gap-4 text-2xl  md:place-self-center md:justify-self-end">
        <a href="https://www.facebook.com/mostafizur.rahman5017/">
          <FaFacebook />{" "}
        </a>
        <a href="https://github.com/Mostafizur-Pro">
          <FaGithub />{" "}
        </a>
        <a href="https://www.youtube.com/channel/UC776RNJkuAgXpD6XD-sfybg?fbclid=IwAR0tdWp6l07hjvhQkTo8trXj9vIZ-v-Gc4LmlZnmzaTzJ_4f_59OReYfkLQ">
          <FaYoutube />{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
