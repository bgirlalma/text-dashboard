import styled from 'styled-components';

const Button = styled.button`
  width: 80px;
  height: 29px;
  border: 1px solid #df0404;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  background-color: #ffc5c5;
  color: #df0404;
`;

export const ButtonInactive = () => {
  return (
    <div>
      <Button type="button">InActive</Button>
    </div>
  );
};
