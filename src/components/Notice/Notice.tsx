import React, { FC } from 'react';
import * as S from './Notice.styled';

interface INoticeProps {
    title: string,
    message?: string,
}

const Notice:FC<INoticeProps> = ({ title, message }) => {
    return (
        <S.Wrap>
            <h3>{ title }</h3>
            <p>{ message }</p>
        </S.Wrap>
    );
}

export default Notice;