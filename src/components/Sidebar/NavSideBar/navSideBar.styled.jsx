import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrappList = styled.ul`
  width: 231px;
  height: 100%;
  margin: 65px 16px 0 19px;
`;

export const StyledList = styled.li`
  display: flex;
  position: relative;
`;

export const StyledTitle = styled.h2`
  font-family: 'Poppins';
  font-size: 14px;
  color: #9197b3;
  margin-left: 14px;
`;

export const StyledSpan = styled.span`
  display: flex;
  right: 0;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const StyledLinkSvg = styled(NavLink)`
  position: absolute;
  right: 0;
`;

