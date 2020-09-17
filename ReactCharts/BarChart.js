import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "sales for 2020(M)",
        data: [3, 2, 2, 1, 4],
        borderColor: [
          "rgba(255,0,0,0.3)",
          "rgba(255,0,0,0.3)",
          "rgba(255,0,0,0.3)",
          "rgba(255,0,0,0.3)",
          "rgba(255,0,0,0.3)",
        ],
        backgroundColor: [
          "rgb(238, 130, 238)",
          "rgb(238, 130, 238)",
          "rgb(238, 130, 238)",
          "rgb(238, 130, 238)",
          "rgb(238, 130, 238)",
        ],
        pointBackgroundColor: ["rgb(106, 90, 205)"],
        pointBorderColor: ["rgb(106, 90, 205)"],
      },
      {
        label: "sales for 2020(M)",
        data: [1, 3, 2, 1, 3],
        borderColor: ["rgba(255,0,0,0.3)"],
        backgroundColor: [
          "rgb106, 90, 205)",
          "rgb106, 90, 205)",
          "rgb106, 90, 205)",
          "rgb106, 90, 205)",
          "rgb106, 90, 205)",
        ],
        pointBackgroundColor: ["rgb(106, 90, 205)"],
        pointBorderColor: ["rgb(106, 90, 205)"],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "BarChart",
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
  return <Bar data={data} options={options} />;
}

export default BarChart;
