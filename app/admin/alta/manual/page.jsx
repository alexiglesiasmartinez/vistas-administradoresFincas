import React from "react";
import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import Link from "next/link";

function Manual() {
   return (
      <Sidebar>
         <main className="bg-gray-100 min-h-screen">
            <Header title="Alta de comunidad" />
            <div className="flex flex-col justify-center items-center">
               <Link href="/admin/alta">
                  <FaRegArrowAltCircleLeft className="text-mainColor text-4xl" />
               </Link>
               <h1 className="text-4xl pt-4 text-center">Alta manual</h1>
               <div className="flex p-12 w-full lg:w-1/2">
                  <form className="w-full">
                     <div class="mb-6">
                        <label
                           htmlFor="input1"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           Nombre de la entidad (empresa/autonomo):
                        </label>
                        <input
                           type="email"
                           id="input1"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Ejemplo S.L"
                           required
                        />
                     </div>

                     <div class="mb-6">
                        <label
                           htmlFor="input2"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           Dirección completa de la entidad:
                        </label>
                        <input
                           type="text"
                           id="input2"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Avenida España Nº 18"
                           required
                        />
                     </div>

                     <div class="mb-6">
                        <label
                           htmlFor="input3"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           Documento de identificación fiscal:
                        </label>
                        <input
                           type="text"
                           id="input3"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="44847501P"
                           required
                        />
                     </div>

                     <div class="mb-6">
                        <label
                           htmlFor="input4"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           Nombre del representante legal:
                        </label>
                        <input
                           type="text"
                           id="input4"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Alejandro Fernández Ruiz"
                           required
                        />
                     </div>

                     <div class="mb-6">
                        <label
                           htmlFor="input5"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           NIF del representate legal:
                        </label>
                        <input
                           type="text"
                           id="input5"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Ejemplo S.L"
                           required
                        />
                     </div>

                     <div class="mb-6">
                        <label
                           htmlFor="input6"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           Teléfono de contacto:
                        </label>
                        <input
                           type="tel"
                           id="input6"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="93656580"
                           required
                        />
                     </div>

                     <div class="mb-6">
                        <label
                           htmlFor="input7"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           Dirección de correo electrónico:
                        </label>
                        <input
                           type="email"
                           id="input7"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="ejemplo@midominio.com"
                           required
                        />
                     </div>

                     <div class="mb-6">
                        <label
                           htmlFor="input8"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           ¿Puede englobarse su actividad en alguna de las
                           siguientes categorías?
                        </label>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_1"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Remember me
                           </label>
                        </div>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_2"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Enseñanza reglada
                           </label>
                        </div>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_3"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Telecomunicaciones
                           </label>
                        </div>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_4"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Generación y uso de perfiles
                           </label>
                        </div>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_5"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Solvencia patrimonial y crédito
                           </label>
                        </div>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_6"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Entidades bancarias y financieras
                           </label>
                        </div>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_7"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Establecimientos financieros de crédito
                           </label>
                        </div>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_8"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Entidades aseguradoras y reaseguradoras
                           </label>
                        </div>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_9"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Servicios de inversión
                           </label>
                        </div>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_10"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Distribución o comercialización de energía
                              eléctrica o de gas natural
                           </label>
                        </div>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_11"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Publicidad y prospección comercial
                           </label>
                        </div>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_12"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Centro sanitario
                           </label>
                        </div>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_13"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Informes comerciales relativos a personas físicas
                           </label>
                        </div>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_14"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Actividades de juego a través de canales
                              electrónicos, informáticos, telemáticos e
                              interactivos
                           </label>
                        </div>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_15"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Seguridad privada
                           </label>
                        </div>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_16"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Federación deportiva
                           </label>
                        </div>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_17"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Actividades políticas, sindicales o religiosas
                           </label>
                        </div>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_18"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Actividades de servicios sociales
                           </label>
                        </div>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_19"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Videovigilancia masiva
                           </label>
                        </div>
                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input8_20"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              No, mi actividad no encaja en ninguna de las
                              categorías anteriores
                           </label>
                        </div>
                     </div>

                     <div class="mb-6">
                        <label
                           htmlFor="input9"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           Especifica todo lo que puedas tu actividad. ¿A qué se
                           dedica tu empresa?
                        </label>
                        <input
                           type="text"
                           id="input9"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Sector inmobiliario"
                           required
                        />
                     </div>

                     <div class="mb-6">
                        <label
                           htmlFor="input10"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           ¿Cuántos empleados tiene tu empresa?
                        </label>
                        <input
                           type="number"
                           id="input10"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="25"
                           required
                        />
                     </div>

                     <div class="mb-6">
                        <label
                           htmlFor="input8"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           ¿Puede englobarse su actividad en alguna de las
                           siguientes categorías?
                        </label>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input10_1"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Datos personales de clientes
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input10_2"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Datos personales de proveedores
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input10_3"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Datos personales de trabajadores
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input10_4"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Datos personales de currículums
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input10_5"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Datos personales de potenciales clientes
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input10_6"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Datos personales de usuarios de página web
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input10_7"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Datos personales de cámaras de videovigilancia
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input10_8"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Datos personales de dispositivos de
                              geolocalización
                           </label>
                        </div>
                     </div>

                     <div class="mb-6">
                        <label
                           htmlFor="input8"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           ¿El registro horario de sus trabajadores, ¿se hace a
                           través de dispositivos que se basan en datos
                           biométricos (huella, iris, reconocimiento facial,
                           etc.)?
                        </label>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input11_1"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Sí
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input11_2"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              No
                           </label>
                        </div>
                     </div>

                     <div class="mb-6">
                        <label
                           htmlFor="input8"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           ¿Con qué finalidad se utilizan los dispositivos de
                           geolocalización que utiliza?
                        </label>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input12_1"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Seguridad de los vehículos
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input12_2"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Control laboral
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input12_2"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Otros (especificar):
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              type="text"
                              id="input4"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Con la finalidad de estudiar a los clientes"
                              required
                           />
                        </div>
                     </div>

                     <div class="mb-6">
                        <label
                           htmlFor="input8"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           Selecciona todas las empresas o profesionales
                           externos que traten datos personales responsabilidad
                           de su entidad:
                        </label>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input12_1"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Asesoría fiscal
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input12_1"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Asesoría laboral
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input12_1"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Empresa de videovigilancia
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input12_1"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Asesoría fiscal
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input12_1"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Empresa de informática
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input12_1"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Empresa de destrucción documental
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input12_1"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Empresa de servicios de backup
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input12_1"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Ninguna empresa trata datos personales
                              responsabilidad de mi entidad
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input12_1"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Otros (especificar):
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              type="text"
                              id="input4"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Con la finalidad de estudiar a los clientes"
                              required
                           />
                        </div>
                     </div>

                     <div class="mb-6">
                        <label
                           htmlFor="input8"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           ¿Cuenta su entidad con página web?
                        </label>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input11_1"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Sí
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              type="text"
                              id="input4"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="miweb.com"
                              required
                           />
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input11_2"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              No
                           </label>
                        </div>
                     </div>

                     <div class="mb-6">
                        <label
                           htmlFor="input8"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           En el normal desarrollo de su actividad propia,
                           ¿accede a datos personales responsabilidad de otras
                           organizaciones?
                        </label>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input11_1"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Sí
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input11_2"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              No
                           </label>
                        </div>
                     </div>

                     <div class="mb-6">
                        <label
                           htmlFor="input8"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           ¿Deseas llevar a cabo la contratación de alguno de
                           estos productos adicionales?
                        </label>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input11_1"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              DPO
                           </label>
                        </div>

                        <div class="flex items-center pl-5 pt-2">
                           <input
                              id="input11_2"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                           />
                           <label
                              htmlFor="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Seguro RC
                           </label>
                        </div>
                     </div>

                     <button
                        type="submit"
                        class="text-white bg-mainColor hover:bg-mainColor_v2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                     >
                        Alta
                     </button>
                  </form>
               </div>
            </div>
         </main>
      </Sidebar>
   );
}

export default Manual;
