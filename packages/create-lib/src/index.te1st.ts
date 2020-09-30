import { join } from 'path';
import { rimraf } from '@umijs/utils';
import { existsSync } from 'fs';
import runGenerator from '.';

const fixtures = join(__dirname, 'fixtures');
const cwd = join(fixtures, 'generate');

describe('create-lib:index', () => {
  test('runGenerator', async cb => {
    const target = join(cwd, 'README.md');

    await runGenerator({
      cwd,
      args: {
        _: [],
        $0: '',
      },
    });

    expect(existsSync(target)).toBeTruthy();
    rimraf.sync(cwd);

    cb();
  });
});
