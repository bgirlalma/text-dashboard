import styled from 'styled-components';

const Button = styled.button`
  width: 80px;
  height: 29px;
  border: none;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  background-color: #00b087;
  color: #008767;
`;

export const ButtonActive = () => {
  return (
    <div>
      <Button type="button">Active</Button>
    </div>
  );
};
