import React, { SelectHTMLAttributes } from "react";
import styled from "styled-components";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

export const SelectWrapper = styled.div`
  .select-block {
    position: relative;
  }

  .select-block label {
    font-size: 1.6rem;
  }

  .select-block select {
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

  .select-block:focus-within::after {
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

const Select: React.FC<SelectProps> = ({ label, name, options, ...attr }) => {
  return (
    <SelectWrapper>
      <div className="select-block">
        <label htmlFor={name}>{label}</label>
        <select name={name} id={name} defaultValue="" {...attr}>
          <option value="" disabled>
            - - Please select one - -
          </option>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    </SelectWrapper>
  );
};

export default Select;
