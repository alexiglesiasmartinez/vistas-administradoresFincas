"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

const TopCards = () => {
   const data = {
      labels: ["Relleno", "Vacío"],
      datasets: [
         {
            data: [80, 20],
            backgroundColor: ["#AC1A2F", "transparent"],
            borderWidth: 0,
            borderRadius: 10,
         },
      ],
   };

   const options = {
      cutout: "60%",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
         legend: {
            display: false,
         },
         tooltip: {
            enabled: false,
         },
      },
   };

   const data2 = {
      labels: ["Relleno", "Vacío"],
      datasets: [
         {
            data: [90, 10],
            backgroundColor: ["#AC1A2F", "transparent"],
            borderWidth: 0,
            borderRadius: 10,
         },
      ],
   };

   const options2 = {
      cutout: "60%",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
         legend: {
            display: false,
         },
         tooltip: {
            enabled: false,
         },
      },
   };

   return (
      <div className="flex flex-col xl:grid xl:grid-cols-5 gap-4 p-4 mx-auto">
         <div className="bg-white flex justify-center items-center flex-col gap-4 w-full border py-16 px-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <p className="text-2xl font-normal text-center">¡Hola, Juan! 👋🏻</p>
            <p className="text-sm font-light text-gray-500 text-center">
               Esto es lo que hay de nuevo
            </p>
         </div>
         <div className="lg:col-span-2 col-span-1 bg-white flex justify-between flex-col gap-5 sm:gap-0 sm:flex-row items-center text-center w-full border py-16 px-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex flex-col w-3/6">
               <p className="text-lg font-normal">Tu progreso</p>
               <p className="text-3xl font-bold">76 tareas</p>
            </div>
            <div className="flex justify-end flex-col w-3/6">
               <div className="flex flex-col w-auto h-32 relative">
                  <Doughnut data={data} options={options} chart={Chart} />
                  <p className="text-xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                     {data.datasets[0].data[0]}%
                  </p>
               </div>
            </div>
         </div>
         <div className="lg:col-span-2 col-span-1 bg-white flex justify-between flex-col gap-5 sm:gap-0 sm:flex-row items-center text-center w-full border py-16 px-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex flex-col w-3/6">
               <p className="text-lg font-normal">Tu documentación</p>
               <p className="text-3xl font-bold">90 docs</p>
            </div>
            <div className="flex justify-end flex-col w-3/6">
               <div className="flex flex-col w-auto h-32 relative">
                  <Doughnut data={data2} options={options2} chart={Chart} />
                  <p className="text-xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                     {data2.datasets[0].data[0]}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TopCards;
