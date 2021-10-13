import React from "react";
import { Link } from 'react-router-dom'
import statusCards from "../assets/JsonData/status-card-data.json";
import StatusCard from "../components/status-card/StatusCard";
import Chart from 'react-apexcharts';

const chartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [40, 70, 20, 90, 35, 80, 30, 91, 22],
    },
    {
      name: "Store Customers",
      data: [40, 30, 50, 100, 22, 10, 30, 83, 54],
    },
  ],
  options: {
    color: ['#6ab04c', '#2980b9'], 
    chart: {
      background: 'transparent'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    legend: {
      position: 'top'
    },
    grid: {
      show: false
    }
  }
};

const Dashboard = () => {
  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard
                  title={item.title}
                  icon={item.icon}
                  count={item.count}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height">
            {/* chart */}
            <Chart 
              options={chartOptions.options}
              series={chartOptions.series}
              type='line'
              height='100%'
            />
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>Top Customers</h3>
            </div>
            <div className="card__body">
              {/* table */}
              ff
            </div>
            <div className="card__footer">
              <Link to='/customers'>View All</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
