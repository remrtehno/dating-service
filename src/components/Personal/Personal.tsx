import React, { FC } from 'react';

import * as S from './Personal.styled';

interface IPreviewProps {
    name: string
    city: string
    bio: string
    age: number
    toggle: () => void
}

const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

const Preview:FC<IPreviewProps> = ({ name, age, city, bio, toggle }) => {
    return (
        <S.Preview onClick={toggle}>
            <S.Name>
                <div>
                    { name }, { age }
                    <S.MoreInfo/>
                </div>
                <div>{ city }</div>
            </S.Name>
            <S.Bio>
                О себе: { bio }
            </S.Bio>
        </S.Preview>
    );
}

const Full = () => {

}

const Personal = () => {

    const toggle = () => console.log('Toggle');

    return (
        <S.Personal>
            <Preview name={"Name"} age={34} city={"Moscow"} bio={text} toggle={toggle}/>
        </S.Personal>
    );
}

export default Personal;