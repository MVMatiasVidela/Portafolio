import IconCloud from '@/components/magicui/Cloud/icon-cloud';

const slugs = [
  'typescript',
  'javascript',
  // 'dart',
  // 'java',
  'react',
  // 'flutter',
  // 'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'nestjs',
  // 'prisma',
  // 'amazonaws',
  'postgresql',
  // 'firebase',
  // 'nginx',
  'vercel',
  // 'testinglibrary',
  // 'jest',
  // 'cypress',
  'docker',
  'git',
  // 'jira',
  'github',
  // 'gitlab',
  'visualstudiocode',
  // 'androidstudio',
  // 'sonarqube',
  'figma',
  'tailwindcss'
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full  items-center justify-center overflow-hidden rounded-lg m-1 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
