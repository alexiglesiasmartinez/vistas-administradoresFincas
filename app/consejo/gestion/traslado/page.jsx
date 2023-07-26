import React from "react";
import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import { FaRegCheckCircle, FaRegArrowAltCircleLeft } from "react-icons/fa";
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
               <h1 className="text-2xl text-center">
                  ¡Traslado solicitado con éxito!
               </h1>
               <p>Recibirás un correo cuando el traslado haya finalizado.</p>
               <FaRegCheckCircle className="text-3xl text-green-900" />
            </div>
         </main>
      </Sidebar>
   );
}

export default Traslado;
