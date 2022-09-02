import { useState } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
const Status = () => {
  const data = {
    labels: [
      "Active Orders",
      "Active users",
      "Pending Orders",
      "Active Support",
      "Bugs found",
    ],
    datasets: [
      {
        label: "Overview",
        data: [50, 100, 20, 124, 11],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  const [isOnline, setIsOnline] = useState(true);
  return (
    <footer className="bg-status bottom-0 absolute w-screen ">
      <h1 className="flex items-center">
        Server status
        <div
          className={`w-4 h-4 rounded-full border-solid ${
            isOnline ? "bg-lime" : "bg-red"
          }`}
        ></div>
      </h1>
      <div className="flex xl:gap-96">
        <ul className="flex flex-col">
          <li>API response time: 23ms</li>
          <li>Active Orders: 50</li>
          <li>Active Support: 124</li>
          <li>Pending: 20 </li>
        </ul>
        <ul className="flex flex-col">
          <li>Problem with orders</li>
          <li>Pending tickets: 3</li>
          <li>Bugs found: 11</li>
          <li>Active users: 23.349</li>
        </ul>
        <ul>
          <li>
            <Radar height="100" width="100" data={data} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Status;
