console.log('log1');

import { chalk, yParser } from '@umijs/utils';
import { existsSync } from 'fs';
import { join } from 'path';

console.log('log2');

const args = yParser(process.argv.slice(2), {
  alias: {
    version: ['v'],
    help: ['h'],
  },
  boolean: ['version'],
});

console.log('log3');

if (args.version && !args._[0]) {
  console.log('log4');
  args._[0] = 'version';
  const local = existsSync(join(__dirname, '../.local'))
    ? chalk.cyan('@local')
    : '';
  const { name, version } = require('../package.json');
  console.log(`${name}@${version}${local}`);
} else {
  console.log('log5');
  require('./')
    .default({
      cwd: process.cwd(),
      args,
    })
    .catch((err: Error) => {
      console.error(`Create failed, ${err.message}`);
      console.error(err);
    });
}
