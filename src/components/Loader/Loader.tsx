import React from 'react';

import { ReactComponent as LoaderIcon } from '../../assets/icons/loader.svg';
import * as S from './Loader.styled';

const Loader = () => {
    return (
        <S.Wrap>
            <LoaderIcon />
        </S.Wrap>
    );
}

export default Loader;