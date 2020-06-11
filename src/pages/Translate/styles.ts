import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  background: none;
  border-radius: 8px;
  padding: 50px;
  margin: 80px auto;
`;
export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 250px;
`;
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  input {
    flex: 1;
    border: 2px solid #fff;
    font-size: 16px;
    color: #fff;
    border-radius: 4px;
    padding: 10px 15px;
    background: none;
    margin-right: 30px;
    transition: box-shadow 0.5s;
  }
  input::placeholder {
    color: #d1c9c9;
  }
  input:focus{
    border: 2px solid #d1c9c9;
  }
  input:hover{
    box-shadow: 5px 10px 18px #6e4e7a;
  }
  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }
  input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;
}

`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
}))`
  background: none;
  border: 2px solid #fff;
  color: #fff;
  font-size: bold;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;


  &:hover{
    background: #5a027d;
    border: 2px solid #5a027d;
    box-shadow: 5px 10px 18px #6e4e7a;
  }
`;
export const TextButton = styled.h2`
  color: #fff;
  font-size: 16px;
  padding: 10px;
`;
export const TextAmount = styled.h2`
  color: rgba(0,0,0,0.8);
  font-size: 16px;
  margin-top: 15px;
`;

export const List = styled.ul`
  margin-top: 30px;

  li {
    display: flex;
    background: #fff;
    border-radius: 4px;
    flex-direction: row;
    padding: 15px;
    align-items: center;
    & + li {
      margin-top: 15px;
    }
  }
`;