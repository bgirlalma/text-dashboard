import { Logo } from "components/Sidebar/Logo/logo";
import ProjectManager from "components/Sidebar/ProjectManadger/projectManager";
import SideBarModal from "components/Sidebar/SideBarModal/sidBarModal";
import styled from 'styled-components';
const { default: NavSideBar } = require("components/Sidebar/NavSideBar/navSidebar")


const Container = styled.div`
  max-width: 306px;
  height: 100%;
  position: fixed;
  background-color: #fff;
  padding-left: 28px;
  padding-right: 28px;
`;

const SideBar = () => {
    return (
        <Container>
            <Logo/>
            <NavSideBar />
            <SideBarModal />
            <ProjectManager/>
        </Container>
    )
}

export default SideBar;