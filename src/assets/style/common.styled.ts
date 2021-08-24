import styled from 'styled-components';

export const WithScroll = styled.div`
  overflow-x: hidden;
  
  ::-webkit-scrollbar {
    width: 8px; 
    height: 8px; 
    background-color: #d1d1d1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #afafaf;
  }
`;