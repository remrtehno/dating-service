import React, { FC } from 'react';
import styled from 'styled-components';

const Field = styled.div`
  width: 100%;
  padding: 10px;
  
  label {
    font-size: 14px;
    color: #333;
    cursor: pointer;
  }
  
  sup {
    color: #e30611;
    vertical-align: top; 
    font-size: 12px
  }
  
  input {
    width: 100%;
    padding: 12px;
    margin-top: 3px;
    background: #fbfbfb;
    border: 1px solid #cecece;
    border-radius: 8px;
    outline: none;
  }
`;

interface ITextProps {
    type: string,
    name: string,
    value: string,
    label?: string
    placeholder?: string,
    required?: boolean,
}

export const Text:FC<ITextProps> = ({ type, name, value, label, placeholder, required }) => {
    return (
        <Field>
            <label>
                { label }
                { required ? <sup> *</sup> : '' }
                <input
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    required={required}
                />
            </label>
        </Field>
    );
};