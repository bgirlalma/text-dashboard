import { VectorDownSvg } from "image/vector-down";
import Avatar from '../../../image/main-avatar.jpg'
import {
  WrappContainer,
  StyledContainer,
  StyledTitle,
  StyledDesc,
  ContainerSvgWrapp,
} from './projectManadger.styled';

const ProjectManager = () => {
    return (
      <WrappContainer>
        <img src={Avatar} alt="Project Manager" />

        <StyledContainer>
          <StyledTitle className="title-avatar">Evano</StyledTitle>
          <StyledDesc className="desc-avatar">Project Manager</StyledDesc>
        </StyledContainer>

        <ContainerSvgWrapp>
          <VectorDownSvg />
        </ContainerSvgWrapp>
      </WrappContainer>
    );
}

export default ProjectManager