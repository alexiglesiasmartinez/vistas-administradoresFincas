import React from "react";
import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";

function Csv() {
   return (
      <Sidebar>
         <main className="bg-gray-100 min-h-screen">
            <Header title="Alta de comunidad" />
            <div className="flex flex-col justify-center items-center">
               <Link href="/admin/alta">
                  <FaRegArrowAltCircleLeft className="text-mainColor text-4xl" />
               </Link>
               <h1 className="text-4xl p-4 text-center">Añade aquí tu CSV</h1>
            </div>
            <div className="flex flex-col justify-center items-center border-dashed border-8 bg-gray-200 rounded-md border-mainColor m-4 h-48 cursor-pointer">
               <h1 className="text-xl p-4 text-center text-mainColor italic">
                  Arrastra aquí tu fichero con extensión .csv
               </h1>
            </div>
         </main>
      </Sidebar>
   );
}

export default Csv;
