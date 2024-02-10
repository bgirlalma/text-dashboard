import ActiveComponent from "components/Active/active";
import AllCustomers from "components/All Customers/allCustomers";
import Header from "components/Header/header";


const DashboardPage = () => {
    return (
        <div>
            <Header />
            <ActiveComponent />
            <AllCustomers/>
      </div>
  )
};

export default DashboardPage;
