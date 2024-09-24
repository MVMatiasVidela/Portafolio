'use client';

import { cn } from '@/lib/utils';
import { AnimatedList } from '@/components/magicui/List/animated-list';

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  
}

let notifications = [
  {
    name: 'Technovid',
    description: 'Proyecto',
   
    icon: '/images/Technovid.png', // Imagen de URL
    color: 'black',
  },
  {
    name: 'User signed up',
    description: 'Magic UI',
    
    icon: '/images/Dentall.png', // Imagen local (ajusta el path según tu estructura)
    color: 'black',
  },

 
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color,  }: Item) => {
  const isImage =
    icon.endsWith('.png') || icon.endsWith('.jpg') || icon.startsWith('http'); // Verificar si es una URL de imagen o imagen local

  return (
    <figure
      className={cn(
        'relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4',
        'transition-all duration-200 ease-in-out hover:scale-[103%]',
        '[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        'dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          {isImage ? (
            <img
              src={icon}
              alt={name}
              className="w-10 h-10 rounded-full object-cover" // ajustar tamaño de imagen
            />
          ) : (
            <span className="text-lg">{icon}</span> // Mostrar emoji si no es una URL
          )}
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl',
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
