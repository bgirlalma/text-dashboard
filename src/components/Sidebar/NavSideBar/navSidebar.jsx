import { CustomersSvg } from 'image/customers';
import { DashboardSvg } from 'image/dashboard';
import { HelpSvg } from 'image/help';
import { IncomeSvg } from 'image/income';
import { ProductSvg } from 'image/product';
import { PromoteSvg } from 'image/promote';
import { VectorRightSvg } from 'image/vector-right';

import { WrappList, StyledList, StyledNavLink } from './navSideBar.styled';

const NavSideBar = () => {
  return (
    <nav>
      <WrappList>
        <StyledList>
          <StyledNavLink to="/">
            <DashboardSvg />
            Dashboard
          </StyledNavLink>
        </StyledList>
        <StyledList>
          <StyledNavLink to="/product">
            <ProductSvg />
            Product
            <VectorRightSvg />
          </StyledNavLink>
        </StyledList>
        <StyledList>
          <StyledNavLink to="/customers">
            <CustomersSvg />
            Customers
            <VectorRightSvg />
          </StyledNavLink>
        </StyledList>
        <StyledList>
          <StyledNavLink to="/income">
            <IncomeSvg />
            Income
            <VectorRightSvg/>
          </StyledNavLink>
        </StyledList>
        <StyledList>
          <StyledNavLink to="/promote">
            <PromoteSvg />
            Promote
            <VectorRightSvg/>
          </StyledNavLink>
        </StyledList>
        <StyledList>
          <StyledNavLink to="/help">
            <HelpSvg />
            Help
            <VectorRightSvg/>
          </StyledNavLink>
        </StyledList>
      </WrappList>
    </nav>
  );
};

export default NavSideBar;
