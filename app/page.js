import Link from 'next/link';
import { FaUserAlt, FaSuitcase, FaUserGraduate } from 'react-icons/fa';


export default function Home() {
   return (
      <>
         <div className="flex items-center flex-col justify-center h-screen">
            <div className="text-2xl m-4 bg-mainColor hover:bg-mainColor_v2 active:bg-mainColor_v3 cursor-pointer text-white flex items-center rounded-md transition duration-300 shadow-lg">
               <Link href="/client" className="font-medium">
                  <div className="flex justify-center items-center p-4 w-96">
                     <FaUserAlt className="mr-2" size={20} />
                     <p>Ir a CLIENTE</p>
                  </div>
               </Link>
            </div>
            <div className="text-2xl m-4 bg-mainColor hover:bg-mainColor_v2 active:bg-mainColor_v3 cursor-pointer text-white flex items-center rounded-md transition duration-300 shadow-lg">
               <Link href="/admin" className="font-medium">
                  <div className="flex justify-center items-center p-4 w-96">
                     <FaSuitcase className="mr-2" size={20} />
                     <p>Ir a Administrador</p>
                  </div>
               </Link>
            </div>
            <div className="text-2xl m-4 bg-mainColor hover:bg-mainColor_v2 active:bg-mainColor_v3 cursor-pointer text-white flex items-center rounded-md transition duration-300 shadow-lg">
               <Link href="/consejo" className="font-normal">
                  <div className="flex justify-center items-center p-4 w-96">
                     <FaUserGraduate className="mr-2" size={20} />
                     <p>Ir a CONSEJO GENERAL</p>
                  </div>
               </Link>
            </div>
         </div >
      </>
   );
}
