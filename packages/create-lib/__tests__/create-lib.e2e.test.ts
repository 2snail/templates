import execa from 'execa';
import { join } from 'path';
import { rimraf } from '@umijs/utils';
import { existsSync } from 'fs';

import testTargets from '../tests/testTargets';

describe('create-lib:index', () => {
  const fixtures = join(__dirname, 'fixtures');
  const generate = 'generate';
  const cwd = join(fixtures, generate);

  beforeAll(async cb => {
    await execa('mkdir', [generate], {
      cwd: fixtures,
      execPath: fixtures,
    }).catch(err => console.error(err.message));

    const result = await execa(
      'node',
      ['../../../bin/create-lib.js', '--name=generate', '--license=MIT'],
      {
        cwd,
        execPath: cwd,
      },
    );
    console.log('result:', result);

    cb();
  });

  afterAll(async cb => {
    rimraf.sync(cwd);
    cb();
  });

  testTargets(cwd);
});
