import { Component } from 'react';
import Chart from 'react-apexcharts';
export default class AreaChart extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
          }
        },
        series: [{
          name: 'Total Sell',
          data: [30, 40, 35, 50, 49, 60, 70]
        }]
      }
    }
    render() {
      return (
        <Chart options={this.state.options} series={this.state.series} type="bar" width={650} height={370} />
      )
    }
  }