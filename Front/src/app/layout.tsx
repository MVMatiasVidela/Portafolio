import type { Metadata } from "next";
import { Proza_Libre, League_Gothic, Roboto, Dosis, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import Reds from "@/components/Home/Redes/redes";
import Head from "next/head";
import Script from "next/script";


const proza = Proza_Libre({ weight: "600", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const league = League_Gothic({ weight: "variable", subsets: ["latin"] });
const dosis = Dosis({ weight: "variable", subsets: ["latin"] });
const inter = Inter({ weight: "variable", subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Matías Videla",
  description: "Portafolio personal",
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
        <div className="circulos ">
          <svg
            className="circulo circulo1"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path"
              d="M24.1,-33.4C31.4,-22.6,37.6,-15.2,41.7,-5.4C45.7,4.4,47.6,16.5,44.6,29.7C41.7,42.9,33.8,57.2,23.4,58.6C12.9,59.9,-0.3,48.4,-12.3,41C-24.4,33.5,-35.3,30.1,-41.1,22.6C-46.9,15,-47.4,3.3,-46.5,-9.3C-45.6,-21.8,-43.1,-35.2,-35.1,-45.8C-27.1,-56.5,-13.6,-64.5,-2.6,-61.4C8.4,-58.3,16.8,-44.1,24.1,-33.4Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            className="circulo circulo2"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path"
              d="M30.2,-49.3C40.1,-40.5,49.8,-33.9,53.9,-24.7C58,-15.5,56.5,-3.8,52.3,5.7C48.1,15.2,41.2,22.5,33.3,25.2C25.3,28,16.2,26.2,9.3,25.3C2.4,24.4,-2.4,24.4,-7.5,23.7C-12.5,23,-17.9,21.6,-24,18.5C-30.1,15.5,-36.9,10.9,-42.4,3.3C-47.9,-4.4,-52.2,-15.1,-48.5,-21.8C-44.9,-28.5,-33.4,-31.3,-24,-40.2C-14.6,-49.2,-7.3,-64.4,1.4,-66.6C10.1,-68.8,20.2,-58,30.2,-49.3Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            className="circulo circulo3"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path"
              d="M24,-43.4C29.8,-33.7,32.2,-24.7,42.7,-15.5C53.1,-6.2,71.5,3.4,74.5,13.6C77.6,23.9,65.1,34.8,51.7,38.1C38.3,41.3,24,37,12.3,39.3C0.6,41.6,-8.5,50.6,-21.8,55.3C-35,60,-52.6,60.4,-54.8,51.2C-56.9,42,-43.8,23.2,-40.5,9.2C-37.2,-4.7,-43.7,-13.8,-47.1,-27.8C-50.5,-41.8,-50.8,-60.7,-42.5,-69.3C-34.1,-77.8,-17,-76.1,-4,-70C9.1,-63.8,18.2,-53.2,24,-43.4Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            className="circulo circulo4"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path"
              d="M39.4,-20.2C43.3,-0.8,33.3,15.7,17.7,28C2,40.2,-19.4,48.2,-32.6,39.8C-45.7,31.4,-50.7,6.7,-43.9,-16.7C-37.1,-40.1,-18.6,-62,-0.4,-61.9C17.7,-61.8,35.5,-39.5,39.4,-20.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <Navbar />
        <Reds />
        
        {children}

        <Footer />
        <div id="cursor"></div>

        {/* Usa el componente Script de Next.js para cargar jQuery y tu script de cursor */}
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/scripts/cursor.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
