import React, {FC, useState} from 'react';
import * as S from './Header.styled';
import Menu from "../Menu/Menu";

interface IProps {
    title: string
}

const Header:FC<IProps> = ({ title }) => {
    const [menuIsOpen, setOpenMenu] = useState(false);

    const toggleMenu = () => setOpenMenu((state) => !state);

    return (
        <S.Header>
            <S.Logo />
            <S.Title>{ title }</S.Title>
            <S.Menu onClick={toggleMenu} />
            <Menu isOpen={menuIsOpen}/>
        </S.Header>
    );
}

export default Header;