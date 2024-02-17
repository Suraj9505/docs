---
sidebar_position: 1
---

# ApexCharts

<hr />

_ApexCharts is a feature-rich JavaScript charting library that allows you to create interactive and visually appealing charts for your web applications. It is built on top of the popular charting library, [<font color="#e20e02">Chart.js</font>](https://www.chartjs.org/), and provides additional customization options and advanced features._

<div className="mt-3 text-small">
### Features
</div>

- **Interactive Charts:** _ApexCharts enables users to interact with charts by providing features like zooming, panning, and real-time updates._

- **Wide Range of Chart Types:** _It supports various chart types, including line charts, bar charts, area charts, pie charts, and more._

- **Responsive Design:** _Charts created with ApexCharts are responsive, ensuring a consistent and optimal viewing experience across different devices._

- **Easy to Customize:** _ApexCharts provides a plethora of customization options, allowing you to control every aspect of the chart's appearance and behavior._

- **Dynamic Data:** _You can easily update chart data dynamically, making it suitable for applications that require real-time data visualization._

<div className="mt-3 text-small">
### Getting Started
</div>
_To use ApexCharts in your project, follow these steps:_

1.  **Installation:** _Include the ApexCharts library in your project, either by using a package manager like npm or yarn, or by including the necessary CDN links._

    We can install Apexchart from NPM

    ```npm
        npm install apexchart
    ```

    **Usage**

    ```javascript
    import ApexCharts from "apexcharts";
    ```

    **OR**

    _You can directly include the `<script>`._

    ```html
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    ```

2.  **Usage:** _In your React component, import ApexCharts and the required styles:_

    ```jsx
    import ReactApexChart from "react-apexcharts";
    import "./path-to-your-chart-styles.css"; // Add custom styles if needed
    ```

3.  **HTML Markup:** Create a state for your chart options and series data, and render the ReactApexChart component:\_

    ```jsx
    import React, { useState } from "react";

    const MyChartComponent = () => {
      const [chartOptions, setChartOptions] = useState({
        chart: {
          type: "line",
        },
      });

      const [chartSeries, setChartSeries] = useState([
        {
          name: "Sales",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ]);

      return (
        <div>
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="line"
            height={350}
          />
        </div>
      );
    };

    export default MyChartComponent;
    ```

4.  **Customization:** _Explore various customization options provided by ApexCharts to modify the appearance and behavior of your charts. Modify the chartOptions state in your component accordingly._

    ```jsx
    const [chartOptions, setChartOptions] = useState({
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      // Add more options as needed
    });
    ```

**_More Details_**

_For detailed documentation, configuration options, and advanced usage, refer to the [<font color="#e20e02">**official ApexCharts documentation**</font>](https://apexcharts.com/docs/installation/)._

**_Examples_**

_Explore the [<font color="#e20e02">**ApexCharts demos**</font>](https://apexcharts.com/javascript-chart-demos/) for interactive examples showcasing the library's capabilities._
