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
    <div className="bg-status bottom-0 absolute">
      <h1 className="flex items-center">
        Server status
        <div
          className={`w-4 h-4 rounded-full border-solid ${
            isOnline ? "bg-lime" : "bg-red"
          }`}
        ></div>
      </h1>
      <ul className="grid grid-cols-3">
        <li>API response time: 23ms</li>
        <li>Active Orders: 50</li>
        <li>
          <Radar height="200" width="200" data={data} />
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Status;
