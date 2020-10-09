import { chalk, yParser } from '@umijs/utils';
import { existsSync } from 'fs';
import { join } from 'path';
import { getGitInfo } from './utils/gItInfo';
import IGenOption from './utils/IGenOption';
import gen from './';

(function run() {
  const args = yParser(process.argv.slice(2), {
    alias: {
      version: ['v'],
      help: ['h'],
    },
    boolean: ['version'],
  });

  if (args.version && !args._[0]) {
    args._[0] = 'version';
    const local = existsSync(join(__dirname, '../.local'))
      ? chalk.cyan('@local')
      : '';
    const { name, version } = require('../package.json');
    console.log(`${name}@${version}${local}`);
  } else {
    const gitInfo = getGitInfo();
    return generate({
      cwd: process.cwd(),
      ...gitInfo,
      ...args,
    } as IGenOption);
  }
})();

async function generate(genOption: IGenOption) {
  return await gen(genOption);
}

function logError(err: Error) {
  console.error(`Create failed, ${err.message}`);
  console.error(err);
  throw err;
}
