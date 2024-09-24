import TypingAnimation from '@/components/magicui/typing/typing-animation';

export async function TextRevealDemo() {
  return (
    <TypingAnimation
      className="text-4xl font-bold text-black dark:text-white"
      text="Typing Animation"
    />
  );
}
