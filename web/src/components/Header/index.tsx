import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const logoImage = require("../../assets/images/logo.svg");
const backIcon = require("../../assets/images/icons/back.svg");

export const PageHeader = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);

  .top-bar-container {
    width: 90%;
    margin: 0 auto;
    padding: 1.6rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-text-in-primary);
  }

  .top-bar-container a {
    height: 3.2rem;
    transition: opacity 0.3s;
  }

  .top-bar-container a:hover {
    opacity: 0.6;
  }

  .top-bar-container > img {
    height: 1.6rem;
  }

  .header-content {
    width: 90%;
    margin: 0 auto;
    position: relative;
    margin: 3.2rem auto;

    font: 700 3.6rem "Noto Sans JP";
    line-height: 4.8rem;
    color: var(--color-title-in-primary);
  }

  @media (min-width: 700px) {
    height: 340px;
  }

  .top-bar-container {
    max-width: 1100px;
  }

  .header-content {
    flex: 1;
    max-width: 740px;
    padding-bottom: 48px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .header-content > strong {
    max-width: 350px;
  }
`;

const Header: React.FC = ({ children = null }) => {
  return (
    <PageHeader>
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Back button icon" />
        </Link>
        <img src={logoImage} alt="Proffy logo" />
      </div>

      <div className="header-content">{children}</div>
    </PageHeader>
  );
};

export default Header;
