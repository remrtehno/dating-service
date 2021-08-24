import styled from 'styled-components';
import { WithScroll } from '../../assets/style/common.styled';

export const Wrap = styled(WithScroll)`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  
  form {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    max-width: 300px;
  }
`;

export const Title = styled.h2`
  padding: 20px 0;
  font-size: 22px;
  color: #333;
`;

export const Caption = styled.p`
  padding: 20px 10px 0;
  font-size: 12px;
  color: #666465;
  text-align: center;
`;
