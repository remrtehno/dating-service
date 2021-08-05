import styled from "styled-components";
import {ReactComponent as MessagesIcon}  from '../../assets/icons/messages.svg'

export const Menu = styled.nav`
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 999;
  height: initial;
  min-height: initial;
  min-width: 50px;
  max-width: 50px;
  background-color: white;
  margin: 0 auto;
  width: 100%;
`;

export const Messages = styled(MessagesIcon)`
  width: 16px;
  height: 16px;
  padding: 10px;
`;