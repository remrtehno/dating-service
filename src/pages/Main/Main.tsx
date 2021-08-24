import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { getFeed } from '../../store/users/actions';
import Feed from '../../components/Feed/Feed';
import Slider from '../../components/Slider/Slider';
import * as S from './Main.styled';
import Personal from "../../components/Personal/Personal";
import Actions from "../../components/Actions/Actions";

const Main = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.feed.users);


    useEffect(() => {
        dispatch(getFeed());
    }, [dispatch])

    return (
        <S.Wrap>
            <Feed users={users}/>
            <Slider users={users}/>
            <S.Block>
                <Personal />
                <Actions />
            </S.Block>
        </S.Wrap>
    );
}

export default Main;