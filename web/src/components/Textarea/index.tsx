import React, { TextareaHTMLAttributes } from "react";
import styled from "styled-components";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

export const TextareaWrapper = styled.div`
  .textarea-block {
    position: relative;
  }

  .textarea-block label {
    font-size: 1.6rem;
  }

  .textarea-block textarea {
    width: 100%;
    height: 16rem;
    min-height: 8rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background-color: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 1.2rem 1.6rem;
    font: 1.6rem "Noto Sans JP";
    box-shadow: 0px 2px 3px var(--color-primary-darker);

    resize: vertical;
  }

  .textarea-block:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: "";
    background-color: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 7px;
  }
`;

const Textarea: React.FC<TextareaProps> = ({ label, name, ...attr }) => {
  return (
    <TextareaWrapper>
      <div className="textarea-block">
        <label htmlFor={name}>{label}</label>
        <textarea name={name} id={name} {...attr} />
      </div>
    </TextareaWrapper>
  );
};

export default Textarea;
