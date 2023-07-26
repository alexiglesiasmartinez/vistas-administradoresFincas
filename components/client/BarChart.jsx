"use client";

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
} from "chart.js";

ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
);

const BarChart = () => {
   const [chartData, setChartData] = useState({
      datasets: [],
   });

   const [chartOptions, setChartOptions] = useState({});

   useEffect(() => {
      setChartData({
         labels: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sat", "Dom"],
         datasets: [
            {
               label: "Cumplimiento",
               data: [12, 14, 18, 50, 50, 40, 80],
               borderColor: "#000000",
               backgroundColor: "#AC1A2F",
            },
         ],
      });
      setChartOptions({
         plugins: {
            legend: {
               display: false,
               position: "top",
            },
            title: {
               display: false,
               text: "Cumplimiento semanal",
            },
         },
         maintainAspectRatio: false,
         responsive: true,
      });
   }, []);

   return (
      <>
         <div className="w-full md:col-span-2 relative lg:h-[50vh] h-[50vh] m-auto px-8  pt-6 pb-12 mt-0 border rounded-lg bg-white z-0 hover:shadow-lg transition duration-300">
            <p className="pb-2">Cumplimiento semanal</p>
            <Bar data={chartData} options={chartOptions} />
         </div>
      </>
   );
};

export default BarChart;
