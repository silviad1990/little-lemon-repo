/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "./About.css";
import img1 from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/owner1.webp";
import img2 from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/owner2.jpg";

class About extends Component {
  render() {
    return (
      <>
        <section className="about__container-left">
          <h1 className="about__title">Little Lemon</h1>
          <h3 className="about__sub-title">London</h3>
          <p className="about__text">
            Magna etiam tempor orci eu. Neque convallis a cras semper auctor
            neque vitae tempus quam. Adipiscing bibendum est ultricies integer
            quis. Nisi quis eleifend quam adipiscing vitae proin sagittis.
            Elementum sagittis vitae et leo duis ut.
          </p>
        </section>
        <section className="about__container-right">
          <img className="about__img1 img" src={img1} alt="man picture" />
          <img className="about__img2 img" src={img2} alt="woman picture" />
        </section>
      </>
    );
  }
}

export default About;
