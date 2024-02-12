import styled from 'styled-components';

const Button = styled.button`
  width: 80px;
  height: 29px;
  border: 1px solid #008767;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  background-color: #16c098;
  color: #008767;
`;

export const ButtonActive = () => {
  return (
    <div>
      <Button type="button">Active</Button>
    </div>
  );
};
