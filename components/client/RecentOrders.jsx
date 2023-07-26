import React from "react";
import { data } from "@/data/data.js";
import { FaCheck } from "react-icons/fa";

const RecentOrders = () => {
   return (
      <div className="lg:h-[50vh] h-[50vh] w-full col-span-1 relative m-auto p-4 border rounded-lg bg-white overflow-scroll overflow-x-hidden hover:shadow-lg transition duration-300">
         <h1>Últimas tareas realizadas</h1>
         <ul>
            {data.map((order, id) => (
               <li
                  key={id}
                  className="bg-gray-50 hover:bg-gray-100 active:bg-gray-200 rounded-lg my-5 p-5 flex items-center cursor-pointer"
               >
                  <div className="rounded-lg p-3">
                     <FaCheck className="text-green-700" />
                  </div>
                  <div className="flex flex-col gap-2 pl-4">
                     <p className="text-gray-900">{order.total}</p>
                     <p className="text-gray-500 font-thin text-sm">
                        {order.name.first}
                     </p>
                     <p className="lg:flex md:hidden text-gray-900 text-sm">
                        {order.date}
                     </p>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default RecentOrders;
