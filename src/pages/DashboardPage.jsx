import React, { useEffect, useState } from "react";
import DashboardComp from "../components/Dashboard/Dashboard";
import { Helmet } from "react-helmet";
const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <DashboardComp />
    </div>
  );
};

export default Dashboard;
