import React from "react";
import Header from "@/components/consejo/Header";
import Sidebar from "@/components/consejo/Sidebar";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";

function Alta() {
   return (
      <Sidebar>
         <main className="bg-gray-100 min-h-screen">
            <Header title="Altas y bajas" />
            <div className="flex flex-col justify-center items-center">
               <Link href="/consejo/gestion">
                  <FaRegArrowAltCircleLeft className="text-mainColor text-4xl" />
               </Link>
               <h1 className="text-4xl pt-4 text-center">Alta de asociado</h1>
               <div className="flex p-12 w-full lg:w-1/2">
                  <form className="w-full">
                     <div class="mb-6">
                        <label
                           forHtml="input1"
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
                           forHtml="input2"
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
                           forHtml="input3"
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
                           forHtml="input4"
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
                           forHtml="input5"
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
                           forHtml="input6"
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
                           forHtml="input7"
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

export default Alta;
