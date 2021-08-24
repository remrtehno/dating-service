import styled from 'styled-components';


export const Header = styled.header`
  min-height: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: #fff;
  border-bottom: 1px solid #909090;
  color: #333;
  
  h1 {
    font-size: 18px;
  }
`;

export const Logo = styled.div`
  height: 100%;
  cursor: pointer;
  
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Menu = styled.div`
  width: 32px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;