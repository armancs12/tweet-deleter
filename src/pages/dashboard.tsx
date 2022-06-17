import { NextPage } from "next";
import DashboardNav from "../components/DashboardNav";
import SearchFilters from "../components/SearchFilters";
import SearchFormContainer from "../components/SearchFormContainer";
import TweetsTable from "../components/TweetsTable";

const DashboardPage: NextPage = () => {
  return (
    <div>
      <DashboardNav />
      <div>
        <SearchFormContainer />
        <SearchFilters />
        <section className="max-w-7xl mx-auto mt-6 grid grid-cols-1 lg:grid-cols-3 gap-12 pb-16">
          <div className="lg:col-start-1 lg:col-end-3 text-[17px] text-gray-500">
            <TweetsTable />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
