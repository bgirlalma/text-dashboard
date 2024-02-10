import { ArrowSvg } from 'image/green-arrow';
import TotalCustomers from '../../image/profile-2user.png';
import ProfileTick from '../../image/profile-tick.png';
import MonitorSvg from '../../image/monitor.png';
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
const ActiveComponent = () => {
  return (
    <FlexContainer>
      <FlexList>
        <List>
          <StyledImg
            src={TotalCustomers}
            alt="Total Customers"
            width="84"
            height="84"
          />
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
          <StyledImg
            src={ProfileTick}
            alt="Profile Tick"
            width="84"
            height="84"
          />
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
          <StyledImg src={MonitorSvg} alt="Active" width="84" height="84" />
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
