import styled from 'styled-components/macro';

export const Wrap = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  bottom: 0;
  padding: 0 10px;
  justify-content: space-between;
`;

export const Name = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
`;

export const Bio = styled.div`

`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: #fff;
  border: none;
  outline: 0;
  cursor: pointer;
`;