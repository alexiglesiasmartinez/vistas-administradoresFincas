"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
   FaArrowLeft,
   FaArrowRight,
   FaCaretDown,
   FaShieldAlt,
   FaPencilAlt,
} from "react-icons/fa";
import { HiOutlineReceiptTax } from "react-icons/hi";

const Sidebar = ({ children }) => {
   const [expanded, setExpanded] = useState(true);
   const [addContentWhenExpand, setAddContentWhenExpand] = useState(true);
   const [showLOPDoptions, setShowLOPDoptions] = useState(true);
   const [isMobileView, setIsMobileView] = useState(false);

   const toggleWidth = () => {
      setExpanded(!expanded);
      setAddContentWhenExpand(!addContentWhenExpand);
   };

   useEffect(() => {
      if (expanded) {
         setShowLOPDoptions(true);
      } else {
         setShowLOPDoptions(false);
      }
   }, [expanded]);

   useEffect(() => {
      const handleResize = () => {
         const isMobile = window.innerWidth < 1280; // 768 - Establece el valor umbral para la vista móvil según tus necesidades
         setIsMobileView(isMobile);
      };
      handleResize();
      window.addEventListener("resize", handleResize); // Agrega un listener para manejar el cambio de tamaño de la ventana
      return () => {
         window.removeEventListener("resize", handleResize); // Limpia el listener al desmontar el componente
      };
   }, []);

   return (
      <div className="flex z-50 relative">
         <div
            className={`
            h-screen z-50 bg-white border-r-[1px] flex flex-col justify-between
            ${
               isMobileView
                  ? `absolute top-0 left-0 p-2 ${
                       expanded ? "w-screen" : "sticky w-16"
                    }`
                  : `sticky top-0 ${expanded ? "w-80" : "w-20"} p-4`
            }`}
         >
            <div className="flex justify-start flex-col items-center">
               <Link href="/">
                  <div className="flex flex-col gap-3  justify-center items-center text-mainColor font-semibold text-center ">
                     <Image
                        src="/images/logo1.png"
                        width={50}
                        height={50}
                        alt="Logo2"
                     />
                     {addContentWhenExpand && (
                        <span className="ml-2">
                           Consejo General de Colegios de Administradores de
                           Fincas
                        </span>
                     )}
                  </div>
               </Link>

               <span className="border-b-[1px] border-gray-200 w-full p-2"></span>

               <div className="flex hover:bg-mainColor hover:text-white active:bg-mainColor_v2 cursor-pointer my-2 p-3 rounded-lg w-full transition duration-100">
                  {expanded ? (
                     <div className="flex w-full">
                        <div
                           href="/"
                           className="flex justify-start items-center flex-col w-full"
                        >
                           <div className="flex justify-around w-full">
                              <div className="flex justify-start items-start flex-row w-full mb-2">
                                 <FaShieldAlt size={20} />
                                 {addContentWhenExpand && (
                                    <span className="ml-2">LOPD</span>
                                 )}
                              </div>
                           </div>

                           <div className="flex flex-col w-full">
                              {showLOPDoptions && (
                                 <div className="flex flex-col px-5">
                                    <Link href="/client">
                                       <div className="text-sm hover:bg-gray-100 hover:text-black cursor-pointer my-1 p-2 rounded-lg w-full transition duration-100">
                                          <span className="ml-2">Resumen</span>
                                       </div>
                                    </Link>
                                    <Link href="/client/documentacion">
                                       <div className="text-sm hover:bg-gray-100 hover:text-black cursor-pointer my-1 p-2 rounded-lg w-full transition duration-100">
                                          <span className="ml-2">
                                             Mi documentación
                                          </span>
                                       </div>
                                    </Link>
                                    <Link href="/client/tareas">
                                       <div className="text-sm hover:bg-gray-100 hover:text-black cursor-pointer my-1 p-2 rounded-lg w-full transition duration-100">
                                          <span className="ml-2">Tareas</span>
                                       </div>
                                    </Link>
                                 </div>
                              )}
                           </div>
                        </div>
                     </div>
                  ) : (
                     <Link href="/client">
                        <div className="flex justify-start items-center flex-col w-full">
                           <div className="flex justify-around w-full">
                              <div className="flex justify-start items-start flex-row w-full">
                                 <FaShieldAlt size={20} />
                              </div>
                           </div>
                        </div>
                     </Link>
                  )}
               </div>

               <div className="flex hover:bg-mainColor hover:text-white active:bg-mainColor_v2 cursor-pointer my-2 p-3 rounded-lg w-full transition duration-100">
                  <Link
                     href="/tae"
                     className="flex justify-start items-center w-full"
                  >
                     <HiOutlineReceiptTax size={20} />
                     {addContentWhenExpand && <span className="ml-2">CAE</span>}
                  </Link>
               </div>

               <div className="flex hover:bg-mainColor hover:text-white active:bg-mainColor_v2 cursor-pointer my-2 p-3 rounded-lg w-full transition duration-100">
                  <Link
                     href="/firma-digital"
                     className="flex justify-start items-center w-full"
                  >
                     <FaPencilAlt size={20} />
                     {addContentWhenExpand && (
                        <span className="ml-2">Firma digital</span>
                     )}
                  </Link>
               </div>
            </div>
            {addContentWhenExpand ? (
               <div className="flex justify-end w-full">
                  <div
                     className="flex bg-mainColor hover:bg-mainColor_v2 active:bg-mainColor_v3 shadow-lg text-white p-3 rounded-lg cursor-pointer max-w-max"
                     onClick={toggleWidth}
                  >
                     <FaArrowLeft size={20} />
                  </div>
               </div>
            ) : (
               <div
                  className="flex justify-center items-center bg-mainColor hover:bg-mainColor_v2 active:bg-mainColor_v3 shadow-lg text-white p-3 rounded-lg cursor-pointer w-full max-w-max"
                  onClick={toggleWidth}
               >
                  <FaArrowRight size={20} />
               </div>
            )}
         </div>
         <main className="w-full overflow-y-auto">
            <div className="sticky top-0">{children}</div>
         </main>
      </div>
   );
};

export default Sidebar;
