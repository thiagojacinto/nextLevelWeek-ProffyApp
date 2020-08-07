import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Input";
import Textarea from "../Textarea";
import Select from "../Select";

export const FormWrapper = styled.form`
  fieldset {
    border: none;
    padding: 0 2.4rem;
  }

  fieldset + fieldset {
    margin-top: 6.4rem;
  }

  fieldset div + div {
    margin-top: 2.4rem;
  }

  fieldset legend {
    font: 700 2.4rem "Noto Sans JP";
    color: var(--color-text-title);
    margin-bottom: 2.4rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);
  }

  fieldset legend button {
    background: none;
    border: 0;
    color: var(--color-primary);
    font: 700 2.6rem "Noto Sans JP";
    cursor: pointer;
    transition: color 0.3s;
  }

  fieldset legend button:hover {
    color: var(--color-primary-dark);
  }

  @media (min-width: 700px) {
    .schedule-item {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      column-gap: 1.6rem;
    }
    .schedule-item div + div {
      margin-top: 0;
    }
  }
`;

const RegisterForm: React.FC = () => {
  let [scheduleItems, setScheduleItems] = useState([
    { from: "08:00", to: "10:00", week_day: 0 },
  ]);

  const addNewScheduleItem = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const initialScheduleItem = {
      week_day: 0,
      from: "",
      to: "",
    };
    setScheduleItems([...scheduleItems, initialScheduleItem]);
  };

  return (
    <FormWrapper>
      <fieldset>
        <legend>Your information</legend>

        <Input name="name" label="Name" />
        <Input name="avatar" label="Profile picture" />
        <Input name="whatsapp" label="WhatsApp" />
        <Textarea name="bio" label="Bio" />
      </fieldset>

      <fieldset>
        <legend>Course details</legend>

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
        <Input name="cost" label="Hourly course cost (BRL or R$) " />
        <Input name="whatsapp" label="WhatsApp" />
      </fieldset>

      <fieldset>
        <legend>
          Scheduling
          <button onClick={(event) => addNewScheduleItem(event)}>+ add</button>
        </legend>

        {scheduleItems.map((item, index) => {
          return (
            <div key={index} className="schedule-item">
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
              <Input name="from" label="From" type="time" />
              <Input name="to" label="To" type="time" />
            </div>
          );
        })}
      </fieldset>
    </FormWrapper>
  );
};

export default RegisterForm;
