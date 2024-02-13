import { ArrowSvg } from 'image/green-arrow';
import ElipseOne from '../../image/Ellipse 58.jpg';
import ElipseTwo from '../../image/Ellipse 59.jpg';
import ElipseTree from '../../image/Ellipse 60.jpg';
import ElipseFour from '../../image/Ellipse 61.jpg';
import ElipseFive from '../../image/Ellipse 62.jpg';
import { RedArrowSvg } from 'image/red-arrow';
import {
  FlexContainer,
  FlexList,
  StyledContentContainer,
  Title,
  Desc,
  StyledDesc,
  StyledPercent,
  List,
  StyledImg,
  StyledIcon,
} from './active.styled';
import { MonitorSvg } from 'image/monitor';
import { ProfileTwoSvg } from 'image/profile-2user';
import { ProfileTickSvg } from 'image/profile-tick';
const ActiveComponent = () => {
  return (
    <FlexContainer>
      <FlexList>
        <List>
          <StyledImg>
            <ProfileTwoSvg />
          </StyledImg>
          <StyledContentContainer>
            <Title>Total Customers</Title>
            <Desc>5,423</Desc>

            <StyledDesc>
              <ArrowSvg />
              <StyledPercent>16%</StyledPercent>this month
            </StyledDesc>
          </StyledContentContainer>
        </List>
        <List>
          <StyledImg>
            <ProfileTickSvg />
          </StyledImg>
          <StyledContentContainer>
            <Title>Members</Title>
            <Desc>1,893</Desc>
            <StyledDesc>
              <RedArrowSvg />
              <StyledPercent>1%</StyledPercent> this month
            </StyledDesc>
          </StyledContentContainer>
        </List>
        <List>
          <StyledImg>
            <MonitorSvg />
          </StyledImg>
          <StyledContentContainer>
            <Title>Active Now</Title>
            <Desc>189</Desc>
            <StyledIcon src={ElipseOne} alt="avatar one" />
            <StyledIcon src={ElipseTwo} alt="avatar two" />
            <StyledIcon src={ElipseTree} alt="avatar three" />
            <StyledIcon src={ElipseFour} alt="avatar four" />
            <StyledIcon src={ElipseFive} alt="avatar five" />
          </StyledContentContainer>
        </List>
      </FlexList>
    </FlexContainer>
  );
};

export default ActiveComponent;
