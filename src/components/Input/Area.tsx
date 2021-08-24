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
  
  textarea {
    width: 100%;
    padding: 12px;
    margin-top: 3px;
    background: #fbfbfb;
    border: 1px solid #cecece;
    border-radius: 8px;
    resize: none;
    outline: none;
  }
`;

interface IAreaProps {
    name: string,
    value: string,
    label: string,
    required?: boolean,
    rows?: number,
}

export const Area:FC<IAreaProps> = ({ name, value, label, rows, required }) => {
    return (
        <Field>
            <label>
                { label }
                { required ? <sup> *</sup> : '' }
                <textarea name={name} rows={rows} required={required}>
                    { value }
                </textarea>
            </label>
        </Field>
    );
};