import execa from 'execa';
import { join } from 'path';
import { rimraf } from '@umijs/utils';
import { existsSync } from 'fs';

const fixtures = join(__dirname, 'fixtures');
const generate = 'generate';

describe('create-lib:index', () => {
  test.only('node cli.js', async cb => {
    await execa('mkdir', [generate], {
      cwd: fixtures,
      execPath: fixtures,
    }).catch(err => console.error(err.message));

    const cwd = join(fixtures, generate);
    const result = await execa('cat', ['../../../lib/cli.js'], {
      cwd,
      execPath: cwd,
    });
    console.log('result:', result);

    const target = join(cwd, 'README.md');
    expect(existsSync(target)).toBeTruthy();

    rimraf.sync(cwd);

    cb();
  });
});
