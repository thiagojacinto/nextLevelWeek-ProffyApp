import React from "react";
import styled from "styled-components";
import Input from "../Input";

export const Form = styled.form`
  fieldset {
    margin: 0;
    padding: 0;
    border: 0;
  }

  label {
    color: var(--color-text-in-primary);
  }

  @media (min-width: 700px) {
    max-width: 100vw;

    .input-block + .input-block {
      margin-top: 0;
    }
  }
`;

type uniqueId = { id: string };

export const SelectionForm: React.FC<uniqueId> = ({ id }: uniqueId) => {
  return (
    <Form id={id}>
      <Input name="subject" label="Subject" />
      <Input name="week_day" label="Week day" />
      <Input type="time" name="time" label="Time" />
    </Form>
  );
};

export default SelectionForm;
