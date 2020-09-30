import { yargs } from '@umijs/utils';
import AppGenerator from './AppGenerator/AppGenerator';

export default async ({
  cwd,
  args,
}: {
  cwd: string;
  args: yargs.Arguments;
}) => {
  if (args.originUrl) {
    const originUrl = args.originUrl as string;
    args.bugsUrl = originUrl.replace(/\.git$/gi, '/issues');
    args.homepage = originUrl.replace(/\.git$/gi, '#readme');
  }

  const generator = new AppGenerator({
    cwd,
    args,
  });

  return await generator.run();
};
