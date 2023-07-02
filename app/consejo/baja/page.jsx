import React from "react";
import Header from "@/components/consejo/Header";
import Sidebar from "@/components/consejo/Sidebar";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import Link from "next/link";

function Manual() {
   return (
      <Sidebar>
         <main className="bg-gray-100 min-h-screen">
            <Header title="Altas y bajas" />
            <div className="flex flex-col justify-center items-center">
               <Link href="/consejo/gestion">
                  <FaRegArrowAltCircleLeft className="text-mainColor text-4xl" />
               </Link>
               <h1 className="text-4xl p-4 text-center">Baja de asociado</h1>
               <div className="flex justify-center items-center p-12 w-full lg:w-1/2">
                  <form className="w-full">
                     <div class="mb-6">
                        <label
                           forHtml="input1"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           Escoge el usuario al que quieres dar de baja:
                        </label>
                        <select
                           id="countries"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                           <option selected>Escoge un asociado:</option>
                           <option value="asociado1">Julio Ramirez</option>
                           <option value="asociado2">Daniela Carrasco</option>
                           <option value="asociado3">Jose Guerrero</option>
                           <option value="asociado4">Ramon Flores</option>
                           <option value="asociado5">Martin Cortes</option>
                           <option value="asociado6">Inés Campos</option>
                           <option value="asociado7">Verónica Rubio</option>
                           <option value="asociado8">Lidia Crespo</option>
                           <option value="asociado9">Julio Ramirez</option>
                           <option value="asociado10">Agustin Carrasco</option>
                           <option value="asociado11">
                              Ana Isabel Velasco
                           </option>
                           <option value="asociado12">Eduardo Castro</option>
                           <option value="asociado13">Mateo Flores</option>
                           <option value="asociado14">Aurora Alvarez</option>
                           <option value="asociado15">Hugo Alonso</option>
                           <option value="asociado16">Manuela Moya</option>
                           <option value="asociado17">Eva Mora</option>
                           <option value="asociado18">
                              Montserrat Delgado
                           </option>
                           <option value="asociado19">Esperanza Cortes</option>
                           <option value="asociado20">Raul Gutierrez</option>
                           <option value="asociado21">Rocío Fernandez</option>
                           <option value="asociado22">Manuel Alonso</option>
                           <option value="asociado23">Felix Diez</option>
                           <option value="asociado24">
                              Julio RamirezMaría Luisa Ortega
                           </option>
                           <option value="asociado25">Consuelo Ferrer</option>
                        </select>
                     </div>

                     <div class="mb-6">
                        <label
                           forHtml="input1"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           Escribe el nombre completo del usuario para confirmar
                           la baja:
                        </label>
                        <input
                           type="text"
                           id="input1"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Jose Guerrero"
                           required
                        />
                     </div>

                     <button
                        type="submit"
                        class="text-white bg-mainColor hover:bg-mainColor_v2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                     >
                        Dar de baja
                     </button>
                  </form>
               </div>
            </div>
         </main>
      </Sidebar>
   );
}

export default Manual;
