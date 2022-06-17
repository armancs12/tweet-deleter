import { NextPage } from "next";
import DashboardNav from "../components/DashboardNav";

const DashboardPage: NextPage = () => {
  return (
    <div>
      <DashboardNav />
      <div>Dashboard</div>
    </div>
  );
};

export default DashboardPage;
