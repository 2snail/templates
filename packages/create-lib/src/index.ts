import { yargs } from '@umijs/utils';
import AppGenerator from './AppGenerator/AppGenerator';

import IGenOption from './utils/IGenOption';

export default async (genOption: IGenOption) => {
  genOption = prepareRepositoryInfo(genOption);
  console.log('xxxxxxx', genOption);

  const { cwd, ...args } = genOption;

  const generator = new AppGenerator({
    cwd: cwd as string,
    args: args as yargs.Arguments,
  });

  return await generator.run();
};

function prepareRepositoryInfo(genOption: IGenOption) {
  const originUrl = genOption.originUrl;
  if (originUrl) {
    genOption.bugsUrl =
      genOption.bugsUrl || originUrl.replace(/\.git$/gi, '/issues');
    genOption.homepage =
      genOption.homepage || originUrl.replace(/\.git$/gi, '#readme');
  }

  return genOption;
}
