import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 20px;
  margin-left: 71px;
  margin-right: 95px;
  padding: 32px 80px 32px 50px;
  background-color: #ffffff;
`;

export const FlexList = styled.ul`
  display: flex;
  justify-content: center;
  
`;

export const List = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  margin-right: 56px;
  margin-left: 56px;

  &:last-child {
    margin-right: 0;
  }

  &:first-child {
    margin-left: 0;
  }

  &:not(:last-child)::after {
    content: '';
    position: absolute; /* Позиционируем псевдоэлемент абсолютно */
    top: 0;
    bottom: 0;
    right: -56px; /* Половина отступа, чтобы линия была посередине между элементами */
    width: 1px; /* Ширина линии */
    background-color: #f0f0f0;
  }
`;

export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #acacac;
  margin-bottom: 4px;
`;

export const Desc = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #333333;
  margin-bottom: 6px;
`;

export const StyledImg = styled.img`
  background-color: #d3ffe7;
  border-radius: 50%;
  padding: 20px;
  margin-right: 20px;
`;

export const StyledContentContainer = styled.div`

`;

export const StyledDesc = styled.p`
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: #292d32;
`;

export const StyledPercent = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: #00ac4f;
  margin-right: 5px;
`;

export const StyledIcon = styled.img`
  border-radius: 50%;
  margin-right: -10px; /* Устанавливаем отрицательный margin, чтобы избежать промежутков между картинками */
  position: relative;
  z-index: 1;
`;