import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import RegisterForm from "../../components/RegisterForm";
import warningIcon from "../../assets/images/icons/warning.svg";

export const InstructorManagementPage = styled.div`
  width: 100vw;
  height: 100vh;

  Header {
    margin-bottom: 0;
  }

  main {
    background-color: var(--color-box-base);
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding: 3.2rem 0;
    overflow: hidden;

    box-shadow: 0px 1px 1px var(--color-primary-darker);
  }

  footer {
    padding: 4rem 2.4rem;
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 6.4rem;
  }

  footer p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);
  }

  footer p img {
    margin-right: 2rem;
  }

  footer button {
    width: 100%;
    height: 5.6rem;
    background: var(--color-secondary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;

    font: 700 1.6rem "Noto Sans JP";
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.3s;
    margin-top: 3.2rem;
  }

  footer button:hover {
    background-color: var(--color-secondary-dark);
  }

  @media (min-width: 700px) {
    max-width: 100vw;

    Header .header-content {
      margin-bottom: 0;
    }

    main fieldset {
      padding: 0 6.4rem;
    }

    footer {
      padding: 4rem 6.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    footer p {
      justify-content: space-between;
    }

    footer button {
      width: 20rem;
      margin-top: 0;
    }
  }
`;

export const InstructorManagement: React.FC = () => {
  return (
    <InstructorManagementPage>
      <Header>
        <strong>Awesome that you want to lead a course.</strong>
        <p className="description">First things first, fill in this form...</p>
      </Header>

      <main>
        <RegisterForm />
      </main>

      <footer>
        <p>
          <img src={warningIcon} alt="Important warning or alert" />
          Important: <br />
          Fill in all data fields.
        </p>
        <button type="button">Register</button>
      </footer>
    </InstructorManagementPage>
  );
};

export default InstructorManagement;
