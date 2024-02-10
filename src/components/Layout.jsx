import { GlobalStyled } from 'globalstyled';
import SideBar from 'pages/sideBar';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import DashboardPage from 'pages/dashboard';

const LayoutContainer = styled.div`
display: flex;
`;

const ContentContainer = styled.div`
flex: 1;
`;
export const Layout = () => {
  return (
    <LayoutContainer>
      <SideBar />
      <ContentContainer>
        <DashboardPage/>
        <GlobalStyled />
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  );
};
