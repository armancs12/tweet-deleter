import { NextPage } from "next";
import DashboardNav from "../components/DashboardNav";
import SearchFormContainer from "../components/SearchFormContainer";

const DashboardPage: NextPage = () => {
  return (
    <div>
      <DashboardNav />
      <div>
        <div className="pt-4 bg-gray-100">
          <SearchFormContainer />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
