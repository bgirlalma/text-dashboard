import AllCustomersSearch from "./AllCusomersSearch";
import AllCusomersList from "./AllCustomersList";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  border-radius: 30px;
  margin: 40px 95px 0 71px;
  padding: 30px 44px 20px 38px;
`;

const AllCustomers = () => {
    return (
        <Container>
            <AllCustomersSearch />
            <AllCusomersList/>
    </Container>
)
}

export default AllCustomers;