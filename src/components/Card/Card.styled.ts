import styled from 'styled-components/macro';

export const Wrap = styled.div`
  width: 720px;
  height: 100%;
  position: relative;
  
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  
  .swiper-wrapper {
    width: 100%;
  }
`;

export const Photo = styled.img`
  width: 720px;
  height: 100%;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  width: 100%;
  position: absolute;
`;
