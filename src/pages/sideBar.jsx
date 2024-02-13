import { Logo } from 'components/Sidebar/Logo/logo';
import ProjectManager from 'components/Sidebar/ProjectManadger/projectManager';
import SideBarModal from 'components/Sidebar/SideBarModal/sidBarModal';
import styled from 'styled-components';
const {
  default: NavSideBar,
} = require('components/Sidebar/NavSideBar/navSidebar');

const Container = styled.div`
  position: relative;
  width: 306px;
  background-color: #fff;
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 36px;
 
`;

const Wrapp = styled.div`
  width: 250px;
  position: absolute;
  bottom: 0;
`;

const SideBar = () => {
  return (
    <Container>
        <Logo />
        <NavSideBar />
        <Wrapp>
          <SideBarModal />
          <ProjectManager />
        </Wrapp>
    
    </Container>
  );
};

export default SideBar;
