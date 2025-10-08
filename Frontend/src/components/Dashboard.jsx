import React from "react";
import TradeTable from "./TradeTable";
import ConfigEditor from "./ConfigEditor";
import Auth from "./Auth";

const Dashboard = () => {
  return (
    <div>
      <h1>Delta BTC Options Bot Dashboard</h1>
      <Auth />
      <ConfigEditor />
      <TradeTable />
    </div>
  );
};

export default Dashboard;
