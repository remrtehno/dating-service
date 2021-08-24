import styled from 'styled-components';

export const Preview = styled.div`
  width: 100%;
  color: #fff;
`;

export const Name = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
`;

export const Bio = styled.div`
  width: 80%;
  max-height: 38px;
  position: relative;
  overflow: hidden;
`;

export const MoreInfo = styled.span`
  :after {
    width: 16px;
    height: 16px;
    margin-left: 10px;
    content: 'i';
    display: inline-block;
    text-align: center;
    background: #fff;
    border-radius: 50%;
    font-size: 13px;
    line-height: 17px;
    cursor: pointer;
    color: #333;
  }
`;

export const Personal = styled.div`
  width: 100%;
  padding: 30px 20px;
`;