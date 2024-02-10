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
import { FlexContainer, FlexList } from './active.styled';
const ActiveComponent = () => {
    return (
      <FlexContainer>
        <FlexList>
          <li>
            <img
              src={TotalCustomers}
              alt="Total Customers"
              width="84"
              height="84"
            />
            <h2>Total Customers</h2>
            <p>5,423</p>

            <p>
              <ArrowSvg />
              <span>16%</span>this month
            </p>
          </li>
          <li>
            <img src={ProfileTick} alt="Profile Tick" width="84" height="84" />
            <h2>Members</h2>
            <p>1,893</p>
            <p>
              <RedArrowSvg />
              <span>1%</span> this month
            </p>
          </li>
          <li>
            <img src={MonitorSvg} alt="Active" />
                    <h2>Active Now</h2>
                    <p>189</p>
                    <img src={ElipseOne} alt="avatar one" />
                    <img src={ElipseTwo} alt="avatar two" />
                    <img src={ElipseTree} alt="avatar three" />
                    <img src={ElipseFour} alt="avatar four" />
                    <img src={ElipseFive} alt="avatar five" />
          </li>
        </FlexList>
      </FlexContainer>
    );
}

export default ActiveComponent;