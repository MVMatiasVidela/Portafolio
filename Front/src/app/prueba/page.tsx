

import OrbitingCirclesDemo from '@/components/magicui/Orbit/circles';
import { AnimatedListDemo } from '@/components/magicui/List/list';

import React from 'react'
import { IconCloudDemo } from '@/components/magicui/Cloud/Cloud';
import { AnimatedShinyTextDemo } from '@/components/magicui/Shiny/Shiny';
import { BorderBeamDemo } from '@/components/magicui/Border/Border';
import { NeonGradientCardDemo } from '@/components/magicui/Neon/Neon';
import { BlurFadeTextDemo } from '@/components/magicui/blurFade/BlurText';
import { MagicCardDemo } from '@/components/magicui/magicCard/Card';
import { BlurFadeDemo } from '@/components/magicui/blurFade/BlurCards';

const page = () => {
  return (
    <div className="h-screen">
      <OrbitingCirclesDemo />
      <AnimatedListDemo />
      <IconCloudDemo />
      <AnimatedShinyTextDemo />
      <BorderBeamDemo />
      <NeonGradientCardDemo />
      <BlurFadeTextDemo />
      <MagicCardDemo />
      <BlurFadeDemo />
      
    </div>
  );
}

export default page
