import { join } from 'path';
import { rimraf } from '@umijs/utils';
import runGenerator from './';
import testTargets from '../tests/testTargets';

const fixtures = join(__dirname, 'fixtures');
const cwd = join(fixtures, 'generate');

describe('create-lib:index', () => {
  beforeAll(async cb => {
    await runGenerator({
      cwd,
      args: {
        _: [],
        $0: '',
        license: 'MIT',
        originUrl: 'https://github.com/2snail/templates.git',
        userName: 'zhangaz1',
      },
    });

    cb();
  });

  afterAll(async cb => {
    rimraf.sync(cwd);
    cb();
  });

  testTargets(cwd);
});
