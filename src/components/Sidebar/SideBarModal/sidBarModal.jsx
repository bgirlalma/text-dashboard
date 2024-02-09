import {
  Wrappcontainer,
  ModalTitle,
  StyledButton,
} from './sideBarModal.styled';
const SideBarModal = () => {
    return (
      <Wrappcontainer>
        <ModalTitle className="sideBar-modal">
          Upgrade to PRO to get <br/> access all Features!
        </ModalTitle>
        <StyledButton type="submit" className="sideBar-button">Get Pro Now!</StyledButton>
      </Wrappcontainer>
    );
}

export default SideBarModal