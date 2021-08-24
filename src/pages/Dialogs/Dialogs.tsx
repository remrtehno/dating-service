import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store'
import { loadDialogs } from '../../store/dialogs/actions';
import DialogItem from '../../components/Dialog/Dialoag';
import Loader from '../../components/Loader/Loader';
import * as S from './Dialogs.styled';

const Dialogs = () => {
    const dispatch = useDispatch();
    const { dialogs, isLoading } = useSelector((state:RootState) => state.dialogs);

    useEffect(() => {
        dispatch(loadDialogs());
    }, []);

    if (isLoading) return <Loader />

    return (
        <S.Dialogs>
            {
                dialogs.map((item) => {
                    return (
                        <DialogItem
                            key={item.id}
                            name={item.personInfo.name}
                            nick="u21082417690"
                            message={item.msg}
                            avatar={item.personInfo.iurl}
                            unread="12"
                        />
                    )
                })
            }
        </S.Dialogs>
    );
}

export default Dialogs;