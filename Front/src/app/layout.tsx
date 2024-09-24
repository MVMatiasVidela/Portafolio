// src/app/layout.tsx

import {
  Proza_Libre,
  League_Gothic,
  Roboto,
  Dosis,
  Inter,
} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/Footer/footer';
import Reds from '@/components/Home/Redes/redes';
import Head from 'next/head';
import MaintenanceMode from '@/components/MaintenanceMode/MaintenanceMode'; // Importa el nuevo componente

// Importa las fuentes de Google Fonts
const proza = Proza_Libre({ weight: '600', subsets: ['latin'] });
const roboto = Roboto({ weight: '400', subsets: ['latin'] });
const league = League_Gothic({ weight: 'variable', subsets: ['latin'] });
const dosis = Dosis({ weight: 'variable', subsets: ['latin'] });
const inter = Inter({ weight: 'variable', subsets: ['latin'] });

export const metadata = {
  title: 'Matías Videla',
  description: 'Portafolio personal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={inter.className}>
        <MaintenanceMode>
          <div className="circulos ">
            {/* Aquí van tus SVGs y otros elementos */}
            <Navbar />
            <Reds />

            {children}

            <Footer />
            <div id="cursor"></div>
          </div>
        </MaintenanceMode>
      </body>
    </html>
  );
}
