import { SearchSvg } from "image/search";
import { WrappContainer, HeaderTitle, HeaderInput, HeaderWrapp } from "./header.styled";

const Header = () => {
    return (
      <WrappContainer>
        <HeaderTitle>Hello Evano 👋🏼,</HeaderTitle>

        <HeaderInput type="text" />

        <HeaderWrapp>
          <SearchSvg />
        </HeaderWrapp>
      </WrappContainer>
    );
}

export default Header;