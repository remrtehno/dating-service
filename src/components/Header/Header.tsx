import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import * as S from './Header.styled';

interface IProps {
    title: string
}

const Header:FC<IProps> = ({ title }) => {
    const [menuIsOpen, setOpenMenu] = useState(false);

    const toggleMenu = () => setOpenMenu((state) => !state);

    return (
        <S.Header>
            <S.Logo>
                <Link to="/"><LogoIcon/></Link>
            </S.Logo>
            <h1>{ title }</h1>
            <S.Menu onClick={toggleMenu}>
                <MenuIcon />
            </S.Menu>
            <Nav isOpen={menuIsOpen}/>
        </S.Header>
    );
}

export default Header;