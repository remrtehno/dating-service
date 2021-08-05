import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { getFeed } from '../../store/users/actions';
import Feed from '../../components/Feed/Feed';
import Slider from '../../components/Slider/Slider';
import * as Styled from './Main.styled';
import Details from "../../components/Details/Details";

const Main = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.feed.users);


    useEffect(() => {
        dispatch(getFeed());
    }, [dispatch])

    return (
        <Styled.Wrap>
            <Feed users={users}/>
            <Slider users={users}/>
            <Details user={users?.[1]} />
        </Styled.Wrap>
    );
}

export default Main;