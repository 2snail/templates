import { existsSync } from 'fs';
import { join } from 'path';

export default function testReadme(cwd: string) {
  test('exist README.md', async cb => {
    const target = join(cwd, 'README.md');
    expect(existsSync(target)).toBeTruthy();
    cb();
  });
}
