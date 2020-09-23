import execa from 'execa';
import { join } from 'path';
import { rimraf } from '@umijs/utils';
import { existsSync } from 'fs';

const fixtures = join(__dirname, 'fixtures');
const generate = 'generate';

describe('create-lib:index', () => {
  test('runGenerator', async cb => {
    await execa('mkdir', [generate], {
      cwd: fixtures,
      execPath: fixtures,
    }).catch(err => console.error(err.message));

    const cwd = join(fixtures, generate);
    await execa('node', ['../../../bin/create-lib.js'], { cwd, execPath: cwd });

    const target = join(cwd, 'src', 'Foo', 'index.tsx');
    expect(existsSync(target)).toBeTruthy();
    rimraf.sync(cwd);

    cb();
  });
});
