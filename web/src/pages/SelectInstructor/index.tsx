import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import SelectionForm from "../../components/SelectionForm";
import Card from "../../components/Card";

export const InstructorSelectionPage = styled.div`
  min-width: 100vw;
  height: 100vh;

  #search-instructors {
    margin-top: 3.2rem;
  }

  #page-instructors-list {
    margin: 3.2rem auto;
    width: 90%;
  }

  @media (min-width: 700px) {
    max-width: 100vw;

    #search-instructors {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 16px;
      position: absolute;
      bottom: -50px;
    }

    #page-instructors-list main {
      padding: 3.2rem 0;
      margin: 0 auto;
      max-width: 740px;
    }
  }
`;

export const SelectInstructor: React.FC = () => {
  return (
    <InstructorSelectionPage className="container">
      <Header>
        <strong>These are the available instructors.</strong>

        <SelectionForm id="search-instructors" />
      </Header>

      <div id="page-instructors-list">
        <main>
          <Card
            name="Thiago"
            avatar="https://avatars1.githubusercontent.com/u/46906069?s=400&u=ad0bda3350551c1b06f18f9fbfa590b2b5ba1fb0&v=4"
            price="R$ 62,50"
            subject="Math"
          />
        </main>
      </div>
    </InstructorSelectionPage>
  );
};

export default SelectInstructor;
