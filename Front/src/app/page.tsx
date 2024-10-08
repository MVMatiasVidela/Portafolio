import './globals.css';
import Title from '@/components/Home/Title/title';

import Cv from '@/components/CV/Cv';
import ProyectsHome from '@/components/Home/ProyectsHome';
import Info from '@/components/Home/Info';
import BlurFade from '@/components/magicui/blurFade/blur-fade';

export default function Home() {
  return (
    <div className="bg-black/50 p-8">
      <BlurFade delay={0.25 } inView>
        <div>
          <Title />
        </div>
        <div>
          <Info />
        </div>
        <div>
          <ProyectsHome />
        </div>
        <div className="flex flex-col items-center m-[100px]">
          <p className="text-[40px] font-semibold">¿Te interesa contratarme?</p>
          <p className="text-[20px] mt-4 text-center">
            ¡Hablemos y exploremos cómo puedo aportar valor a tu equipo!
          </p>

          <Cv />
        </div>
      </BlurFade>
    </div>
  );
}
