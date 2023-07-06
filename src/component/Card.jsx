import React from "react";
import logo from "../assets/images/logo.svg";
import illutrations from "../assets/images/illustration-mockups.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Card = () => {
  return (
    <section className="master">
      <article className="left-side">
        <div className="logo">
          <img src={logo} alt="logo.svg" />
        </div>
        <div className="illustration">
          <img src={illutrations} alt="illustration-mockups.svg" />
        </div>
      </article>
      <article className="right-side">
        <h2 className="title">Build The Community Your Fans Will Love</h2>
        <p className="description">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className="btn">Register</button>
        <div className="social-icons">
          <FontAwesomeIcon className="facebook" icon={faFacebookF} />
          <FontAwesomeIcon className="twitter" icon={faTwitter} />
          <FontAwesomeIcon className="instagram" icon={faInstagram} />
        </div>
      </article>
    </section>
  );
};

export default Card;
