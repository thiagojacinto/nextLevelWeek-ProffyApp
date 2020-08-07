import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const InputWrapper = styled.div`
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
`;

const Input: React.FC<InputProps> = ({ label, name, ...attr }) => {
  return (
    <InputWrapper>
      <div className="input-block">
        <label htmlFor={name}>{label}</label>
        <input type="text" name={name} id={name} {...attr} />
      </div>
    </InputWrapper>
  );
};

export default Input;
