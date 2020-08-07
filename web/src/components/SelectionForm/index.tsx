import React from "react";
import styled from "styled-components";
import Input from "../Input";
import Select from "../Select";

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
      <Select
        name="subject"
        label="Subject"
        options={[
          { value: "Art", label: "Art" },
          { value: "Math", label: "Math" },
          { value: "Chemestry", label: "Chemestry" },
          { value: "Portuguese", label: "Portuguese" },
          { value: "English", label: "English" },
          { value: "Physics", label: "Physics" },
        ]}
      />
      <Select
        name="week_day"
        label="Week day"
        options={[
          { value: "0", label: "Sunday" },
          { value: "1", label: "Monday" },
          { value: "2", label: "Tuesday" },
          { value: "3", label: "Wednesday" },
          { value: "4", label: "Thursday" },
          { value: "5", label: "Friday" },
          { value: "6", label: "Saturday" },
        ]}
      />
      <Input type="time" name="time" label="Time" />
    </Form>
  );
};

export default SelectionForm;
