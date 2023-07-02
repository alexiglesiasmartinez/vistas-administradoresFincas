import '@/styles/globals.css';

import { Poppins } from 'next/font/google';
const poppins = Poppins({
   weight: '400',
   subsets: ['latin'],
});

export const metadata = {
   title: 'CGCAFE',
   description: 'Consejo General de Colegios de Administradores de Fincas de España',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={poppins.className}>
            {children}
         </body>
      </html>
   );
}
