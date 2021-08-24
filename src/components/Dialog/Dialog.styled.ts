import styled from "styled-components/macro";

export const Wrap = styled.div`
  height: 25%;
  max-height: 120px;
  padding: 20px;
  position: relative;
  
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const Preview = styled.div`
  width: 520px;
  height: 100%;
  padding: 0 20px;
`;

export const Name = styled.h3`
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
`;

export const Message = styled.div`
  font-size: 14px;
  color: #333;
`;

export const Count = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e30611;
  border-radius: 50%;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
`;