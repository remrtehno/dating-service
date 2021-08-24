import React, { FC } from 'react';
import styled from 'styled-components';

export const Field = styled.div`
 padding: 10px;
  label {
    display: inline-block;
    position: relative;
    padding-left: 28px;
    line-height: 20px;
    cursor: pointer;
    text-align: center;
    
    :before {
      content: "";
      position: absolute;
      left: 0px;
      top: 0px;
      width: 18px;
      height: 18px;
      border: 2px solid #e30611;
      background-color: #ffffff;
      border-radius: 100%;
    }

    :after {
      left: 6px;
      top: 6px;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: #e30611;
      content: "";
      position: absolute;
      -webkit-transition: all 0.2s ease;
      -moz-transition: all 0.2s ease;
      -o-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }

    :after + input[type="radio"]:not(:checked) {
      opacity: 0;
    }

    :after + input[type="radio"]:checked {
      opacity: 1;
    }
  }

  input[type="radio"]:checked,
  input[type="radio"]:not(:checked)
  {
    position: absolute;
    left: -9999px;
  }

  input[type="radio"]:not(:checked) + label:after {
    opacity: 0;
  }

  input[type="radio"]:not(:checked) + label:before {
    border: 2px solid #58595b;
  }
`;

interface IRadioProps {
    name: string,
    label: string,
    checked: boolean,
}

export const Radio:FC<IRadioProps> = ({ name, label, checked }) => {
    return (
        <Field>
            <input type="radio" checked={checked} name={name}/>
            <label>{ label }</label>
        </Field>
    );
};