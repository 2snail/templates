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
    })
      .catch(err => console.log(err.message))
      .then(() => {
        const cwd = join(fixtures, generate);
        return execa('node', ['../../../bin/create-lib.js'], {
          cwd,
          execPath: cwd,
        }).then(result => {
          console.log('result:', result);

          const target = join(cwd, 'README.md');
          expect(existsSync(target)).toBeTruthy();

          rimraf.sync(cwd);
        });
      })
      .catch(err => console.log(err.message))
      .finally(cb);
  });
});
