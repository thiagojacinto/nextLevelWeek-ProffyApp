import React from "react";
import styled from "styled-components";
import Input from "../Input";
import Textarea from "../Textarea";

export const FormWrapper = styled.form`
  fieldset {
    border: none;
    padding: 0 2.4rem;
  }

  fieldset + fieldset {
    margin-top: 6.4rem;
  }

  fieldsert Input + Textarea {
    margin-top: 6.4rem;
  }

  fieldset legend {
    font: 700 2.4rem "Noto Sans JP";
    color: var(--color-text-title);
    margin-bottom: 2.4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);
  }
`;

const RegisterForm: React.FC = () => {
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

        <Input name="subject" label="Subject" />
        <Input name="cost" label="Hourly course cost (BRL or R$) " />
        <Input name="whatsapp" label="WhatsApp" />
      </fieldset>
    </FormWrapper>
  );
};

export default RegisterForm;
