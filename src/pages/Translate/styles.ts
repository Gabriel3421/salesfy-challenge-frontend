import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 50px;
  margin: 80px auto;
  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  svg {
    margin-right: 10px;
  }
`;
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  input {
    flex: 1;
    border: 1px solid rgba(0, 0, 0, 0.2);
    font-size: 16px;
    border-radius: 4px;
    padding: 10px 15px;
  }
  input::placeholder {
    color: #A0A0B2
  }

`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
}))`
  background: #7159c1;
  border: 0;
  color: #fff;
  font-size: bold;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &[disable] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
export const TextButton = styled.h2`
  color: #fff;
  font-size: 16px;
  padding: 10px;
`;
export const TextAmount = styled.h2`
  font-size: 16px;
  padding: 10px;
`;

export const List = styled.ul`
  margin-top: 30px;
  
  li {
    display: flex;
    flex-direction: row;
    padding: 15px 0;
    align-items: center;
    & + li {
      border-top: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
`;