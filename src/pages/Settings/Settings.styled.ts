import styled from 'styled-components';

export const Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  
  form {
    width: 60%;
    padding: 30px;
  }
`;

export const FormGroupWrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 20px;
`;

export const AppStoreLink = styled.a`
  width: 100%;
  max-width: 350px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  
  img { width: 80% }
`;

export const LogoutBtn = styled.button`
  display: block;
  max-width: 350px;
  width: 100%;
  border: 2px solid #000;
  border-radius: 10px;
  text-decoration: none;
  padding: 20px 0;
  font-size: 20px;
  color: #000;
  margin-bottom: 25px;
`;

export const RemoveAccBtn = styled.button`
  width: auto;
  max-width: none;
  border: none;
  color: #0083ca;
  font-size: 16px;
  padding: 0 0 20px;
  text-decoration: none;
  background-color: transparent;
  margin: 0 10px;
`;

