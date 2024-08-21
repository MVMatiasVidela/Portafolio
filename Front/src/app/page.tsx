import "./globals.css";
import Title from "@/components/Home/Title/title";
import Technologies from "@/components/About/Technologies/technologies";
import Carousel from "@/components/Carousel/Carousel";
import Cv from "@/components/CV/Cv";
import ProyectsHome from "@/components/Home/ProyectsHome";
import Info from "@/components/Home/Info";

export default function Home() {
  return (

    <div className="bg-black/50 p-8">
      <div>
        <Title />
      </div>
      <div>
        <Info />
      </div>
      <div>
        <ProyectsHome />
      </div>
      {/* <div>
        <Carousel />
      </div> */}
      {/* <div>
        <Technologies />
      </div> */}
      <div className="flex flex-col items-center m-[100px]">
        <p className="text-[30px] font-semibold">¿Te interesa contratarme?</p>
        <p>Mis ideas te haran volar. </p>
        <Cv />
      </div>

    </div>
  );
}
