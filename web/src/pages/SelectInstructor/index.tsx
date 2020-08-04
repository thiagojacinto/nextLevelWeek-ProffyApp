import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import Header from "../../components/Header";

export const InstructorSelectionPage = styled.div`
  min-width: 100vw;
  height: 100vh;
`;

export const SelectInstructor: React.FC = () => {
  return (
    <InstructorSelectionPage className="container">
      <Header>
        <strong>These are the available instructors.</strong>
      </Header>
    </InstructorSelectionPage>
  );
};

export default SelectInstructor;
