import React from "react";
import { Line } from "react-chartjs-2";

function LineChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "sales for 2020(M)",
        data: [3, 2, 2, 1, 4],
        borderColor: ["rgba(255,0,0,0.3)"],
        bordergroundColor: ["rgb(238, 130, 238)"],
        pointBackgroundColor: ["rgb(106, 90, 205)"],
        pointBorderColor: ["rgb(106, 90, 205)"],
      },
      {
        label: "sales for 2020(M)",
        data: [1, 3, 2, 1, 3],
        borderColor: ["rgba(255,0,0,0.3)"],
        bordergroundColor: ["rgb(238, 130, 238)"],
        pointBackgroundColor: ["rgb(106, 90, 205)"],
        pointBorderColor: ["rgb(106, 90, 205)"],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Line Chart",
    },

    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1,
          },
        },
      ],
    },
  };
  return <Line data={data} options={options} />;
}

export default LineChart;
