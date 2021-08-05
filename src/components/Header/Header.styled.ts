import styled from 'styled-components';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';

export const Header = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid #000;
  background-color: #fff;
  position: relative;
`;

export const Logo = styled(LogoIcon)`

`;

export const Title = styled.h1`
  font-size: 12px;
`;

export const Menu = styled(MenuIcon)`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;