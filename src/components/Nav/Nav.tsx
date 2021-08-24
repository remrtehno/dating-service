import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../config/constants';
import { ReactComponent as NavDialogsIcon }  from '../../assets/icons/nav-dialogs.svg';
import { ReactComponent as NavSearchIcon }  from '../../assets/icons/nav-search.svg';
import { ReactComponent as NavProfileIcon }  from '../../assets/icons/nav-profile.svg';
import { ReactComponent as NavSettingsIcon }  from '../../assets/icons/nav-settgins.svg';
import { ReactComponent as NavFAQIcon }  from '../../assets/icons/nav-faq.svg';
import * as S from './Nav.styled';

interface IMenuProps {
    isOpen: boolean
}

const Nav:FC<IMenuProps> = ({ isOpen }) => {
    if (!isOpen) return null;

    return (
        <S.Menu>
            <ul>
                <li>
                    <Link to={ROUTES.Dialogs}>
                        <NavDialogsIcon/>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <NavSearchIcon/>
                    </Link>
                </li>
                <li>
                    <Link to={ROUTES.Profile}>
                        <NavProfileIcon/>
                    </Link>
                </li>
                <li>
                    <Link to={ROUTES.Settings}>
                        <NavSettingsIcon/>
                    </Link>
                </li>
                <li>
                    <Link to={ROUTES.FAQ}>
                        <NavFAQIcon/>
                    </Link>
                </li>
            </ul>
        </S.Menu>
    )
}

export default Nav;