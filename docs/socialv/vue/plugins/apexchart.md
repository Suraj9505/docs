---
sidebar_position: 1
---

# ApexCharts

<hr />

_ApexCharts is a feature-rich JavaScript charting library that allows you to create interactive and visually appealing charts for your web applications. It is built on top of the popular charting library, [<font color="#50b5ff">Chart.js</font>](https://www.chartjs.org/), and provides additional customization options and advanced features._

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
    npm install --save apexcharts
    npm install --save vue-apexcharts
    ```

    **OR**

    _You can directly include the `<script>`._

    ```html
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    ```

    ### Usage

    ```javascript

    import VueApexCharts from 'vue-apexcharts'
    Vue.use(VueApexCharts)

    Vue.component('apexchart', VueApexCharts)
    ```

2.  **Import and Registration:** _In your Vue component, import ApexCharts and register the required components:_

    ```html
    <template>
      <div>
        <apexchart
          type="line"
          :options="chartOptions"
          :series="chartSeries"
          height="350"
        />
      </div>
    </template>

    <script>
    import VueApexCharts from "vue-apexcharts";

    export default {
      components: {
        apexchart: VueApexCharts,
      },
      data() {
        return {
          chartOptions: {
            chart: {
              type: "line",
            },
          },
          chartSeries: [
            {
              name: "Sales",
              data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
            },
          ],
        };
      },
    };
    </script>
    ```

3.  **Customization:** _Explore various customization options provided by ApexCharts to modify the appearance and behavior of your charts. Modify the `chartOptions` data in your component accordingly._

    ```html
    <script>
    export default {
      data() {
        return {
          chartOptions: {
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
          },
          // ...
        };
      },
    };
    </script>
    ```

**_More Details_**

_For detailed documentation, configuration options, and advanced usage, refer to the [<font color="#50b5ff">**official ApexCharts documentation**</font>](https://apexcharts.com/docs/installation/)._

**_Examples_**

_Explore the [<font color="#50b5ff">**ApexCharts demos**</font>](https://apexcharts.com/vue-chart-demos/) for interactive examples showcasing the library's capabilities._
