import TA from '@/components/About/TA/TA';
import { BorderBeam } from '@/components/magicui/Border/border-beam';

export function BorderBeamDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
    <TA></TA>
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
