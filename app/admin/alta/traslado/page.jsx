import React from "react";
import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";

function Traslado() {
   return (
      <Sidebar>
         <main className="bg-gray-100 min-h-screen">
            <Header title="Alta de comunidad" />
            <div className="flex flex-col justify-center items-center">
               <Link href="/admin/alta">
                  <FaRegArrowAltCircleLeft className="text-mainColor text-4xl" />
               </Link>
               <h1 className="text-4xl p-4 text-center">Traslado</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 p-10 ">
               <div className="flex px-12 w-full lg:w-1/2">
                  <form className="w-full">
                     <div class="mb-6">
                        <label
                           forHtml="input1"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           Nº Colegiado:
                        </label>
                        <input
                           type="email"
                           id="input1"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Introduce tu número de colegiado para tramitar tu traslado"
                           required
                        />
                     </div>

                     <button
                        type="submit"
                        class="text-white bg-mainColor hover:bg-mainColor_v2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                     >
                        Trasladar
                     </button>
                  </form>
               </div>
            </div>
         </main>
      </Sidebar>
   );
}

export default Traslado;
