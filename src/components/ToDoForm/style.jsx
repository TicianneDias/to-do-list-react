import styled from 'styled-components';

export const Form = styled.form`
    font-family: 'Nanum Pen Script', cursive;
    margin-bottom: 32px;
`;

export const Input = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid #f0ec0c;
  outline: none;
  width: 320px;
  background: transparent;
  color: #fff;

  @media(max-width: 768px) {
      width: 200px;
  }


&::placeholder {
  color: #e2e2e2;
}
`;

export const Button = styled.button`
  padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background: linear-gradient(
    90deg,
    #f0ec0c 0%,
    #f6fa00 100%
  );
  color: darkblue;
  text-transform: capitalize;

`;