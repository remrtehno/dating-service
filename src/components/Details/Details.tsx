import React, { FC } from 'react';

import { IUser } from '../../store/users/types';
import * as S from './Details.styled';
import LikeIcon from "../../assets/icons/LikeIcon";
import MessageIcon from "../../assets/icons/MessageIcon";
import RefreshIcon from "../../assets/icons/RefreshIcon";
import DislikeIcon from "../../assets/icons/DislikeIcon";


interface IDetailsProps {
    user: IUser | undefined
}

const Details:FC<IDetailsProps> = ({ user }) => {

    return (
        <S.Wrap>
            <S.Name>
                <span>{ user?.name },  {user?.age}</span>
                <span>{ user?.city }</span>
            </S.Name>
            <S.Bio>{ user?.greeting }</S.Bio>
            <S.Actions>
                <S.Button>
                    <DislikeIcon />
                </S.Button>
                <S.Button>
                    <RefreshIcon />
                </S.Button>
                <S.Button>
                    <MessageIcon />
                </S.Button>
                <S.Button>
                    <LikeIcon />
                </S.Button>
            </S.Actions>
        </S.Wrap>
    );
}

export default Details;