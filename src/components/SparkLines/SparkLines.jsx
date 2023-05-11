import { Component } from "react";
import Chart from "react-apexcharts";
export default class SparkLines extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [25, 66, 41, 59, 25, 71, 42, 26, 49, 21],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 160,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "smooth",
        },
        fill: {
          opacity: 0.3,
        },
        yaxis: {
          min: 0,
        },
        colors: ["#DCE6EC"],
        title: {
          text: "$235,312",
          offsetX: 0,
          style: {
            fontSize: "28px",
          },
        },
        subtitle: {
          text: "Expenses",
          offsetX: 0,
          style: {
            fontSize: "24px",
          },
        },
      },

      seriesSpark2: [
        {
          data: [25, 66, 41, 59, 25, 44, 19, 67, 55, 31],
        },
      ],
      optionsSpark2: {
        chart: {
          type: "area",
          height: 160,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "straight",
        },
        fill: {
          opacity: 0.3,
        },
        yaxis: {
          min: 0,
        },
        colors: ["#DCE6EC"],
        title: {
          text: "$235,312",
          offsetX: 0,
          style: {
            fontSize: "28px",
          },
        },
        subtitle: {
          text: "Expenses",
          offsetX: 0,
          style: {
            fontSize: "24px",
          },
        },
      },

      seriesSpark3: [
        {
          data: [25, 66, 51, 59, 45, 44, 32, 56, 39, 61],
        },
      ],
      optionsSpark3: {
        chart: {
          type: "area",
          height: 160,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "smooth",
        },
        fill: {
          opacity: 0.3,
        },
        xaxis: {
          crosshairs: {
            width: 1,
          },
        },
        yaxis: {
          min: 0,
        },
        title: {
          text: "$175,965",
          offsetX: 0,
          style: {
            fontSize: "28px",
          },
        },
        subtitle: {
          text: "Purchase",
          offsetX: 0,
          style: {
            fontSize: "24px",
          },
        },
      },

      seriesSpark4: [
        {
          data: [25, 66, 51, 59, 45, 44, 32, 56, 39, 61],
        },
      ],
      optionsSpark4: {
        chart: {
          type: "area",
          height: 160,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "smooth",
        },
        fill: {
          opacity: 0.3,
        },
        xaxis: {
          crosshairs: {
            width: 1,
          },
        },
        yaxis: {
          min: 0,
        },
        title: {
          text: "$135,965",
          offsetX: 0,
          style: {
            fontSize: "28px",
          },
        },
        subtitle: {
          text: "Profits",
          offsetX: 0,
          style: {
            fontSize: "24px",
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
        <div className="shadow-md p-5 rounded-xl bg-teal-400">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={160}
          />
        </div>

        <div className="shadow-md p-5 rounded-xl bg-sky-400">
          <Chart
            options={this.state.optionsSpark2}
            series={this.state.seriesSpark2}
            type="area"
            height={160}
          />
        </div>

        <div className="shadow-md p-5 rounded-xl bg-indigo-400">
          <Chart
            options={this.state.optionsSpark3}
            series={this.state.seriesSpark3}
            type="area"
            height={160}
          />
        </div>

        <div className="shadow-md p-5 rounded-xl bg-green-400">
          <Chart
            options={this.state.optionsSpark4}
            series={this.state.seriesSpark4}
            type="area"
            height={160}
          />
        </div>
      </div>
    );
  }
}
