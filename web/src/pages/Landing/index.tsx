import React from "react";
import styled from "styled-components";

import logoImage from "../../assets/images/logo.svg";
import landingImage from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import heartIcon from "../../assets/images/icons/purple-heart.svg";

export const PageLandingDiv: React.FC = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background-color: var(--color-primary);

  .logo-container {
    text-align: center;
    margin-bottom: 3.2rem;

    & img {
      height: 10rem;
    }

    & h2 {
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 4.6rem;
      margin-top: 0.8rem;
    }
  }

  .hero-image {
    max-width: 100%;
  }

  .buttons-container {
    display: flex;
    justify-content: start;
    margin: 3.2rem 0;

    & a {
      width: 30rem;
      height: 10.4rem;
      border-radius: 0.8rem;
      font: 700 2rem Noto Sans JP;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      text-decoration: none;
      color: var(--color-button-text);

      transition: background-color 0.3s;
    }

    & a:first-child {
      margin-right: 2.6rem;
    }
  }

  .buttons-container a.study {
    background-color: var(--color-primary-lighter);

    & :hover {
      background-color: var(--color-primary-light);
    }
  }

  .buttons-container a.give-classes {
    background-color: var(--color-secondary);

    & :hover {
      background-color: var(--color-secondary-dark);
    }
  }

  .total-connections {
    font-size: 1.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      margin-left: 0.8rem;
    }
  }

  @media (min-width: 1100px) {
    #page-landing-content {
      max-width: 1100px;

      display: grid;
      grid-template-rows: 350px 1fr;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-areas: "logo hero hero" "button button total";
    }

    .logo-container {
      grid-area: logo;
      align-self: center;
      margin: 0;
      text-align: left;
    }

    .hero-image {
      grid-area: hero;
      justify-self: end;
    }

    .buttons-container {
      grid-area: button;
      justify-content: flex-start;

      & h2 {
        text-align: initial;
        font-size: 3.6rem;
      }
    }

    .total-connections {
      grid-area: total;
    }
  }
`;

const Landing: React.FC = () => {
  return (
    <PageLandingDiv>
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImage} alt="Proffy's Logo" />
          <h2>
            Your online <strong>one-on-one</strong> learning platform.
          </h2>
        </div>

        <img
          src={landingImage}
          alt="Learning platform"
          className="hero-image"
        />

        <div className="buttons-container">
          <a href="#" className="study">
            <img src={studyIcon} alt="To Study" />
            Select
          </a>

          <a href="#" className="give-classes">
            <img src={giveClassesIcon} alt="To Give classes" />
            Booking
          </a>
        </div>

        <span className="total-connections">
          More than 200 connections made{" "}
          <img src={heartIcon} alt="heart for like" />
        </span>
      </div>
    </PageLandingDiv>
  );
};

export default Landing;
