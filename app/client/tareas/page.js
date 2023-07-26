import Header from '@/components/client/Header';
import TareasList from '@/components/client/TareasLists';
import TareasSummary from '@/components/client/TareasSummary';
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default function Tareas() {
    return (
        <>
            <main className='bg-gray-100 h-screen flex flex-col w-full overflow-auto'>
                <Header title="Tareas" />
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 justify-center items-start mx-4 mb-1 py-4 h-fit'>
                    <div className="flex justify-between items-center gap-4 bg-white rounded-lg p-12 shadow-md hover:shadow-lg transition duration-300">
                        <div className="flex flex-col justify-center items-center gap-3 w-3/6">
                            <div className="flex justify-center text-white bg-mainColor w-fit p-2 rounded-full">
                                <FaCheck />
                            </div>
                            <h1 className="w-full text-center">Tareas completas</h1>
                            <h1 className="text-5xl font-black w-full text-center">14</h1>
                        </div>
                        <TareasSummary />
                    </div>
                    <div className="flex justify-between items-center gap-4 bg-white rounded-lg p-12 shadow-md hover:shadow-lg transition duration-300">
                        <div className="flex flex-col justify-center items-center gap-3 w-3/6">
                            <div className="flex justify-center text-white bg-mainColor w-fit p-2 rounded-full">
                                <FaTimes />
                            </div>
                            <h1 className="w-full text-center">Tareas incompletas</h1>
                            <h1 className="text-5xl font-black w-full text-center">5</h1>
                        </div>
                        <TareasSummary />
                    </div>
                </div>
                <div className='flex flex-col gap-4 justify-start items-start mx-4 mb-4'>
                    <h2>Listado de tareas</h2>
                    <div className="flex justify-between items-center gap-4 w-full cursor-pointer">
                        <TareasList />
                    </div>
                </div>
            </main >
        </>
    );
}