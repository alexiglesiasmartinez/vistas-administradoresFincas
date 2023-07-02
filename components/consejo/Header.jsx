import React from "react";

const Header = (props) => {
   return (
      <div className="flex justify-between px-4 pt-4">
         <h2>{props.title}</h2>
         <h2>
            Bienvenido, <span className="font-black">Julio</span>
         </h2>
      </div>
   );
};

export default Header;
