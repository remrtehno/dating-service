import React, { FC } from 'react';
import * as S from './Error.styled';

interface IErrorProps {
    message: string,
}

const Error:FC<IErrorProps> = ({ message }) => {
    return (
        <S.Wrap>
            <p>{ message }</p>
        </S.Wrap>
    );
}

export default Error;