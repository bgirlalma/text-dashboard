import { CustomersSvg } from 'image/customers';
import { DashboardSvg } from 'image/dashboard';
import { HelpSvg } from 'image/help';
import { IncomeSvg } from 'image/income';
import { ProductSvg } from 'image/product';
import { PromoteSvg } from 'image/promote';
import { VectorRightSvg } from 'image/vector-right';

import { WrappList, StyledList, StyledTitle,StyledLinkSvg, StyledNavLink } from './navSideBar.styled';

const NavSideBar = () => {
  return (
    <nav>
      <WrappList>
        <StyledList>
          <StyledNavLink to="/">
            <DashboardSvg />
            <StyledTitle>Dashboard</StyledTitle>
          </StyledNavLink>
        </StyledList>
        <StyledList>
          <StyledNavLink to="/product">
            <ProductSvg />
            <StyledTitle>Product</StyledTitle>
          </StyledNavLink>
          <StyledLinkSvg>
            <VectorRightSvg />
          </StyledLinkSvg>
        </StyledList>
        <StyledList>
          <StyledNavLink to="/customers">
            <CustomersSvg />
            <StyledTitle>Customers</StyledTitle>
          </StyledNavLink>
          <StyledLinkSvg>
            <VectorRightSvg />
          </StyledLinkSvg>
        </StyledList>
        <StyledList>
          <StyledNavLink to="/income">
            <IncomeSvg />
            <StyledTitle>Income</StyledTitle>
          </StyledNavLink>
          <StyledLinkSvg>
            <VectorRightSvg />
          </StyledLinkSvg>
        </StyledList>
        <StyledList>
          <StyledNavLink to="/promote">
            <PromoteSvg />
            <StyledTitle>Promote</StyledTitle>
          </StyledNavLink>
          <StyledLinkSvg>
            <VectorRightSvg />
          </StyledLinkSvg>
        </StyledList>
        <StyledList>
          <StyledNavLink to="/help">
            <HelpSvg />
            <StyledTitle>Help</StyledTitle>
          </StyledNavLink>
          <StyledLinkSvg>
            <VectorRightSvg />
          </StyledLinkSvg>
        </StyledList>
      </WrappList>
    </nav>
  );
};

export default NavSideBar;
