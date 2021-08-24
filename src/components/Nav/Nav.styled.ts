import styled from 'styled-components';

export const Menu = styled.nav`
  position: absolute;
  top: 50px;
  right: 0;
  background: #fff;
  z-index: 999;
  
  ul {
    display: flex;
    flex-flow: column nowrap;
    border: 1px solid #b9b9b9;
  }

  ul li:not(:last-child) {
    border-bottom: 1px solid #b9b9b9;
  }
  
  li {
    width: 50px;
    height: 50px;
    position: relative;
    list-style-type: none;
    :hover {
      background: #f5f5f5;
    }
  }
  
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  svg {
    width: 16px;
    height: 16px;
    fill: #333;
  }
`;