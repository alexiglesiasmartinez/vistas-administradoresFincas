import Head from 'next/head';

import Header from '@/components/consejo/Header';
import Sidebar from '@/components/consejo/Sidebar';
import Link from 'next/link';
import { FaPlus, FaTrashAlt } from "react-icons/fa";

export default function Alta() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Generated by create next app' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Sidebar>
                <main className='bg-gray-100 min-h-screen'>
                    <Header title="Altas y bajas" />
                    <h1 className='text-4xl p-4 text-center'>Elige si dar de alta o de baja</h1>
                    <div className="flex flex-col xl:grid xl:grid-cols-2 gap-4 p-4 mx-auto">
                        <Link href="/consejo/alta">
                            <div className='flex justify-center items-center flex-col gap-4 text-white rounded-3xl bg-mainColor p-28 shadow-md hover:shadow-lg transition duration-300'>
                                <FaPlus className='text-3xl' />
                                <h1 className='text-lg'>Alta</h1>
                            </div>
                        </Link>
                        <Link href="/consejo/baja">
                            <div className='flex justify-center items-center flex-col gap-4 text-white rounded-3xl bg-mainColor p-28 shadow-md hover:shadow-lg transition duration-300'>
                                <FaTrashAlt className='text-3xl' />
                                <h1 className='text-lg'>Baja</h1>
                            </div>
                        </Link>
                    </div>
                </main>
            </Sidebar>
        </>
    );
}