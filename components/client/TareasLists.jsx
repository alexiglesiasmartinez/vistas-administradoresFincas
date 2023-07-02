"use client";

import React, { useState } from "react";
import { data } from "@/data/tareasList.js";

const TareasList = () => {
   const [checkedItems, setCheckedItems] = useState(
      Array(data.length).fill(false)
   );

   const handleLabelClick = (index, event) => {
      event.stopPropagation(); // Evitar la propagación del evento
      const newCheckedItems = [...checkedItems];
      newCheckedItems[index] = !newCheckedItems[index];
      setCheckedItems(newCheckedItems);
   };

   return (
      <div className="flex flex-col w-full">
         <ul>
            {data.map((el, index) => (
               <li key={el.id} className="w-full my-4">
                  <label
                     htmlFor={`tareasList-${el.id}`}
                     className={`flex gap-4 py-4 px-8 rounded-full cursor-pointer hover:shadow-lg transition duration-300 ${
                        checkedItems[index]
                           ? "bg-mainColor text-white"
                           : "bg-white"
                     }`}
                  >
                     <input
                        type="checkbox"
                        id={`tareasList-${el.id}`}
                        onClick={(event) => handleLabelClick(index, event)}
                     />
                     <p>{el.description}</p>
                  </label>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default TareasList;
