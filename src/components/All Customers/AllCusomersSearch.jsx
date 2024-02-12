import { SearchSvg } from 'image/search';
import { HeaderWrapp, FlexContainer } from 'components/Header/header.styled';
import styled from 'styled-components';

const ContainerWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  color: #000;
  margin-bottom: 7px;
`;

const TitleDesc = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #16c098;
`;

const StyledInputSelector = styled.div`
  display: flex;
`;

const HeaderInput = styled.input`
  width: 216px;
  height: 38px;
  padding-left: 40px;
  border: none;
  border-radius: 20px;
  background-color: #f9fbff;
  color: #b5b7c0;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
`;

const StyledSelector = styled.select`
  width: 154px;
  height: 38px;
  border: none;
  border-radius: 20px;
  background-color: #f9fbff;
  color: #3D3C4;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  padding: 0 10px 0 15px;
  margin-left: 16px;
`;
const AllCustomersSearch = () => {

  return (
    <ContainerWrapp>
      <div>
        <Title>All Customers</Title>
        <TitleDesc>Active Members</TitleDesc>
      </div>

      <StyledInputSelector>
        <FlexContainer>
          <HeaderInput type="text" placeholder="Search" />

          <HeaderWrapp>
            <SearchSvg />
          </HeaderWrapp>
        </FlexContainer>
        <StyledSelector
          name="customers"
          id="customers"
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </StyledSelector>
      </StyledInputSelector>
    </ContainerWrapp>
  );
};

export default AllCustomersSearch;
