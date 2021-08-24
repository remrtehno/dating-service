import styled from 'styled-components';
import { WithScroll } from '../../assets/style/common.styled';

export const Wrap = styled(WithScroll)`
  height: 100%;
  padding: 20px 12px 0 20px;
  display: flex;
  flex-flow: column nowrap;
  overflow-x: hidden;
  
  @media screen and (min-width: 720px) {
    padding: 30px 32px 0 40px;
  }
  
`;

export const Content = styled.div`
  color: #333;
  
  h2 { 
    margin-bottom: 12px;
    font-size: 22px;
    line-height: 22px;
  }
  
  p { 
    margin-bottom: 8px; 
  }
  
  ol { 
    margin-bottom: 20px; 
  }
  
  a { 
    font-family: 'Corpid E1s SCd Bold', Arial, sans-serif;
  }
`;