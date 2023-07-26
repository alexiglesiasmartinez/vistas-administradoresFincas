import Link from 'next/link';
import Header from '@/components/client/Header';
import { FaFileAlt } from "react-icons/fa";

export default function Documentacion() {
    return (
        <>
            <main className='bg-gray-100 h-screen flex flex-col w-full overflow-auto'>
                <Header title="Documentación" />
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 justify-center items-start mx-4 mb-4 py-4 h-fit'>
                    <Link href='' className='flex flex-col justify-center items-center gap-4 bg-white rounded-lg p-12 shadow-md hover:shadow-lg transition duration-300'>
                        <div className="rounded-full p-3 bg-mainColor text-white">
                            <FaFileAlt className='text-2xl' />
                        </div>
                        <h2>Estructura básica</h2>
                    </Link>
                    <Link href='' className='flex flex-col justify-center items-center gap-4 bg-white rounded-lg p-12 shadow-md hover:shadow-lg transition duration-300'>
                        <div className="rounded-full p-3 bg-mainColor text-white">
                            <FaFileAlt className='text-2xl' />
                        </div>
                        <h2>Documentos</h2>
                    </Link>
                    <Link href='' className='flex flex-col justify-center items-center gap-4 bg-white rounded-lg p-12 shadow-md hover:shadow-lg transition duration-300'>
                        <div className="rounded-full p-3 bg-mainColor text-white">
                            <FaFileAlt className='text-2xl' />
                        </div>
                        <h2>Políticas para la página web</h2>

                    </Link>
                    <Link href='' className='flex flex-col justify-center items-center gap-4 bg-white rounded-lg p-12 shadow-md hover:shadow-lg transition duration-300'>
                        <div className="rounded-full p-3 bg-mainColor text-white">
                            <FaFileAlt className='text-2xl' />
                        </div>
                        <h2>Seguridad de la información</h2>
                    </Link>
                    <Link href='' className='flex flex-col justify-center items-center gap-4 bg-white rounded-lg p-12 shadow-md hover:shadow-lg transition duration-300'>
                        <div className="rounded-full p-3 bg-mainColor text-white">
                            <FaFileAlt className='text-2xl' />
                        </div>
                        <h2>Contratos</h2>
                    </Link>
                    <Link href='' className='flex flex-col justify-center items-center gap-4 bg-white rounded-lg p-12 shadow-md hover:shadow-lg transition duration-300'>
                        <div className="rounded-full p-3 bg-mainColor text-white">
                            <FaFileAlt className='text-2xl' />
                        </div>
                        <h2>Cámaras de vigilancia</h2>
                    </Link>
                </div>
            </main>
        </>
    );
}