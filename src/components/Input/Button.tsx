import React, { FC } from 'react';
import styled from 'styled-components';

const Field = styled.div`
  width: 100%;
  padding: 10px;
  
  button[data-theme="primary"] {
    width: 100%;
    padding: 12px;
    background: #e30611;
    border-radius: 8px;
    border: 1px solid #e30611;
    color: #fff;
    cursor: pointer;
    outline: none;
  }
`;

interface IButtonProps {
    theme: 'primary' | 'default',
    label: string,
    submit?: boolean,
}

export const Button:FC<IButtonProps> = ({ theme, label, submit }) => {
    return (
        <Field>
            <button data-theme={theme} type={submit ? 'submit' : 'button'}>
                { label }
            </button>
        </Field>
    );
}
