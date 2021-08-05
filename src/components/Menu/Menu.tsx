import React, { FC } from "react";
import * as Styled from './Menu.styled';
import {Link} from "react-router-dom";
import {ROUTES} from "../../config/constants";

interface IMenuProps {
    isOpen: boolean
}

const Menu:FC<IMenuProps> = ({ isOpen }) => {

    if (!isOpen) return null;

    return (
        <Styled.Menu>
            <Link to={ROUTES.Dialogs}>
                <Styled.Messages/>
            </Link>
            <Link to='/'>
                <Styled.Messages/>
            </Link>
            <Link to={ROUTES.Profile}>
                <Styled.Messages/>
            </Link>
            <Link to={ROUTES.Settings}>
                <Styled.Messages/>
            </Link>
            <Link to={ROUTES.FAQ}>
                <Styled.Messages/>
            </Link>
        </Styled.Menu>
    )
}

export default Menu;