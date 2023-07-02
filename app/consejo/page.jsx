import Head from "next/head";

import Header from "@/components/consejo/Header";
import Sidebar from "@/components/consejo/Sidebar";
import { FaPen, FaTrashAlt } from "react-icons/fa";

export default function Consejo() {
   return (
      <>
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Sidebar>
            <main className="bg-gray-100 min-h-screen">
               <Header title="Listado de asociados" />
               <h1 className="text-4xl p-4 text-center">Asociados</h1>
               <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-4">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                     <thead className="text-sm text-gray-900 uppercase dark:text-gray-400 border border-b-gray-200 ">
                        <tr>
                           <th
                              scope="col"
                              className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                           >
                              ACCIONES
                           </th>
                           <th scope="col" className="px-6 py-3">
                              Nº ASOCIADO
                           </th>
                           <th
                              scope="col"
                              className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                           >
                              NOMBRE
                           </th>
                           <th scope="col" className="px-6 py-3">
                              COMUNIDADES
                           </th>
                           <th
                              scope="col"
                              className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                           >
                              ALTA
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">1</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Julio Ramirez
                           </td>
                           <td className="px-6 py-4">50</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              02/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">2</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Daniela Carrasco
                           </td>
                           <td className="px-6 py-4">40</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              02/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">3</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Jose Guerrero
                           </td>
                           <td className="px-6 py-4">33</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              01/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">4</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Ramon Flores
                           </td>
                           <td className="px-6 py-4">50</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              01/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">5</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Martin Cortes
                           </td>
                           <td className="px-6 py-4">100</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              02/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">6</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Inés Campos
                           </td>
                           <td className="px-6 py-4">56</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              02/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">7</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Verónica Rubio
                           </td>
                           <td className="px-6 py-4">21</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              02/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">8</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Lidia Crespo
                           </td>
                           <td className="px-6 py-4">35</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              01/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">9</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Julio Ramirez
                           </td>
                           <td className="px-6 py-4">96</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              02/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">10</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Agustin Carrasco
                           </td>
                           <td className="px-6 py-4">88</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              02/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">11</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Ana Isabel Velasco
                           </td>
                           <td className="px-6 py-4">20</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              02/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">12</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Eduardo Castro
                           </td>
                           <td className="px-6 py-4">76</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              01/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">13</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Mateo Flores
                           </td>
                           <td className="px-6 py-4">44</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              02/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">14</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Aurora Alvarez
                           </td>
                           <td className="px-6 py-4">33</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              01/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">15</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Hugo Alonso
                           </td>
                           <td className="px-6 py-4">50</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              02/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">16</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Manuela Moya
                           </td>
                           <td className="px-6 py-4">2</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              01/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">17</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Eva Mora
                           </td>
                           <td className="px-6 py-4">5</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              01/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">18</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Montserrat Delgado
                           </td>
                           <td className="px-6 py-4">50</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              01/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">19</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Esperanza Cortes
                           </td>
                           <td className="px-6 py-4">11</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              02/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">20</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Raul Gutierrez
                           </td>
                           <td className="px-6 py-4">9</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              02/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">21</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Rocío Fernandez
                           </td>
                           <td className="px-6 py-4">6</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              01/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">22</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Manuel Alonso
                           </td>
                           <td className="px-6 py-4">50</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              01/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">23</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Felix Diez
                           </td>
                           <td className="px-6 py-4">99</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              02/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">24</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              María Luisa Ortega
                           </td>
                           <td className="px-6 py-4">5</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              02/07/2023
                           </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                           >
                              <div className="flex flex-row gap-4 ">
                                 <FaPen className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                                 <FaTrashAlt className="text-mainColor cursor-pointer text-lg hover:scale-125 transition duration-300" />
                              </div>
                           </th>
                           <td className="px-6 py-4">25</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              Consuelo Ferrer
                           </td>
                           <td className="px-6 py-4">43</td>
                           <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              02/07/2023
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </main>
         </Sidebar>
      </>
   );
}
