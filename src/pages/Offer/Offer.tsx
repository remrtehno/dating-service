import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getOffer } from '../../store/offer/actions';
import { RootState } from '../../store';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import * as S from './Offer.styled';


const Offer = () => {
    const dispatch = useDispatch();
    const { isLoading, content, error } = useSelector((state:RootState) => state.offer);

    useEffect(() => {
        dispatch(getOffer('1'));
    }, [dispatch]);

    if (isLoading) return <Loader />;
    if (error) return <Error message="Sorry, something gone wrong" />

    return (
        <S.Wrap>
            <S.Content dangerouslySetInnerHTML={{ __html: content }}/>
        </S.Wrap>
    );
}

export default Offer;