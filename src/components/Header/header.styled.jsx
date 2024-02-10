import styled from "styled-components";

export const WrappContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 71px;
  margin-right: 95px;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const HeaderTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 26px;
`;

export const FlexContainer = styled.div`
  position: relative;
`;

export const HeaderInput = styled.input`
  width: 216px;
  height: 38px;
  padding-left: 40px;
  border: none;
  border-radius: 20px;
  background-color: #fff;
  color: #b5b7c0;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
`;

export const HeaderWrapp = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 11px;
`;