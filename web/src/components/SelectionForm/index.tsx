import React from "react";
import styled from "styled-components";

export const Form = styled.form`
  fieldset {
    margin: 0;
    padding: 0;
    border: 0;
  }

  label {
    color: var(--color-text-in-primary);
  }

  .input-block {
    position: relative;
  }

  .input-block label {
    font-size: 1.6rem;
  }

  .input-block input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background-color: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem "Noto Sans JP";
    box-shadow: 0px 2px 3px var(--color-primary-darker);
  }

  .input-block:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: "";
    background-color: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
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
      <fieldset className="input-block">
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" id="subject" />
      </fieldset>

      <fieldset className="input-block">
        <label htmlFor="week_day">Weekday</label>
        <input type="text" name="week_day" id="week_day" />
      </fieldset>

      <fieldset className="input-block">
        <label htmlFor="time">Time</label>
        <input type="text" name="time" id="time" />
      </fieldset>
    </Form>
  );
};

export default SelectionForm;
