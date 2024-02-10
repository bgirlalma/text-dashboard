import { SearchSvg } from "image/search";
import { WrappContainer, HeaderTitle, FlexContainer, HeaderInput, HeaderWrapp } from "./header.styled";

const Header = () => {
    return (
      <WrappContainer>
        <HeaderTitle>Hello Evano 👋🏼,</HeaderTitle>

        <FlexContainer>
          <HeaderInput type="text" placeholder="Search" />

          <HeaderWrapp>
            <SearchSvg />
          </HeaderWrapp>
        </FlexContainer>
      </WrappContainer>
    );
}

export default Header;