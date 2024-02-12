import { useState } from 'react';
import customers from '../../customer.json'
import styled from 'styled-components';
import { ButtonActive } from 'components/Button/active';
import { ButtonInactive } from 'components/Button/inactive';
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 40px 0 32px 0;
`;

const Th = styled.th`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #b5b7c0;
  border-bottom: 1px solid #ddd;
  padding: 0 0 14px 0;
  text-align: left;
`;

const Td = styled.td`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  border: none;
  border-top: 1px solid #ddd; /* Добавляем только верхнюю горизонтальную границу */
  padding: 24px 0 24px 0;
  color: #292d32;
`;

const Wrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const PaginationContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: end;
`;

const PaginationButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #f5f5f5;
  margin: 0 5px;
  padding: 5px;
  color: #404b52;

  &:hover,
  &:focus {
    background-color: #5932ea;
    color: #fff;
  }
`;

const Title = styled.h2`
  color: #b5b7c0;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
`;

const AllCustomersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = customers.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(customers.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(pageNumbers.length);
  };

  const renderButton = (status) => {
    if (status === 'Active') {
      return <ButtonActive/>
    } else if(status === 'Inactive'){
      return <ButtonInactive/>
    } else {
      return null;
    }
  }

  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th>Customer Name</Th>
            <Th>Company</Th>
            <Th>Phone Number</Th>
            <Th>Email</Th>
            <Th>Country</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((customer, index) => (
            <tr key={index}>
              <Td>{customer.customerName}</Td>
              <Td>{customer.company}</Td>
              <Td>{customer.phoneNumber}</Td>
              <Td>{customer.email}</Td>
              <Td>{customer.country}</Td>
              <Td>{renderButton(customer.status)}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Wrapp>
        <Title>Showing data 1 to 8 of 256K entries</Title>
        <PaginationContainer>
          <PaginationButton onClick={goToFirstPage}>&laquo;</PaginationButton>
          {pageNumbers.map(number => (
            <PaginationButton
              key={number}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </PaginationButton>
          ))}
          <PaginationButton onClick={handleLastPage}>&raquo;</PaginationButton>
        </PaginationContainer>
      </Wrapp>
    </>
  );
};

export default AllCustomersList;