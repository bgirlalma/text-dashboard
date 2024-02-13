import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrappList = styled.ul`
  width: 231px;
  height: 100%;
  margin: 65px 16px 0 19px;
`;



export const StyledTitle = styled.h2`
  font-family: 'Poppins';
  font-size: 14px;
  color: #9197b3;
  margin-left: 14px;
`;


export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const StyledLinkSvg = styled(NavLink)`
  position: absolute;
  right: 0;
  margin-right: 10px;
`;

export const StyledList = styled.li`
  display: flex;
  align-items: center;
  height: 46px;
  position: relative;
  border-radius: 8px;
  padding-left: 10px;

  &:hover,
  &:active {
    background-color: #5932ea;
    ${StyledTitle} {
      color: #fff;
    }
    ${StyledNavLink}, ${StyledLinkSvg} {
      fill: rgb(100, 100, 100);
    }
  }
`;
