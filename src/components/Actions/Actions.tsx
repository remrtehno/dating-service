import React from 'react';

import LikeIcon from '../../assets/icons/LikeIcon';
import MessageIcon from '../../assets/icons/MessageIcon';
import RefreshIcon from '../../assets/icons/RefreshIcon';
import DislikeIcon from '../../assets/icons/DislikeIcon';
import * as S from './Actions.styled';

const Actions = () => {
    return (
        <S.Actions>
            <S.Button><DislikeIcon/></S.Button>
            <S.Button><RefreshIcon/></S.Button>
            <S.Button><MessageIcon/></S.Button>
            <S.Button><LikeIcon /></S.Button>
        </S.Actions>
    );
}

export default Actions;