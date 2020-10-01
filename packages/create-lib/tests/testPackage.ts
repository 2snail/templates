import { existsSync } from 'fs';
import { join } from 'path';

export default function testPackage(cwd: string) {
  describe('package.json', () => {
    const packagePath = join(cwd, 'package.json');
    let pkg: {
      name?: string;
      license?: string;
      repository?: {
        type?: string;
        url?: string;
      };
      bugs?: {
        url?: string;
      };
      homepage?: string;
      author?: string;
    } = {};

    beforeAll(() => (pkg = require(packagePath)));

    test('exist package.json', () => {
      expect(existsSync(packagePath)).toBeTruthy();
    });

    test('exist package name', () => {
      expect(pkg?.name).toEqual('generate');
    });

    test('license', () => {
      expect(pkg?.license).toEqual('MIT');
    });

    test('repository', () => {
      expect(pkg?.repository?.type).toEqual('git');
      expect(pkg?.repository?.url).toEqual(
        `git+https://github.com/2snail/templates.git`,
      );
    });

    test('bugs', () => {
      expect(pkg?.bugs?.url).toEqual(
        'https://github.com/2snail/templates/issues',
      );
    });

    test('homepage', () => {
      expect(pkg?.homepage).toEqual(
        'https://github.com/2snail/templates#readme',
      );
    });

    test('author', () => {
      expect(pkg?.author).toEqual('zhangaz1');
    });
  });
}
